import Link from "next/link";
import TickerTape from "@/components/TickerTape";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ArabicNews from "@/components/ArabicNews";
import EconomicCalendar from "@/components/EconomicCalendar";

export default function HomePage() {
  return (
    <>
      {/* شريط حركة المؤشرات العالمية */}
      <TickerTape />

      {/* القسم الترحيبي */}
      <Hero />

      {/* قسم المؤشرات (إشارة للمرساة في الشريط العلوي) */}
      <section id="markets" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="section-title">المؤشرات العالمية مباشرة</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              تابع حركة أهم المؤشرات والأسواق العالمية لحظة بلحظة عبر الشريط أعلى
              الصفحة ومن خلال التقويم الاقتصادي.
            </p>
          </div>
          <EconomicCalendar />
        </div>
      </section>

      {/* قسم الأخبار الاقتصادية */}
      <section id="news" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="section-title">أهم الأخبار الاقتصادية</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              آخر الأخبار والتحليلات في السوق المالي العالمي.
            </p>
          </div>
          <ArabicNews />
        </div>
      </section>

      {/* المزايا */}
      <Features />

      {/* دعوة لفتح حساب */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            جاهز لبدء التداول؟
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-200">
            افتح حسابك لدى فوركس الآن خلال دقائق، وسنرسل لك بيانات حسابك في أقرب
            وقت.
          </p>
          <div className="mt-8">
            <Link href="/open-account" className="btn-primary text-lg">
              افتح حساب تداول الآن
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
