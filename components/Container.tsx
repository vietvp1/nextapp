"use client";

import { ShopifyProvider, useShopifyCookies } from "@shopify/hydrogen-react";
import { useEffect } from "react";
import ShopifyAnalytics from "./ShopifyAnalytics";

export function Container({ children }: { children: React.ReactNode }) {
  // Bắt buộc: tạo cookie Shopify (_shopify_y, _shopify_s)
  useEffect(() => {
    useShopifyCookies();
  }, []);

  return (
    <ShopifyProvider
      storefrontId="gid://shopify/Shop/65555300560"
      storefrontToken=""
      countryIsoCode="AU"
      languageIsoCode="EN"
      storeDomain="viettvstore.myshopify.com"
      storefrontApiVersion="2025-10"
    >
      {children}
      <ShopifyAnalytics />
    </ShopifyProvider>
  );
}
