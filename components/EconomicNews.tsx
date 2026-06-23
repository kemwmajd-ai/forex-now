"use client";

import { useEffect, useRef } from "react";

/**
 * الأخبار الاقتصادية المهمة (TradingView Timeline / Top Stories).
 * يعرض أحدث الأخبار في السوق المالي العالمي.
 */
export default function EconomicNews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "regular",
      width: "100%",
      height: 550,
      colorTheme: "light",
      locale: "ar_AE",
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
