import { Award, Gem, ShieldCheck } from "lucide-react";

interface PatekPhilippeStoryProps {
  brand: any;
  theme: any;
}

export default function PatekPhilippeStory({
  brand,
  theme,
}: PatekPhilippeStoryProps) {
  return (
    <section
      id="heritage"
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Introduction */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.4em]"
              style={{
                color: theme.primary_color,
              }}
            >
              The Patek Philippe Tradition
            </p>

            <h2
              className="mt-6 text-5xl font-light leading-tight md:text-6xl"
              style={{
                color: theme.text_primary,
              }}
            >
              A legacy of
              <br />
              <span style={{ color: theme.secondary_color }}>
                uncompromising excellence.
              </span>
            </h2>

            <p
              className="mt-8 max-w-xl text-lg leading-8"
              style={{
                color: theme.text_secondary,
              }}
            >
              Since 1839, Patek Philippe has remained dedicated to the art of
              traditional Swiss watchmaking. Each timepiece reflects a pursuit
              of precision, refinement and mechanical excellence.
            </p>

            <p
              className="mt-6 max-w-xl leading-8"
              style={{
                color: theme.text_secondary,
              }}
            >
              From the smallest component to the most sophisticated
              complication, every detail is considered with exceptional care.
              The result is a timepiece designed not simply for today, but for
              generations to come.
            </p>
          </div>

          {/* Philosophy */}
          <div className="grid gap-6">
            <div
              className="border p-8"
              style={{
                backgroundColor: theme.card_color,
                borderColor: theme.border_color,
              }}
            >
              <Award
                className="h-8 w-8"
                style={{
                  color: theme.accent_color,
                }}
              />

              <h3
                className="mt-6 text-2xl font-light"
                style={{
                  color: theme.text_primary,
                }}
              >
                Independent Tradition
              </h3>

              <p
                className="mt-4 leading-7"
                style={{
                  color: theme.text_secondary,
                }}
              >
                An enduring commitment to traditional watchmaking and
                independent craftsmanship.
              </p>
            </div>

            <div
              className="border p-8"
              style={{
                backgroundColor: theme.card_color,
                borderColor: theme.border_color,
              }}
            >
              <Gem
                className="h-8 w-8"
                style={{
                  color: theme.accent_color,
                }}
              />

              <h3
                className="mt-6 text-2xl font-light"
                style={{
                  color: theme.text_primary,
                }}
              >
                Exceptional Craftsmanship
              </h3>

              <p
                className="mt-4 leading-7"
                style={{
                  color: theme.text_secondary,
                }}
              >
                Meticulous finishing, refined movements and exceptional
                attention to every component.
              </p>
            </div>

            <div
              className="border p-8"
              style={{
                backgroundColor: theme.card_color,
                borderColor: theme.border_color,
              }}
            >
              <ShieldCheck
                className="h-8 w-8"
                style={{
                  color: theme.accent_color,
                }}
              />

              <h3
                className="mt-6 text-2xl font-light"
                style={{
                  color: theme.text_primary,
                }}
              >
                Built for Generations
              </h3>

              <p
                className="mt-4 leading-7"
                style={{
                  color: theme.text_secondary,
                }}
              >
                Timepieces created with longevity, reliability and enduring
                value at their heart.
              </p>
            </div>
          </div>
        </div>

        {/* Heritage statement */}
        <div
          className="mt-28 border-y py-16 text-center"
          style={{
            borderColor: theme.divider_color,
          }}
        >
          <p
            className="mx-auto max-w-4xl text-3xl font-light leading-relaxed md:text-4xl"
            style={{
              color: theme.text_primary,
            }}
          >
            “One of the last family-owned independent Swiss watch manufacturers,
            preserving the art of fine watchmaking for future generations.”
          </p>

          <p
            className="mt-6 text-xs uppercase tracking-[0.35em]"
            style={{
              color: theme.secondary_color,
            }}
          >
            Geneva · Switzerland
          </p>
        </div>
      </div>
    </section>
  );
}
