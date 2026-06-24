import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الشروط والأحكام — فوركس الآن | Forex Now",
  description:
    "اتفاقية العميل لشركة ليرات — الشروط والأحكام الخاصة بفتح حساب تداول.",
};

const englishTerms = [
  "The Client confirms that he/she is of legal age and legally authorized to use financial services.",
  "The Client is solely responsible for the accuracy of all information and documents provided.",
  "Liirat reserves the right to request identity verification documents at any time.",
  "Liirat may request proof of source of funds and wealth when required.",
  "The Company reserves the right to suspend, restrict, or terminate any account suspected of violating regulations or company policies.",
  "The Client acknowledges that trading involves substantial risk and may result in the loss of all invested capital.",
  "The Company does not guarantee profits or investment returns.",
  "All trading decisions remain the sole responsibility of the Client.",
  "The Client agrees to all fees, commissions, spreads, swaps, and charges applied by the Company.",
  "The Company shall not be liable for losses caused by internet interruptions, technical failures, power outages, or third-party service disruptions.",
  "The Company may record telephone calls, emails, chats, and communications for compliance and quality assurance purposes.",
  "The Client agrees to receive phone calls, SMS messages, emails, and notifications from the Company.",
  "The Company reserves the right to refuse any transaction that may violate applicable laws or internal policies.",
  "The Company may temporarily freeze an account while conducting compliance reviews.",
  "The Client agrees to comply with all Anti-Money Laundering (AML) and Know Your Customer (KYC) requirements.",
  "The Company reserves the right to reject or reverse transactions resulting from technical errors or pricing mistakes.",
  "Profits generated through platform abuse, technical exploitation, or pricing errors may be cancelled.",
  "The use of fraudulent identities or forged documents is strictly prohibited.",
  "Multiple accounts registered under the same person may be merged, restricted, or terminated.",
  "Bonus abuse, promotion abuse, and arbitrage exploitation are prohibited.",
  "The Company may investigate related or linked accounts.",
  "The Company reserves the right to request additional verification before processing withdrawals.",
  "The Client may not use automated systems intended to manipulate platform operations.",
  "Any attempt to exploit latency, delayed pricing, or technical weaknesses is prohibited.",
  "The Company reserves the right to cancel trades executed due to manifest pricing errors.",
  "The Company may restrict access to services in certain jurisdictions.",
  "The Company may terminate the business relationship without prior notice where required by law or compliance obligations.",
  "The Company reserves the right to amend these Terms and Conditions at any time.",
  "Any dispute shall be governed by the laws of the jurisdiction where the Company is registered.",
  "Continued use of the Company’s services constitutes full acceptance of all amendments and updates.",
];

const englishOpenPositions = [
  "The Company reserves the right to contact the Client regarding any position that remains open for more than thirty (30) consecutive calendar days.",
  "For risk management, liquidity management, operational requirements, regulatory compliance, or market conditions, the Company may request the Client to close and reopen positions that have remained open beyond thirty (30) days.",
  "The Client agrees to cooperate with such requests and acknowledges that failure to comply may result in restrictions on the account, suspension of trading activities, or other measures deemed necessary by the Company.",
  "The Company shall not be liable for any market impact, gain, loss, swap adjustment, or pricing difference resulting from such operational actions.",
];

