"use client";

import { useState } from "react";

export default function NewsForm() {
  const [filename, setFilename] = useState<string | null>();

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">News Form</h1>

      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="title">Judul</label>
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-400 p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="content">Konten</label>
          <textarea
            cols={30}
            rows={5}
            placeholder="Content"
            className="border border-gray-400 p-2 rounded"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date">Tanggal</label>
          <input
            type="text"
            placeholder="Date (ex. November 1, 2023)"
            className="border border-gray-400 p-2 rounded"
          />
        </div>

        <div className="flex space-x-3">
          <input
            type="file"
            id="image"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setFilename(e.target.files[0].name);
              }
            }}
          />

          <label
            htmlFor="image"
            className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload Gambar
          </label>

          {filename && <p className="mt-2">{filename}</p>}
        </div>

        <button
          type="submit"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
