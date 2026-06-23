interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image?: string;
  source: string;
}

const RSS_SOURCES = [
  { url: "https://www.alarabiya.net/tools/rss/economy.xml", source: "العربية" },
  { url: "https://arabic.rt.com/rss/business/", source: "RT عربي" },
];

function decodeEntities(str: string): string {
  let result = str;
  for (let i = 0; i < 2; i++) {
    result = result
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&apos;/g, "'")
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
  }
  return result;
}

function extractTag(xml: string, tag: string): string {
  const cdataMatch = new RegExp(
    `<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*<\\/${tag}>`,
    "i"
  ).exec(xml);
  if (cdataMatch) return decodeEntities(cdataMatch[1].trim());
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(xml);
  return plain ? decodeEntities(plain[1].replace(/<[^>]+>/g, "").trim()) : "";
}

function extractImage(itemXml: string): string | undefined {
  const media = /media:content[^>]+url=["']([^"']+)["']/i.exec(itemXml);
  if (media) return media[1];
  const enclosure = /enclosure[^>]+url=["']([^"']+)["']/i.exec(itemXml);
  if (enclosure) return enclosure[1];
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
    if (title && link) items.push({ title, link, pubDate, description, image, source });
  }
  return items;
}

async function fetchAllNews(): Promise<NewsItem[]> {
  const all: NewsItem[] = [];
  for (const { url, source } of RSS_SOURCES) {
    try {
      const res = await fetch(url, {
        cache: "no-store",
        headers: { "User-Agent": "Mozilla/5.0 (compatible; ForexNow/1.0)" },
        signal: AbortSignal.timeout(6000),
      });
      if (!res.ok) continue;
      const xml = await res.text();
      all.push(...parseRSS(xml, source));
    } catch {
      // تجاوز المصدر الفاشل
    }
  }
  return all.slice(0, 12);
}

function timeAgo(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    const diff = Date.now() - date.getTime();
    const h = Math.floor(diff / 3600000);
    const d = Math.floor(diff / 86400000);
    if (h < 1) return "منذ لحظات";
    if (h < 24) return `منذ ${h} ساعة`;
    if (d < 7) return `منذ ${d} يوم`;
    return date.toLocaleDateString("ar-SY");
  } catch {
    return "";
  }
}

export default async function ArabicNews() {
  const items = await fetchAllNews();

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
        <p className="text-slate-500">
          تعذّر تحميل الأخبار حالياً. يرجى المحاولة لاحقاً.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-md"
        >
          {item.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt=""
              className="h-44 w-full object-cover"
              loading="lazy"
            />
          )}
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-brand-navy/10 px-2 py-0.5 text-xs font-semibold text-brand-navy">
                {item.source}
              </span>
              <span className="text-xs text-slate-400">{timeAgo(item.pubDate)}</span>
            </div>
            <h3 className="flex-1 text-sm font-bold leading-relaxed text-slate-800 group-hover:text-brand-orange">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">
                {item.description}
              </p>
            )}
            <span className="mt-3 text-xs font-semibold text-brand-orange">
              اقرأ المزيد ←
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
