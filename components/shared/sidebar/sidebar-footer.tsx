import { Button } from "@/components/ui/button";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import CrownIcon from "@/public/icons/crown";
import React from "react";

const SidebarBottom = () => {
  const { state, isMobile } = useSidebar();

  const isCollapsed = state === "collapsed";

  return (
    <div className="w-full flex items-center justify-center mb-4">
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-y-3 rounded-2xl py-4 shadow-[0_0_20px_rgba(250,204,21,0.15)]",
          "mask-gradient-border",
          state === "collapsed" ? "" : "border border-neutral-700 px-6"
        )}
      >
        {!isCollapsed && (
          <p className="text-center text-sm dark:text-neutral-100 text-neutral-600">
            Click the button below <br /> to see the plans
          </p>
        )}
        <Button variant="outline">
          <CrownIcon className="!w-5 !h-5 fill-yellow-400" />
          {!isCollapsed && <span className="ml-2">see plans</span>}
        </Button>
      </div>
    </div>
  );
};

export default SidebarBottom;
