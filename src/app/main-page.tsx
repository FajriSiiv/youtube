"use client";
import Card from "@/components/card";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/store";

const MainPage = () => {
  const { dataYoutube, filteredData, searchValue, loadingPage }: any =
    useStore();

  const displayData = searchValue ? filteredData : dataYoutube;

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
    loadingPage();
  }, []);

  return (
    <motion.div
      className="grid grid-cols-card gap-7 px-10 max-sm:px-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {displayData &&
        displayData.map((card: any, index: any) => (
          <motion.div
            variants={item}
            transition={{ delay: index * 0.2 }}
            key={card._id}
          >
            <Card card={card} />
          </motion.div>
        ))}
    </motion.div>
  );
};

export default MainPage;
