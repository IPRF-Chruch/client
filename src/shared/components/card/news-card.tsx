"use client";
import Image from "next/image";
import { INewsType } from "@/shared/lib/types/NewsType";
import { useRouter } from "next/navigation";

export default function NewsCard(props: INewsType) {
  const router = useRouter();
  return (
    <div
      className="md:w-98 h-[340px] rounded grid grid-rows-5 overflow-hidden cursor-pointer"
      onClick={() => router.push(`/news/${props.id}`)}
    >
      <div className="row-span-3 relative overflow-hidden">
        <Image
          src={props.image_url}
          alt="news"
          fill
          className="object-cover hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-4">
        <h1 className="text-sm font-thin">{props.upload_date}</h1>
        <p className="font-semibold text-justify line-clamp-2">{props.title}</p>
      </div>
    </div>
  );
}
