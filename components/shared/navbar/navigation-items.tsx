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
import Logo from "@/public/icons/Logo";

const NavigationItems = () => {
  const queryParams = "all";

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Desktop navigation */}
        <div className="hidden md:flex">
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
                      ? "text-primary-500 border-b border-b-yellow-500"
                      : "hover:text-primary-500"
                  )}
                >
                  <Link href="/">{item.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </div>

        {/* Mobile logo */}
        <div className="flex md:hidden">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

        {/* Genres menu only for desktop */}
        <div className="hidden md:flex">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
            <NavigationMenuContent
              className={cn(
                "p-6 absolute !rounded-2xl !bg-popover z-[999]",
                "2xl:w-[937px] xl:w-[600px] lg:w-[400px] md:w-[400px]"
              )}
            >
              <div
                className={cn(
                  "grid gap-5 w-full px-2",
                  "2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2"
                )}
              >
                {GENRES.map((genre, i) => (
                  <Link
                    href={`/filter?genre=${genre._id}`}
                    key={i}
                    className="flex items-center justify-start gap-1 hover:text-primary-500 cursor-pointer"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                    <p>{genre.name}</p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationItems;
