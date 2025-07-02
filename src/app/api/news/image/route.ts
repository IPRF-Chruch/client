import { supabaseServer } from "@/shared/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const supabase = await supabaseServer();

  if (!file) {
    return NextResponse.json("No file uploaded", { status: 400 });
  }

  const filename = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from("news")
    .upload(filename, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    return NextResponse.json(error.message, { status: 500 });
  }

  const publicUrl = supabase.storage.from("news").getPublicUrl(data.path);
  return NextResponse.json(
    { publicUrl: publicUrl.data.publicUrl },
    { status: 200 }
  );
}
