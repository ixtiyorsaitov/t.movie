"use client";

import Navbar from "@/components/shared/navbar/navbar";
import AppSidebar from "@/components/shared/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
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
    </SidebarProvider>
  );
};

export default BrowseLayout;
