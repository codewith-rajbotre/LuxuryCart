"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface RollsRoyceHeroProps {
  brand: any;
  theme: any;
}

export default function RollsRoyceHero({ brand, theme }: RollsRoyceHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: theme.background_color,
      }}
    >
      {/* Luxury ambient effect */}

      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full blur-3xl"
        style={{
          backgroundColor: `${theme.accent_color}18`,
        }}
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full blur-3xl"
        style={{
          backgroundColor: `${theme.primary_color}12`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-36 lg:py-48">
        <div className="max-w-4xl">
          {/* Eyebrow */}

          <p
            className="text-xs uppercase tracking-[0.55em]"
            style={{
              color: theme.accent_color,
            }}
          >
            Rolls-Royce Motor Cars
          </p>

          {/* Heading */}

          <h1
            className="mt-8 text-6xl font-light leading-[1.05] tracking-tight md:text-8xl"
            style={{
              color: theme.text_primary,
            }}
          >
            Effortless.
            <br />
            Extraordinary.
          </h1>

          {/* Description */}

          <p
            className="mt-10 max-w-2xl text-lg leading-8"
            style={{
              color: theme.text_secondary,
            }}
          >
            A world where exceptional craftsmanship, individual expression, and
            extraordinary design come together to create something truly
            remarkable.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">
            <Button
              className="rounded-none px-8 py-6"
              style={{
                backgroundColor: theme.primary_color,
                color: theme.button_text,
              }}
            >
              <Link href="#models">Explore Models</Link>
            </Button>

            {brand.website_url && (
              <Button
                variant="outline"
                className="rounded-none px-8 py-6"
                style={{
                  borderColor: theme.accent_color,
                  color: theme.text_primary,
                  backgroundColor: "transparent",
                }}
              >
                <a
                  href={brand.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Bottom statistics */}

        <div
          className="mt-32 grid grid-cols-1 gap-10 border-t pt-12 sm:grid-cols-3"
          style={{
            borderColor: theme.border_color,
          }}
        >
          <div>
            <p
              className="text-4xl font-light"
              style={{
                color: theme.accent_color,
              }}
            >
              1906
            </p>

            <p
              className="mt-2 text-xs uppercase tracking-[0.25em]"
              style={{
                color: theme.text_muted,
              }}
            >
              Founded
            </p>
          </div>

          <div>
            <p
              className="text-4xl font-light"
              style={{
                color: theme.accent_color,
              }}
            >
              Bespoke
            </p>

            <p
              className="mt-2 text-xs uppercase tracking-[0.25em]"
              style={{
                color: theme.text_muted,
              }}
            >
              Individual Expression
            </p>
          </div>

          <div>
            <p
              className="text-4xl font-light"
              style={{
                color: theme.accent_color,
              }}
            >
              100+
            </p>

            <p
              className="mt-2 text-xs uppercase tracking-[0.25em]"
              style={{
                color: theme.text_muted,
              }}
            >
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
