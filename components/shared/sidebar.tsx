"use client";

import { Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/public/icons/Logo";
import DiscoverIcon from "@/public/icons/discover-icon";
import WatchListIcon from "@/public/icons/watchlist-icon";
import BlogIcon from "@/public/icons/blog-icon";
import ArtistIcon from "@/public/icons/artists-icon";
import ContactUsIcon from "@/public/icons/contact-us-icon";
import HelpCenterIcon from "@/public/icons/help-center-icon";
import SettingIcon from "@/public/icons/setting-icon";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className="w-64 bg-neutral-900 border-r border-sidebar-border flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center gap-2 mb-8 mt-5 w-full">
          <Logo />
        </div>
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
      </div>
      <div className="p-4 bg-card rounded-lg text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Click the button below to see the plans
        </p>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Wallet className="w-4 h-4 mr-2" />
          see plans
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;

const SIDEBAR_ITEMS = {
  group1: [
    {
      id: 1,
      name: "Discover",
      icon: DiscoverIcon,
      href: "/",
    },
    {
      id: 2,
      name: "Watchlist",
      icon: WatchListIcon,
      href: "/watchlist",
    },
    {
      id: 3,
      name: "Blog",
      icon: BlogIcon,
      href: "/blog",
    },
    {
      id: 4,
      name: "Artists",
      icon: ArtistIcon,
      href: "/artists",
    },
  ],
  group2: [
    {
      id: 5,
      name: "Contact Us",
      icon: ContactUsIcon,
      href: "contact-us",
    },
    {
      id: 6,
      name: "Help Center",
      icon: HelpCenterIcon,
      href: "/help-center",
    },
    {
      id: 7,
      name: "Setting",
      icon: SettingIcon,
      href: "/settings",
    },
  ],
};
