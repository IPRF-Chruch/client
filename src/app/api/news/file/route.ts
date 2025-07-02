import { supabaseServer } from "@/shared/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const imageFile = formData.get("imageFile") as File;
  const pdfFile = formData.get("pdfFile") as File;

  const supabase = await supabaseServer();

  if (!imageFile || !pdfFile) {
    return NextResponse.json("Image and PDF file are required", {
      status: 400,
    });
  }

  const imageName = `${Date.now()}-${imageFile.name}`;
  const pdfName = `${Date.now()}-${pdfFile.name}`;

  const imageUpload = await supabase.storage
    .from("news")
    .upload(imageName, imageFile, {
      cacheControl: "3600",
      upsert: false,
    });

  const pdfUpload = await supabase.storage
    .from("news")
    .upload(pdfName, pdfFile, {
      cacheControl: "3600",
      upsert: false,
    });

  if (pdfUpload.error || imageUpload.error) {
    return NextResponse.json(
      {
        pdfError: pdfUpload.error?.message,
        imageError: imageUpload.error?.message,
      },
      {
        status: 500,
      }
    );
  }

  const imageUrl = supabase.storage
    .from("news")
    .getPublicUrl(imageUpload.data.path);
  const pdfUrl = supabase.storage
    .from("news")
    .getPublicUrl(pdfUpload.data.path);

  console.log("URL", imageUrl, pdfUrl);

  return NextResponse.json(
    {
      imageUrl: imageUrl.data.publicUrl,
      pdfUrl: pdfUrl.data.publicUrl,
    },
    { status: 200 }
  );
}
