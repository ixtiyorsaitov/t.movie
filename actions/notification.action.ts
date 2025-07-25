"use server";

import { NOTIFICATIONS } from "@/lib/constants";
import { actionClient } from "@/lib/safe.action";

export const getNotificationFeed = actionClient.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { feed: NOTIFICATIONS };
});
