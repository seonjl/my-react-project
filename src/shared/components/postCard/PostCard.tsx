import { timeDifference } from "@/shared/utils/date/date";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconHeart, IconSpeechBox, IconViewed } from "../../../../public/svgs";


const PostCard = ({ post }: any) => {

  return (
    <div className="border border-gray-50 m-1 shadow-md">
      <ul className="relative flex items-start gap-x-4 bg-gray-5 px-5 py-2">
        <Image
          src={post.author.avatar}
          width={32}
          height={32}
          alt="item"
          className="aspect-square rounded-md"
          />
        <div>
          <ul className="flex flex-row items-center font-body-regular-sm">
            <div>
              {post.topic}
            </div>
            <div className="font-caption-medium-sm text-gray-60 mx-1">
              {timeDifference(post.createdAt)}
            </div>
          </ul>
          <ul className="flex font-body-regular-sm">
            {post.author.company} - {post.author.name}
          </ul>
        </div>
      </ul>
      <ul className="relative flex items-start bg-gray-5 px-5 py-0.5 font-title-medium-sm">
        {post.title}
      </ul>
      <ul className="relative flex items-start bg-gray-5 px-5 py-2 font-body-regular-sm text-gray-75">
        {post.content}
      </ul>
      <ul className="relative flex items-center justify-between bg-gray-5 px-5 py-2 w-[80%] mx-auto">
        <div className="flex flex-row items-baseline">
          <IconHeart className="h-[12px] w-[12px] mr-1" />
          좋아요
        </div>
        <div className="flex flex-row items-baseline">
          <IconSpeechBox className="h-[12px] w-[12px] mx-1" />
          댓글
        </div>
        <div className="flex flex-row items-baseline">
          <IconViewed className="h-[12px] w-[12px] mx-1" />
          조회수
        </div>
      </ul>
    </div>
  );
};

export default PostCard;
