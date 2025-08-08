import { Button } from "@/components/ui/button";
import CustomImage from "@/components/ui/custom-image";
import { cn } from "@/lib/utils";
import StarIcon from "@/public/icons/star-icon";
import { IFilm } from "@/types";
import { Film, Play } from "lucide-react";
import React, { Fragment } from "react";

const CarouselContent = ({ data }: { data: IFilm }) => {
  return (
    <div className="relative w-full h-full overflow-hidden text-white">
      <CustomImage
        src={data.backgroundImage}
        alt={`Image of ${data.title}`}
        fill
        // layout="fill"
        // objectFit="cover"
        className="brightness-75 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r dark:from-black/70 from-black/30 to-transparent p-8 flex flex-col justify-end">
        <h2 className="text-4xl font-bold mb-2 max-w-2xl line-clamp-2 font-baloo2">
          {data.title}
        </h2>
        <div className="flex items-center gap-4 text-sm mb-4">
          <div className="flex items-center justify-start gap-1">
            <StarIcon />
            <span className="font-bold">9.2</span>
          </div>
          <div className="flex items-center justify-start gap-1">
            {data.genres.map((genre, genreIndex) => (
              <Fragment key={genre.id}>
                <span>{genre.name}</span>
                {genreIndex + 1 !== data.genres.length && (
                  <span className="text-primary">|</span>
                )}
              </Fragment>
            ))}
            {/* <span>Action</span>
            <span className="text-primary">|</span>
            <span>Adventure</span>
            <span className="text-primary">|</span>
            <span>Drama</span> */}
          </div>
        </div>
        <p className="max-w-lg mb-6 text-sm line-clamp-4">{data.description}</p>
        <div className="flex gap-x-4 sm:flex-col sm:gap-y-2">
          <Button className="!px-10">
            <Play className="w-5 h-5" />
            WATCH
          </Button>
          <Button
            variant="outline"
            className="!px-10 backdrop-blur-sm sm:w-40"
          >
            <Film className="w-5 h-5" />
            Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
