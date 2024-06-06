import { NextResponse } from "next/server";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export async function GET(req: Request) {
  try {
    const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");

    // Access the window object
    const window = dom.window;
    // console.log("window :>> ", window.document.getElementById);
    return NextResponse.json({ window: window.document });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: "error" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
