"use client";
import Card from "@/components/card";
import SkeletonCard from "@/components/skeleton/skeletonCard";
import React, { useEffect, useState } from "react";
import { dataDutube } from "../../data/dataDutube";
import { motion } from "framer-motion";

const MainPage = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setData(dataDutube);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <motion.div
      className="grid grid-cols-card gap-7 px-10"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {data &&
        data.slice(0, 10).map((card: any, index: any) => (
          <motion.div
            variants={item}
            transition={{ delay: index * 0.2 }}
            key={card._id}
          >
            <Card card={card} />
          </motion.div>
        ))}

      {isLoading && [0, 1, 2, 3, 4, 5, 6].map(() => <SkeletonCard />)}
    </motion.div>
  );
};

export default MainPage;
