"use client";

import { useTheme } from "next-themes";

import PatekPhilippeHeader from "./patek-philippe-header";
import PatekPhilippeHero from "./patek-philippe-hero";
import PatekPhilippeStory from "./patek-philippe-story";
import PatekPhilippeCollections from "./patek-philippe-collections";
import PatekPhilippeCraftsmanship from "./patek-philippe-craftsmanship";
import PatekPhilippeHeritage from "./patek-philippe-heritage";
import PatekPhilippeGallery from "./patek-philippe-gallery";
import PatekPhilippeContact from "./patek-philippe-contact";
import PatekPhilippeFooter from "./patek-philippe-footer";

interface PatekPhilippePageProps {
  brand: any;
}

export default function PatekPhilippePage({ brand }: PatekPhilippePageProps) {
  const { resolvedTheme } = useTheme();

  const themeName = resolvedTheme === "dark" ? "dark" : "light";

  const theme =
    brand.brand_themes?.find((item: any) => item.theme_name === themeName) ??
    brand.brand_themes?.[0];

  if (!theme) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Patek Philippe theme not configured.
        </h1>
      </main>
    );
  }

  console.log("Patek Philippe resolved theme:", resolvedTheme);
  console.log("Patek Philippe selected theme:", theme.theme_name);
  console.log("Patek Philippe background:", theme.background_color);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background_color,
        color: theme.text_primary,
      }}
    >
      <PatekPhilippeHeader brand={brand} theme={theme} />

      <PatekPhilippeHero brand={brand} theme={theme} />

      <PatekPhilippeStory brand={brand} theme={theme} />

      <PatekPhilippeCollections brand={brand} theme={theme} />

      <PatekPhilippeCraftsmanship brand={brand} theme={theme} />

      <PatekPhilippeHeritage brand={brand} theme={theme} />

      <PatekPhilippeGallery brand={brand} theme={theme} />

      <PatekPhilippeContact brand={brand} theme={theme} />

      <PatekPhilippeFooter brand={brand} theme={theme} />
    </main>
  );
}
