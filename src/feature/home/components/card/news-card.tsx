import Image from "next/image";
import image3 from "@/shared/assets/images/home/image3.jpg";

export default function NewsCard() {
  return (
    <div className="w-98 h-[340px] rounded grid grid-rows-5 overflow-hidden cursor-pointer">
      <div className="row-span-3 relative overflow-hidden">
        <Image
          src={image3}
          alt="news"
          fill
          className="object-cover hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-4">
        <h1 className="text-sm font-thin">November 18, 2022</h1>
        <p className="font-semibold text-justify line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, excepturi!
        </p>
      </div>
    </div>
  );
}
