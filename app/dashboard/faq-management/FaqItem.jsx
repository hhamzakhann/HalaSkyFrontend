"use client";
import { Button } from "@/components/ui/button";
import editIcon from "@/public/edit-icon.svg";
import trashIcon from "@/public/trash-icon.svg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FaqItem({ question }) {
  const [openItems, setOpenItems] = useState("");
  const isOpen = question.id === openItems;

  const handleToggle = function (currId) {
    setOpenItems((id) => (id === currId ? "" : question.id));
  };

  return (
    <div key={question.id} className="overflow-hidden">
      <div className="flex items-center justify-between ">
        <div className="flex items-center flex-grow text-base">
          <span className="font-medium mr-2">{question.id.toUpperCase()}</span>
          <h3 className="font-medium ">{question.question}</h3>
          <Button variant="icon" onClick={() => handleToggle(question.id)}>
            <ChevronDown
              className={`h-5 w-5 text-[#292d32] transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="icon" className="p-0">
            <Image src={editIcon} />
          </Button>
          <Button variant="icon" className="p-0">
            <Image src={trashIcon} />
          </Button>
        </div>
      </div>

      <div className="">
        <div className={`space-y-2 pl-8 py-2 ${isOpen ? "block" : "hidden"}`}>
          {question.answer.map((line, index) => (
            <p key={index} className=" font-light text-sm">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
