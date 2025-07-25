import AddWatchList from "@/public/icons/add-watchlist-icon";
import StarIcon from "@/public/icons/star-icon";
import { IFilm } from "@/types";
import Image from "next/image";
import React from "react";

const SearchResultCard = ({ data }: { data: IFilm }) => {
  return (
    <div className="w-full hover:bg-secondary rounded-xl cursor-pointer p-2 flex items-center justify-start gap-3">
      <div className="w-16 h-22 relative">
        <Image
          src={"/assests/aot.png"}
          alt="Attack on titan"
          fill
          className="object-cover rounded-xl hover:scale-110 transition"
        />
      </div>
      <div>
        <h1 className="flex items-center justify-start gap-1 text-sm">
          <p className="max-w-[164px] line-clamp-1">{data.title}</p>
          <AddWatchList />
        </h1>
        <div className="flex text-[13px] my-3 items-center justify-start gap-4">
          <div className="flex items-center justify-start gap-1">
            <StarIcon />
            <p>
              {data.rating.avarage}
              <span className="text-muted-foreground">/10</span>
            </p>
          </div>
          <p>2011-2019</p>
        </div>
        <div className="text-[10px]">
          {data.genres.map(
            (genre, idx) =>
              `${idx === 1 ? " " : ""}${genre.name}${
                data.genres.length === idx + 1 ? "" : " |"
              }`
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
