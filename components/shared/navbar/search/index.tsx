import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilterIcon from "@/public/icons/filter-icon";
import SearchIcon from "@/public/icons/search-icon";

const SearchBox = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <Button
          variant={"ghost"}
          className="bg-[#111111] rounded-r-none h-11 w-11"
          size={"icon"}
        >
          <SearchIcon className="relative left-1" />
        </Button>
        <Input
          className="!bg-[#111111] w-[222px] h-11 rounded-none focus-visible:ring-0 border-none shadow-none"
          placeholder="Search the series, movies..."
        />
        <Button
          variant={"ghost"}
          className="bg-[#111111] rounded-l-none h-11 w-11"
          size={"icon"}
        >
          <FilterIcon className="relative right-1 !w-5 !h-5" />
        </Button>
      </div>
      <div className="absolute w-[310px] right-0 h-24 bg-red-500 "></div>
    </div>
  );
};

export default SearchBox;
