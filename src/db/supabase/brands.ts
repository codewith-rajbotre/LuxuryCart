import "server-only";


import {
    BrandSchema,
    BrandsSchema,
    type Brand,
} from "@/lib/validations/brand";
import { supabase } from "@/lib/supabase";


export async function fetchAllBrands() {
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

        return BrandsSchema.parse(data ?? []);
        console.error("Failed to fetch brands:", error);
        
        throw new Error("Unable to fetch brands.");
    
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

// export async function createBrand(
//     brand: Omit<
//         Brand,
//         "id" | "createdAt" | "updatedAt"
//     >,
// ) {
//     try {
//         const { data, error } = await supabase
//             .from("brands")
//             .insert(brand)
//             .select()
//             .single();

//         if (error) {
//             throw error;
//         }

//         return BrandSchema.parse(data);
//     } catch (error) {
//         console.error("Failed to create brand:", error);

//         throw new Error("Unable to create brand.");
//     }
// }

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