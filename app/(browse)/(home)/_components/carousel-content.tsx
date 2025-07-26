import { Button } from "@/components/ui/button";
import CustomImage from "@/components/ui/custom-image";
import StarIcon from "@/public/icons/star-icon";
import { ChevronLeft, ChevronRight, Film, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const CarouselContent = () => {
  return (
    <div className="relative w-full h-full overflow-hidden text-white">
      <CustomImage
        src="/assests/aot-bg.jpg"
        alt="Game of Thrones"
        fill
        // layout="fill"
        // objectFit="cover"
        className="brightness-75 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r dark:from-black/70 from-black/30 to-transparent p-8 flex flex-col justify-end">
        <h2 className="text-4xl font-bold mb-2 max-w-2xl line-clamp-2 font-baloo2">
          Game of Thrones
        </h2>
        <div className="flex items-center gap-4 text-sm mb-4">
          <div className="flex items-center justify-start gap-1">
            <StarIcon />
            <span className="font-bold">9.2</span>
          </div>
          <div className="flex items-center justify-start gap-1">
            <span>Action</span>
            <span className="text-primary">|</span>
            <span>Adventure</span>
            <span className="text-primary">|</span>
            <span>Drama</span>
          </div>
        </div>
        <p className="max-w-lg mb-6 text-sm line-clamp-4">
          It&apos;s the story of the intricate and bloody battles of several
          noble families in the fictional land of Westeros. These families,
          including the Starks, the Lannisters, and the Targaryens, fight for
          control of the Iron Throne, the symbol of power in the Seven Kingdoms.
          It&apos;s the story of the intricate and bloody battles of several
          noble families in the fictional land of Westeros. These families,
          including the Starks, the Lannisters, and the Targaryens, fight for
          control of the Iron Throne, the symbol of power in the Seven Kingdoms.
        </p>
        <div className="flex gap-4">
          <Button className="!px-10">
            <Play className="w-5 h-5" />
            WATCH
          </Button>
          <Button variant="outline" className="!px-10 backdrop-blur-sm">
            <Film className="w-5 h-5" />
            Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
