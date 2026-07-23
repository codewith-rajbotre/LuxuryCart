"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function FooterCTA() {
  return (
    <section className="container mx-auto px-6 py-24">
      <Card className="relative overflow-hidden rounded-[2rem] border border-brand-gold/20 bg-card/80 backdrop-blur-xl">
        {/* Background Glow */}

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />

        <CardContent className="relative flex flex-col items-center gap-8 px-8 py-20 text-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold">
              Luxury Cart
            </span>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Elevate Every Purchase.
            </h2>

            <p className="mx-auto max-w-md text-muted-foreground">
              Curated brands. Exceptional experiences.
            </p>
          </div>

          <Button
            size="lg"
            className="rounded-xl bg-brand-gold px-8 text-black hover:opacity-90"
          >
            Explore Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
