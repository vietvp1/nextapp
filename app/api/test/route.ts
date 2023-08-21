import { NextResponse } from "next/server";

export async function GET() {
  const date = new Date();
  return NextResponse.json({ okeee: date });
}
