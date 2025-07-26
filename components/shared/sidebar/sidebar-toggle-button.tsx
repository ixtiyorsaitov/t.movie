"use client";

import { ChevronLeft } from "lucide-react";
import { useSidebar } from "../../ui/sidebar";
import { cn } from "@/lib/utils";

export function SidebarToggleButton() {
  const { toggleSidebar, state, isMobile } = useSidebar();

  return (
    <div
      onClick={toggleSidebar}
      className={cn(
        "w-full flex items-center justify-center relative",
        (state === "collapsed" || isMobile) && "h-10"
      )}
    >
      <button
        className={cn(
          "border w-8 absolute dark:bg-neutral-900 bg-white",
          state === "collapsed"
            ? "right-[-30px] rounded-r-lg dark:border-l-neutral-900 border-l-sidebar bg-sidebar"
            : "right-[-1px] rounded-l-lg dark:border-r-neutral-900 border-r-white"
        )}
        aria-label="Toggle Sidebar"
      >
        <ChevronLeft
          size={40}
          className={cn(
            "relative -left-1 transition dark:text-white text-neutral-500",
            state === "collapsed" ? "rotate-180" : "rotate-360"
          )}
        />
      </button>
    </div>
  );
}
