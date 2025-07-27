"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import useResponsive from "@/hooks/use-responsive";
import MenuIcon from "@/public/icons/menu-icon";
import { MOBILE_BREAKPOINT } from "@/hooks/use-mobile";
import CustomAvatar from "@/components/ui/custom-avatar";

const NavigationBar = () => {
  const { toggleSidebar } = useSidebar();
  const responsive = useResponsive(MOBILE_BREAKPOINT);

  return (
    <div className="flex items-center justify-end gap-2">
      {!responsive && (
        <>
          <SearchBox />
        </>
      )}
      <ModeToggle />
      <Notifications />

      <div className="flex items-center justify-center relative w-12 h-12 rounded-full">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CustomAvatar
              image="https://github.com/shadcn.png"
              firstLetterOfName="IS"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative w-[234px] px-2 -left-2 bg-popover rounded-xl">
            <DropdownMenuLabel className="w-full flex items-center justify-start gap-2">
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
            <div className="w-full my-4 flex items-center justify-center">
              <Button className="rounded-full px-9">Logout</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button className="!pl-0 !m-0" variant={"ghost"} onClick={toggleSidebar}>
        <MenuIcon className="size-6" />
      </Button>
    </div>
  );
};

export default NavigationBar;
