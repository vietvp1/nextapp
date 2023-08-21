import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const date = new Date();
  return NextResponse.json(
    { okeee: date },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=30",
        "CDN-Cache-Control": "public, s-maxage=30",
        "Vercel-CDN-Cache-Control": "public, s-maxage=30",
      },
    }
  );
}
