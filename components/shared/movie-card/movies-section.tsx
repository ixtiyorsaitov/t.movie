"use client";

import { cn } from "@/lib/utils";
import MovieCard from "./movie-card";
import Link from "next/link";
import ArrowRight from "@/public/icons/arrow-right";
import { IFilm } from "@/types";

interface Props {
  title: string;
  datas: IFilm[];
}

const MoviesSection = ({ title, datas }: Props) => {
  return (
    <div className="w-full flex items-center justify-between flex-col gap-y-6 my-6">
      <div className="w-full flex items-center justify-between font-baloo2">
        <h3 className="text-3xl font-bold ">{title}</h3>
        <Link
          href="#"
          className="flex items-center gap-1 text-xl hover:underline"
          prefetch={false}
        >
          View All <ArrowRight className="text-primary" />
        </Link>
      </div>
      <div className="w-full grid gap-2 grid-cols-2 xl:grid-cols-4">
        {datas.map((data) => (
          <MovieCard data={data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
