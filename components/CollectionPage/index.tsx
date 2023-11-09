"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const CollectionPage = (props: any) => {
  useEffect(() => {
    (async function oke() {
      try {
        const a = await fetch("/api/geolocation");
        const b = await a.json();
        console.log("b :>> ", b);
      } catch (error) {
        console.log('error :>> ', error);
      }
    })();
  }, []);

  return (
    <div>
      <Link href={"/test"}>test</Link>
      <Link href={"/collections/makeup-foundation"}>foundation</Link>

      <div>CollectionPage</div>
    </div>
  );
};

export default CollectionPage;
