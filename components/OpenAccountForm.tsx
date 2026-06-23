"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface FormState {
  fullName: string;
  phone: string;
  depositMethod: string;
  termsAccepted: boolean;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/heic"];

function FileField({
  id,
  label,
  required,
  fileRef,
  preview,
  onFileChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  fileRef: React.RefObject<HTMLInputElement | null>;
  preview: string | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-brand-navy">
        {label} {required && <span className="text-red-500">*</span>}
        {!required && (
          <span className="mr-1 text-xs font-normal text-slate-400">(إن وجد)</span>
        )}
      </label>
      <div
        className="relative cursor-pointer rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-brand-orange"
        onClick={() => fileRef.current?.click()}
      >
        <input
          ref={fileRef}
          id={id}
          name={id}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={onFileChange}
        />
        {preview ? (
          <div className="p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="معاينة"
              className="mx-auto max-h-36 rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-xs text-slate-500">
              انقر لتغيير الصورة
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 py-8 text-slate-400">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="text-sm font-medium">انقر لرفع الصورة</span>
            <span className="text-xs">JPG, PNG, WEBP — بحد أقصى {MAX_FILE_SIZE_MB}MB</span>
          </div>
        )}
      </div>
    </div>
  );
}

/** شعار شام كاش الرسمي */
function ShamCashLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/sham-cash.png"
      alt="شام كاش"
      className="h-11 w-auto object-contain"
    />
  );
}

/** أيقونة مراكز الصرافة والحوالات (سهمَا تبادل) */
function ExchangeIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g stroke="#252866">
        <path d="M3 9h15" />
        <path d="M15 6l3 3-3 3" />
      </g>
      <g stroke="#cf750a">
        <path d="M21 15H6" />
        <path d="M9 12l-3 3 3 3" />
      </g>
    </svg>
  );
}

/** أيقونة USDT (تيثر) */
function UsdtIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 24 24" aria-label="USDT">
      <circle cx="12" cy="12" r="11" fill="#26A17B" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#fff"
        fontFamily="Arial, sans-serif"
      >
        ₮
      </text>
    </svg>
  );
}

/** طرق الإيداع المتاحة للاختيار */
const DEPOSIT_METHODS = [
  { id: "sham-cash", label: "شام كاش", icon: <ShamCashLogo /> },
  { id: "exchange", label: "مراكز الصرافة والحوالات", icon: <ExchangeIcon /> },
  { id: "usdt", label: "USDT", icon: <UsdtIcon /> },
];

