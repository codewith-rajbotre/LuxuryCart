"use client";

import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LuxuryShowcase() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="font-serif text-4xl text-foreground">Featured</h2>

        <p className="mt-2 text-muted-foreground">Limited collections.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Large Card */}

        <Card className="group overflow-hidden rounded-3xl border-border bg-card/70 lg:col-span-2">
          <CardContent className="flex h-[420px] flex-col justify-between p-10">
            <div>
              <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-brand-gold">
                Limited
              </span>
            </div>

            <div className="space-y-5">
              <h3 className="font-serif text-5xl leading-tight text-foreground">
                Beyond
                <br />
                Luxury.
              </h3>

              <Button className="rounded-xl bg-brand-gold text-black hover:opacity-90">
                Discover
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Side */}

        <div className="space-y-6">
          <Card className="group rounded-3xl border-border bg-card/70">
            <CardContent className="flex h-[197px] flex-col justify-between p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold">
                Timepieces
              </span>

              <div>
                <h3 className="font-serif text-3xl">Rolex</h3>

                <Button
                  variant="ghost"
                  className="mt-3 p-0 text-brand-gold hover:bg-transparent"
                >
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group rounded-3xl border-border bg-card/70">
            <CardContent className="flex h-[197px] flex-col justify-between p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold">
                Performance
              </span>

              <div>
                <h3 className="font-serif text-3xl">Ferrari</h3>

                <Button
                  variant="ghost"
                  className="mt-3 p-0 text-brand-gold hover:bg-transparent"
                >
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
