import type { Metadata } from "next";
import OpenAccountForm from "@/components/OpenAccountForm";

export const metadata: Metadata = {
  title: "فتح حساب تداول — فوركس الآن | Forex Now",
  description:
    "افتح حساب تداول لدى فوركس الآن. أرسل بياناتك وسيتواصل معك فريقنا في أقرب وقت.",
};

export default function OpenAccountPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* رأس الصفحة */}
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-brand-navy/10 px-4 py-1 text-sm font-semibold text-brand-navy">
            فتح حساب مجاني
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-brand-navy sm:text-4xl">
            افتح حساب تداول
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-slate-600">
            أرسل بياناتك من خلال النموذج أدناه، وسيقوم فريقنا بمراجعة طلبك
            وإرسال بيانات الحساب إليك في أقرب وقت.
          </p>
        </div>

        {/* بطاقة النموذج */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <OpenAccountForm />
        </div>

        {/* ملاحظة */}
        <p className="mt-4 text-center text-xs text-slate-400">
          بياناتك آمنة ومشفرة ولن تُشارَك مع أي طرف خارجي. للاستفسار تواصل معنا
          على{" "}
          <a
            href="mailto:Liirat.official.tr@gmail.com"
            className="text-brand-orange"
          >
            Liirat.official.tr@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
