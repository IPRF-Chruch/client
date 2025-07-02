"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

interface INewsCardProps {
  id: number;
  title: string;
  content: string;
  upload_date: string;
  image_url: string;
}

export default function NewsCard(props: INewsCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    const res = await fetch(`/api/news/${props.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setIsLoading(false)
      window.location.reload();
    } else {
      setIsLoading(false)
    }
  };

  return (
    <div className="border p-2 px-4 rounded-lg flex items-center justify-between">
      <div>
        <h3 className="text-sm font-thin">{props.upload_date}</h3>
        <h1 className="font-semibold line-clamp-1">{props.title}</h1>
      </div>

      <div className="flex items-center gap-2">
        {isLoading ? (
          <div>
            <p className="text-sm text-gray-500">Menghapus...</p>
          </div>
        ) : (
          <div
            className="p-2 rounded-full bg-red-500 hover:bg-red-600"
            onClick={handleClick}
          >
            <Icon
              icon="tabler:trash"
              className="w-4 h-4 cursor-pointer text-white"
            />
          </div>
        )}
      </div>
    </div>
  );
}
