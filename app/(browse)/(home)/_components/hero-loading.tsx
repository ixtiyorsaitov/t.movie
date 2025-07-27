"use client";

import CustomLoader from "@/components/ui/custom-loader";
import { Skeleton } from "@/components/ui/skeleton";
import useResponsive from "@/hooks/use-responsive";
import { cn } from "@/lib/utils";
import StarIcon from "@/public/icons/star-icon";

export default function HeroLoading() {
  const responsive530 = useResponsive(530);

  return (
    <div className="relative">
      <Skeleton className="mx-auto w-full bg-primary-100/10 border h-[391px] rounded-2xl overflow-hidden relative">
        <div className="w-full h-full">
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <Skeleton className="w-80 h-5 bg-neutral-200" />
            <div className="flex items-center gap-4 text-sm mb-4 mt-4">
              <div className="flex items-center justify-start gap-1">
                <StarIcon />
                <Skeleton className="w-6 h-3 bg-neutral-200" />
              </div>
              <div className="flex items-center justify-start gap-1">
                <Skeleton className="w-16 h-3 bg-neutral-200" />
                <span className="text-primary">|</span>
                <Skeleton className="w-14 h-3 bg-neutral-200" />
                <span className="text-primary">|</span>
                <Skeleton className="w-18 h-3 bg-neutral-200" />
              </div>
            </div>
            <Skeleton className="max-w-lg w-120 mb-2 h-3 bg-neutral-200" />
            <Skeleton className="max-w-lg w-118 mb-2 h-3 bg-neutral-200" />
            <Skeleton className="max-w-lg w-116 mb-2 h-3 bg-neutral-200" />
            <Skeleton className="max-w-lg w-122 mb-1 h-3 bg-neutral-200" />
            <div
              className={cn(
                "flex gap-x-4 mt-4",
                responsive530 && "flex-col gap-y-2"
              )}
            >
              <Skeleton
                className={cn(
                  "py-2 bg-primary w-[143px] h-9 flex items-center justify-center gap-1 dark:text-black"
                )}
              />
              <Skeleton
                className={cn(
                  "py-2 bg-transparent border border-primary w-[143px] h-9",
                  responsive530 && "w-40"
                )}
              />
            </div>
          </div>
        </div>
      </Skeleton>
      <div className="absolute bottom-8 right-8 flex gap-2">
        <Skeleton className="rounded-full bg-primary w-9 h-9">
          {/* <ChevronLeft className="w-5 h-5" /> */}
        </Skeleton>
        <Skeleton className="rounded-full bg-primary w-9 h-9">
          {/* <ChevronRight className="w-5 h-5" /> */}
        </Skeleton>
      </div>
      <div className="absolute top-0 right-0 p-8">
        <CustomLoader />
      </div>
    </div>
  );
}
