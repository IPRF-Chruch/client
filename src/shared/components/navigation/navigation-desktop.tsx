import {
  NavigationList,
  NavigationSocial,
} from "@/shared/data/static/NavigationList";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function NavigationBarDesktop() {
  return (
    <div className="w-full hidden lg:flex items-center justify-between">
      <section>
        <Image
          src="/assets/images/main-logo.jpeg"
          alt="logo"
          width={100}
          height={100}
        />
      </section>
      <section className="flex gap-8 text-2xl font-semibold">
        {NavigationList.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="hover:text-red-600 transition duration-500"
          >
            {item.title.toUpperCase()}
          </Link>
        ))}
      </section>
      <section className="flex gap-5">
        {NavigationSocial.map((item, index) => (
          <Link
            href={item.href}
            target="_blank"
            key={index}
            className="p-2 bg-black cursor-pointer hover:bg-red-600 transition duration-500"
          >
            <Icon
              icon={item.icon}
              width={26}
              height={26}
              style={{ color: "white" }}
              href={item.href}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}