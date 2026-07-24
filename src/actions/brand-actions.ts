"use server";

import { createBrand } from "@/db/supabase/brands";
import type { CreateBrand } from "@/lib/validations/brand";

export async function createBrandAction(
  brand: CreateBrand
) {
  return await createBrand(brand);
}