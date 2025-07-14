import image from "@/shared/assets/images/pastor/Pastor-Photo.png";
import type { StaticImageData } from "next/image";

interface IPastorBiodata {
  name: string;
  desc: string;
  image: StaticImageData;
}

export const PastorBiodata: IPastorBiodata[] = [
  {
    name: "Pastors Reinhard and Joyce Lakawa",
    desc: "Lead Pastors of IPRF Minnesota Church",
    image: image,
  },
];
