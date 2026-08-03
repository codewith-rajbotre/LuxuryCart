import {
  Award,
  Crown,
  Gem,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const promises = [
  {
    title: "Curated Excellence",
    icon: Crown,
    description:
      "Every collection is thoughtfully selected to showcase globally respected brands celebrated for their heritage, innovation, and craftsmanship.",
  },
  {
    title: "Authenticity",
    icon: ShieldCheck,
    description:
      "Luxury deserves trust. Every featured collection is presented with respect for the identity, legacy, and values of the brands it represents.",
  },
  {
    title: "Timeless Quality",
    icon: Gem,
    description:
      "Exceptional design never goes out of style. We celebrate products and brands whose influence continues across generations.",
  },
  {
    title: "Meaningful Experience",
    icon: Sparkles,
    description:
      "Every page is designed to make discovering prestigious brands feel elegant, immersive, and enjoyable from beginning to end.",
  },
  {
    title: "Lasting Relationships",
    icon: HeartHandshake,
    description:
      "Luxury is built on trust and appreciation. Our goal is to create an experience visitors return to whenever they seek iconic brands.",
  },
  {
    title: "Continuous Refinement",
    icon: Award,
    description:
      "Luxury Cart continues to evolve with thoughtful improvements while remaining true to the values of quality, elegance, and craftsmanship.",
  },
];

export default function Promise() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
            The Luxury Cart Promise
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            A Commitment to
            <span className="block bg-linear-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] bg-clip-text text-transparent">
              Excellence in Every Detail
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            Every decision we make is guided by a commitment to quality,
            craftsmanship, elegance, and the remarkable brands that continue to
            inspire the world.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <Card
                key={promise.title}
                className="group rounded-3xl border border-[#D4AF37]/20 bg-[#0B0B0B]/90 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
              >
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                    <Icon className="h-8 w-8 text-[#D4AF37]" />
                  </div>

                  <CardTitle className="pt-6 text-2xl text-white">
                    {promise.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="leading-8 text-neutral-400">
                    {promise.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-24">
          <Card className="rounded-[2rem] border border-[#D4AF37]/20 bg-linear-to-br from-[#111111] to-[#080808]">
            <CardContent className="px-8 py-20 text-center md:px-16">
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
                Our Vision
              </p>

              <h3 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                Creating the World's Finest
                <span className="block mt-2 text-[#D4AF37]">
                  Destination for Luxury Brands
                </span>
              </h3>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-neutral-400">
                Luxury Cart is more than a collection of premium products. It is
                a celebration of craftsmanship, heritage, innovation, and
                timeless elegance. Every brand, every collection, and every
                experience is thoughtfully presented to honor the excellence
                that defines true luxury.
              </p>

              <div className="mx-auto mt-12 h-px max-w-md bg-linear-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

              <p className="mt-10 text-2xl font-light italic leading-10 text-[#D4AF37] md:text-3xl">
                "Luxury begins with exceptional brands and becomes unforgettable
                through exceptional experiences."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
