import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";

import BrandPage from "@/components/brand-details/brand-page";

interface BrandPageRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: BrandPageRouteProps) {
  const { slug } = await params;
  const { data: brand, error } = await supabase
    .from("brands")
    .select(
      `
      *,
      brand_themes(*),
      brand_content(*),
      brand_statistics(*),
      brand_heritage(*),
      brand_collections(*),
      brand_features(*),
      brand_gallery(*),
      brand_sections(*)
    `,
    )
    .eq("slug", slug)
    .maybeSingle();

  if (error || !brand) {
    notFound();
  }

  return <BrandPage brand={brand} />;
}
