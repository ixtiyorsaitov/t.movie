import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronsUpDown, Video } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MapEpisodes from "./map-episodes";

const EpisodesFilm = () => {
  const [activeSeason, setActiveSeason] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full mt-8">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-baloo2 text-2xl font-bold">Episodes</h1>
        <div>
          <Button
            onClick={() => setActiveSeason(1)}
            variant={"ghost"}
            className={cn(
              "rounded-none bg-neutral-800",
              activeSeason === 1 ? "bg-neutral-800" : "bg-transparent"
            )}
          >
            season 1
          </Button>
          <Button
            onClick={() => setActiveSeason(2)}
            variant={"ghost"}
            className={cn(
              "rounded-none bg-neutral-800",
              activeSeason === 2 ? "bg-neutral-800" : "bg-transparent"
            )}
          >
            season 2
          </Button>
          <Button
            onClick={() => setActiveSeason(3)}
            variant={"ghost"}
            className={cn(
              "rounded-none bg-neutral-800",
              activeSeason === 3 ? "bg-neutral-800" : "bg-transparent"
            )}
          >
            season 3
          </Button>
        </div>
      </div>
      <div className="w-full bg-neutral-800 p-2 rounded-l-lg pb-6">
        <div className="w-full flex items-center justify-start">
          <Button variant={"secondary"}>10 episodes</Button>
        </div>
        <div className="w-full flex items-center justify-center flex-col space-y-1 mt-3 relative">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-full flex-col gap-2"
          >
            <div className="w-full flex items-center justify-center">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="text-xl">
                  Expand 10 episodes
                  <ChevronsUpDown />
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="pl-4 relative">
              <div className="w-[2px] rounded-full absolute h-full left-0 top-0 bg-primary"></div>
              <MapEpisodes />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default EpisodesFilm;
