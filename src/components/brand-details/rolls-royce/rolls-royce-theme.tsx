"use client";

import { useTheme } from "next-themes";

import RollsRoyceHeader from "./rolls-royce-header";
import RollsRoyceHero from "./rolls-royce-hero";
import RollsRoyceStory from "./rolls-royce-story";

interface RollsRoyceThemeProps {
  brand: any;
  themes: any[];
}

export default function RollsRoyceTheme({
  brand,
  themes,
}: RollsRoyceThemeProps) {
  const { resolvedTheme } = useTheme();

  const themeName = resolvedTheme === "dark" ? "dark" : "light";

  const theme =
    themes.find(
      (item) => item.theme_name === themeName,
    ) ?? themes[0];

  if (!theme) {
    return null;
  }

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
    </main>
  );
}