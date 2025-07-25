import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  index?: number; // Optional, as it might not be relevant for a skeleton
}

const NotificationCardSkeleton = ({ index }: SkeletonProps) => {
  return (
    <DropdownMenuItem
      className={cn("p-0 rounded-xl", index === 0 ? "" : "mt-3")}
      // Disable interaction for skeleton
      onSelect={(e) => e.preventDefault()}
    >
      <div className="w-full rounded-xl overflow-hidden flex items-center justify-start gap-4 animate-pulse">
        {/* Image Placeholder */}
        <div className="w-24 h-32 relative bg-gray-200 dark:bg-primary-900 rounded-xl" />

        {/* Text Content Placeholders */}
        <div className="flex flex-col gap-2 py-2">
          {/* Main text line */}
          <div className="h-4 bg-gray-200 dark:bg-primary-900 rounded w-[200px]" />
          {/* Title placeholder */}
          <div className="h-4 bg-gray-200 dark:bg-primary-900 rounded w-[250px] my-1" />

          {/* Rating and Genres placeholder */}
          <div className="flex items-center justify-start gap-2">
            {/* Star and rating placeholder */}
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4 bg-gray-200 dark:bg-primary-900 rounded-full" />{" "}
              {/* Star shape */}
              <div className="h-4 bg-gray-200 dark:bg-primary-900 rounded w-8" />{" "}
              {/* Rating number */}
            </div>
            {/* Genres placeholder */}
            <div className="h-4 bg-gray-200 dark:bg-primary-900 rounded w-[100px]" />
          </div>
        </div>
      </div>
    </DropdownMenuItem>
  );
};

export default NotificationCardSkeleton;
