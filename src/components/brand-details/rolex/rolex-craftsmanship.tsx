import Image from "next/image";

interface RolexCraftsmanshipProps {
  brand: any;
  theme: any;
}

export default function RolexCraftsmanship({
  brand,
  theme,
}: RolexCraftsmanshipProps) {
  return (
    <section
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 lg:grid-cols-2">
        <div>
          <p
            className="mb-4 text-sm uppercase tracking-[0.35em]"
            style={{
              color: theme.primary_color,
            }}
          >
            Craftsmanship
          </p>

          <h2
            className="text-5xl font-light leading-tight"
            style={{
              color: theme.text_primary,
            }}
          >
            Excellence in Every Detail
          </h2>

          <p
            className="mt-10 text-lg leading-9"
            style={{
              color: theme.text_secondary,
            }}
          >
            Every Rolex timepiece is assembled by highly skilled artisans using
            advanced manufacturing techniques and decades of expertise. Each
            component is inspected, tested and refined to ensure unmatched
            precision, durability and elegance.
          </p>

          <div className="mt-14 space-y-8">
            <div>
              <h3
                className="text-xl font-medium"
                style={{ color: theme.text_primary }}
              >
                Precision Engineering
              </h3>

              <p className="mt-2" style={{ color: theme.text_muted }}>
                Swiss-made movements built to chronometer standards.
              </p>
            </div>

            <div>
              <h3
                className="text-xl font-medium"
                style={{ color: theme.text_primary }}
              >
                Premium Materials
              </h3>

              <p className="mt-2" style={{ color: theme.text_muted }}>
                Oystersteel, precious metals and scratch-resistant sapphire
                crystal.
              </p>
            </div>

            <div>
              <h3
                className="text-xl font-medium"
                style={{ color: theme.text_primary }}
              >
                Rigorous Testing
              </h3>

              <p className="mt-2" style={{ color: theme.text_muted }}>
                Every watch undergoes extensive quality assurance before leaving
                the manufacture.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex h-175 items-center justify-center overflow-hidden rounded-2xl"
          style={{
            backgroundColor: theme.card_color,
            border: `1px solid ${theme.border_color}`,
          }}
        >
          {brand.banner_url ? (
            <Image
              src={brand.banner_url}
              alt={brand.name}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className="text-center"
              style={{
                color: theme.text_secondary,
              }}
            >
              <p className="text-xl font-light">Rolex Craftsmanship</p>
              <p className="mt-2 text-sm">Banner Image Coming Soon</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
