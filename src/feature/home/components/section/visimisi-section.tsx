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
        Visi Misi Gereja
      </h1>
      <div
        className="space-y-5 lg:col-span-2"
        data-sal="slide-up"
        data-sal-duration="1200"
      >
        <h1 className="text-4xl font-semibold">Visi</h1>
        <div className="border-b border-gray-700 w-full"></div>
        <p className="text-justify">
          Menjadi Gereja yang sehat dan missioner untuk memberkati bangsa-bangsa
        </p>
      </div>
      <div
        className="space-y-5 lg:col-span-2"
        data-sal="slide-up"
        data-sal-duration="1400"
      >
        <h1 className="text-4xl font-semibold">Misi</h1>
        <div className="border-b border-gray-700 w-full"></div>
        <p className="text-justify">
          Memperlengkapi jemaat untuk berakar, bertumbuh dan berbuah sehingga berdampak pada tubuh Kristus, kota dan bangsa-bangsa.<br/>

            Nilai-nilai gereja:<br/>

            1. Tunduk pada otoritas<br/>

            2. Melayani dengan spirit of excellent<br/>

            3. Kuat dalam pengajaran kebenaran Firman Tuhan<br/>

            4. Antusias, inspiratif dan kreatif<br/>

            5. Doa, puasa dan pujian penyembahan sebagai kekuatan gereja.<br/>
        </p>
      </div>
    </div>
  );
}
