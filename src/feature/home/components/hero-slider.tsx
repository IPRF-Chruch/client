"use client";
import { HeroImages } from "@/shared/data/static/HeroImages";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export default function HeroSlider() {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        origin: "center",
        perView: 1,
        spacing: 0,
      },
      loop: true,
      vertical: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="keen-slider h-[300px] lg:h-[500px]" ref={ref}>
      {HeroImages.map((image, index) => (
        <div key={index} className="keen-slider__slide">
          <Image src={image} alt="image" className="w-full object-cover" fill />
        </div>
      ))}
    </div>
  );
}
