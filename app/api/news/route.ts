import { NextResponse } from "next/server";

export const revalidate = 300; // تحديث كل 5 دقائق

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image?: string;
  source: string;
}

const RSS_SOURCES = [
  {
    url: "https://www.alarabiya.net/tools/rss/economy.xml",
    source: "العربية",
  },
  {
    url: "https://arabic.rt.com/rss/business/",
    source: "RT عربي",
  },
];

function decodeEntities(str: string): string {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function extractTag(xml: string, tag: string): string {
  const cdataMatch = new RegExp(`<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*<\\/${tag}>`, "i").exec(xml);
  if (cdataMatch) return decodeEntities(cdataMatch[1].trim());
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(xml);
  return plain ? decodeEntities(plain[1].replace(/<[^>]+>/g, "").trim()) : "";
}

function extractImage(itemXml: string): string | undefined {
  // محاولة media:content
  const media = /media:content[^>]+url=["']([^"']+)["']/i.exec(itemXml);
  if (media) return media[1];
  // محاولة enclosure
  const enclosure = /enclosure[^>]+url=["']([^"']+)["']/i.exec(itemXml);
  if (enclosure) return enclosure[1];
  // محاولة img داخل description
  const img = /<img[^>]+src=["']([^"']+)["']/i.exec(itemXml);
  if (img) return img[1];
  return undefined;
}

function parseRSS(xml: string, source: string): NewsItem[] {
  const items: NewsItem[] = [];
  const itemMatches = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? [];

  for (const item of itemMatches.slice(0, 6)) {
    const title = extractTag(item, "title");
    const link = extractTag(item, "link") || extractTag(item, "guid");
    const pubDate = extractTag(item, "pubDate");
    const description = extractTag(item, "description").slice(0, 200);
    const image = extractImage(item);

    if (title && link) {
      items.push({ title, link, pubDate, description, image, source });
    }
  }
  return items;
}

export async function GET() {
  const allNews: NewsItem[] = [];

  for (const { url, source } of RSS_SOURCES) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 300 },
        headers: { "User-Agent": "Mozilla/5.0 (compatible; ForexNow/1.0)" },
        signal: AbortSignal.timeout(6000),
      });
      if (!res.ok) continue;
      const xml = await res.text();
      const items = parseRSS(xml, source);
      allNews.push(...items);
    } catch {
      // نتجاوز المصدر الفاشل بصمت
    }
  }

  if (allNews.length === 0) {
    return NextResponse.json({ ok: false, items: [] });
  }

  return NextResponse.json({ ok: true, items: allNews.slice(0, 12) });
}
