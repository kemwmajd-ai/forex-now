import { ImageResponse } from "next/og";

export const alt = "فوركس الآن | Forex Now";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #252866 0%, #1b1d4d 100%)",
        }}
      >
        {/* شعار FN */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            borderRadius: 40,
            background: "#cf750a",
            color: "white",
            fontSize: 104,
            fontWeight: 800,
            marginBottom: 48,
          }}
        >
          FN
        </div>

        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          Forex Now
        </div>

        <div
          style={{
            display: "flex",
            color: "#cf750a",
            fontSize: 38,
            fontWeight: 700,
            marginTop: 16,
            letterSpacing: 4,
          }}
        >
          ONLINE TRADING BROKERAGE
        </div>

        <div
          style={{
            display: "flex",
            color: "#c7cadb",
            fontSize: 30,
            marginTop: 28,
          }}
        >
          Global Markets · Forex · Indices · Crypto
        </div>
      </div>
    ),
    { ...size }
  );
}
