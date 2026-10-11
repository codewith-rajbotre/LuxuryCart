
import { z } from "zod";

export const contactSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must contain at least 2 characters.")
      .max(100, "Name cannot exceed 100 characters."),

    email: z
      .string()
      .trim()
      .refine(
        (value) => value === "" || z.string().email().safeParse(value).success,
        "Please enter a valid email address.",
      ),

    phone: z
      .string()
      .trim()
      .refine(
        (value) => value === "" || /^\d{10}$/.test(value),
        "Phone number must contain exactly 10 digits.",
      ),

    message: z
      .string()
      .trim()
      .min(10, "Message must contain at least 10 characters.")
      .max(2000, "Message cannot exceed 2000 characters."),
  })
  .refine((data) => data.email !== "" || data.phone !== "", {
    message: "Please provide an email address or phone number.",
    path: ["email"],
  });

export type ContactFormValues = z.infer<typeof contactSchema>;
