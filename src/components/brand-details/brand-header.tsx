"use client";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

interface BrandHeaderProps {
  brand: any;
  theme: any;
}

export default function BrandHeader({ brand, theme }: BrandHeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        backgroundColor: `${theme.navbar_color}E6`,
        borderColor: theme.border_color,
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href={`/brands/${brand.slug}`}
          className="flex items-center gap-4"
        >
          {brand.logo_url ? (
            <img
              src={brand.logo_url}
              alt={brand.name}
              className="h-10 w-auto object-contain"
            />
          ) : (
            <div
              className="text-xl font-medium tracking-[0.2em]"
              style={{
                color: theme.text_primary,
              }}
            >
              {brand.name}
            </div>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#story"
            style={{ color: theme.text_secondary }}
            className="text-sm transition-opacity hover:opacity-70"
          >
            Story
          </a>

          <a
            href="#collections"
            style={{ color: theme.text_secondary }}
            className="text-sm transition-opacity hover:opacity-70"
          >
            Collections
          </a>

          <a
            href="#heritage"
            style={{ color: theme.text_secondary }}
            className="text-sm transition-opacity hover:opacity-70"
          >
            Heritage
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 text-sm"
            style={{ color: theme.primary_color }}
          >
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
