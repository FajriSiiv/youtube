"use client";

import { formatDate } from "@/hooks/formatDate";
import { formatNumberDecimal } from "@/hooks/formatViews";
import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonCard = (props: any) => {
  const { card } = props;

  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-[200px] w-full rounded-lg"></Skeleton>
      <div className="flex gap-3 items-start">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
