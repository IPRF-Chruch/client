import { supabaseServer } from "@/shared/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const id = req.url.split("/").pop()!;
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function DELETE(req: Request) {
  const id = req.url.split("/").pop()!;
  const supabase = await supabaseServer();

  const { error } = await supabase.from("news").delete().eq("id", id);

  if (error) {
    return NextResponse.json(error.message, { status: 500 });
  }

  return NextResponse.json("success", { status: 200 });
}
