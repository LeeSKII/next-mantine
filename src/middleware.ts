import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //console.log(request);
  if (request.nextUrl.pathname === "/api/login") {
    return NextResponse.json({ message: "You are logged in!" });
  }
  // else{
  //   return new Response('Unauthorized', { status: 401 });
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
