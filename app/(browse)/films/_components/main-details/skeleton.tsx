"use client";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import CustomLoader from "@/components/ui/custom-loader";

const MainDetailsSkeleton = () => {
  return (
    <div
      className={cn(
        "w-full flex flex-col md:flex-row items-center justify-center h-auto md:h-[75vh] md:max-h-[600px] min-h-[500px] md:rounded-2xl transition gap-4 md:gap-2 relative overflow-hidden p-4 md:p-0"
      )}
    >
      {/* Background skeleton */}
      <div className="absolute w-full h-full top-0 left-0 z-[-1] overflow-hidden">
        <div className="w-full h-full bg-accent" />
        <div className="w-full absolute h-full left-0 top-0 bg-black/40"></div>
      </div>

      {/* Image section skeleton */}
      <div className="w-full md:w-[35%] h-[300px] md:h-full p-5 relative overflow-hidden rounded-2xl">
        <Skeleton className="w-full h-full bg-neutral-200" />
        <div className="absolute top-10 right-10">
          <CustomLoader />
        </div>
      </div>

      {/* Content section skeleton */}
      <div className="w-full md:w-[65%] px-4 md:px-8 h-auto md:h-full flex items-center justify-start relative">
        <div className="absolute top-5 right-5 md:flex hidden">
          <CustomLoader />
        </div>
        <div className="flex items-center md:items-start justify-start flex-col w-full">
          {/* Title skeleton */}
          <div className="flex items-center justify-center md:justify-start w-full mb-2">
            <Skeleton className="h-8 md:h-10 w-64 md:w-96 bg-neutral-200" />
          </div>

          {/* Year and duration skeleton */}
          <div className="flex items-center justify-center md:justify-start w-full mb-4 md:mb-6">
            <Skeleton className="h-4 md:h-5 w-24 md:w-32 bg-neutral-200" />
          </div>

          {/* Genre tags skeleton */}
          <div className="flex w-full mb-4 md:mb-6 items-center justify-center md:justify-start gap-2 flex-wrap">
            <Skeleton className="h-7 md:h-8 w-14 md:w-16 rounded-lg bg-neutral-200" />
            <Skeleton className="h-7 md:h-8 w-18 md:w-20 rounded-lg bg-neutral-200" />
            <Skeleton className="h-7 md:h-8 w-12 md:w-14 rounded-lg bg-neutral-200" />
          </div>

          {/* Description skeleton */}
          <div className="w-full space-y-2 mb-4 md:mb-6">
            <Skeleton className="h-3 md:h-4 max-w-2xl bg-neutral-200 w-full" />
            <Skeleton className="h-3 md:h-4 max-w-2xl bg-neutral-200 w-full" />
            <Skeleton className="h-3 md:h-4 max-w-2xl bg-neutral-200 w-full" />
            <Skeleton className="h-3 md:h-4 max-w-2xl bg-neutral-200 w-3/4" />
            <div className="hidden md:block space-y-2">
              <Skeleton className="h-4 max-w-2xl bg-neutral-200 w-full" />
              <Skeleton className="h-4 max-w-2xl bg-neutral-200 w-5/6" />
            </div>
          </div>

          {/* Buttons skeleton */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 w-full">
            <Skeleton className="h-9 md:h-10 w-full sm:w-32 md:w-36 bg-primary" />
            <Skeleton className="h-9 md:h-10 w-full sm:w-28 md:w-32 bg-transparent border-2 border-primary flex items-center justify-center">
              <div className="w-[70%] h-2 md:h-3 rounded-full bg-primary"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetailsSkeleton;