export default function OpenAccountForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    depositMethod: "",
    termsAccepted: false,
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const idCardRef = useRef<HTMLInputElement>(null);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setPreview: (v: string | null) => void,
    fieldName: string
  ) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type) && !file.type.startsWith("image/")) {
      setFieldErrors((prev) => ({ ...prev, [fieldName]: "يرجى اختيار ملف صورة صالح." }));
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setFieldErrors((prev) => ({
        ...prev,
        [fieldName]: `حجم الصورة يتجاوز الحد المسموح (${MAX_FILE_SIZE_MB}MB).`,
      }));
      return;
    }
    setFieldErrors((prev) => ({ ...prev, [fieldName]: "" }));
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  function validate(): boolean {
    const errors: Record<string, string> = {};
    if (!form.fullName.trim()) errors.fullName = "الاسم الكامل مطلوب.";
    if (!form.phone.trim()) errors.phone = "رقم الهاتف مطلوب.";
    else if (!/^[+\d\s()-]{7,20}$/.test(form.phone.trim()))
      errors.phone = "أدخل رقم هاتف صحيح.";
    if (!idCardRef.current?.files?.[0]) errors.idCard = "صورة الهوية مطلوبة.";
    if (!form.depositMethod) errors.depositMethod = "يرجى اختيار طريقة الإيداع.";
    if (!form.termsAccepted) errors.terms = "يجب الموافقة على الشروط والأحكام.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMsg("");

    const selectedMethod = DEPOSIT_METHODS.find((m) => m.id === form.depositMethod);

    const fd = new FormData();
    fd.append("fullName", form.fullName.trim());
    fd.append("phone", form.phone.trim());
    fd.append("depositMethod", selectedMethod ? selectedMethod.label : "");
    const idCard = idCardRef.current?.files?.[0];
    if (idCard) fd.append("idCard", idCard);

    try {
      const res = await fetch("/api/open-account", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "حدث خطأ غير متوقع.");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "حدث خطأ في الإرسال. يرجى المحاولة مجدداً."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 px-6 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold text-green-800">تم الإرسال بنجاح!</h2>
        <p className="mx-auto mt-3 max-w-md text-base text-green-700">
          تم إرسال طلب فتح حسابك بنجاح، سيتم إرسال بيانات الحساب الخاص بك في أقرب وقت.
        </p>
        <p className="mt-2 text-sm text-green-600">
          سيتواصل معك فريقنا على رقم الواتساب الذي أدخلته.
        </p>
        <Link href="/" className="btn-primary mt-8">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* الاسم الكامل */}
      <div>
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-bold text-brand-navy">
          الاسم الكامل <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={form.fullName}
          onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
          placeholder="مثال: أحمد محمد علي"
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand-orange/40 ${
            fieldErrors.fullName
              ? "border-red-400 bg-red-50"
              : "border-slate-300 bg-white focus:border-brand-orange"
          }`}
        />
        {fieldErrors.fullName && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>
        )}
      </div>

      {/* رقم الهاتف */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-brand-navy">
          رقم الهاتف (واتساب) <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          placeholder="مثال: 00963912345678"
          dir="ltr"
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand-orange/40 ${
            fieldErrors.phone
              ? "border-red-400 bg-red-50"
              : "border-slate-300 bg-white focus:border-brand-orange"
          }`}
        />
        {fieldErrors.phone && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
        )}
      </div>

      {/* صورة الهوية */}
      <FileField
        id="idCard"
        label="صورة هوية العميل"
        required
        fileRef={idCardRef}
        preview={idCardPreview}
        onFileChange={(e) => handleFileChange(e, setIdCardPreview, "idCard")}
      />
      {fieldErrors.idCard && (
        <p className="-mt-4 text-xs text-red-600">{fieldErrors.idCard}</p>
      )}

      {/* اختيار طريقة الإيداع */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="mb-1 text-sm font-bold text-brand-navy">
          طريقة الإيداع المفضّلة <span className="text-red-500">*</span>
        </h3>
        <p className="mb-4 text-xs text-slate-500">
          اختر الوسيلة التي تفضّل الإيداع والسحب من خلالها:
        </p>
        <div className="grid grid-cols-3 gap-3">
          {DEPOSIT_METHODS.map((m) => {
            const selected = form.depositMethod === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setForm((p) => ({ ...p, depositMethod: m.id }));
                  setFieldErrors((prev) => ({ ...prev, depositMethod: "" }));
                }}
                aria-pressed={selected}
                className={`relative flex flex-col items-center gap-2 rounded-xl border-2 p-3 text-center transition ${
                  selected
                    ? "border-brand-orange bg-brand-orange/5 shadow-sm"
                    : "border-slate-200 bg-white hover:border-brand-orange/40"
                }`}
              >
                {selected && (
                  <span className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-white">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                )}
                <div className="flex h-12 items-center justify-center">{m.icon}</div>
                <span className="text-xs font-bold leading-tight text-slate-700">
                  {m.label}
                </span>
              </button>
            );
          })}
        </div>
        {fieldErrors.depositMethod && (
          <p className="mt-2 text-xs text-red-600">{fieldErrors.depositMethod}</p>
        )}
      </div>

      {/* الموافقة على الشروط */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={form.termsAccepted}
            onChange={(e) =>
              setForm((p) => ({ ...p, termsAccepted: e.target.checked }))
            }
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-brand-orange"
          />
          <span className="text-sm leading-relaxed text-slate-700">
            أوافق على{" "}
            <Link
              href="/terms"
              target="_blank"
              className="font-bold text-brand-orange underline hover:text-brand-orange-dark"
            >
              الشروط والأحكام
            </Link>{" "}
            الخاصة بفتح حساب تداول لدى فوركس الآن، وأقر بصحة المعلومات المقدمة.
          </span>
        </label>
        {fieldErrors.terms && (
          <p className="mt-2 text-xs text-red-600">{fieldErrors.terms}</p>
        )}
      </div>

      {/* رسالة الخطأ */}
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      {/* زر الإرسال */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full py-4 text-base"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            جارٍ إرسال الطلب...
          </span>
        ) : (
          "إرسال طلب فتح الحساب"
        )}
      </button>
    </form>
  );
}
