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
import useResponsive from "@/hooks/use-responsive";
import Logo from "@/public/icons/Logo";

const NavigationItems = () => {
  const responsive1200 = useResponsive(1300);
  const responsive1000 = useResponsive(1000);
  const responsive767 = useResponsive(767);
  const queryParams = "all";
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {!responsive767 ? (
          <>
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
          </>
        ) : (
          <Link href={"/"}>
            <Logo />
          </Link>
        )}

        {!responsive767 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
            <NavigationMenuContent
              className={cn(
                "p-6 absolute !rounded-2xl  !bg-black",
                responsive1200 && !responsive1000
                  ? "!w-[600px]"
                  : responsive1000 && !responsive767
                  ? "!w-[400px]"
                  : responsive767
                  ? "left-1/2 -translate-x-1/2 !w-[400px]"
                  : "!w-[937px]"
              )}
            >
              <div
                className={cn(
                  "grid gap-5 w-full px-2",
                  responsive1200 && !responsive1000
                    ? "grid-cols-4"
                    : responsive1000
                    ? "grid-cols-2"
                    : "grid-cols-5"
                )}
              >
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
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationItems;
