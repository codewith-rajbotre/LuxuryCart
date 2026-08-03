import Link from "next/link";

import { ArrowRight, Crown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Closing() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Card className="overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/20 bg-linear-to-br from-[#111111] via-[#090909] to-[#050505] shadow-[0_0_80px_rgba(212,175,55,0.08)]">
          <CardContent className="px-8 py-20 text-center md:px-16 lg:px-24">
            {/* Crown */}

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
              <Crown className="h-12 w-12 text-[#D4AF37]" />
            </div>

            <Badge
              variant="outline"
              className="mt-10 border-[#D4AF37]/30 bg-[#111111] px-5 py-2 uppercase tracking-[0.4em] text-[#D4AF37]"
            >
              Luxury Cart
            </Badge>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              Where Legendary Brands
              <span className="mt-3 block bg-linear-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] bg-clip-text text-transparent">
                Come Together
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-neutral-300">
              Luxury Cart is dedicated to bringing together the world's most
              prestigious brands within one refined destination. Every
              collection reflects heritage, craftsmanship, innovation, and
              timeless excellence, creating an experience worthy of the names it
              represents.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
              Whether your passion lies in iconic Swiss watches, extraordinary
              automobiles, distinguished fashion, elegant jewelry, premium
              lifestyle collections, or timeless design, Luxury Cart welcomes
              you to explore a world where excellence is always at the center.
            </p>

            {/* Divider */}

            <div className="mx-auto my-14 h-px max-w-lg bg-linear-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

            {/* Quote */}

            <p className="mx-auto max-w-4xl text-3xl font-light italic leading-[1.8] text-[#D4AF37]">
              "Luxury is not measured by what you own.
              <span className="block">
                It is measured by the legacy you choose."
              </span>
            </p>

            {/* Buttons */}

            <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] px-10 py-7 text-base font-semibold text-black transition-all duration-300 hover:bg-[#E6C65A]"
                >
                  Explore Collections
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/brands">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#D4AF37]/40 px-10 py-7 text-base text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#F6E27A]"
                >
                  View Luxury Brands
                </Button>
              </Link>
            </div>

            {/* Bottom Text */}

            <div className="mt-20">
              <p className="text-sm uppercase tracking-[0.45em] text-neutral-500">
                Crafted with Excellence • Inspired by Heritage • Defined by
                Luxury
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
