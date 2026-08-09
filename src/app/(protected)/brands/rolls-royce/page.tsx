import { supabase } from "@/lib/supabase";

import RollsRoycePage from "@/components/brand-details/rolls-royce/rolls-royce-page";

export default async function Page() {
  const { data: brand, error } = await supabase
    .from("brands")
    .select(
      `
      *,
      brand_themes(*)
    `,
    )
    .eq("slug", "rolls-royce")
    .single();

  if (error || !brand) {
    console.error("Rolls-Royce brand error:", error);

    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">Rolls-Royce not found.</h1>
      </main>
    );
  }

  return <RollsRoycePage brand={brand} />;
}
