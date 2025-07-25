import Navbar from "@/components/shared/navbar/navbar";
import AppSidebar from "@/components/shared/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="px-3 w-full">
        <Navbar />
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default BrowseLayout;
