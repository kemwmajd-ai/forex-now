"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/#home", label: "الرئيسية" },
  { href: "/#markets", label: "المؤشرات" },
  { href: "/#news", label: "الأخبار" },
  { href: "/#features", label: "لماذا نحن" },
  { href: "/terms", label: "الشروط والأحكام" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        {/* روابط سطح المكتب */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-bold text-brand-navy transition hover:text-brand-orange"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/open-account" className="btn-primary">
            افتح حساب تداول
          </Link>
        </div>

        {/* زر القائمة للجوال */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-navy lg:hidden"
          aria-label="فتح القائمة"
          aria-expanded={open}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* قائمة الجوال المنسدلة */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 font-bold text-brand-navy transition hover:bg-slate-50 hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <Link
                href="/open-account"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                افتح حساب تداول
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
