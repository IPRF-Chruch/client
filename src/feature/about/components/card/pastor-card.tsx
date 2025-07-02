"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface IPastorCard {
  name: string;
  desc: string;
  image: StaticImageData;
}

export default function PastorCard(props: IPastorCard) {
  const parentVariants = {
    initial: {},
    hover: {},
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={parentVariants}
      className="relative w-82 lg:w-98 h-[550px] rounded cursor-pointer overflow-hidden"
    >
      <Image
        src={props.image}
        alt="pastor"
        fill
        className="object-cover hover:scale-110 transition duration-500"
      />

      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-black/60"
      />

      <motion.div
        variants={textVariants}
        className="text-white w-full absolute bottom-10 left-1/2 -translate-x-1/2 px-5"
      >
        <p className="text-xl font-semibold">Pastor</p>
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <div className="h-0.25 w-full bg-white my-3"></div>
        <p>{props.desc}</p>
      </motion.div>
    </motion.div>
  );
}
