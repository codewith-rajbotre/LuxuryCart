import { Check, Gem, Settings, Sparkles } from "lucide-react";

interface PatekPhilippeCraftsmanshipProps {
  brand: any;
  theme: any;
}

const principles = [
  {
    icon: Settings,
    title: "Mechanical Excellence",
    description:
      "Highly refined mechanical movements created with exceptional precision and attention to performance.",
  },
  {
    icon: Gem,
    title: "Exceptional Finishing",
    description:
      "Every visible and hidden component receives meticulous finishing according to traditional watchmaking standards.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "From the smallest component to the final assembly, every element is examined with uncompromising care.",
  },
];

export default function PatekPhilippeCraftsmanship({
  brand,
  theme,
}: PatekPhilippeCraftsmanshipProps) {
  return (
    <section
      id="craftsmanship"
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <p
            className="text-xs uppercase tracking-[0.4em]"
            style={{
              color: theme.primary_color,
            }}
          >
            Craftsmanship
          </p>

          <h2
            className="mt-5 text-5xl font-light leading-tight md:text-6xl"
            style={{
              color: theme.text_primary,
            }}
          >
            The art of
            <br />
            <span style={{ color: theme.secondary_color }}>
              mastering time.
            </span>
          </h2>

          <p
            className="mt-8 text-lg leading-8"
            style={{
              color: theme.text_secondary,
            }}
          >
            Patek Philippe combines centuries-old watchmaking traditions with
            advanced technical expertise to create timepieces of exceptional
            complexity and refinement.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* Visual */}
          <div
            className="relative flex min-h-130 items-center justify-center overflow-hidden border"
            style={{
              backgroundColor: theme.card_color,
              borderColor: theme.border_color,
            }}
          >
            <div
              className="absolute h-100 w-100 rounded-full border"
              style={{
                borderColor: theme.border_color,
              }}
            />

            <div
              className="absolute h-75 w-75 rounded-full border"
              style={{
                borderColor: theme.divider_color,
              }}
            />

            <div
              className="absolute h-50 w-50 rounded-full border"
              style={{
                borderColor: theme.accent_color,
              }}
            />

            {/* Watch-inspired center */}
            <div
              className="relative flex h-36 w-36 items-center justify-center rounded-full border"
              style={{
                backgroundColor: theme.surface_color,
                borderColor: theme.secondary_color,
              }}
            >
              <div className="text-center">
                <p
                  className="text-xl font-light tracking-[0.15em]"
                  style={{
                    color: theme.text_primary,
                  }}
                >
                  PATEK
                </p>

                <p
                  className="mt-1 text-[8px] uppercase tracking-[0.3em]"
                  style={{
                    color: theme.secondary_color,
                  }}
                >
                  Philippe
                </p>

                <div
                  className="mx-auto mt-3 h-px w-8"
                  style={{
                    backgroundColor: theme.accent_color,
                  }}
                />

                <p
                  className="mt-2 text-[7px] uppercase tracking-[0.25em]"
                  style={{
                    color: theme.text_muted,
                  }}
                >
                  Geneve
                </p>
              </div>
            </div>

            <div
              className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.35em]"
              style={{
                color: theme.text_muted,
              }}
            >
              Fine Watchmaking
            </div>
          </div>

          {/* Principles */}
          <div className="flex flex-col justify-center">
            <div className="space-y-10">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <div
                    key={principle.title}
                    className="border-b pb-10"
                    style={{
                      borderColor: theme.divider_color,
                    }}
                  >
                    <div className="flex gap-6">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center border"
                        style={{
                          borderColor: theme.border_color,
                          backgroundColor: theme.card_color,
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{
                            color: theme.accent_color,
                          }}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs"
                            style={{
                              color: theme.text_muted,
                            }}
                          >
                            0{index + 1}
                          </span>

                          <h3
                            className="text-2xl font-light"
                            style={{
                              color: theme.text_primary,
                            }}
                          >
                            {principle.title}
                          </h3>
                        </div>

                        <p
                          className="mt-4 leading-7"
                          style={{
                            color: theme.text_secondary,
                          }}
                        >
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quality points */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Traditional craftsmanship",
                "Precision engineering",
                "Exceptional finishing",
                "Generational expertise",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check
                    className="h-4 w-4 shrink-0"
                    style={{
                      color: theme.accent_color,
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: theme.text_secondary,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div
          className="mt-24 border-y py-14 text-center"
          style={{
            borderColor: theme.divider_color,
          }}
        >
          <p
            className="mx-auto max-w-4xl text-2xl font-light leading-relaxed md:text-3xl"
            style={{
              color: theme.text_primary,
            }}
          >
            Precision is not simply measured in seconds. It is measured in the
            generations a timepiece is designed to transcend.
          </p>
        </div>
      </div>
    </section>
  );
}
