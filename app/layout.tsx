import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fxnow.pro"),
  title: "فوركس الآن | Forex Now — وساطة مالية",
  description:
    "فوركس الآن | Forex Now — شركة وساطة مالية. افتح حساب تداول، وتابع حركة المؤشرات العالمية وأهم الأخبار الاقتصادية في السوق المالي العالمي.",
  keywords: [
    "فوركس",
    "Forex Now",
    "فوركس الآن",
    "تداول",
    "وساطة مالية",
    "فتح حساب تداول",
    "المؤشرات العالمية",
    "أخبار اقتصادية",
  ],
  openGraph: {
    title: "فوركس الآن | Forex Now",
    description: "شركة وساطة مالية — افتح حساب تداول الآن.",
    type: "website",
    url: "https://fxnow.pro",
    siteName: "فوركس الآن | Forex Now",
    locale: "ar_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#252866",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
