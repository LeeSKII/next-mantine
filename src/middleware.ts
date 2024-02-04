import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;
  if (user) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/server-login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/:path*", "/admin/:path*"],
  //matcher: ["/((?!server-login|_next/static|_next/image|.*\\.png$).*)"],
};
