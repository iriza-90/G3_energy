import { z } from "zod";
import { ENQUIRY_TYPES } from "@/data/content";

/** Strip control characters and normalize whitespace to reduce injection noise. */
export function sanitizeText(value: string, maxLength: number): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

const enquiryEnum = z.enum(ENQUIRY_TYPES);

export const contactSchema = z.object({
  firstName: z
    .string()
    .transform((v) => sanitizeText(v, 80))
    .pipe(z.string().min(1, "First name is required").max(80)),
  lastName: z
    .string()
    .transform((v) => sanitizeText(v, 80))
    .pipe(z.string().min(1, "Last name is required").max(80)),
  email: z
    .string()
    .transform((v) => sanitizeText(v, 254).toLowerCase())
    .pipe(z.string().email("Enter a valid email address").max(254)),
  organisation: z
    .string()
    .optional()
    .transform((v) => (v ? sanitizeText(v, 120) : "")),
  enquiryType: enquiryEnum,
  message: z
    .string()
    .optional()
    .transform((v) => (v ? sanitizeText(v, 2000) : ""))
    .pipe(z.string().max(2000)),
  /** Honeypot — must stay empty. Real bots fill hidden fields. */
  website: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
