"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilterIcon from "@/public/icons/filter-icon";
import SearchIcon from "@/public/icons/search-icon";
import { useState, useRef, useEffect, ChangeEvent, useCallback } from "react";
import SearchResultCard from "./search-card";
import { FILMS } from "@/lib/constants";
import { IFilm } from "@/types";
import SearchResultCardSkeleton from "./loading";
import { debounce } from "lodash";
import DropDownArrow from "@/public/icons/dropdown-arrow";
import { cn } from "@/lib/utils";

interface Props {
  autoFocus?: boolean;
}

const SearchBox = ({ autoFocus = false }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchPopover, setSearchPopover] = useState<boolean>(false);
  const [recommended, setRecommended] = useState<IFilm[]>([]);
  const [result] = useState<IFilm[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
    setTimeout(() => {
      setRecommended(FILMS);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSearchPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSearchDebounce = useCallback(debounce(onInputChange, 300), []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="flex w-full items-center justify-center">
        <Button
          variant={"ghost"}
          className="bg-popover h-11 w-11 rounded-l-xl rounded-r-none"
          size={"icon"}
        >
          <SearchIcon className="relative left-1" />
        </Button>
        <Input
          className={cn(
            "!bg-popover h-11 rounded-none border-none shadow-none focus-visible:ring-0",
            "w-full lg:w-[222px]",
          )}
          placeholder="Search the series, movies..."
          onFocus={() => setSearchPopover(true)}
          onChange={handleSearchDebounce}
          ref={inputRef}
        />
        <Button
          variant={"ghost"}
          className="bg-popover h-11 w-11 rounded-l-none rounded-r-xl"
          size={"icon"}
        >
          <FilterIcon className="relative right-1 !h-5 !w-5" />
        </Button>
      </div>
      {searchPopover && (
        <div className="absolute right-0 w-full">
          <div className="bg-popover animation-popover relative z-10 mt-3 max-h-[400px] w-full overflow-auto rounded-xl p-4 shadow-lg">
            <div className="absolute top-[-5px] left-[145px]">
              <DropDownArrow className="text-popover" />
            </div>
            <div className="flex w-full items-center justify-between text-[12px]">
              <p className="mx-2">
                {result.length === 0 ? "Recommended" : "Your search result"}
              </p>
              <p className="mx-2">{result.length !== 0 && "Show more"}</p>
            </div>
            <div className="w-full">
              {result.length === 0 ? (
                <>
                  {loading &&
                    Array.from({ length: 4 }).map((_, i) => (
                      <SearchResultCardSkeleton key={i} />
                    ))}
                  {!loading &&
                    recommended.map((data) => (
                      <SearchResultCard key={data._id} data={data} />
                    ))}
                </>
              ) : (
                result.map((data) => (
                  <SearchResultCard key={data._id} data={data} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
