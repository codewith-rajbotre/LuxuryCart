"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface RolexHeroProps {
  brand: any;
  theme: any;
}

export default function RolexHero({ brand, theme }: RolexHeroProps) {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden"
      style={{
        backgroundColor: theme.background_color,
      }}
    >
      {brand.banner_url && (
        <Image
          src={brand.banner_url}
          alt={brand.name}
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6">
        <p
          className="mb-4 text-sm uppercase tracking-[0.45em]"
          style={{
            color: theme.secondary_color,
          }}
        >
          Swiss Luxury Watchmaker
        </p>

        <h1
          className="max-w-4xl text-6xl font-light leading-tight lg:text-8xl"
          style={{
            color: "#FFFFFF",
          }}
        >
          {brand.name}
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg leading-8"
          style={{
            color: "#F5F5F5",
          }}
        >
          Excellence in precision, craftsmanship, and timeless elegance. Every
          creation reflects decades of innovation, heritage, and uncompromising
          quality.
        </p>

        <div className="mt-12 flex gap-5">
          <Button
            size="lg"
            style={{
              backgroundColor: theme.primary_color,
              color: theme.button_text,
            }}
          >
            Discover Collection
          </Button>

          {brand.website_url && (
            <Button
              size="lg"
              variant="outline"
              style={{
                borderColor: theme.secondary_color,
                color: "#FFFFFF",
              }}
              onClick={() =>
                window.open(brand.website_url, "_blank", "noopener,noreferrer")
              }
            >
              Official Website
            </Button>
          )}
        </div>

        <div className="mt-20 grid grid-cols-3 gap-10 lg:max-w-3xl">
          <div>
            <h3
              className="text-4xl font-light"
              style={{
                color: theme.secondary_color,
              }}
            >
              1905
            </h3>

            <p
              className="mt-2 text-sm uppercase tracking-[0.3em]"
              style={{
                color: "#D6D6D6",
              }}
            >
              Founded
            </p>
          </div>

          <div>
            <h3
              className="text-4xl font-light"
              style={{
                color: theme.secondary_color,
              }}
            >
              Swiss
            </h3>

            <p
              className="mt-2 text-sm uppercase tracking-[0.3em]"
              style={{
                color: "#D6D6D6",
              }}
            >
              Heritage
            </p>
          </div>

          <div>
            <h3
              className="text-4xl font-light"
              style={{
                color: theme.secondary_color,
              }}
            >
              100+
            </h3>

            <p
              className="mt-2 text-sm uppercase tracking-[0.3em]"
              style={{
                color: "#D6D6D6",
              }}
            >
              Years of Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
