import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 ${className}`}
      aria-label="فوركس الآن | Forex Now — الصفحة الرئيسية"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-lg font-black text-brand-orange shadow-md">
        FN
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-extrabold text-brand-navy">فوركس الآن</span>
        <span className="text-[11px] font-semibold tracking-wide text-brand-orange">
          FOREX NOW
        </span>
      </span>
    </Link>
  );
}
