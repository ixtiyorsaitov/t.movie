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

const SearchBox = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchPopover, setSearchPopover] = useState<boolean>(false);
  const [recommended, setRecommended] = useState<IFilm[]>([]);
  const [result, setResult] = useState<IFilm[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
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

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleSearchDebounce = useCallback(debounce(onInputChange, 300), []);

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="flex items-center justify-center">
        <Button
          variant={"ghost"}
          className="bg-popover rounded-r-none rounded-l-xl h-11 w-11"
          size={"icon"}
        >
          <SearchIcon className="relative left-1" />
        </Button>
        <Input
          className="!bg-popover w-[222px] h-11 rounded-none focus-visible:ring-0 border-none shadow-none"
          placeholder="Search the series, movies..."
          onFocus={() => setSearchPopover(true)}
          onChange={handleSearchDebounce}
        />
        <Button
          variant={"ghost"}
          className="bg-popover rounded-l-none rounded-r-xl h-11 w-11"
          size={"icon"}
        >
          <FilterIcon className="relative right-1 !w-5 !h-5" />
        </Button>
      </div>
      {searchPopover && (
        <div className="absolute w-full right-0">
          <div className="w-full bg-black mt-3 rounded-xl shadow-lg z-10 animation-popover relative p-4">
            <div className="absolute left-[145px] top-[-5px]">
              <DropDownArrow />
            </div>
            <div className="w-full text-[12px] flex items-center justify-between">
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
