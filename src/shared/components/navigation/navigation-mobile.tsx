import {
  NavigationList,
  NavigationSocial,
} from "@/shared/data/static/NavigationList";
import { motion } from "motion/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavigationBarMobile() {
  const [isShow, setIsShow] = useState<true | false>(false);

  return (
    <div className="w-full flex lg:hidden items-center justify-between">
      <section>
        <Image
          src="/assets/images/main-logo.jpeg"
          alt="logo"
          width={64}
          height={64}
        />
      </section>
      <section>
        <Icon
          icon="pajamas:hamburger"
          width="32"
          height="32"
          onClick={() => setIsShow(!isShow)}
        />
      </section>
      <motion.section
        initial={{ x: "100%" }}
        animate={{ x: isShow ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-0 right-0 fixed bg-white w-full h-[200vh] px-10 py-20 flex flex-col gap-6"
      >
        {NavigationList.map((item, index) => (
          <Link href={item.href} key={index} className="text-4xl">
            {item.title.toUpperCase()}
          </Link>
        ))}
        <div className="flex gap-5 pt-5">
          {NavigationSocial.map((item, index) => (
            <div
              key={index}
              className="p-2 bg-black cursor-pointer hover:bg-red-600 transition duration-500"
            >
              <Icon
                icon={item.icon}
                width={26}
                height={26}
                style={{ color: "white" }}
              />
            </div>
          ))}
        </div>
        <Icon
          icon="material-symbols:close"
          width="32"
          height="32"
          className="absolute top-10 right-10"
          onClick={() => setIsShow(!isShow)}
        />
      </motion.section>
    </div>
  );
}
