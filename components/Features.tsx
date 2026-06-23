const features = [
  {
    title: "فتح حساب سريع",
    desc: "املأ نموذجاً بسيطاً وسيتم تجهيز بيانات حسابك في أقرب وقت.",
    icon: (
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    ),
  },
  {
    title: "أسواق عالمية",
    desc: "وصول إلى الفوركس، المؤشرات، المعادن، النفط والعملات الرقمية.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
  },
  {
    title: "بيانات لحظية",
    desc: "تابع حركة المؤشرات والأخبار الاقتصادية مباشرةً على الموقع.",
    icon: (
      <path d="M3 17l6-6 4 4 7-8M21 7v5M21 7h-5" />
    ),
  },
  {
    title: "دعم ومتابعة",
    desc: "فريقنا يتابع طلبك ويزوّدك ببيانات الحساب وكل ما تحتاجه.",
    icon: (
      <>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="section-title">لماذا فوركس الآن؟</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            نوفّر لك تجربة تداول واضحة وآمنة مع كل الأدوات التي تحتاجها لمتابعة
            الأسواق العالمية.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-brand-navy">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
