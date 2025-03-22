"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  ThumbsUp,
  MessageSquare,
  Share,
  MoreHorizontal,
  MapPin,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export function FeedItem({ item }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(item.likes);
  const [userVoted, setUserVoted] = useState(null);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleVote = (option) => {
    if (!userVoted) {
      setUserVoted(option);
    }
  };

  const totalVotes =
    item.pollOptions?.reduce((sum, option) => sum + option.votes, 0) || 0;

  return (
    <Card className="border-none shadow-[0_0_25px_rgba(0,0,0,0.1)]">
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <img
                src={item.author.image || "/placeholder.svg"}
                alt={item.author.name}
              />
            </Avatar>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.author.name}</span>
                {item.author.isPremium && (
                  <span className="bg-[#fccd27] text-[#172b85] text-xs px-1.5 py-0.5 rounded-sm">
                    Premium member
                  </span>
                )}
              </div>

              <div className="text-xs text-muted-foreground flex items-center">
                <span>{item.author.date}</span>
                {item.author.location && (
                  <>
                    <span className="mx-1">•</span>
                    <MapPin className="h-3 w-3 mr-0.5" />
                    <span>{item.author.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Hide</DropdownMenuItem>
              <DropdownMenuItem>Follow</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="whitespace-pre-line">{item.content}</p>
        </div>

        {/* Images */}
        {item.images && item.images.length > 0 && (
          <div
            className={`grid grid-cols-${Math.min(
              item.images.length,
              3
            )} gap-2 mb-4`}
          >
            {item.images.map((img, idx) => (
              <img
                key={idx}
                src={img || "/placeholder.svg"}
                alt={`Post image ${idx + 1}`}
                className="w-full h-40 object-cover rounded-md"
              />
            ))}
          </div>
        )}

        {/* Poll */}
        {item.isPoll && item.pollOptions && (
          <div className="space-y-3 my-4">
            {item.pollOptions.map((option) => {
              const percentage = Math.round(
                (option.votes / (totalVotes + (userVoted ? 1 : 0))) * 100
              );
              const isVoted = userVoted === option.text;

              return (
                <div key={option.text} className="relative">
                  <div
                    className="h-10 rounded-md flex items-center justify-between px-4 cursor-pointer"
                    style={{
                      backgroundColor: option.color,
                      opacity: userVoted && !isVoted ? 0.7 : 1,
                    }}
                    onClick={() => handleVote(option.text)}
                  >
                    <span className="font-medium text-white">
                      {option.text}
                    </span>
                    <span className="font-medium text-white">
                      {userVoted ? `${percentage}%` : `${option.votes} Votes`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 py-3 border-t flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className={`gap-2 ${liked ? "text-blue-500" : ""}`}
          onClick={handleLike}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>Like</span>
        </Button>

        <Button variant="ghost" size="sm" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          <span>
            {item.comments > 0 ? `Comments (${item.comments})` : "Comments"}
          </span>
        </Button>

        <Button variant="ghost" size="sm" className="gap-2">
          <Share className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
