"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NOTIFICATIONS } from "@/lib/constants";
import NotificationIcon from "@/public/icons/notification-icon";
import SettingIcon from "@/public/icons/setting-icon";
import React, { useEffect, useState } from "react";
import NotificationCard from "./notification-card";
import { Trash2 } from "lucide-react";
import { INotification } from "@/types";
import NotificationCardSkeleton from "./notification-card/skeleton";

const Notifications = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isNotificationOpen && notifications.length === 0) {
      setTimeout(() => {
        setLoading(false);
        setNotifications(NOTIFICATIONS);
      }, 1000);
    }
  }, [isNotificationOpen]);
  return (
    <DropdownMenu
      open={isNotificationOpen}
      onOpenChange={setIsNotificationOpen}
    >
      <DropdownMenuTrigger asChild>
        <Button className="relative" variant={"ghost"} size={"icon"}>
          <div className="absolute bg-red-500 w-2 h-2 rounded-full top-2 right-2"></div>
          <NotificationIcon className="!w-7 !h-7" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative w-116 pt-4 pb-0 -left-15 bg-popover px-8">
        <DropdownMenuLabel className="w-full flex items-center justify-between">
          <p>Notifications</p>
          <SettingIcon variant={"outline"} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="mb-3" />
        <div className="w-full h-full max-h-100 overflow-auto scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-popover">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <NotificationCardSkeleton key={i} />
              ))
            : NOTIFICATIONS.map((data, idx) => (
                <NotificationCard key={data._id} index={idx} data={data} />
              ))}
        </div>

        <div className="w-full pt-4 pb-2 sticky b-0 bg-popover h-ull flex items-center justify-center">
          {loading ? (
            <div className="w-[150px] dark:bg-primary-900 rounded-full h-10 animate-pulse" />
          ) : (
            <Button className="rounded-full min-w-[150px]">
              <Trash2 />
              Clear
            </Button>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;

// const { mutate, isPending } = useMutation({
//     mutationFn: async () => {
//       const { data } = await axios.get<{ datas: INotification[] }>(
//         "/api/auth/verify"
//       );
//       return data;
//     },
//     onSuccess: ({ datas }) => {
//       setNotifications(datas);
//     },
//   });
