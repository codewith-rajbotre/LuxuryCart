"use client";

import { useTheme } from "next-themes";

import RolexHeader from "./rolex-header";
import RolexHero from "./rolex-hero";
import RolexStory from "./rolex-story";
import RolexCollections from "./rolex-collections";
import RolexCraftsmanship from "./rolex-craftsmanship";
import RolexHeritage from "./rolex-heritage";
import RolexGallery from "./rolex-gallery";
import RolexContact from "./rolex-content";
import RolexFooter from "./rolex-footer";

interface RolexPageProps {
  brand: any;
}

export default function RolexPage({ brand }: RolexPageProps) {
  const { resolvedTheme } = useTheme();

  const theme =
    brand.brand_themes.find((item: any) => item.theme_name === resolvedTheme) ??
    brand.brand_themes[0];

  console.log("Current Theme:", resolvedTheme);
  console.log("Selected Theme:", theme);

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

      <RolexGallery brand={brand} theme={theme} />

      <RolexContact brand={brand} theme={theme} />

      <RolexFooter brand={brand} theme={theme} />
    </main>
  );
}
