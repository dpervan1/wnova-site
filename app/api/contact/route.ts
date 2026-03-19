import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP konfiguracija nije potpuna.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (body.website) {
      return NextResponse.json({ message: "Spam detektiran." }, { status: 400 });
    }

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const service = body.service?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !service || !message) {
      return NextResponse.json({ message: "Sva obavezna polja moraju biti ispunjena." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Email adresa nije ispravna." }, { status: 400 });
    }

    const transporter = getTransporter();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    const to = process.env.CONTACT_TO || "info@wnova.cc";

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Novi upit: ${service}`,
      text: [
        `Ime: ${name}`,
        `Email: ${email}`,
        `Usluga: ${service}`,
        "",
        "Opis projekta:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">Novi upit s web stranice</h2>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Usluga:</strong> ${service}</p>
          <p><strong>Opis projekta:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Upit je uspješno poslan." });
  } catch (error) {
    console.error("Contact form send failed", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error && error.message === "SMTP konfiguracija nije potpuna."
            ? "Kontakt forma još nije spojena na mail server. Dodaj SMTP podatke u okruženje."
            : "Došlo je do greške prilikom slanja upita.",
      },
      { status: 500 },
    );
  }
}