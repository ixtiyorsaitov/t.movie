import { cn } from "@/lib/utils";

type Variant = "default";

const CustomLoader = ({
  className,
  // variant = "default",
}: {
  className?: string;
  variant?: Variant;
}) => {
  return (
    <div
      className={cn(
        "animate-loader w-7 h-7 border-primary border-4 border-l-0 rounded-full border-b-transparent",
        className
      )}
    />
  );
};

export default CustomLoader;
