"use client";

interface RollsRoyceStoryProps {
  brand: any;
  theme: any;
}

export default function RollsRoyceStory({
  brand,
  theme,
}: RollsRoyceStoryProps) {
  return (
    <section
      id="story"
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Text */}

        <div>
          <p
            className="text-xs uppercase tracking-[0.45em]"
            style={{
              color: theme.accent_color,
            }}
          >
            The Rolls-Royce Story
          </p>

          <h2
            className="mt-6 text-5xl font-light leading-tight md:text-6xl"
            style={{
              color: theme.text_primary,
            }}
          >
            A Legacy of
            <br />
            Extraordinary.
          </h2>

          <p
            className="mt-10 text-lg leading-9"
            style={{
              color: theme.text_secondary,
            }}
          >
            Rolls-Royce represents a distinctive approach to automotive luxury,
            where craftsmanship, precision and individual expression come
            together.
          </p>

          <p
            className="mt-6 text-lg leading-9"
            style={{
              color: theme.text_secondary,
            }}
          >
            Every detail is considered with purpose, creating an experience that
            goes beyond transportation and becomes a reflection of
            individuality.
          </p>
        </div>

        {/* Luxury information panel */}

        <div
          className="border p-10 md:p-14"
          style={{
            backgroundColor: theme.card_color,
            borderColor: theme.border_color,
          }}
        >
          <div className="space-y-12">
            <div>
              <p
                className="text-5xl font-light"
                style={{
                  color: theme.accent_color,
                }}
              >
                1906
              </p>

              <p
                className="mt-3 text-xs uppercase tracking-[0.3em]"
                style={{
                  color: theme.text_muted,
                }}
              >
                The Beginning
              </p>
            </div>

            <div
              className="border-t pt-10"
              style={{
                borderColor: theme.divider_color,
              }}
            >
              <p
                className="text-5xl font-light"
                style={{
                  color: theme.accent_color,
                }}
              >
                Bespoke
              </p>

              <p
                className="mt-3 text-xs uppercase tracking-[0.3em]"
                style={{
                  color: theme.text_muted,
                }}
              >
                Crafted Around You
              </p>
            </div>

            <div
              className="border-t pt-10"
              style={{
                borderColor: theme.divider_color,
              }}
            >
              <p
                className="text-5xl font-light"
                style={{
                  color: theme.accent_color,
                }}
              >
                100+
              </p>

              <p
                className="mt-3 text-xs uppercase tracking-[0.3em]"
                style={{
                  color: theme.text_muted,
                }}
              >
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
