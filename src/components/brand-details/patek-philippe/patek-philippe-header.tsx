"use client";

import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PatekPhilippeHeaderProps {
  brand: any;
  theme: any;
}

export default function PatekPhilippeHeader({
  brand,
  theme,
}: PatekPhilippeHeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        backgroundColor: `${theme.navbar_color}F2`,
        borderColor: theme.border_color,
        color: theme.text_primary,
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link href="/brands/patek-philippe" className="flex items-center gap-4">
          {brand.logo_url ? (
            <img
              src={brand.logo_url}
              alt={brand.name}
              className="h-10 w-auto object-contain"
            />
          ) : (
            <div>
              <p
                className="text-lg font-medium tracking-[0.25em]"
                style={{ color: theme.text_primary }}
              >
                PATEK PHILIPPE
              </p>

              <p
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ color: theme.text_muted }}
              >
                Since 1839
              </p>
            </div>
          )}
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#heritage"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Heritage
          </Link>

          <Link
            href="#collections"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Collections
          </Link>

          <Link
            href="#craftsmanship"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Craftsmanship
          </Link>

          <Link
            href="#contact"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Discover
          </Link>
        </nav>

        {/* Action */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden rounded-none md:flex"
            style={{
              borderColor: theme.border_color,
              color: theme.text_primary,
              backgroundColor: "transparent",
            }}
          >
            Explore
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            style={{ color: theme.text_primary }}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
