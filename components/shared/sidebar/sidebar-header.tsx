import { useSidebar } from "@/components/ui/sidebar";
import Logo from "@/public/icons/Logo";
import React from "react";

const SidebarTop = () => {
  const { state, isMobile } = useSidebar();
  return (
    <div className="w-full flex items-center justify-center my-4">
      <Logo
        variant={state === "collapsed" || isMobile ? "collapsed" : "default"}
      />
    </div>
  );
};

export default SidebarTop;
