import { supabase } from "@/lib/supabase";

export async function fetchAllAdmins() {
    try {
        const { data, error } = await supabase
            .from("luxury_admin")
            .select("*");

        if (error) {
            console.error(error);
        }

    } catch (error) {
    }
}