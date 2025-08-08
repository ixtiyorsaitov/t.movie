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
        "father-container relative flex h-auto min-h-[500px] w-full flex-col items-center justify-center gap-4 overflow-hidden p-4 transition md:h-[75vh] md:max-h-[600px] md:flex-row md:gap-2 md:rounded-2xl md:p-0",
      )}
    >
      <div className="absolute top-0 left-0 z-[-1] h-full w-full overflow-hidden">
        <CustomImage
          src={data.backgroundImage}
          alt={`Background image of ${data.backgroundImage}`}
          fill
          className="object-cover"
        />
        <div className="blur-container absolute top-0 left-0 h-full w-full bg-black/40 transition dark:bg-black/40"></div>
      </div>

      <div className="image-father relative h-[300px] w-full overflow-hidden rounded-2xl transition md:h-full md:w-[35%]">
        <div className="relative h-full w-full overflow-hidden">
          <CustomImage
            src={data.image}
            alt={`Image of ${data.image}`}
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div className="flex h-auto w-full items-center justify-start rounded-4xl px-4 md:h-full md:w-[65%] md:px-8">
        <div className="flex flex-col items-center justify-start text-center text-white md:items-start md:text-left">
          <div className="flex w-full items-center justify-center md:justify-start">
            <h1 className="font-baloo2 text-3xl font-bold md:text-6xl">
              {data.title}
            </h1>
          </div>

          <div className="mt-2 flex w-full items-center justify-center gap-2 md:justify-start">
            <p className="text-sm md:text-base">2022 • 55 min</p>
          </div>

          <div className="my-4 flex w-full flex-wrap items-center justify-center gap-2 md:my-6 md:justify-start">
            {data.genres.map((genre) => (
              <Link
                key={genre._id}
                className="border-input rounded-lg border bg-neutral-300 px-2 py-1 text-xs text-black hover:bg-neutral-400 md:px-3 md:text-sm dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                href={""}
              >
                {genre.name}
              </Link>
            ))}
          </div>

          <p className="line-clamp-4 max-w-2xl text-sm leading-relaxed md:line-clamp-6 md:text-base">
            {data.description}
          </p>

          <div className="mt-4 flex w-full flex-col items-center justify-center gap-2 sm:flex-row md:mt-6 md:justify-start">
            <Button className="w-full text-sm sm:w-auto md:text-base">
              Play Last Episode
            </Button>
            <Button
              variant={"outline"}
              className="w-full text-sm sm:w-auto md:text-base"
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
