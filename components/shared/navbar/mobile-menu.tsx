"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ReelsIcon from "@/public/icons/reels-icon";
import SearchIcon from "@/public/icons/search-icon";
import { Home, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import SearchBox from "./search";
import { useEffect, useRef, useState } from "react";

const MobileMenu = () => {
  const pathName = usePathname();
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
      <nav className="fixed bottom-0 px-4 pt-4 left-0 z-50 w-full flex items-center justify-center gap-2 bg-popover">
        <Button
          size={"icon"}
          className="w-[25%] relative pb-4"
          variant={"ghost"}
        >
          <Home
            className={cn(
              "!w-6 !h-6",
              pathName === "/" && "text-primary fill-primary"
            )}
          />
          <div className="absolute bottom-0 w-full left-0 flex items-center justify-center flex-col">
            <div className="w-[70%] h-[5px] rounded-full bg-primary"></div>
          </div>
        </Button>
        <Button
          size={"icon"}
          className="w-[25%] relative pb-4"
          variant={"ghost"}
          onClick={() => setSearchContainerOpen(true)}
        >
          <SearchIcon className="!w-6 !h-6" />
        </Button>
        <Button
          size={"icon"}
          className="w-[25%] relative pb-4"
          variant={"ghost"}
        >
          <ReelsIcon className="!w-6 !h-6" />
        </Button>
        <Button
          size={"icon"}
          className="w-[25%] relative pb-4"
          variant={"ghost"}
        >
          <UserCircle className="!w-6 !h-6" />
        </Button>
      </nav>
      {searchContainerOpen && (
        <div
          ref={searchRef}
          className={cn(
            "flex pt-[20vh] px-5 justify-center backdrop-blur-md w-full h-screen fixed top-0 z-[99] bg-black/50",
            "mobile-search-container"
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

export default MobileMenu;
