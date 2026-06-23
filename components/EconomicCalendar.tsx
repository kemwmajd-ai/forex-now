"use client";

import { useEffect, useRef } from "react";

/**
 * التقويم الاقتصادي (TradingView Economic Calendar).
 * يعرض أهم الأحداث والبيانات الاقتصادية المؤثرة في السوق المالي العالمي.
 */
export default function EconomicCalendar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 550,
      colorTheme: "light",
      isTransparent: false,
      locale: "ar_AE",
      importanceFilter: "0,1",
      countryFilter:
        "us,eu,gb,jp,de,cn,ca,au,ch,fr,it,tr,sa,ae",
    });

    container.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget" />
      </div>
    </div>
  );
}
