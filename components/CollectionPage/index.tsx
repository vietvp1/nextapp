"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const CollectionPage = (props: any) => {
  useEffect(() => {
    console.log("props :>> ", props);
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
