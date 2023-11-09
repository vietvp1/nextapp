import { NextRequest, NextResponse } from "next/server";

// run only on homepage
// export const config = {
//   matcher: '/',
// }

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo?.country || "US";
  const city = geo?.city || "San Francisco";
  const region = geo?.region || "CA";

  // const clonedRequest = req.clone();
  req.headers.set("x-vercel-ip-city", city);
  req.headers.set("x-vercel-ip-country", country);
  req.headers.set("x-vercel-ip-country-region", region);

  return NextResponse.rewrite(url, { request: req });

  // const response = NextResponse.rewrite(url.toString(), {
  //   request: clonedRequest,
  // });
  // return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
