import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

interface RolexCollectionsProps {
  brand: any;
  theme: any;
}

const collections = [
  {
    name: "Submariner",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
  {
    name: "Daytona",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
  },
  {
    name: "Datejust",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a",
  },
  {
    name: "GMT-Master II",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
  },
];

export default function RolexCollections({ theme }: RolexCollectionsProps) {
  return (
    <section
      id="collections"
      className="py-32"
      style={{
        backgroundColor: theme.background_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <p
          className="text-sm uppercase tracking-[0.4em]"
          style={{
            color: theme.primary_color,
          }}
        >
          Collections
        </p>

        <h2
          className="mt-5 text-5xl font-light"
          style={{
            color: theme.text_primary,
          }}
        >
          Timeless Icons
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection) => (
            <Card
              key={collection.name}
              className="overflow-hidden border-0 shadow-none"
              style={{
                backgroundColor: theme.card_color,
              }}
            >
              <div
                className="flex h-80 items-center justify-center"
                style={{
                  backgroundColor: theme.surface_color,
                }}
              >
                <span
                  style={{
                    color: theme.text_secondary,
                  }}
                >
                  Image Coming Soon
                </span>
              </div>

              <CardContent className="py-8">
                <h3
                  className="text-2xl font-light"
                  style={{
                    color: theme.text_primary,
                  }}
                >
                  {collection.name}
                </h3>

                <p
                  className="mt-3 leading-7"
                  style={{
                    color: theme.text_secondary,
                  }}
                >
                  Discover one of the most celebrated watch collections ever
                  created, combining precision engineering with timeless design.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
