
import { ContactFormValues, contactSchema } from "@/lib/validations/contacts";
import type { SupabaseClient } from "@supabase/supabase-js";



export interface WebsiteVisitor {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string;
  contacted_at: string;
}

export type CreateVisitorResult =
  | { success: true; data: WebsiteVisitor }
  | { success: false; error: string };

export async function createWebsiteVisitor(
  supabase: SupabaseClient,
  input: ContactFormValues,
): Promise<CreateVisitorResult> {
  try {
    const validation = contactSchema.safeParse(input);

    if (!validation.success) {
      return {
        success: false,
        error: validation.error.issues[0]?.message ?? "Invalid contact details.",
      };
    }

    const values = validation.data;

    const payload = {
      name: values.name.trim(),
      email: values.email.trim() || null,
      phone: values.phone.trim() || null,
      message: values.message.trim(),
    };

    const { data, error } = await supabase
      .from("website_visitors")
      .insert(payload)
      .select("id, name, email, phone, message, contacted_at")
      .single();

    if (error) {
      console.error("Supabase website visitor insert failed:", error.message);

      return {
        success: false,
        error: "We couldn't submit your enquiry. Please try again.",
      };
    }

    return {
      success: true,
      data: data as WebsiteVisitor,
    };
  } catch (error) {
    console.error("Unexpected website visitor error:", error);

    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
