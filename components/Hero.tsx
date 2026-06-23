import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-bl from-brand-navy via-brand-navy-light to-brand-navy text-white"
    >
      {/* لمسة لونية برتقالية */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-orange/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 rounded-full bg-brand-orange/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="animate-fade-in-up">
          <span className="mb-4 inline-block rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1 text-sm font-semibold text-brand-orange">
            وساطة مالية موثوقة
          </span>
          <h1 className="text-3xl font-black leading-[1.4] sm:text-4xl sm:leading-[1.4] md:text-5xl md:leading-[1.35]">
            <span className="block">تداول الأسواق العالمية</span>
            <span className="mt-3 block">
              مع <span className="text-brand-orange">فوركس الآن</span>
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            افتح حساب تداول في دقائق، وتابع حركة المؤشرات العالمية وأهم الأخبار
            الاقتصادية في السوق المالي العالمي — كل ذلك من مكان واحد.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/open-account" className="btn-primary text-lg">
              افتح حساب تداول الآن
            </Link>
            <Link
              href="/#markets"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              استعرض الأسواق
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
            <div>
              <dt className="text-2xl font-black text-brand-orange">+24/5</dt>
              <dd className="text-xs text-slate-300">تداول متواصل</dd>
            </div>
            <div>
              <dt className="text-2xl font-black text-brand-orange">سريع</dt>
              <dd className="text-xs text-slate-300">فتح حساب فوري</dd>
            </div>
            <div>
              <dt className="text-2xl font-black text-brand-orange">آمن</dt>
              <dd className="text-xs text-slate-300">بيانات محمية</dd>
            </div>
          </dl>
        </div>

        <div className="relative hidden md:block">
          <div className="mx-auto flex aspect-square max-w-sm items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-orange text-4xl font-black text-white shadow-2xl">
                FN
              </div>
              <p className="text-2xl font-extrabold">فوركس الآن</p>
              <p className="mt-1 text-sm tracking-widest text-brand-orange">
                FOREX NOW
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
