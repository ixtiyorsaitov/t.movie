"use client";

import { Button } from "@/components/ui/button";
import CustomImage from "@/components/ui/custom-image";
import HeartIcon from "@/public/icons/heart-icon";
import StarIcon from "@/public/icons/star-icon";
import "./movie-card.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const MovieCard = () => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    try {
      setIsLiked((prev) => !prev);
    } catch (error) {}
  };

  const handleRoute = () => {};
  return (
    <div
      onClick={handleRoute}
      className="w-full h-[300px] p-2 bg-neutral-800 rounded-3xl"
    >
      <div className="w-full h-full overflow-hidden rounded-2xl relative image-div">
        <CustomImage
          src={"/assests/aot.png"}
          alt="Attack on titan"
          fill
          className="object-cover card-img"
        />
        <div className="w-full h-full absolute top-0 left-0">
          <div className="w-full flex items-center justify-between">
            <div className="m-2 flex items-center justify-start bg-neutral-800 p-1 rounded-lg">
              <StarIcon className="!w-3 !h-3" />
              <div className="text-[10px]">
                7.0
                <span className="text-muted-foreground text-[9.5px]">/10</span>
              </div>
            </div>
            <Button
              variant={"ghost"}
              className={cn(
                "bg-neutral-800 size-6 mr-2 rounded-md",
                isLiked ? "text-red-500 hover:text-red-500" : ""
              )}
              size={"icon"}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleLike();
              }}
            >
              <HeartIcon />
            </Button>
          </div>
          <div className="absolute bottom-0 w-full flex items-center justify-center flex-col backdrop-blur-sm bg-black/20">
            <p className="text-md">Attack on titan</p>
            <p className="text-[12px]">Animation, Action</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
