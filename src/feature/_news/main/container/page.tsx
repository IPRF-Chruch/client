"use client";

import NewsCard from "@/shared/components/card/news-card";
import { INewsType } from "@/shared/lib/types/NewsType";
import { useEffect, useState } from "react";

export default function NewsContainer() {
  const [data, setData] = useState<INewsType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/news", {
        method: "GET",
      });
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <section className="px-8 lg:px-24 py-5">
      <div className="text-xl font-thin space-y-2">
        <p>NEWS</p>
        <h1 className="text-4xl font-bold pb-10">{'Church Newsletter'.toUpperCase()}</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-14">
        {data?.length > 0 ? (
          data.map((item: INewsType, index: number) => (
            <NewsCard key={index} {...item} />
          ))
        ) : (
          <p className="text-gray-500">Tidak Ada Berita</p>
        )}
      </div>
    </section>
  );
}
