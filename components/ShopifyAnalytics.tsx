"use client";

import { AnalyticsEventName } from "@shopify/hydrogen-react";
import { useEffect } from "react";
import { useShopifyAnalytics } from "./use-shopify-analytics";

export default function ShopifyAnalytics() {
  const { sendPageView, pathname } = useShopifyAnalytics();
  useEffect(() => {
    sendPageView(AnalyticsEventName.PAGE_VIEW);
  }, [pathname, sendPageView]);
  return null;
}
