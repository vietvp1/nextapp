"use client";
import { useEffect } from "react";

export default function BlockingChild() {
  useEffect(() => {
    console.log("2222");
    console.time("block");

    function blockMainThread1(ms: number) {
      const end = Date.now() + ms;
      while (Date.now() < end) {}
    }

    blockMainThread1(1000);
    console.timeEnd("block");

  }, []);

  return <div>Child blocking done</div>;
}