import { supabase } from "@/lib/supabase";

import RolexPage from "@/components/brand-details/rolex/rolex-page";

export default async function Page() {
  const { data: brand, error } = await supabase
    .from("brands")
    .select(
      `
      *,
      brand_themes(*)
    `,
    )
    .eq("slug", "rolex")
    .single();

  if (error || !brand) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">Brand not found</h1>
      </main>
    );
  }

  return <RolexPage brand={brand} />;
}
