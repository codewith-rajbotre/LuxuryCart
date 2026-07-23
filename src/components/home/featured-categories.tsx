"use client";

import { Building2, CarFront, Gem, Shirt, Watch, Waves } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Cars",
    icon: CarFront,
  },
  {
    title: "Watches",
    icon: Watch,
  },
  {
    title: "Fashion",
    icon: Shirt,
  },
  {
    title: "Jewellery",
    icon: Gem,
  },
  {
    title: "Properties",
    icon: Building2,
  },
  {
    title: "Yachts",
    icon: Waves,
  },
];

export function FeaturedCategories() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="font-serif text-4xl text-foreground">Categories</h2>

        <p className="mt-2 text-muted-foreground">Explore the exceptional.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map(({ title, icon: Icon }) => (
          <Card
            key={title}
            className="group overflow-hidden rounded-3xl border-border bg-card/70 transition-all duration-300 hover:-translate-y-2 hover:border-brand-gold/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
          >
            <CardContent className="flex h-56 flex-col justify-between p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/10 transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-black">
                <Icon className="h-8 w-8 text-brand-gold transition-colors duration-300 group-hover:text-black" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">Discover</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
