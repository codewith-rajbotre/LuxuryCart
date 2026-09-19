import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute left-1/2 top-0 h-162.5 w-162.5 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-87.5 w-87.5 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-24">
        <Card className="w-full border border-[#D4AF37]/20 bg-[#0B0B0B]/80 shadow-2xl backdrop-blur-xl">
          <CardContent className="px-8 py-16 text-center md:px-16 md:py-20">
            <Badge
              variant="outline"
              className="border-[#D4AF37]/40 bg-[#111111] px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#D4AF37]"
            >
              About AUREQUIS PARIJAT
            </Badge>

            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              The Home of
              <span className="mt-3 block bg-linear-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] bg-clip-text text-transparent">
                Extraordinary Brands
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-8 text-neutral-300 md:text-xl">
              AUREQUIS PARIJAT is a carefully curated destination where the world's
              most prestigious brands come together under one refined
              experience. Every collection is presented with elegance,
              authenticity, and timeless sophistication.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-neutral-400 md:text-lg">
              Whether you are searching for an iconic Swiss timepiece, an
              extraordinary automobile, premium fashion, luxury accessories, or
              distinguished lifestyle collections, every journey begins with
              brands that have built their legacy through innovation,
              craftsmanship, and excellence.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] px-8 text-black transition-all duration-300 hover:bg-[#E5C55B]"
                >
                  Explore Collections
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/brands">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#D4AF37]/40 bg-transparent px-8 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#F6E27A]"
                >
                  Discover Brands
                </Button>
              </Link>
            </div>

            {/* Premium Stats */}

            <div className="mt-16 grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#111111]/70 p-6">
                <h3 className="text-3xl font-bold text-[#D4AF37]">Premium</h3>

                <p className="mt-2 text-sm text-neutral-400">
                  Luxury Experience
                </p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#111111]/70 p-6">
                <h3 className="text-3xl font-bold text-[#D4AF37]">Global</h3>

                <p className="mt-2 text-sm text-neutral-400">Renowned Brands</p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#111111]/70 p-6">
                <h3 className="text-3xl font-bold text-[#D4AF37]">Curated</h3>

                <p className="mt-2 text-sm text-neutral-400">
                  Exclusive Collections
                </p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#111111]/70 p-6">
                <h3 className="text-3xl font-bold text-[#D4AF37]">Timeless</h3>

                <p className="mt-2 text-sm text-neutral-400">
                  Heritage & Craftsmanship
                </p>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl border-t border-[#D4AF37]/20 pt-8">
              <p className="text-lg italic text-[#D4AF37]">
                "Luxury is not defined by abundance. It is defined by the legacy
                behind every choice."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
