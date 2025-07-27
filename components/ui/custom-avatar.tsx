import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "@/lib/utils";

const CustomAvatar = ({
  image,
  firstLetterOfName,
  className,
}: {
  image: string;
  className?: string;
  firstLetterOfName: string;
}) => {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-full p-[0.5px] border-2 border-primary flex items-center justify-center",
        className
      )}
    >
      <Avatar className="w-full h-full">
        <AvatarImage src={image} />
        <AvatarFallback className="bg-primary dark:text-black text-white">
          {firstLetterOfName}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default CustomAvatar;
