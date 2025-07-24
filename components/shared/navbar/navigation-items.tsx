"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GENRES, NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const NavigationItems = () => {
  const queryParams = "all";
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = item.type === queryParams;
          return (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent rounded-none",
                  isActive
                    ? "text-primary-500 border-b  border-b-yellow-500"
                    : "hover:text-primary-500"
                )}
              >
                <Link href="/">{item.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
          <NavigationMenuContent className="p-6 absolute !rounded-2xl w-[400px] md:w-[500px] lg:w-[937px] !bg-black">
            <div className="grid gap-5 md:grid-cols-5 w-full px-2">
              {GENRES.map((genre) => (
                <Link
                  href={`/filter?genre=${genre.id}`}
                  key={genre.id}
                  className="flex items-center justify-start gap-1 hover:text-primary-500 cursor-pointer"
                >
                  <div className="w-3 h-3 rounded-full bg-primary-500" />
                  <p>{genre.name}</p>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationItems;
