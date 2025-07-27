"use client";

import MobileMenu from "@/components/shared/navbar/mobile-menu";
import Navbar from "@/components/shared/navbar/navbar";
import AppSidebar from "@/components/shared/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { MOBILE_BREAKPOINT } from "@/hooks/use-mobile";
import useResponsive from "@/hooks/use-responsive";
import React from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  const responsive = useResponsive(MOBILE_BREAKPOINT);
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="px-3 w-full h-[400vh]">
        <Navbar />
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </main>
      {responsive && <MobileMenu />}
    </SidebarProvider>
  );
};

export default BrowseLayout;
