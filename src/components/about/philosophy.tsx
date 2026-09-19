import { Crown, Gem, Landmark, Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden py-28">

      <div className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
            Our Philosophy
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Every Exceptional Brand
            <span className="block bg-linear-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] bg-clip-text text-transparent">
              Deserves an Exceptional Home
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            AUREQUIS PARIJAT is built around a single philosophy— celebrating the
            world's most prestigious brands through a refined digital experience
            that reflects their craftsmanship, heritage, and timeless
            excellence.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <Card className="group rounded-3xl border border-[#D4AF37]/20 bg-[#0B0B0B]/90 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50">
            <CardHeader>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <Crown className="h-8 w-8 text-[#D4AF37]" />
              </div>

              <CardTitle className="pt-6 text-3xl text-white">
                Legacy Before Luxury
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="leading-8 text-neutral-400">
                Every brand within AUREQUIS PARIJAT represents decades—sometimes
                centuries—of craftsmanship, innovation, and excellence. Their
                stories are built upon heritage, precision, and the pursuit of
                perfection.
              </p>
            </CardContent>
          </Card>

          <Card className="group rounded-3xl border border-[#D4AF37]/20 bg-[#0B0B0B]/90 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50">
            <CardHeader>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <Gem className="h-8 w-8 text-[#D4AF37]" />
              </div>

              <CardTitle className="pt-6 text-3xl text-white">
                Carefully Curated
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="leading-8 text-neutral-400">
                Every collection is selected with purpose, bringing together
                globally respected names across watches, automobiles, fashion,
                jewelry, lifestyle, and premium living into one elegant
                destination.
              </p>
            </CardContent>
          </Card>

          <Card className="group rounded-3xl border border-[#D4AF37]/20 bg-[#0B0B0B]/90 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50">
            <CardHeader>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <Landmark className="h-8 w-8 text-[#D4AF37]" />
              </div>

              <CardTitle className="pt-6 text-3xl text-white">
                A Royal Experience
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="leading-8 text-neutral-400">
                Every interaction is designed with elegance. From discovering
                iconic collections to exploring legendary brands, every detail
                reflects sophistication, simplicity, and timeless design.
              </p>
            </CardContent>
          </Card>

          <Card className="group rounded-3xl border border-[#D4AF37]/20 bg-[#0B0B0B]/90 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50">
            <CardHeader>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <Sparkles className="h-8 w-8 text-[#D4AF37]" />
              </div>

              <CardTitle className="pt-6 text-3xl text-white">
                Timeless Excellence
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="leading-8 text-neutral-400">
                Luxury is not defined by trends—it is defined by enduring
                quality, remarkable craftsmanship, and brands whose influence
                continues across generations. AUREQUIS PARIJAT celebrates that
                timeless excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24">
          <Card className="border border-[#D4AF37]/20 bg-[#0A0A0A]/80">
            <CardContent className="py-14 text-center">
              <p className="mx-auto max-w-4xl text-2xl font-light italic leading-10 text-[#D4AF37] md:text-3xl">
                "Behind every remarkable product is a remarkable brand. Luxury
                Cart exists to celebrate both."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
