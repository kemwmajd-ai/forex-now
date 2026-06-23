import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الشروط والأحكام — فوركس الآن | Forex Now",
  description:
    "اقرأ الشروط والأحكام الخاصة بفتح حساب تداول لدى فوركس الآن | Forex Now.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-orange"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            العودة للرئيسية
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
          <h1 className="mb-2 text-3xl font-extrabold text-brand-navy">
            الشروط والأحكام
          </h1>
          <p className="mb-8 text-sm text-slate-500">
            آخر تحديث: يونيو 2025
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed sm:text-base">
            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                1. مقدمة وقبول الشروط
              </h2>
              <p className="mt-2 text-slate-600">
                بتقديم طلب فتح حساب تداول لدى شركة فوركس الآن | Forex Now، فإنك
                توافق على الالتزام بهذه الشروط والأحكام كاملةً. يُرجى قراءتها
                بعناية قبل المتابعة.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                2. أهلية العميل
              </h2>
              <ul className="mt-2 list-disc space-y-1 pr-5 text-slate-600">
                <li>يجب أن يكون المتقدم بالغاً (18 سنة فأكثر).</li>
                <li>
                  يجب تقديم وثائق هوية سارية المفعول ومعلومات صحيحة ودقيقة.
                </li>
                <li>
                  يُحظر على الأشخاص الممنوعين من تداول الأوراق المالية بموجب
                  قانون سارٍ التقدم بطلب.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                3. تحذير المخاطر
              </h2>
              <div className="mt-2 rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700">
                <p>
                  <strong>تحذير هام:</strong> تداول العملات الأجنبية (الفوركس)
                  والمشتقات المالية (العقود مقابل الفروقات CFDs) ينطوي على
                  درجة عالية جداً من المخاطرة وقد لا يكون مناسباً لجميع
                  المستثمرين. قد تخسر أكثر من رأس مالك الأولي. تأكد من فهمك
                  الكامل للمخاطر قبل البدء بالتداول.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                4. المعلومات والوثائق المطلوبة
              </h2>
              <p className="mt-2 text-slate-600">
                عند فتح الحساب يُطلب منك تقديم:
              </p>
              <ul className="mt-2 list-disc space-y-1 pr-5 text-slate-600">
                <li>الاسم الكامل ورقم هاتف واتساب للتواصل.</li>
                <li>صورة واضحة من وثيقة هوية سارية (بطاقة هوية أو جواز سفر).</li>
                <li>
                  صورة حساب الشام كاش (اختيارية — لأغراض الإيداع والسحب).
                </li>
                <li>
                  عنوان محفظة USDT (اختياري — للمعاملات بالعملات الرقمية).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                5. الخصوصية وحماية البيانات
              </h2>
              <ul className="mt-2 list-disc space-y-1 pr-5 text-slate-600">
                <li>
                  يُستخدم الاسم ورقم الهاتف للتواصل وتجهيز بيانات الحساب فقط.
                </li>
                <li>
                  لا تُشارَك المعلومات الشخصية مع أي طرف ثالث دون موافقة صريحة
                  من العميل، ما لم يُلزَم بذلك قانوناً.
                </li>
                <li>
                  يتعامل الفريق مع جميع البيانات بسرية تامة وفق معايير الحماية
                  المعتمدة.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                6. حقوق الشركة وإغلاق الحساب
              </h2>
              <p className="mt-2 text-slate-600">
                تحتفظ فوركس الآن | Forex Now بحق رفض أي طلب أو إغلاق أي حساب
                دون إبداء الأسباب، لا سيما عند الاشتباه في أي نشاط غير قانوني
                أو مخالفة لهذه الشروط.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                7. تعديل الشروط
              </h2>
              <p className="mt-2 text-slate-600">
                تحتفظ فوركس الآن بحق تعديل هذه الشروط في أي وقت. سيُخطَر
                العملاء بأي تغييرات جوهرية عبر البريد الإلكتروني أو رسالة
                واتساب. استمرارك في استخدام الخدمات بعد التعديل يُعدّ موافقةً
                ضمنيةً على الشروط المحدَّثة.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                8. القانون المطبّق
              </h2>
              <p className="mt-2 text-slate-600">
                تخضع هذه الشروط وتُفسَّر وفق القوانين المعمول بها. أي نزاع
                ينشأ عن هذه الشروط يُحسم عبر التفاوض الودي أولاً.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-brand-navy">
                9. التواصل
              </h2>
              <p className="mt-2 text-slate-600">
                لأي استفسار حول هذه الشروط، تواصل معنا على:
              </p>
              <a
                href="mailto:Liirat.official.tr@gmail.com"
                className="mt-1 inline-block font-semibold text-brand-orange"
              >
                Liirat.official.tr@gmail.com
              </a>
            </section>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-6">
            <Link href="/open-account" className="btn-primary">
              أوافق — افتح حساب تداول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
