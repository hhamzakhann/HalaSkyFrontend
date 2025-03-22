"use client";

import { useState, useRef } from "react";
import { Trash2, Plus, Image, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import addIcon from "@/public/addMore-icon.svg";
import { poppinsFont } from "@/app/font";

export function PollCreator({ onClose }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    { id: "1", text: "" },
    { id: "2", text: "" },
  ]);
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  // Handle option text change
  const handleOptionChange = (id, value) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, text: value } : option
      )
    );
  };

  // Add a new option
  const addOption = () => {
    if (options.length < 5) {
      // Limit to 5 options
      const newId = (
        Math.max(...options.map((o) => Number.parseInt(o.id)), 0) + 1
      ).toString();
      setOptions([...options, { id: newId, text: "" }]);
    }
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (!files) return;

    // Process each file
    Array.from(files).forEach((file) => {
      // Create a URL for the file
      const imageUrl = URL.createObjectURL(file);
      const newId = Date.now().toString();

      // Add to images array (limit to 10 images)
      if (images.length < 10) {
        setImages([...images, { id: newId, url: imageUrl }]);
      }
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Remove an image
  const removeImage = (id) => {
    setImages(
      images.filter((image) => {
        if (image.id === id) {
          URL.revokeObjectURL(image.url); // Clean up the URL
          return false;
        }
        return true;
      })
    );
  };

  // Get current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // For a real app, you might want to reverse geocode these coordinates
          setLocation(
            `${position.coords.latitude}, ${position.coords.longitude}`
          );
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  // Submit the poll
  const handleSubmit = async () => {
    // Validate form
    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    if (options.some((option) => !option.text.trim())) {
      alert("Please fill in all options");
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, you would upload images to a server and get back URLs
      // Then create the poll with those URLs

      const pollData = {
        question,
        options: options.map((o) => o.text),
        images: images.map((img) => img.url), // In a real app, these would be server URLs
        location,
        createdAt: new Date().toISOString(),
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form after successful submission
      setQuestion("");
      setOptions([
        { id: "1", text: "" },
        { id: "2", text: "" },
      ]);
      setImages([]);
      setLocation("");

      // Close modal if provided
      if (onClose) {
        onClose();
      }

      alert("Poll created successfully!");
    } catch (error) {
      console.error("Error creating poll:", error);
      alert("Failed to create poll. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`p-6 ${poppinsFont.className}`}>
      <h2 className="text-xl font-semibold mb-4">Create a Poll</h2>

      {/* Images */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {images.map((image) => (
            <div key={image.id} className="relative rounded-lg overflow-hidden">
              <img
                src={image.url || "/placeholder.svg"}
                alt="Uploaded content"
                className="w-full aspect-square object-cover"
              />
              <button
                onClick={() => removeImage(image.id)}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
              >
                <Trash2 className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Question */}
      <Textarea
        placeholder="Share or ask something"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full mb-6 text-lg resize-none"
        rows={2}
      />

      {/* Poll Options */}
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <Input
            key={option.id}
            placeholder={`Option ${index + 1}`}
            value={option.text}
            onChange={(e) => handleOptionChange(option.id, e.target.value)}
            className="w-full"
          />
        ))}
      </div>

      {/* Add More Button */}
      <Button
        variant="outline"
        onClick={addOption}
        disabled={options.length >= 5}
        className="w-full mb-6 flex items-center justify-center gap-2 py-6 hover:bg-transparent"
      >
        Add more <Image src={addIcon} />
      </Button>

      {/* Bottom Toolbar */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-4">
          {/* Image Upload */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            multiple
            className="hidden"
            id="image-upload"
          />
          <Button
            variant="ghost"
            className="border-none hover:bg-transparent"
            onClick={() => fileInputRef.current?.click()}
            size="sm"
          >
            <Image className="h-4 w-4 " src={addIcon} />
            Add Images
          </Button>

          {/* Location */}
          <Button variant="ghost" onClick={getCurrentLocation} size="sm">
            <MapPin className="h-4 w-4 mr-2" />
            Add Location
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          {/* Post Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-[#fccd27] hover:bg-[#e9bd24] text-black font-medium"
          >
            {isSubmitting ? "Posting..." : "Post"}
          </Button>
        </div>
      </div>

      {/* Location display if selected */}
      {location && (
        <div className="mt-4 text-sm text-muted-foreground flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      )}
    </div>
  );
}
