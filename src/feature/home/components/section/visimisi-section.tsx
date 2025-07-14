"use client";

import { useEffect } from "react";
import sal from "sal.js";

export default function VisiMisiSection() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="w-full grid lg:grid-cols-5 gap-14 px-8 lg:px-24 py-5">
      <h1
        className="text-4xl font-bold"
        data-sal="slide-up"
        data-sal-duration="1000"
      >
        Church Vision and Mission
      </h1>
      <div
        className="space-y-5 lg:col-span-2"
        data-sal="slide-up"
        data-sal-duration="1200"
      >
        <h1 className="text-4xl font-semibold">Vision</h1>
        <div className="border-b border-gray-700 w-full"></div>
        <p className="text-justify">
          To become a healthy, mission-driven church that brings blessings to
          the nations.
        </p>
      </div>
      <div
        className="space-y-5 lg:col-span-2"
        data-sal="slide-up"
        data-sal-duration="1400"
      >
        <h1 className="text-4xl font-semibold">Mission</h1>
        <div className="border-b border-gray-700 w-full"></div>
        <p className="text-justify">
          Equipping the congregation to be rooted, grow, and bear fruit, thereby
          impacting the body of Christ, the city, and the nations.
          <br />
          Church Values:
          <br />
          1. Submitting to authority
          <br />
          2. Serving with a spirit of excellence
          <br />
          3. Strong in the teaching of God&apos;s Word
          <br />
          4. Enthusiastic, inspirational, and creative
          <br />
          5. Prayer, fasting, and worship as the church&apos;s strength.
          <br />
        </p>
      </div>
    </div>
  );
}
