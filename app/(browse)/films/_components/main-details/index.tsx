"use client";

import CustomImage from "@/components/ui/custom-image";
import { cn } from "@/lib/utils";
import "./styles.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MainDetails = () => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center h-[75vh] max-h-[600px] rounded-2xl  transition gap-2 father-container relative overflow-hidden father-container"
      )}
    >
      <div className="absolute w-full h-full top-0 left-0 z-[-1] overflow-hidden">
        <CustomImage
          src={"/assests/aot-bg.jpg"}
          alt="Attack on titan"
          fill
          className="object-cover"
        />
        <div className="w-full absolute h-full left-0 top-0 dark:bg-black/40 bg-black/40 transition blur-container"></div>
      </div>
      <div className="w-[35%] h-full relative overflow-hidden rounded-2xl image-father transition">
        <div className="w-full h-full relative overflow-hidden">
          <CustomImage
            src={"/assests/aot.png"}
            alt="Attack on titan"
            className="object-cover"
            fill
          />
        </div>
      </div>
      <div className="w-[65%] px-8 h-full rounded-4xl flex items-center justify-start">
        <div className="flex items-center justify-start flex-col text-white">
          <div className="flex items-center justify-start w-full">
            <h1 className="text-6xl font-baloo2 font-bold">Attack on titans</h1>
          </div>
          <div className="flex items-center justify-start gap-2 w-full">
            <p>2022 • 55 min</p>
          </div>
          <div className="flex w-full my-6 items-center justify-start gap-2">
            <Link
              className="bg-neutral-900 hover:bg-neutral-800 text-sm border border-input px-3 py-1 rounded-lg"
              href={""}
            >
              Action
            </Link>
            <Link
              className="bg-neutral-900 hover:bg-neutral-800 text-sm border border-input px-3 py-1 rounded-lg"
              href={""}
            >
              Adventure
            </Link>
            <Link
              className="bg-neutral-900 hover:bg-neutral-800 text-sm border border-input px-3 py-1 rounded-lg"
              href={""}
            >
              Drama
            </Link>
          </div>
          <p className="line-clamp-6 max-w-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            exercitationem voluptates dolorum laborum maiores dolores? Est error
            dolores repudiandae placeat nisi soluta, officiis praesentium illum?
            Ipsa, quos sint blanditiis quod ut deserunt eligendi repellendus.
            Nostrum explicabo earum deserunt tempora, quod doloremque accusamus
            quasi repellendus quae? Ea expedita repudiandae vero quibusdam eaque
            libero voluptate molestiae? Suscipit accusantium, sunt fuga tempora
            nulla eius recusandae commodi, officiis explicabo neque dolore
            ratione quis aut libero? Repudiandae tempora nam culpa quo nobis ut?
            Neque incidunt odit distinctio sunt, doloremque, rerum quisquam
            provident iure alias mollitia possimus corporis quam esse doloribus!
            Ipsum, blanditiis cum. Hic, eos.
          </p>
          <div className="flex items-center justify-start gap-2 mt-6 w-full">
            <Button>Play Last Episode</Button>
            <Button variant={"outline"}>Watch Trailer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
