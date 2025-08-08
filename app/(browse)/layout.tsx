"use client";

import AuthModal from "@/components/modals/auth";
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
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full max-w-400 items-center justify-center">
            {children}
          </div>
        </div>
      </main>
      <AuthModal />
    </SidebarProvider>
  );
};

export default BrowseLayout;
