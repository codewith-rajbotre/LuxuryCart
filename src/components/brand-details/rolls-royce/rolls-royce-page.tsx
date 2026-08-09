"use client";

import { useTheme } from "next-themes";

import RollsRoyceHeader from "./rolls-royce-header";
import RollsRoyceHero from "./rolls-royce-hero";
import RollsRoyceStory from "./rolls-royce-story";
import RollsRoyceFooter from "./rolls-royce-footer";

interface RollsRoycePageProps {
  brand: any;
}

export default function RollsRoycePage({
  brand,
}: RollsRoycePageProps) {
  const { resolvedTheme } = useTheme();

  const currentThemeName =
    resolvedTheme === "dark" ? "dark" : "light";

  const theme =
    brand.brand_themes?.find(
      (item: any) =>
        item.theme_name === currentThemeName,
    ) ?? brand.brand_themes?.[0];

  if (!theme) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Rolls-Royce theme not configured.
        </h1>
      </main>
    );
  }

  console.log("Rolls-Royce resolved theme:", resolvedTheme);
  console.log("Rolls-Royce selected theme:", theme.theme_name);
  console.log("Rolls-Royce background:", theme.background_color);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background_color,
        color: theme.text_primary,
      }}
    >
      <RollsRoyceHeader
        brand={brand}
        theme={theme}
      />

      <RollsRoyceHero
        brand={brand}
        theme={theme}
      />

      <RollsRoyceStory
        brand={brand}
        theme={theme}
      />

      <RollsRoyceFooter
        brand={brand}
        theme={theme}
      />
    </main>
  );
}