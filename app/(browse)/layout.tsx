"use client";

import MobileMenu from "@/components/shared/navbar/mobile-menu";
import Navbar from "@/components/shared/navbar/navbar";
import AppSidebar from "@/components/shared/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MOBILE_BREAKPOINT } from "@/hooks/use-mobile";
import useResponsive from "@/hooks/use-responsive";
import React from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  const responsive = useResponsive(MOBILE_BREAKPOINT);
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full pb-[52px]">
        <Navbar />
        <div className="w-full flex items-center justify-center">
          <div className="flex items-center justify-center max-w-400 w-full">
            {children}
          </div>
        </div>
      </main>
      {responsive && <MobileMenu />}
    </SidebarProvider>
  );
};

export default BrowseLayout;
