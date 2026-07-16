import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutHeaderSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-144 w-xl -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20">
        <Card className="w-full border-border bg-card/90 shadow-2xl backdrop-blur-xl">
          <CardContent className="px-8 py-16 text-center md:px-16 md:py-20">
            <Badge
              variant="outline"
              className="border-border bg-muted px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-brand-gold"
            >
              About Luxury Cart
            </Badge>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              The Home of
              <span className="mt-3 block bg-linear-to-r from-brand-gold via-yellow-300 to-brand-gold bg-clip-text text-transparent">
                Extraordinary Brands
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              Luxury Cart brings together the world's most prestigious brands
              into one refined destination, making discovery effortless while
              celebrating craftsmanship, heritage, and timeless excellence.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-brand-gold px-8 font-semibold text-black hover:opacity-90"
                >
                  Explore Collections
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/brands">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border px-8 text-brand-gold hover:bg-muted"
                >
                  Discover Brands
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
