import { NextResponse } from "next/server";

const a = () => {
  // return new Promise((rel) => {
  //   setTimeout(() => {
  //     rel(new Date());
  //   }, 8000);
  // });
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // const date = await a();
  while (!!id) {
    // execute code forever
  }
  return NextResponse.json({ okeee: "oke" });
}
