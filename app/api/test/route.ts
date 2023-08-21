import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const date = new Date();
  return NextResponse.json({ okeee: date });
}
