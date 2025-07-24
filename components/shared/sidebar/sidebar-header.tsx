import { useSidebar } from "@/components/ui/sidebar";
import Logo from "@/public/icons/Logo";
import Link from "next/link";
import React from "react";

const SidebarTop = () => {
  const { state, isMobile } = useSidebar();
  return (
    <Link href={"/"} className="w-full flex items-center justify-center my-4">
      <Logo
        variant={state === "collapsed" || isMobile ? "collapsed" : "default"}
      />
    </Link>
  );
};

export default SidebarTop;
