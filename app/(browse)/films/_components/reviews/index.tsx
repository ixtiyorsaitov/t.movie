import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import Comment2Icon from "@/public/icons/comment2-icon";
import React from "react";
import MapComments from "./map-comments";

const ReviewsFilm = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <h1 className="font-baloo2 text-2xl font-bold mt-4">Reviews</h1>
      </div>
      <div className="border p-4 rounded-xl w-full">
        <div className="w-full flex items-center justify-between">
          <p>Post a comment for this series:</p>
          <div className="flex items-center justify-end gap-2">
            <p>Contains spoilers</p>
            <Switch />
          </div>
        </div>
        <Textarea className="mt-4 rounded-xl" />
        <div className="flex mt-4 items-center justify-start w-full">
          <Button>
            Submit Review
            <Comment2Icon />
          </Button>
        </div>
      </div>
      <MapComments />
    </div>
  );
};

export default ReviewsFilm;
