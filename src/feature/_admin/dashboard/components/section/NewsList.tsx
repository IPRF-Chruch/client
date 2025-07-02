"use client";

import { useEffect, useState } from "react";
import NewsCard from "../card/NewsCard";
import { INewsType } from "@/shared/lib/types/NewsType";

export default function NewsList() {
  const [data, setData] = useState<INewsType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/news");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Daftar Berita</h1>
      <div className="space-y-2">
        {data.length > 0 ? (
          data.map((item: INewsType, index: number) => (
            <NewsCard key={index} {...item} />
          ))
        ) : (
          <p className="text-gray-500">Tidak Ada Berita</p>
        )}
      </div>
    </div>
  );
}
