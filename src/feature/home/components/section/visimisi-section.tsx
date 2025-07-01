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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quas natus perspiciatis? Asperiores soluta iusto sed, quidem dolores
          sapiente, dolor sequi veniam hic fugiat, atque vero velit blanditiis
          cupiditate expedita ullam esse consequuntur id perferendis. Quaerat,
          inventore maxime corporis culpa ipsam temporibus doloribus a
          perspiciatis nesciunt, repudiandae nemo ipsa libero adipisci laborum
          ullam! Ipsam, cupiditate modi ducimus architecto reiciendis et
          doloremque, magni rem assumenda neque cumque cum earum vero officiis
          tenetur corporis facere! Officia minima quis mollitia, dolor, aut,
          laborum recusandae non nam in eaque totam ab reiciendis. Laboriosam
          saepe corrupti aliquid, aut quaerat voluptatibus a harum cumque eaque
          ea!
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quas natus perspiciatis? Asperiores soluta iusto sed, quidem dolores
          sapiente, dolor sequi veniam hic fugiat, atque vero velit blanditiis
          cupiditate expedita ullam esse consequuntur id perferendis. Quaerat,
          inventore maxime corporis culpa ipsam temporibus doloribus a
          perspiciatis nesciunt, repudiandae nemo ipsa libero adipisci laborum
          ullam! Ipsam, cupiditate modi ducimus architecto reiciendis et
          doloremque, magni rem assumenda neque cumque cum earum vero officiis
          tenetur corporis facere! Officia minima quis mollitia, dolor, aut,
          laborum recusandae non nam in eaque totam ab reiciendis. Laboriosam
          saepe corrupti aliquid, aut quaerat voluptatibus a harum cumque eaque
          ea!
        </p>
      </div>
    </div>
  );
}
