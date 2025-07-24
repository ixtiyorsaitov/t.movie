"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../../ui/sidebar";
import SidebarNavigations from "./sidebar-navigations";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarNavigations />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;

{
  /*
     <nav className="space-y-4">
          <div className="dark:text-neutral-600 text-muted-foreground text-sm mb-2 px-4">
            Menu
          </div>
          {SIDEBAR_ITEMS.group1.map((item) => {
            const isActive = item.href === pathName;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "flex items-center relative gap-3 px-4 py-2",
                  isActive
                    ? "text-primary-500 font-medium"
                    : " transition-colors"
                )}
                prefetch={false}
              >
                {isActive && (
                  <div className="absolute left-0 h-full flex items-center justify-center">
                    <div className="bg-primary-500 h-[70%] w-1 rounded-r-lg"></div>
                  </div>
                )}
                <item.icon
                  className={isActive ? "fill-primary-500" : "fill-neutral-300"}
                />
                {item.name}
              </Link>
            );
          })}
          <div className="w-full px-4 items-center py-4 justify-center">
            <Separator className="dark:bg-neutral-800" />
          </div>
          {SIDEBAR_ITEMS.group2.map((item) => {
            const isActive = item.href === pathName;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "flex items-center relative gap-3 px-4 py-2",
                  isActive
                    ? "text-primary-500 font-medium"
                    : " transition-colors"
                )}
                prefetch={false}
              >
                {isActive && (
                  <div className="absolute left-0 h-full flex items-center justify-center">
                    <div className="bg-primary-500 h-[70%] w-1 rounded-r-lg"></div>
                  </div>
                )}
                <item.icon
                  className={isActive ? "fill-primary-500" : "fill-neutral-300"}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
    */
}
