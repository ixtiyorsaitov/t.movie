const SearchResultCardSkeleton = () => {
  return (
    <div className="w-full rounded-xl p-2 flex items-center justify-start gap-3 animate-pulse">
      <div className="w-16 h-[88px] relative bg-gray-700 rounded-xl">
        {/* Image placeholder */}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-start gap-1">
          <div className="h-4 w-32 bg-gray-700 rounded"></div>{" "}
          {/* Title placeholder */}
          <div className="h-4 w-4 bg-gray-700 rounded-full"></div>{" "}
          {/* Icon placeholder */}
        </div>
        <div className="flex text-[13px] my-1 items-center justify-start gap-4">
          <div className="flex items-center justify-start gap-1">
            <div className="h-3 w-3 bg-gray-700 rounded-full"></div>{" "}
            {/* Star icon placeholder */}
            <div className="h-3 w-10 bg-gray-700 rounded"></div>{" "}
            {/* Rating placeholder */}
          </div>
          <div className="h-3 w-16 bg-gray-700 rounded"></div>{" "}
          {/* Year placeholder */}
        </div>
        <div className="h-3 w-24 bg-gray-700 rounded"></div>{" "}
        {/* Genres placeholder */}
      </div>
    </div>
  );
};

export default SearchResultCardSkeleton;
