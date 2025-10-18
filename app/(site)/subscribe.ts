"use server";
import { Resend } from "resend";

export async function subscribe(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!audienceId) {
    throw new Error("RESEND_AUDIENCE_ID is not set");
  }

  const contact = await resend.contacts.create({
    email: email,
    unsubscribed: false,
    audienceId,
  });

  return contact;
}
