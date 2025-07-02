import { supabaseServer } from "@/shared/lib/supabase/server";

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
