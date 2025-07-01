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
    <div className="px-24 py-14 space-y-10">
      <h1 className="text-4xl font-bold text-center">Nilai Nilai Gereja</h1>
      <div className="grid grid-cols-4 pt-10">
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
