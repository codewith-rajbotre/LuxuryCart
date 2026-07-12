import { supabase } from "@/lib/supabase";

export async function fetchAdminByEmail(email:string){
    try{
    const {data,error}=await supabase
    .from("luxury_admin")
    .select("*")
    .eq("email",email)
    .single();

    if(error){
        return null;
    }
    return data;
}
catch(error){
    throw error;
}
}