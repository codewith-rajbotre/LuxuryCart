import { supabase } from "@/lib/supabase";

import PatekPhilippePage from "@/components/brand-details/patek-philippe/patek-philippe-page";

export default async function Page() {
  const { data: brand, error } = await supabase
    .from("brands")
    .select(`
      *,
      brand_themes(*)
    `)
    .eq("slug", "patek-philippe")
    .single();

  if (error || !brand) {
    console.error("Patek Philippe brand error:", error);

    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Patek Philippe not found.
        </h1>
      </main>
    );
  }

  console.log("Patek Philippe brand:", brand);
  console.log("Patek Philippe themes:", brand.brand_themes);

  return <PatekPhilippePage brand={brand} />;
}