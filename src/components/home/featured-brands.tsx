"use client";

import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const brands = [
  "Rolex",
  "Patek Philippe",
  "Ferrari",
  "Rolls-Royce",
  "Louis Vuitton",
  "Hermès",
  "Bentley",
  "Lamborghini",
];

export function FeaturedBrands() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-4xl text-foreground">
            Featured Brands
          </h2>

          <p className="mt-2 text-muted-foreground">Icons of luxury.</p>
        </div>

        <span className="hidden text-sm uppercase tracking-[0.25em] text-brand-gold md:block">
          Premium
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {brands.map((brand) => (
          <Card
            key={brand}
            className="group cursor-pointer rounded-3xl border-border bg-card/70 transition-all duration-300 hover:-translate-y-2 hover:border-brand-gold/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
          >
            <CardContent className="flex h-44 flex-col justify-between p-6">
              <div className="flex justify-end">
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground transition-colors duration-300 group-hover:text-brand-gold">
                  {brand}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">Explore</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
