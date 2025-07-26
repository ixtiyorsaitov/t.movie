"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { INotification } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  data: INotification;
  index: number;
}

const NotificationCard = ({ data, index }: Props) => {
  const disabled = data.read;

  return (
    <DropdownMenuItem
      className={cn("p-0 rounded-xl", index === 0 ? "" : "mt-3")}
    >
      <div
        className={cn(
          "w-full rounded-xl overflow-hidden flex items-center justify-start gap-4",
          !disabled ? "dark:bg-primary-700/50 bg-primary-700/10 transition" : ""
        )}
      >
        <div className="w-24 h-32 relative rounded-xl overflow-hidden">
          <Image
            src={"/assests/aot.png"}
            alt="Attack on titan"
            fill
            className="object-cover hover:scale-110 transition"
          />
        </div>
        <div className="">
          <p
            className={`max-w-[250px] line-clamp-2 ${
              disabled && "text-muted-foreground"
            }`}
          >
            {data.season !== 1 ? `Season ${data.season}, ` : ""}Episode 3 has
            been released
          </p>
          <p className="my-3 line-clamp-1 max-w-[250px]">{data.film.title}</p>
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-start gap-1">
              <Star className="fill-primary-400 text-primary-400" />
              {data.film.rating.avarage}
            </div>
            <div>
              {data.film.genres.map(
                (genre, idx) =>
                  `${idx === 1 ? " " : ""}${genre.name}${
                    data.film.genres.length === idx + 1 ? "" : " |"
                  }`
              )}
            </div>
          </div>
        </div>
      </div>
    </DropdownMenuItem>
  );
};

export default NotificationCard;
