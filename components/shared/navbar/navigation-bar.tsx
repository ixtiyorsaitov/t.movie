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

const NavigationBar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center justify-end gap-2">
      {/* <Button variant={"ghost"} onClick={toggleSidebar}>
        <PanelLeftIcon className="size-6" />
      </Button> */}
      <SearchBox />
      <ModeToggle />

      <Notifications />

      <div className="flex items-center justify-center p-[0.5px] relative w-12 h-12 border-2 border-primary rounded-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-full h-full">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-primary-500 dark:text-black text-white">
                CN
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative w-[234px] px-2 -left-2 bg-popover rounded-xl">
            <DropdownMenuLabel className="w-full flex items-center justify-start gap-2">
              <div className="w-12 h-12">
                <Avatar className="w-full h-full">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-primary-500 dark:text-black text-white">
                    CN
                  </AvatarFallback>
                </Avatar>
              </div>
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
    </div>
  );
};

export default NavigationBar;
