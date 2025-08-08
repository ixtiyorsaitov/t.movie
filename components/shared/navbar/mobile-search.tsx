import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import SearchBox from "./search";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/public/icons/search-icon";

const MobileSearch = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchContainerOpen, setSearchContainerOpen] = useState(false);

  useEffect(() => {
    if (searchContainerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchContainerOpen]);

  const handleCloseModal = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).classList.contains("mobile-search-container"))
      setSearchContainerOpen(false);
  };
  return (
    <>
      <Button
        onClick={() => setSearchContainerOpen(true)}
        className="flex lg:hidden"
        variant={"ghost"}
        size={"icon"}
      >
        <SearchIcon className="size-5" />
      </Button>
      {searchContainerOpen && (
        <div
          ref={searchRef}
          className={cn(
            "fixed top-0 left-0 z-[99] flex h-screen w-full justify-center bg-black/50 px-5 pt-10 backdrop-blur-md",
            "mobile-search-container",
          )}
          onClick={(e) => handleCloseModal(e)}
        >
          <div
            className="mobile-search-container w-full"
            onClick={(e) => handleCloseModal(e)}
          >
            <SearchBox autoFocus />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSearch;
