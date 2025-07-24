"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { SIDEBAR_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarNavigations = () => {
  const pathName = usePathname();
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="dark:text-neutral-600">
          Menu
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {SIDEBAR_ITEMS.group1.map((item) => {
              const isActive = item.href === pathName;
              return (
                <SidebarMenuItem
                  key={item.id}
                  className={cn(
                    "flex items-center relative gap-3 px-4 py-2 hover:bg-sidebar-accent",
                    isActive
                      ? "text-primary-500 font-medium"
                      : " transition-colors"
                  )}
                >
                  <SidebarMenuButton
                    asChild
                    className="text-lg rounded-none hover:bg-transparent"
                  >
                    <Link href={item.href}>
                      <item.icon className="fill-red !w-5 !h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                  {isActive && (
                    <div className="absolute left-0 h-full flex items-center justify-center">
                      <div className="bg-primary-500 h-[70%] w-1 rounded-r-lg"></div>
                    </div>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <div className="w-full flex items-center justify-center p-x-2">
        <SidebarSeparator />
      </div>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {SIDEBAR_ITEMS.group2.map((item) => {
              const isActive = item.href === pathName;
              return (
                <SidebarMenuItem
                  key={item.id}
                  className={cn(
                    "flex items-center relative gap-3 px-4 py-2 hover:bg-sidebar-accent",
                    isActive
                      ? "text-primary-500 font-medium"
                      : " transition-colors"
                  )}
                >
                  <SidebarMenuButton
                    asChild
                    className="text-lg rounded-none hover:bg-transparent"
                  >
                    <Link href={item.href}>
                      <item.icon className="fill-red !w-5 !h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                  {isActive && (
                    <div className="absolute left-0 h-full flex items-center justify-center">
                      <div className="bg-primary-500 h-[70%] w-1 rounded-r-lg"></div>
                    </div>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default SidebarNavigations;
