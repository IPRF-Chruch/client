"use client";
import { useState } from "react";

export default function NewsForm() {
  const [data, setData] = useState({
    title: "",
    content: "",
    upload_date: "",
  });
  const [filename, setFilename] = useState<string | null>();
  const [file, setFile] = useState<File | null>();
  const [status, setStatus] = useState<string | null>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file!);

    const imageUpload = await fetch("/api/news/image", {
      method: "POST",
      body: formData,
    });

    const { publicUrl } = await imageUpload.json();
    const res = await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        image_url: publicUrl,
      }),
    });

    const { status } = await res.json();
    if (status === "success") {
      setStatus(status);
    }
    window.location.reload();
  };

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">News Form</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="title">Judul</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="content">Konten</label>
          <textarea
            cols={30}
            rows={5}
            placeholder="Content"
            name="content"
            value={data.content}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded"
            required
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date">Tanggal</label>
          <input
            type="text"
            name="upload_date"
            value={data.upload_date}
            onChange={handleChange}
            placeholder="Date (ex. November 1, 2023)"
            className="border border-gray-400 p-2 rounded"
            required
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
                setFile(e.target.files[0]);
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

        {status && <p className="text-green-600">{status}</p>}

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
