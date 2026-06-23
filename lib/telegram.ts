const TG_BASE = "https://api.telegram.org";

function botUrl(method: string): string {
  return `${TG_BASE}/bot${process.env.TELEGRAM_BOT_TOKEN}/${method}`;
}

export async function sendTelegramMessage(text: string): Promise<void> {
  const res = await fetch(botUrl("sendMessage"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Telegram sendMessage failed: ${err}`);
  }
}

export async function sendTelegramPhoto(
  photoBuffer: Buffer,
  filename: string,
  caption?: string
): Promise<void> {
  const form = new FormData();
  form.append("chat_id", process.env.TELEGRAM_CHAT_ID!);
  form.append("photo", new Blob([new Uint8Array(photoBuffer)]), filename);
  if (caption) form.append("caption", caption);

  const res = await fetch(botUrl("sendPhoto"), {
    method: "POST",
    body: form,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Telegram sendPhoto failed: ${err}`);
  }
}

export async function sendTelegramDocument(
  fileBuffer: Buffer,
  filename: string,
  caption?: string
): Promise<void> {
  const form = new FormData();
  form.append("chat_id", process.env.TELEGRAM_CHAT_ID!);
  form.append("document", new Blob([new Uint8Array(fileBuffer)]), filename);
  if (caption) form.append("caption", caption);

  const res = await fetch(botUrl("sendDocument"), {
    method: "POST",
    body: form,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Telegram sendDocument failed: ${err}`);
  }
}
