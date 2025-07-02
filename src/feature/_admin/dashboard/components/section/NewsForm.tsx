"use client";
import { supabaseClient } from "@/shared/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewsForm() {
  const [data, setData] = useState({
    title: "",
    content: "",
    upload_date: "",
  });
  const [filename, setFilename] = useState<string | null>();
  const [filenamePdf, setFilenamePdf] = useState<string | null>();
  const [file, setFile] = useState<File | null>();
  const [filePdf, setFilePdf] = useState<File | null>();
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleLogout = async () => {
    const supabase = supabaseClient();

    supabase.auth.signOut();
    router.replace("/login");
  };

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
    setIsLoading(true);

    const formData = new FormData();

    formData.append("imageFile", file!);
    formData.append("pdfFile", filePdf!);

    const imageUpload = await fetch("/api/news/file", {
      method: "POST",
      body: formData,
    });

    const fileUploadRes = await imageUpload.json();
    const res = await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        image_url: fileUploadRes.imageUrl,
        pdf_url: fileUploadRes.pdfUrl,
      }),
    });

    setIsLoading(false);
    if (res.ok) {
      setIsSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      setIsSuccess(false);
    }
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

        <div className="flex space-x-3">
          <input
            type="file"
            id="pdf"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setFilenamePdf(e.target.files[0].name);
                setFilePdf(e.target.files[0]);
              }
            }}
          />

          <label
            htmlFor="pdf"
            className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload PDF
          </label>
          {filenamePdf && <p className="mt-2">{filenamePdf}</p>}
        </div>

        {isSuccess &&
          (isSuccess ? (
            <p className="text-green-500">Data Berhasil Ditambahkan</p>
          ) : (
            <p className="text-red-500">Data Gagal Ditambahkan</p>
          ))}

        {isLoading && <p className="text-blue-500">Loading...</p>}

        <button
          type="submit"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Submit
        </button>
      </form>
      <div className="border-b border-gray-700 w-full"></div>
      <button
        className="w-full py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-500 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
