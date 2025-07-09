"use client";
import { useEffect, useState } from "react";
import BlockingChild from "../BlockingChild";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    console.log("1111");
    console.time("test1");
    function blockMainThread(ms: number) {
      const end = Date.now() + ms;
      while (Date.now() < end) {}
    }
    blockMainThread(1000); // parent blocking 1000ms
    console.timeEnd("test1");
    setLoaded(true);
  }, []);

  return loaded ? (
    <div>
      <p>Home rendered</p>
      <BlockingChild />
    </div>
  ) : null;
}
