"use client";
import Script from "next/script";
import React, { useEffect, useState } from "react";

export interface IGiftCardPage {
  product?: any;
}

const GiftCardPage: React.FC<IGiftCardPage> = ({ product }) => {
  const [state, setState] = useState<any>();
  const { id } = product;
  useEffect(() => {
    window.GiftCardHero = {
      headless: {
        moneyFormat: "${{ amount }}",
        productId: 7682947481761,
        shop: "oz-hair-beauty-dev-v2.myshopify.com",
        addToCart: function (data: any) {
          // add to cart functionality
        },
        locale: "en",
      },
    };

    window.addEventListener("gift:hero:headless.initialized", function () {
      console.log("GiftHeroAPI", window.GiftHeroAPI);
      setState(window.GiftHeroAPI);
    });
  }, []);

  return (
    <>
      <div className="page-width !mb-12"> Custom Gift Card Page</div>
      <Script
        src="https://gifthero.syncu.be/js/storefront.min.js?version=30052024"
        defer
      />
    </>
  );
};

export default GiftCardPage;
