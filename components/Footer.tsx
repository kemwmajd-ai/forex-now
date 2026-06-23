import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-brand-navy text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-4 rounded-xl bg-white/95 p-3 w-fit">
            <Logo />
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            فوركس الآن | Forex Now — شركة وساطة مالية تتيح لك فتح حساب تداول
            ومتابعة الأسواق العالمية بسهولة واحترافية.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#markets" className="transition hover:text-brand-orange">
                المؤشرات العالمية
              </Link>
            </li>
            <li>
              <Link href="/#news" className="transition hover:text-brand-orange">
                الأخبار الاقتصادية
              </Link>
            </li>
            <li>
              <Link
                href="/open-account"
                className="transition hover:text-brand-orange"
              >
                فتح حساب تداول
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-brand-orange">
                الشروط والأحكام
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">تواصل معنا</h3>
          <ul className="space-y-2 text-sm">
            <li>
              البريد الإلكتروني:{" "}
              <a
                href="mailto:Liirat.official.tr@gmail.com"
                className="text-brand-orange"
              >
                Liirat.official.tr@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-slate-400 sm:px-6">
          <p className="mb-2">
            تحذير المخاطر: تداول العملات والمشتقات المالية ينطوي على درجة عالية
            من المخاطرة وقد لا يناسب جميع المستثمرين. قد تخسر كامل رأس مالك.
          </p>
          <p>
            © {year} فوركس الآن | Forex Now. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
