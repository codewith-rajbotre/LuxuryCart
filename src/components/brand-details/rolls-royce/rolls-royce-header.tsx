"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface RollsRoyceHeaderProps {
  brand: any;
  theme: any;
}

export default function RollsRoyceHeader({
  brand,
  theme,
}: RollsRoyceHeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        backgroundColor: `${theme.navbar_color}F2`,
        borderColor: theme.border_color,
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand */}

        <Link
          href="/brands/rolls-royce"
          className="group flex flex-col"
        >
          <span
            className="text-xl font-medium tracking-[0.35em]"
            style={{
              color: theme.text_primary,
            }}
          >
            ROLLS-ROYCE
          </span>

          <span
            className="mt-1 text-[10px] uppercase tracking-[0.45em]"
            style={{
              color: theme.text_muted,
            }}
          >
            Motor Cars
          </span>
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#models"
            className="text-sm transition-opacity hover:opacity-60"
            style={{
              color: theme.text_primary,
            }}
          >
            Models
          </Link>

          <Link
            href="#craftsmanship"
            className="text-sm transition-opacity hover:opacity-60"
            style={{
              color: theme.text_primary,
            }}
          >
            Craftsmanship
          </Link>

          <Link
            href="#heritage"
            className="text-sm transition-opacity hover:opacity-60"
            style={{
              color: theme.text_primary,
            }}
          >
            Heritage
          </Link>

          <Link
            href="#story"
            className="text-sm transition-opacity hover:opacity-60"
            style={{
              color: theme.text_primary,
            }}
          >
            Story
          </Link>
        </nav>

        {/* CTA */}

        <Button
          className="hidden rounded-none px-6 md:inline-flex"
          style={{
            backgroundColor: theme.primary_color,
            color: theme.button_text,
          }}
        >
          Discover
        </Button>
      </div>
    </header>
  );
}