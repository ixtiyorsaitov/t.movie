import { Button } from "@/components/ui/button";
import CustomAvatar from "@/components/ui/custom-avatar";
import { COMMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Comment3Icon from "@/public/icons/comment3-icon";
import DangerIcon from "@/public/icons/danger-icon";
import HeartIcon from "@/public/icons/heart-icon";
import ThumbsUpIcon from "@/public/icons/thums-up-icon";
import { IComment } from "@/types";
import { ReplyIcon } from "lucide-react";
import { useState } from "react";

const MapComments = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  const [allComments, setAllComments] = useState<IComment[]>(COMMENTS);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      {allComments.map((comment) => (
        <CommentCard key={comment._id} data={comment} />
      ))}
    </div>
  );
};

export default MapComments;

const CommentCard = ({ data }: { data: IComment }) => {
  const isLiked = true;
  const [isActiveRepliedComments, setIsActiveRepliedComments] = useState(false);
  const [isContainSpoiler, setIsContainSpoiler] = useState(data.containSpoiler);

  return (
    <div className="w-full mt-4">
      <div className="w-full border p-4 rounded-xl relative overflow-hidden">
        {isContainSpoiler && (
          <div className="w-full h-full backdrop-blur-[3px] absolute top-0 left-0 z-10 bg-black/50 flex items-center justify-center flex-col space-y-3">
            <DangerIcon />
            <h1 className="text-primary">This comment contains spoilers!</h1>
            <Button
              onClick={() => setIsContainSpoiler(false)}
              variant={"outline"}
              className="px-10"
            >
              View
            </Button>
          </div>
        )}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <CustomAvatar
              image="https://github.com/shadcn.png"
              firstLetterOfName="IS"
            />
            <p>{data.user.name}</p>
          </div>
          <p className="text-muted-foreground">2 hours ago</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="text-sm max-w-6xl font-[300] dark:text-neutral-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            nihil odio, sint neque modi molestias corrupti unde iure vero dicta.
          </div>
          <Button variant={"outline"} className="rounded-full">
            Score: {data.score}/10
          </Button>
        </div>
        <div className="w-full flex items-center justify-start mt-4 gap-2">
          <div className="text flex items-center justify-center text-muted-foreground">
            <Button
              variant={"ghost"}
              size={"icon"}
              className={cn(isLiked && "dark:text-white text-black")}
            >
              <ThumbsUpIcon
                className={cn(
                  isLiked && "dark:fill-white fill-black",
                  "!w-6 !h-6"
                )}
              />
            </Button>
            5k
          </div>
          <div className="text-sm flex items-center justify-center text-muted-foreground">
            <Button variant={"ghost"} size={"icon"} className="text-white">
              <Comment3Icon className="!w-6 !h-6" />
            </Button>
            12
          </div>
          <Button variant={"outline"} className="rounded-full ml-4">
            <ReplyIcon />
            Reply
          </Button>
        </div>
      </div>
      {isActiveRepliedComments && (
        <div className="w-full flex items-center justify-end">
          <div className="w-[70%]">
            <RepliedCommentCard data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

const RepliedCommentCard = ({ data }: { data: IComment }) => {
  const isLiked = false;
  return (
    <div className="w-full border p-4 rounded-xl mt-4">
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <CustomAvatar
              image="https://github.com/shadcn.png"
              firstLetterOfName="IS"
            />
            <p>{data.user.name}</p>
          </div>
          <p className="text-muted-foreground">2 hours ago</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="text-sm max-w-6xl font-[300] dark:text-neutral-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            nihil odio, sint neque modi molestias corrupti unde iure vero dicta.
          </div>
          <Button variant={"outline"} className="rounded-full">
            Score: {data.score}/10
          </Button>
        </div>
        <div className="w-full flex items-center justify-start mt-4 gap-2">
          <div className="text flex items-center justify-center text-muted-foreground">
            <Button
              variant={"ghost"}
              size={"icon"}
              className={cn(isLiked && "dark:text-white text-black")}
            >
              <ThumbsUpIcon
                className={cn(
                  isLiked && "dark:fill-white fill-black",
                  "!w-6 !h-6"
                )}
              />
            </Button>
            5k
          </div>
          <Button variant={"outline"} className="rounded-full ml-4">
            <ReplyIcon />
            Reply
          </Button>
        </div>
      </div>
      <div className="w-[70%]"></div>
    </div>
  );
};
