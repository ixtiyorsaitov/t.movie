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
          "border w-8 absolute bg-neutral-900",
          state === "collapsed"
            ? "right-[-30px] rounded-r-lg border-l-neutral-900"
            : "right-[-1px] rounded-l-lg border-r-neutral-900"
        )}
        aria-label="Toggle Sidebar"
      >
        <ChevronLeft
          size={40}
          className={cn(
            "relative -left-1 transition",
            state === "collapsed" ? "rotate-180" : "rotate-360"
          )}
        />
      </button>
    </div>
  );
}
