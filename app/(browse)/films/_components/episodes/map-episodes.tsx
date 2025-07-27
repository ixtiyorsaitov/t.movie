import { Video } from "lucide-react";
import Link from "next/link";
import { JSX, useState } from "react";

const windowHeight = 500;
const itemHeight = 35;
const overScan = 10;
const itemsLength = 100;

const MapEpisodes = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.max(Math.floor(scrollTop / itemHeight) - overScan, 0);
  const endIndex = Math.min(
    Math.floor((scrollTop + windowHeight) / itemHeight) + overScan,
    itemsLength - 1
  );

  const visibleItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    visibleItems.push(<ListItem key={i} index={i} />);
  }

  return (
    <div
      className="overflow-y-scroll relative w-full"
      style={{ height: `${windowHeight}px` }}
      onScroll={(e) => {
        setScrollTop(e.currentTarget.scrollTop);
      }}
    >
      <div
        className="relative w-full"
        style={{ height: `${itemsLength * itemHeight}px` }}
      >
        {visibleItems}
      </div>
    </div>
  );
};

const ListItem = ({ index }: { index: number }) => (
  <Link
    href=""
    className="w-full flex items-center justify-between hover:text-primary absolute left-0 right-0"
    style={{ height: `${itemHeight}px`, top: `${itemHeight * index}px` }}
  >
    <div className="flex items-center justify-start gap-1">
      <Video size={20} />
      <p className="text-sm">#{index + 1}. Lorem ipsum dolor sit.</p>
    </div>
    <p className="text-sm font-baloo2">24:13</p>
  </Link>
);

export default MapEpisodes;
