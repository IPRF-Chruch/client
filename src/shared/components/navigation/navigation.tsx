"use client";

import useScroll from "@/shared/hooks/useScroll";
import NavigationBarDesktop from "./navigation-desktop";
import { motion } from "motion/react";
import NavigationBarMobile from "./navigation-mobile";

export default function NavigationBar() {
  const isShow = useScroll();

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isShow ? 1 : 0, y: isShow ? 0 : -64 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full bg-white h-20 lg:h-38 px-6 lg:px-12 py-4 flex items-center justify-between border-b border-gray-300 fixed z-50 top-0 left-0"
    >
      <NavigationBarDesktop />
      <NavigationBarMobile />
    </motion.nav>
  );
}
