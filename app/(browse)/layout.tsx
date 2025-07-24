import Sidebar from "@/components/shared/sidebar";
import React from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      {children}
    </div>
  );
};

export default BrowseLayout;
