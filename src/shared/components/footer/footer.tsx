import { ContactList } from "@/shared/data/static/ContactList";
import { NavigationSocial } from "@/shared/data/static/NavigationList";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-8 lg:px-24 py-10 grid md:grid-cols-2 bg-black text-white">
      <div className="flex flex-col justify-between">
        <div className="space-y-4 md:space-y-2">
          <h1 className="text-2xl font-bold">
            INDONESIAN PENTECOSTAL <br />
            REVIVAL FELLOWSHIP MINNESOTA CHURCH
          </h1>
          <p>
            7601 Girard Ave S, Minneapolis, MN 55423 <br />
            United States
          </p>
        </div>
        <div className="space-y-4 py-4 md:pt-0">
          {ContactList.map((item, index) => (
            <div key={index} className="space-x-2 flex items-center">
              <Icon icon={item.icon} className="w-6 h-6" />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-full space-y-4 hidden md:block">
          <div className="w-full h-0.5 bg-white"></div>
          <div className="flex items-center justify-between">
            <p className="text-sm">Copyright &copy; 2025</p>
            <div className="flex gap-2">
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
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <iframe
          className="w-full lg:w-[520px] h-[300px]"
          width="520"
          height="300"
          scrolling="no"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.874658903517!2d-93.2964707!3d44.864846400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6263f7d781739%3A0x9db70d186991438d!2sBethel&#39;s%20Rock%20Church%20-%20Richfield!5e0!3m2!1sen!2sid!4v1751372485769!5m2!1sen!2sid; output=embed"
        ></iframe>
      </div>
      <div className="w-full space-y-4 pt-12 md:hidden">
        <div className="w-full h-0.5 bg-white"></div>
        <div className="flex items-center justify-between">
          <p className="text-md">Copyright &copy; 2025</p>
          <div className="flex gap-2">
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
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}