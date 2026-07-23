"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HomeHero() {
  return (
    <section className="container mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}

        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Luxury Cart
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl xl:text-7xl">
              Luxury.
              <br />
              <span className="text-brand-gold">Curated.</span>
            </h1>

            <p className="max-w-md text-lg text-muted-foreground">
              Finest brands. Timeless experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-xl bg-brand-gold px-7 text-black hover:opacity-90"
            >
              Explore
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-brand-gold/30 bg-transparent text-brand-gold hover:bg-brand-gold/10"
            >
              Brands
            </Button>
          </div>
        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-5">
          <Card className="rounded-3xl border-border bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40">
            <CardContent className="space-y-2 p-6">
              <p className="text-3xl font-bold text-brand-gold">150+</p>

              <p className="text-sm text-muted-foreground">Brands</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40">
            <CardContent className="space-y-2 p-6">
              <p className="text-3xl font-bold text-brand-gold">12K+</p>

              <p className="text-sm text-muted-foreground">Products</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40">
            <CardContent className="space-y-2 p-6">
              <p className="text-3xl font-bold text-brand-gold">60+</p>

              <p className="text-sm text-muted-foreground">Countries</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border bg-brand-gold text-black transition-all duration-300 hover:-translate-y-1">
            <CardContent className="flex h-full items-center justify-center p-6">
              <span className="text-lg font-semibold">100% Authentic</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
