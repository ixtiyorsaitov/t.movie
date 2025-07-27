"use client";

import { Button } from "@/components/ui/button";
import CustomImage from "@/components/ui/custom-image";
import HeartIcon from "@/public/icons/heart-icon";
import StarIcon from "@/public/icons/star-icon";
import "./movie-card.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { IFilm } from "@/types";

const MovieCard = ({ data }: { data: IFilm }) => {
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
      className="w-full h-[300px] p-2 dark:bg-neutral-800 bg-neutral-100 rounded-3xl"
    >
      <div className="w-full h-full overflow-hidden rounded-2xl relative image-div">
        <CustomImage
          src={data.image}
          alt={`Image of ${data.title}`}
          fill
          className="object-cover card-img"
        />
        <div className="w-full h-full absolute top-0 left-0">
          <div className="w-full flex items-center justify-between">
            <div className="m-2 flex items-center justify-start dark:bg-neutral-800 bg-neutral-100 p-1 rounded-lg">
              <StarIcon className="!w-3 !h-3" />
              <div className="text-[10px]">
                {data.rating.avarage}
                <span className="text-muted-foreground text-[9.5px]">/10</span>
              </div>
            </div>
            <Button
              variant={"ghost"}
              className={cn(
                "dark:bg-neutral-800 bg-neutral-100 size-6 mr-2 rounded-md",
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
          <div className="absolute bottom-0 w-full flex items-center justify-center flex-col backdrop-blur-sm bg-black/30">
            <p className="text-md">{data.title}</p>
            <p className="text-[12px]">
              {data.genres.map(
                (genre, genreIndex) =>
                  `${genre.name}${
                    genreIndex + 1 !== data.genres.length ? ", " : ""
                  }`
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
