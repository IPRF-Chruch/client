"use client";

import NewsContainer from "@/feature/_news/detail/container/page";
import { useParams } from "next/navigation";

export default function DetailNewsPage() {
  const params = useParams();

  return <NewsContainer id={params.id?.toString() ?? ""} />;
}
