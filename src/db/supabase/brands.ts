import "server-only";
import {
    BrandSchema,
    BrandsSchema,
    CreateBrand,
} from "@/lib/validations/brand";
import { supabase } from "@/lib/supabase";
import { Brand } from "@/lib/types/brand";


export async function fetchAllBrands() {
    try {
        const { data, error } = await supabase
            .from("brands")
            .select("*")
            .order("display_order", {
                ascending: true,
            })
            .order("name", {
                ascending: true,
            });

        if (error) {
            throw error;
        }
        const parsedData = BrandsSchema.parse(data ?? []);
        if (!parsedData) {
            console.error("Failed to fetch brands:", error);
        }
        return parsedData;
    } catch (error) {
        console.error("Failed to fetch brands:", error);
        return [];

    }
}

// export async function fetchBrandById(id: string) {
//     try {
//         const { data, error } = await supabase
//             .from("brands")
//             .select("*")
//             .eq("id", id)
//             .single();

//         if (error) {
//             throw error;
//         }

//         return BrandSchema.parse(data);
//     } catch (error) {
//         console.error("Failed to fetch brand:", error);

//         throw new Error("Unable to fetch brand.");
//     }
// }

export async function createBrand(
  brand: CreateBrand
) {
  try {
    const { data, error } = await supabase
      .from("brands")
      .insert({
        name: brand.name,
        slug: brand.slug,
        description: brand.description,

        logo_url: brand.logoUrl,
        banner_url: brand.bannerUrl,
        website_url: brand.websiteUrl,

        country: brand.country,
        founded_year: brand.foundedYear,

        status: brand.status,

        is_featured: brand.isFeatured,
        display_order: brand.displayOrder,

        created_by: brand.createdBy,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }
    return BrandSchema.parse({
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description,

      logoUrl: data.logo_url,
      bannerUrl: data.banner_url,
      websiteUrl: data.website_url,

      country: data.country,
      foundedYear: data.founded_year,

      status: data.status,

      isFeatured: data.is_featured,
      displayOrder: data.display_order,

      createdBy: data.created_by,

      createdAt: data.created_at,
      updatedAt: data.updated_at,
    });
  } catch (error) {
    console.error("Failed to create brand:", error);
    throw new Error("Unable to create brand.");
  }
}

// export async function updateBrand(
//     id: string,
//     brand: Partial<
//         Omit<
//             Brand,
//             "id" | "createdAt" | "updatedAt"
//         >
//     >,
// ) {
//     try {
//         const { data, error } = await supabase
//             .from("brands")
//             .update({
//                 ...brand,
//                 updatedAt: new Date().toISOString(),
//             })
//             .eq("id", id)
//             .select()
//             .single();

//         if (error) {
//             throw error;
//         }

//         return BrandSchema.parse(data);
//     } catch (error) {
//         console.error("Failed to update brand:", error);

//         throw new Error("Unable to update brand.");
//     }
// }

// export async function deleteBrand(id: string) {
//     try {
//         const { error } = await supabase
//             .from("brands")
//             .delete()
//             .eq("id", id);

//         if (error) {
//             throw error;
//         }
//     } catch (error) {
//         console.error("Failed to delete brand:", error);

//         throw new Error("Unable to delete brand.");
//     }
// }