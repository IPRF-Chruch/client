"use client";
import { useEffect } from "react";
import ValueCard from "../card/value-card";
import { ValueList } from "@/shared/data/static/ValueList";
import sal from "sal.js";

export default function ValuesSection() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="px-8 lg:px-24 py-14 space-y-10">
      <h1 className="text-4xl font-bold lg:text-center">Nilai Nilai Gereja</h1>
      <div className="grid lg:grid-cols-4 pt-10 gap-14 lg:gap-0">
        {ValueList.map((item, index) => (
          <div
            className="flex items-center justify-center"
            key={index}
            data-sal="slide-up"
            data-sal-duration={item.duration}
          >
            <ValueCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
