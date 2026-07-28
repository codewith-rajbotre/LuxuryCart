import { supabase } from "@/lib/supabase";
import RolexHero from "./rolex-hero";
import RolexHeader from "./rolex-header";
import RolexStory from "./rolex-story";
import RolexCollections from "./rolex-collections";
import RolexCraftsmanship from "./rolex-craftsmanship";
import RolexHeritage from "./rolex-heritage";
import RolexGallery from "./rolex-gallery";
import RolexContact from "./rolex-content";
import RolexFooter from "./rolex-footer";

export default async function RolexPage() {
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
        <h1 className="text-2xl font-semibold">Brand not found.</h1>
      </main>
    );
  }

  const theme =
    brand.brand_themes.find(
      (item: { theme_name: string }) => item.theme_name === "light",
    ) ?? brand.brand_themes[0];

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background_color,
        color: theme.text_primary,
      }}
    >
      <RolexHeader brand={brand} theme={theme} />
      <RolexHero brand={brand} theme={theme} />
      <RolexStory brand={brand} theme={theme} />
      <RolexCollections brand={brand} theme={theme} />
      <RolexCraftsmanship brand={brand} theme={theme} />
      <RolexHeritage brand={brand} theme={theme} />
      {/* <RolexGallery brand={brand} theme={theme} /> */}
      <RolexContact brand={brand} theme={theme} />
      <RolexFooter brand={brand} theme={theme} />
    </main>
  );
}
