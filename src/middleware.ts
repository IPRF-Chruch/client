import { NextRequest } from "next/server";
import { updateSession } from "./shared/utils/middlewareConfig";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: "/dashboard/:path*",
};
