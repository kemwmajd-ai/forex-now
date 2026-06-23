import { NextRequest, NextResponse } from "next/server";
import { sendAccountRequestEmail } from "@/lib/mailer";
import {
  sendTelegramMessage,
  sendTelegramDocument,
} from "@/lib/telegram";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME_PREFIX = "image/";

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();

    const fullName = (form.get("fullName") as string | null)?.trim() ?? "";
    const phone = (form.get("phone") as string | null)?.trim() ?? "";
    const depositMethod = (form.get("depositMethod") as string | null)?.trim() ?? "";
    const idCardFile = form.get("idCard") as File | null;

    // ── التحقق من الخادم ──────────────────────────────────────
    if (!fullName || !phone) {
      return NextResponse.json(
        { ok: false, error: "الاسم الكامل ورقم الهاتف مطلوبان." },
        { status: 400 }
      );
    }

    if (!idCardFile || idCardFile.size === 0) {
      return NextResponse.json(
        { ok: false, error: "صورة الهوية مطلوبة." },
        { status: 400 }
      );
    }

    if (!idCardFile.type.startsWith(ALLOWED_MIME_PREFIX)) {
      return NextResponse.json(
        { ok: false, error: "صورة الهوية: يُسمح برفع الصور فقط." },
        { status: 400 }
      );
    }
    if (idCardFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { ok: false, error: "صورة الهوية: الحجم يتجاوز 5MB." },
        { status: 400 }
      );
    }

    // ── تحويل الملف إلى Buffer ────────────────────────────────
    const idCardBuffer = Buffer.from(await idCardFile.arrayBuffer());
    const idCardMime = idCardFile.type || "image/jpeg";
    const idCardName = sanitizeFilename(idCardFile.name || "id-card.jpg");

    const submittedAt = new Date().toLocaleString("ar-SY", {
      timeZone: "Asia/Damascus",
      dateStyle: "full",
      timeStyle: "short",
    });

    // ── إرسال الإيميل ─────────────────────────────────────────
    await sendAccountRequestEmail({
      fullName,
      phone,
      depositMethod,
      idCardBuffer,
      idCardMime,
      idCardName,
      submittedAt,
    });

    // ── إشعار تلغرام ─────────────────────────────────────────
    const tgText = [
      "🆕 <b>طلب فتح حساب جديد</b>",
      "",
      `👤 <b>الاسم:</b> ${fullName}`,
      `📱 <b>الهاتف (واتساب):</b> ${phone}`,
      `💰 <b>طريقة الإيداع:</b> ${depositMethod || "—"}`,
      `📅 <b>التاريخ:</b> ${submittedAt}`,
    ].join("\n");

    await sendTelegramMessage(tgText);

    await sendTelegramDocument(
      idCardBuffer,
      `هوية_${fullName}_${Date.now()}${extFromMime(idCardMime)}`,
      `📄 صورة الهوية — ${fullName}`
    );

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("[open-account API]", err);
    const message =
      err instanceof Error ? err.message : "خطأ داخلي في الخادم.";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9.\-_؀-ۿ]/g, "_").slice(0, 120);
}

function extFromMime(mime: string): string {
  const map: Record<string, string> = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/heic": ".heic",
  };
  return map[mime] ?? ".jpg";
}
