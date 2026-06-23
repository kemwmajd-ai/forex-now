"use client";

import { useEffect, useRef } from "react";

/**
 * شريط حركة المؤشرات العالمية (TradingView Ticker Tape).
 * يعرض مؤشرات وأسواق عالمية في شريط متحرك أعلى الصفحة.
 */
export default function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "ناسداك 100" },
        { proName: "FOREXCOM:DJI", title: "داو جونز" },
        { proName: "INDEX:DEU40", title: "DAX داكس" },
        { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
        { proName: "FX_IDC:GBPUSD", title: "GBP/USD" },
        { proName: "FX_IDC:USDJPY", title: "USD/JPY" },
        { proName: "TVC:GOLD", title: "الذهب" },
        { proName: "TVC:USOIL", title: "النفط" },
        { proName: "BINANCE:BTCUSDT", title: "بيتكوين" },
        { proName: "BINANCE:ETHUSDT", title: "إيثيريوم" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "ar_AE",
    });

    container.appendChild(script);
  }, []);

  return (
    <div className="border-b border-brand-navy/20 bg-brand-navy">
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget" />
      </div>
    </div>
  );
}
