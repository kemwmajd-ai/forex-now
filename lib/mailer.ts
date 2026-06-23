import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

interface AccountRequestData {
  fullName: string;
  phone: string;
  depositMethod: string;
  idCardBuffer: Buffer;
  idCardMime: string;
  idCardName: string;
  submittedAt: string;
}

export async function sendAccountRequestEmail(data: AccountRequestData) {
  const attachments: nodemailer.SendMailOptions["attachments"] = [
    {
      filename: data.idCardName,
      content: data.idCardBuffer,
      contentType: data.idCardMime,
    },
  ];

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
      <div style="background: #252866; padding: 20px 24px; text-align: center;">
        <h1 style="color: #cf750a; margin: 0; font-size: 22px;">فوركس الآن | Forex Now</h1>
        <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">طلب فتح حساب تداول جديد</p>
      </div>
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 4px; font-weight: bold; color: #252866; width: 40%;">الاسم الكامل</td>
            <td style="padding: 10px 4px; color: #374151;">${escapeHtml(data.fullName)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 4px; font-weight: bold; color: #252866;">رقم الهاتف (واتساب)</td>
            <td style="padding: 10px 4px; color: #374151;" dir="ltr">${escapeHtml(data.phone)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 4px; font-weight: bold; color: #252866;">طريقة الإيداع</td>
            <td style="padding: 10px 4px; color: #374151;">${data.depositMethod ? escapeHtml(data.depositMethod) : "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 4px; font-weight: bold; color: #252866;">صورة الهوية</td>
            <td style="padding: 10px 4px; color: #374151;">مرفقة (انظر المرفقات)</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">تاريخ الطلب: ${escapeHtml(data.submittedAt)}</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"فوركس الآن | Forex Now" <${process.env.GMAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `طلب فتح حساب جديد — ${data.fullName}`,
    html,
    attachments,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
