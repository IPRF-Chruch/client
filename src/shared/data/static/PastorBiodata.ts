import image from "@/shared/assets/images/pastor/pastor1.png";
import type { StaticImageData } from "next/image";

interface IPastorBiodata {
  name: string;
  desc: string;
  image: StaticImageData;
}

export const PastorBiodata: IPastorBiodata[] = [
  {
    name: "Leo van Beurden, OSC",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus laboriosam tempore dolore. Iusto nulla fugiat cumque, dignissimos voluptates dolorem nesciunt?",
    image: image,
  },
  {
    name: "Leo van Beurden, OSC",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus laboriosam tempore dolore. Iusto nulla fugiat cumque, dignissimos voluptates dolorem nesciunt?",
    image: image,
  },
  {
    name: "Leo van Beurden, OSC",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus laboriosam tempore dolore. Iusto nulla fugiat cumque, dignissimos voluptates dolorem nesciunt?",
    image: image,
  },
];
