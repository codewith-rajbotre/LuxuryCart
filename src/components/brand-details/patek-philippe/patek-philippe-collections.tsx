import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PatekPhilippeCollectionsProps {
  brand: any;
  theme: any;
}

const collections = [
  {
    name: "Calatrava",
    description:
      "The purest expression of timeless elegance, defined by understated lines and refined proportions.",
  },
  {
    name: "Nautilus",
    description:
      "An iconic sports watch combining distinctive design, sophisticated mechanics and exceptional finishing.",
  },
  {
    name: "Aquanaut",
    description:
      "A contemporary expression of Patek Philippe craftsmanship with a dynamic and modern character.",
  },
  {
    name: "Grand Complications",
    description:
      "Exceptional mechanical creations featuring some of the most sophisticated complications in fine watchmaking.",
  },
];

export default function PatekPhilippeCollections({
  brand,
  theme,
}: PatekPhilippeCollectionsProps) {
  return (
    <section
      id="collections"
      className="py-32"
      style={{
        backgroundColor: theme.background_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p
              className="text-xs uppercase tracking-[0.4em]"
              style={{
                color: theme.primary_color,
              }}
            >
              Collections
            </p>

            <h2
              className="mt-5 text-5xl font-light leading-tight md:text-6xl"
              style={{
                color: theme.text_primary,
              }}
            >
              Icons of
              <br />
              <span style={{ color: theme.secondary_color }}>
                Fine Watchmaking
              </span>
            </h2>
          </div>

          <p
            className="max-w-md leading-7"
            style={{
              color: theme.text_secondary,
            }}
          >
            Explore distinguished collections created for those who appreciate
            exceptional design, mechanical artistry and timeless sophistication.
          </p>
        </div>

        {/* Collections */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {collections.map((collection, index) => (
            <Card
              key={collection.name}
              className="group overflow-hidden rounded-none border"
              style={{
                backgroundColor: theme.card_color,
                borderColor: theme.border_color,
              }}
            >
              {/* Visual */}
              <div
                className="relative flex h-80 items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: theme.surface_color,
                }}
              >
                <div
                  className="absolute h-56 w-56 rounded-full border transition-transform duration-700 group-hover:scale-110"
                  style={{
                    borderColor: theme.border_color,
                  }}
                />

                <div
                  className="absolute h-44 w-44 rounded-full border"
                  style={{
                    borderColor: theme.divider_color,
                  }}
                />

                <div className="relative text-center">
                  <span
                    className="text-4xl font-light tracking-[0.12em]"
                    style={{
                      color: theme.text_primary,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="mx-auto mt-4 h-px w-12"
                    style={{
                      backgroundColor: theme.accent_color,
                    }}
                  />
                </div>
              </div>

              <CardContent className="p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p
                      className="text-xs uppercase tracking-[0.3em]"
                      style={{
                        color: theme.text_muted,
                      }}
                    >
                      Patek Philippe
                    </p>

                    <h3
                      className="mt-3 text-3xl font-light"
                      style={{
                        color: theme.text_primary,
                      }}
                    >
                      {collection.name}
                    </h3>
                  </div>

                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    style={{
                      color: theme.accent_color,
                    }}
                  />
                </div>

                <p
                  className="mt-6 leading-7"
                  style={{
                    color: theme.text_secondary,
                  }}
                >
                  {collection.description}
                </p>

                <Button
                  variant="ghost"
                  className="mt-6 rounded-none px-0 hover:bg-transparent"
                  style={{
                    color: theme.primary_color,
                  }}
                >
                  Discover Collection
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="mt-20 border-t pt-10"
          style={{
            borderColor: theme.divider_color,
          }}
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p
              className="max-w-2xl text-lg leading-8"
              style={{
                color: theme.text_secondary,
              }}
            >
              Every collection reflects the same philosophy: timeless design,
              exceptional mechanics and craftsmanship without compromise.
            </p>

            <span
              className="text-xs uppercase tracking-[0.35em]"
              style={{
                color: theme.secondary_color,
              }}
            >
              Geneva · Since 1839
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
