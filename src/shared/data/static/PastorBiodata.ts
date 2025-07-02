import image from "@/shared/assets/images/pastor/Pastor-Photo.avif";
import type { StaticImageData } from "next/image";

interface IPastorBiodata {
  name: string;
  desc: string;
  image: StaticImageData;
}

export const PastorBiodata: IPastorBiodata[] = [
  {
    name: "Pastor Reinhard dan Joyce Lakawa",
    desc: "gembala sidang gereja IPRF Minnesota",
    image: image,
  },
];
