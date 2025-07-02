import { supabaseServer } from "@/shared/lib/supabase/server";

export async function GET() {
  const supabase = await supabaseServer();
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content, upload_date, image_url, pdf_url } = body;

  const supabase = await supabaseServer();
  const { error } = await supabase
    .from("news")
    .insert({ title, content, upload_date, image_url, pdf_url });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response(JSON.stringify("success"), { status: 200 });
}
