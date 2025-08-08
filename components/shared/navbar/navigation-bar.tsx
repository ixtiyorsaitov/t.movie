"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";
import CommentIcon from "@/public/icons/comment-icon";
import EditUserIcon from "@/public/icons/edit-user-icon";
import ReelsIcon from "@/public/icons/reels-icon";
import ShopAddIcon from "@/public/icons/shop-add-icon";
import Notifications from "./notifications";
import SearchBox from "./search";
import { ModeToggle } from "@/components/ui/theme-toggle";
import MenuIcon from "@/public/icons/menu-icon";
import CustomAvatar from "@/components/ui/custom-avatar";
import NotificationIcon from "@/public/icons/notification-icon";
import Link from "next/link";
import MobileSearch from "./mobile-search";
import { useAuthModal } from "@/hooks/use-modals";

const NavigationBar = () => {
  const { toggleSidebar } = useSidebar();
  const authModal = useAuthModal();
  const isLogged = false;
  return (
    <div className="flex items-center justify-end gap-2">
      <div className="hidden lg:flex">
        <SearchBox />
      </div>
      <div className="lg:hidden">
        <MobileSearch />
      </div>

      <ModeToggle />
      <Notifications />

      {isLogged ? (
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CustomAvatar
                image="https://github.com/shadcn.png"
                firstLetterOfName="IS"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-popover relative -left-2 w-[234px] rounded-xl px-2">
              <DropdownMenuLabel className="flex w-full items-center justify-start gap-2">
                <CustomAvatar
                  image="https://github.com/shadcn.png"
                  firstLetterOfName="IS"
                />
                <h1 className="text-xl">Ixtiyor</h1>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <EditUserIcon />
                Edit Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShopAddIcon />
                My Purchases
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ReelsIcon />
                Request Titles
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CommentIcon />
                Comments
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="flex md:hidden">
                <Link href="/notifications">
                  <NotificationIcon />
                  Notifications{" "}
                  <span className="h-1 w-1 rounded-full bg-red-500"></span>{" "}
                  <span className="text-sm">(4)</span>
                </Link>
              </DropdownMenuItem>
              <div className="my-4 flex w-full items-center justify-center">
                <Button className="rounded-full px-9">Logout</Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Button
          onClick={() => {
            authModal.setOpen(true);
          }}
        >
          Login
        </Button>
      )}
      <Button
        className="!m-0 flex !pl-0 lg:hidden"
        variant={"ghost"}
        onClick={toggleSidebar}
      >
        <MenuIcon className="size-6" />
      </Button>
    </div>
  );
};

export default NavigationBar;
