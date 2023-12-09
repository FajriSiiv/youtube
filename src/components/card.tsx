"use client";

import { formatDate } from "@/hooks/formatDate";
import { formatNumberDecimal } from "@/hooks/formatViews";
import React, { useEffect } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { motion } from "framer-motion";
import { useStore } from "@/store/store";
import SkeletonCard from "./skeleton/skeletonCard";

const Card = (props: any) => {
  const { isLoading }: any = useStore();
  const { card } = props;

  if (isLoading === true) return <SkeletonCard />;

  return (
    <motion.div className="flex flex-col gap-2">
      <div className="h-[200px] w-full bg-rose-500 rounded-lg"></div>
      <div className="flex gap-3 items-start">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div className="flex flex-col">
          <h1 className="font-medium leading-5">{card.title}</h1>
          <p className="text-sm text-youtubeColor-secondary">{card.ownedBy}</p>
          <p className="text-sm text-youtubeColor-secondary">
            <span>{formatNumberDecimal(card.like)} x ditonton</span> -{" "}
            {formatDate(card.date)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
