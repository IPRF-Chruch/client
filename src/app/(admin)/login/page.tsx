"use client";

import { supabaseClient } from "@/shared/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [datas, setDatas] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas({
      ...datas,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const supabase = supabaseClient();
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: datas.email,
      password: datas.password,
    });

    if (error) {
      console.error("Login Error: ", error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login Area</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="w-64 border border-gray-300 px-4 py-2 rounded-full"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="w-64 border border-gray-300 px-4 py-2 rounded-full"
        />
        <button
          type="submit"
          className="w-64 bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
