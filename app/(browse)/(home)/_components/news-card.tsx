import SubtractIcon from "@/public/icons/subtract";
import Image from "next/image";
import React from "react";

const NewsCard = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-popover flex-col p-3 rounded-lg gap-y-3">
      <div className="w-full h-[170px] relative rounded-lg overflow-hidden">
        <Image
          src={"/assests/aot-bg.jpg"}
          alt="Attack on titan"
          className="object-cover"
          fill
        />
      </div>
      <div className="w-full flex text-primary font-baloo2 font-semibold items-center gap-1 justify-start">
        <SubtractIcon />
        <h1>Hot News</h1>
      </div>
      <div className="font-[300] text-[16px]">
        {`Slow Horses, the popular spy drama, has been renewed for a fifth
        season, much to the delight of its dedicated fanbase. The highly
        anticipated fourth season is set to premiere on September 4, 2024,
        promising more thrilling storylines and complex characters that viewers
        have come to love. Notable cast members, including the acclaimed Gary
        Oldman and Cillian Murphy, will continue to bring depth and intrigue to
        the series.`}
      </div>
      <div className="w-full flex items-center text-sm justify-between mt-6">
        <p className="text-muted-foreground">25 July</p>
        <p>1/6</p>
      </div>
    </div>
  );
};

export default NewsCard;