const arabicTerms = [
  "يقر العميل بأنه بلغ السن القانونية المسموح بها.",
  "يتحمل العميل مسؤولية صحة جميع البيانات والمستندات المقدمة.",
  "يحق للشركة طلب مستندات إثبات الهوية في أي وقت.",
  "يحق للشركة طلب إثبات مصدر الأموال والثروة عند الحاجة.",
  "يحق للشركة تعليق أو تقييد أو إغلاق أي حساب يشتبه بمخالفته للقوانين أو سياسات الشركة.",
  "يقر العميل بأن التداول ينطوي على مخاطر وقد يؤدي إلى خسارة كامل رأس المال.",
  "لا تضمن الشركة تحقيق أي أرباح أو عوائد استثمارية.",
  "تبقى جميع قرارات التداول مسؤولية العميل وحده.",
  "يوافق العميل على جميع العمولات والرسوم وفروقات الأسعار والمصاريف المطبقة.",
  "لا تتحمل الشركة مسؤولية الخسائر الناتجة عن انقطاع الإنترنت أو الأعطال التقنية أو انقطاع الكهرباء.",
  "يوافق العميل على تسجيل المكالمات والمراسلات الإلكترونية لأغراض التوثيق والرقابة.",
  "يوافق العميل على تلقي الاتصالات الهاتفية والرسائل النصية والبريد الإلكتروني من الشركة.",
  "يحق للشركة رفض أي عملية مخالفة للقوانين أو السياسات الداخلية.",
  "يحق للشركة تجميد الحساب مؤقتاً أثناء عمليات المراجعة والامتثال.",
  "يلتزم العميل بمتطلبات مكافحة غسل الأموال والتحقق من الهوية.",
  "يحق للشركة رفض أو إلغاء العمليات الناتجة عن أخطاء تقنية أو أخطاء تسعير.",
  "يحق للشركة إلغاء الأرباح الناتجة عن استغلال الأعطال أو الثغرات أو الأخطاء السعرية.",
  "يمنع استخدام هويات مزورة أو مستندات غير صحيحة.",
  "يحق للشركة دمج أو تقييد أو إلغاء الحسابات المتعددة التابعة لنفس الشخص.",
  "يمنع استغلال البونصات والعروض الترويجية بشكل تحايلي.",
  "يحق للشركة التحقيق في الحسابات المرتبطة أو ذات العلاقة.",
  "يحق للشركة طلب مستندات إضافية قبل تنفيذ عمليات السحب.",
  "يمنع استخدام أي أنظمة أو برامج تهدف للتلاعب بعمل المنصة.",
  "يمنع استغلال التأخير السعري أو الثغرات التقنية.",
  "يحق للشركة إلغاء الصفقات الناتجة عن أخطاء تسعير واضحة.",
  "يحق للشركة تقييد الخدمات في بعض الدول أو المناطق الجغرافية.",
  "يحق للشركة إنهاء العلاقة التجارية دون إشعار مسبق عند الضرورة القانونية أو التنظيمية.",
  "يحق للشركة تعديل هذه الشروط والأحكام في أي وقت.",
  "تخضع أي نزاعات للقوانين المعمول بها في بلد تسجيل الشركة.",
  "يعتبر استمرار استخدام الخدمات موافقة كاملة على جميع التعديلات المستقبلية.",
];

const arabicOpenPositions = [
  "يحق للشركة التواصل مع العميل بشأن أي صفقة أو مركز تداول يبقى مفتوحاً لأكثر من ثلاثين (30) يوماً متتالياً.",
  "لأسباب تتعلق بإدارة المخاطر أو السيولة أو المتطلبات التشغيلية أو التنظيمية أو ظروف السوق، يحق للشركة طلب إغلاق وإعادة فتح المراكز التي تجاوزت مدة ثلاثين (30) يوماً.",
  "يلتزم العميل بالتعاون مع هذه الطلبات، ويحق للشركة اتخاذ إجراءات تشمل تقييد الحساب أو تعليق التداول في حال عدم الالتزام.",
  "لا تتحمل الشركة أي مسؤولية عن الأرباح أو الخسائر أو فروقات الأسعار أو تكاليف التبييت الناتجة عن تنفيذ هذه الإجراءات التشغيلية.",
];

export default function TermsPage() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8">
          <Link href="/" className="text-sm underline">
            العودة للرئيسية
          </Link>
        </div>

        <h1 className="mb-1 text-2xl font-bold">LIIRAT CLIENT AGREEMENT</h1>
        <p className="mb-10 text-2xl font-bold">اتفاقية العميل لشركة ليرات</p>

        {/* English Version */}
        <section dir="ltr" className="mb-12 text-left leading-relaxed">
          <h2 className="mb-1 text-xl font-bold">English Version</h2>
          <h3 className="mb-4 text-lg font-bold">Terms and Conditions</h3>
          <p className="mb-4">
            By opening an account, using Liirat services, depositing funds,
            withdrawing funds, or conducting any transaction through Liirat, the
            Client acknowledges and agrees to the following terms and conditions:
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            {englishTerms.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>

          <h3 className="mb-4 mt-8 text-lg font-bold">
            Open Positions Exceeding 30 Days
          </h3>
          <ol start={31} className="list-decimal space-y-2 pl-6">
            {englishOpenPositions.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
        </section>

        <hr className="my-10" />

        {/* النسخة العربية */}
        <section dir="rtl" className="text-right leading-loose">
          <h2 className="mb-1 text-xl font-bold">النسخة العربية</h2>
          <h3 className="mb-4 text-lg font-bold">الشروط والأحكام</h3>
          <p className="mb-4">
            من خلال فتح حساب أو استخدام خدمات ليرات أو إجراء أي إيداع أو سحب أو
            معاملة مالية، يقر العميل ويوافق على ما يلي:
          </p>
          <ol className="list-decimal space-y-2 pr-6">
            {arabicTerms.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>

          <h3 className="mb-4 mt-8 text-lg font-bold">
            الصفقات المفتوحة لأكثر من 30 يوماً
          </h3>
          <ol start={31} className="list-decimal space-y-2 pr-6">
            {arabicOpenPositions.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
        </section>

        <div className="mt-12">
          <Link href="/open-account" className="text-sm underline">
            العودة لفتح حساب تداول
          </Link>
        </div>
      </div>
    </div>
  );
}
