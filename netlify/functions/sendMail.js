import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";

const readLocalEnv = () => {
  try {
    const envPath = path.resolve(process.cwd(), ".env");

    if (!fs.existsSync(envPath)) {
      return {};
    }

    return fs
      .readFileSync(envPath, "utf8")
      .split(/\r?\n/)
      .reduce((accumulator, line) => {
        const trimmedLine = line.trim();

        if (!trimmedLine || trimmedLine.startsWith("#")) {
          return accumulator;
        }

        const separatorIndex = trimmedLine.indexOf("=");

        if (separatorIndex === -1) {
          return accumulator;
        }

        const key = trimmedLine.slice(0, separatorIndex).trim();
        const value = trimmedLine.slice(separatorIndex + 1).trim();

        if (key) {
          accumulator[key] = value;
        }

        return accumulator;
      }, {});
  } catch {
    return {};
  }
};

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed. Use POST." });
  }

  const localEnv = readLocalEnv();
  const EMAIL_USER = process.env.EMAIL_USER || localEnv.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS || localEnv.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return jsonResponse(500, { error: "Email configuration is missing." });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid JSON body." });
  }

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !phone || !email || !message) {
    return jsonResponse(400, { error: "Name, mobile number, email, and message are required." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"SAtronix Contact Form" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}
Mobile Number: ${phone}
Email: ${email}

Message:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile Number:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return jsonResponse(200, { success: "Message sent successfully." });
  } catch (error) {
    console.error("sendMail error", error);
    return jsonResponse(500, { error: "Failed to send message." });
  }
}
