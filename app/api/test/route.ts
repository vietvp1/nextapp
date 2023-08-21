import { NextResponse } from "next/server";

export const runtime = "edge";

const a = () => {
  return new Promise((rel) => {
    setTimeout(() => {
      rel(new Date());
    }, 8000);
  });
};

export async function GET(request: Request) {
  const date = await a();
  return NextResponse.json({ okeee: date });
}
