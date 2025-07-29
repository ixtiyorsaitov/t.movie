"use client";
import CustomImage from "@/components/ui/custom-image";
import { cn } from "@/lib/utils";
import "./styles.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IFilm } from "@/types";

const MainDetails = ({ data }: { data: IFilm }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col md:flex-row items-center justify-center h-auto md:h-[75vh] md:max-h-[600px] min-h-[500px] md:rounded-2xl transition gap-4 md:gap-2 father-container relative overflow-hidden p-4 md:p-0"
      )}
    >
      <div className="absolute w-full h-full top-0 left-0 z-[-1] overflow-hidden">
        <CustomImage
          src={data.backgroundImage}
          alt={`Background image of ${data.backgroundImage}`}
          fill
          className="object-cover"
        />
        <div className="w-full absolute h-full left-0 top-0 dark:bg-black/40 bg-black/40 transition blur-container"></div>
      </div>

      <div className="w-full md:w-[35%] h-[300px] md:h-full relative overflow-hidden rounded-2xl image-father transition">
        <div className="w-full h-full relative overflow-hidden">
          <CustomImage
            src={data.image}
            alt={`Image of ${data.image}`}
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div className="w-full md:w-[65%] px-4 md:px-8 h-auto md:h-full rounded-4xl flex items-center justify-start">
        <div className="flex items-center md:items-start justify-start flex-col text-white text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start w-full">
            <h1 className="text-3xl md:text-6xl font-baloo2 font-bold">
              {data.title}
            </h1>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2 w-full mt-2">
            <p className="text-sm md:text-base">2022 • 55 min</p>
          </div>

          <div className="flex w-full my-4 md:my-6 items-center justify-center md:justify-start gap-2 flex-wrap">
            {data.genres.map((genre) => (
              <Link
                key={genre.id}
                className="dark:bg-neutral-900 bg-neutral-300 text-black dark:text-white hover:bg-neutral-400 dark:hover:bg-neutral-800 text-xs md:text-sm border border-input px-2 md:px-3 py-1 rounded-lg"
                href={""}
              >
                {genre.name}
              </Link>
            ))}
          </div>

          <p className="line-clamp-4 md:line-clamp-6 max-w-2xl text-sm md:text-base leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 mt-4 md:mt-6 w-full">
            <Button className="w-full sm:w-auto text-sm md:text-base">
              Play Last Episode
            </Button>
            <Button
              variant={"outline"}
              className="w-full sm:w-auto text-sm md:text-base"
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
