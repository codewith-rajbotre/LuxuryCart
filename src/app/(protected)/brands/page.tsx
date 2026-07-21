import Brands from "@/components/brands/brands";
import { fetchAllBrands } from "@/db/supabase/brands";

export default async function BrandsPage() {
    const brands = await fetchAllBrands();
    console.log("brands data is : ", brands);
    return <Brands brands={brands} />;
}