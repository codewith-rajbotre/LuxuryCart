import Image from "next/image";

interface RolexStoryProps {
  brand: any;
  theme: any;
}

export default function RolexStory({ brand, theme }: RolexStoryProps) {
  return (
    <section
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <div className="relative h-162.5 overflow-hidden rounded-2xl">
          {brand.banner_url ? (
            <Image
              src={brand.banner_url}
              alt={brand.name}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center rounded-2xl"
              style={{
                backgroundColor: theme.card_color,
                border: `1px solid ${theme.border_color}`,
              }}
            >
              <div className="text-center">
                <h3
                  className="text-2xl font-light"
                  style={{
                    color: theme.text_primary,
                  }}
                >
                  {brand.name}
                </h3>

                <p
                  className="mt-2"
                  style={{
                    color: theme.text_secondary,
                  }}
                >
                  Heritage Image Coming Soon
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <p
            className="mb-4 text-sm uppercase tracking-[0.4em]"
            style={{
              color: theme.primary_color,
            }}
          >
            Since 1905
          </p>

          <h2
            className="text-5xl font-light leading-tight"
            style={{
              color: theme.text_primary,
            }}
          >
            A Legacy Built
            <br />
            On Precision.
          </h2>

          <p
            className="mt-10 text-lg leading-9"
            style={{
              color: theme.text_secondary,
            }}
          >
            For more than a century, Rolex has represented precision,
            reliability and timeless elegance. Every creation combines
            engineering excellence, meticulous craftsmanship and an enduring
            pursuit of perfection that has defined generations of luxury
            watchmaking.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-10">
            <div>
              <h3
                className="text-5xl font-light"
                style={{
                  color: theme.secondary_color,
                }}
              >
                1905
              </h3>

              <p
                className="mt-2"
                style={{
                  color: theme.text_muted,
                }}
              >
                Founded in London
              </p>
            </div>

            <div>
              <h3
                className="text-5xl font-light"
                style={{
                  color: theme.secondary_color,
                }}
              >
                100+
              </h3>

              <p
                className="mt-2"
                style={{
                  color: theme.text_muted,
                }}
              >
                Years of Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
