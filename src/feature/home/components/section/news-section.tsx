"use client";
import { useEffect, useState } from "react";
import { INewsType } from "@/shared/lib/types/NewsType";
import NewsCard from "@/shared/components/card/news-card";

export default function WartaJemaatSection() {
  const [newsList, setNewsList] = useState<INewsType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/news", {
        method: "GET",
      });
      const data = await response.json();
      setNewsList(data);
    };

    fetchData();
  }, []);

  return (
    <div className="px-8 lg:px-24 py-14 flex items-center flex-col">
      <h1 className="text-4xl font-bold text-center pb-10 lg:pb-0">
        Church Newsletter
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-8">
        {newsList ? (
          newsList.map((item: INewsType, index: number) => (
            <NewsCard key={index} {...item} />
          ))
        ) : (
          <p>Tidak Ada Berita</p>
        )}
      </div>
      {newsList.length > 2 && (
        <button className="px-10 py-2 bg-blue-600 text-white rounded hover:scale-110 transition duration-500 cursor-pointer">
          Read More
        </button>
      )}
    </div>
  );
}
