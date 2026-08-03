import {
  Award,
  BadgeCheck,
  Building2,
  Globe,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Global Luxury Brands",
    icon: Globe,
    description:
      "Discover internationally celebrated brands whose names represent prestige, innovation, and timeless excellence.",
  },
  {
    title: "Curated Collections",
    icon: Sparkles,
    description:
      "Every collection is thoughtfully organized to showcase iconic brands across luxury categories with elegance and clarity.",
  },
  {
    title: "Authenticity First",
    icon: BadgeCheck,
    description:
      "Luxury begins with trust. Every featured brand is presented with the respect, identity, and heritage it deserves.",
  },
  {
    title: "Craftsmanship",
    icon: Award,
    description:
      "Behind every luxury product is decades of artistry, precision, and innovation. We celebrate the makers behind every masterpiece.",
  },
  {
    title: "Premium Experience",
    icon: Building2,
    description:
      "From elegant design to effortless navigation, every interaction is created to reflect refinement and sophistication.",
  },
  {
    title: "Our Promise",
    icon: ShieldCheck,
    description:
      "Luxury Cart is committed to providing a premium environment where heritage, excellence, and quality remain at the heart of every collection.",
  },
];

export default function WhyLuxuryCart() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute right-0 top-0 h-125 w-125 rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
            Why Luxury Cart
          </p>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Built Around
            <span className="block bg-linear-to-r from-[#D4AF37] via-[#F5DF82] to-[#D4AF37] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            Every element of Luxury Cart is inspired by the values that define
            the world's most respected brands— craftsmanship, authenticity,
            innovation, elegance, and timeless quality.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="group rounded-3xl border border-[#D4AF37]/20 bg-[#0B0B0B]/90 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
              >
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                    <Icon className="h-8 w-8 text-[#D4AF37]" />
                  </div>

                  <CardTitle className="pt-6 text-2xl text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="leading-8 text-neutral-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Closing Card */}

        <div className="mt-24">
          <Card className="rounded-3xl border border-[#D4AF37]/20 bg-[#0A0A0A]">
            <CardContent className="py-16 text-center">
              <h3 className="text-3xl font-bold text-white md:text-4xl">
                More Than Luxury.
              </h3>

              <h4 className="mt-3 text-3xl font-bold text-[#D4AF37] md:text-4xl">
                A Celebration of Global Excellence.
              </h4>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-neutral-400">
                Luxury Cart is a destination where globally respected brands are
                presented with the elegance they deserve. Every category, every
                collection, and every interaction reflects a commitment to
                timeless quality, refined craftsmanship, and an exceptional
                digital experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
