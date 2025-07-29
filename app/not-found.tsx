import { Button } from "@/components/ui/button";
import NotFoundImage from "@/public/icons/not-found-image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-full dark:bg-neutral-900 flex items-center justify-center flex-col">
      <p className="text-lg text-primary font-[300]">
        Oops! The page you're looking for cannot be found.
      </p>
      <div className="my-16">
        <NotFoundImage />
      </div>
      <Link href={"/"}>
        <Button
          variant={"secondary"}
          className="text-primary border-[0.5px] border-primary/10 rounded-sm px-10"
        >
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
