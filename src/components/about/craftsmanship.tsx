import { Crown, Gem, Hammer, ShieldCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Craftsmanship",
    icon: Hammer,
    description:
      "Every renowned brand is built upon generations of expertise, precision, and uncompromising attention to detail.",
  },
  {
    title: "Heritage",
    icon: Crown,
    description:
      "Behind every collection lies a rich history of innovation, timeless design, and enduring excellence.",
  },
  {
    title: "Authenticity",
    icon: ShieldCheck,
    description:
      "Luxury begins with trust. Every brand is presented with respect for its identity, values, and legacy.",
  },
  {
    title: "Timeless Elegance",
    icon: Gem,
    description:
      "True luxury never follows trends—it creates them through exceptional quality and enduring design.",
  },
];

export default function Craftsmanship() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Card className="overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#090909]/90">
          <CardContent className="p-10 md:p-16 lg:p-20">
            {/* Heading */}

            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
                Craftsmanship
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                Behind Every Great Brand
                <span className="mt-2 block bg-linear-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] bg-clip-text text-transparent">
                  Lies an Extraordinary Story
                </span>
              </h2>

              <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-400">
                Luxury is never created overnight. It is shaped through decades
                of dedication, relentless innovation, skilled craftsmanship, and
                an unwavering commitment to excellence. Every brand featured
                within AUREQUIS PARIJAT carries a legacy that continues to
                inspire generations around the world.
              </p>
            </div>

            {/* Divider */}

            <div className="my-16 h-px bg-linear-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            {/* Values */}

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-[#D4AF37]/15 bg-[#101010] p-8 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#141414]"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                        <Icon className="h-8 w-8 text-[#D4AF37]" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {value.title}
                        </h3>

                        <p className="mt-3 leading-8 text-neutral-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Statement */}

            <div className="mt-20 rounded-3xl border border-[#D4AF37]/15 bg-[#101010] px-8 py-14 text-center">
              <p className="text-2xl font-light italic leading-10 text-[#D4AF37] md:text-3xl">
                “Luxury is remembered long after trends fade. True craftsmanship
                leaves a legacy that generations continue to admire.”
              </p>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
                AUREQUIS PARIJAT exists to bring together those remarkable
                stories, allowing every collection to reflect the excellence,
                artistry, and timeless values that define the world's most
                respected brands.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
