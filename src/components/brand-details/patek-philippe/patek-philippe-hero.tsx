import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PatekPhilippeHeroProps {
  brand: any;
  theme: any;
}

export default function PatekPhilippeHero({
  brand,
  theme,
}: PatekPhilippeHeroProps) {
  return (
    <section
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden"
      style={{
        backgroundColor: theme.background_color,
        color: theme.text_primary,
      }}
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          backgroundColor: theme.accent_color,
          opacity: 0.06,
        }}
      />

      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-px"
        style={{
          backgroundColor: theme.divider_color,
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">
        {/* Content */}
        <div className="max-w-2xl">
          <p
            className="mb-6 text-xs uppercase tracking-[0.45em]"
            style={{
              color: theme.primary_color,
            }}
          >
            Since 1839
          </p>

          <h1
            className="text-6xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
            style={{
              color: theme.text_primary,
            }}
          >
            You never actually
            <br />
            <span style={{ color: theme.secondary_color }}>
              own a Patek Philippe.
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-lg leading-8"
            style={{
              color: theme.text_secondary,
            }}
          >
            You merely look after it for the next generation. Discover a
            tradition of fine watchmaking defined by craftsmanship, precision
            and enduring elegance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              className="rounded-none px-7"
              style={{
                backgroundColor: theme.primary_color,
                color: theme.button_text,
              }}
            >
              Discover the Collection
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="rounded-none px-7"
              style={{
                borderColor: theme.border_color,
                color: theme.text_primary,
                backgroundColor: "transparent",
              }}
            >
              Our Heritage
            </Button>
          </div>

          {/* Brand information */}
          <div
            className="mt-16 grid max-w-lg grid-cols-2 gap-8 border-t pt-8"
            style={{
              borderColor: theme.divider_color,
            }}
          >
            <div>
              <p
                className="text-3xl font-light"
                style={{
                  color: theme.secondary_color,
                }}
              >
                1839
              </p>

              <p
                className="mt-2 text-sm"
                style={{
                  color: theme.text_muted,
                }}
              >
                Founded in Geneva
              </p>
            </div>

            <div>
              <p
                className="text-3xl font-light"
                style={{
                  color: theme.secondary_color,
                }}
              >
                180+
              </p>

              <p
                className="mt-2 text-sm"
                style={{
                  color: theme.text_muted,
                }}
              >
                Years of watchmaking
              </p>
            </div>
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="relative hidden min-h-150 lg:block">
          <div
            className="absolute inset-10 border"
            style={{
              borderColor: theme.border_color,
            }}
          />

          <div
            className="absolute inset-20 flex items-center justify-center"
            style={{
              backgroundColor: theme.surface_color,
            }}
          >
            <div className="text-center">
              <p
                className="text-5xl font-light tracking-[0.15em]"
                style={{
                  color: theme.text_primary,
                }}
              >
                PATEK
              </p>

              <p
                className="mt-3 text-sm tracking-[0.35em]"
                style={{
                  color: theme.secondary_color,
                }}
              >
                PHILIPPE
              </p>

              <div
                className="mx-auto mt-8 h-px w-24"
                style={{
                  backgroundColor: theme.accent_color,
                }}
              />

              <p
                className="mt-6 text-xs uppercase tracking-[0.3em]"
                style={{
                  color: theme.text_muted,
                }}
              >
                Geneve
              </p>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 flex items-center gap-3 text-xs uppercase tracking-[0.3em]"
            style={{
              color: theme.text_muted,
            }}
          >
            <ArrowDown className="h-4 w-4" />
            Explore
          </div>
        </div>
      </div>
    </section>
  );
}
