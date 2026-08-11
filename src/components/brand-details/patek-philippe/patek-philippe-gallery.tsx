import { ArrowUpRight } from "lucide-react";

interface PatekPhilippeGalleryProps {
  brand: any;
  theme: any;
}

const galleryItems = [
  {
    number: "01",
    title: "The Art of Watchmaking",
    description:
      "Traditional techniques brought together with precision engineering and contemporary expertise.",
  },
  {
    number: "02",
    title: "Geneva Atelier",
    description:
      "A culture of craftsmanship where every component is finished and assembled with exceptional care.",
  },
  {
    number: "03",
    title: "Mechanical Mastery",
    description:
      "Sophisticated movements developed for precision, reliability and enduring performance.",
  },
  {
    number: "04",
    title: "Timeless Design",
    description:
      "Balanced proportions and refined details designed to remain relevant across generations.",
  },
  {
    number: "05",
    title: "Exceptional Complications",
    description:
      "Complex mechanical functions demonstrating the highest levels of horological expertise.",
  },
  {
    number: "06",
    title: "A Legacy for Tomorrow",
    description:
      "A continuing commitment to preserving the art of fine watchmaking for future generations.",
  },
];

export default function PatekPhilippeGallery({
  brand,
  theme,
}: PatekPhilippeGalleryProps) {
  return (
    <section
      id="gallery"
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p
              className="text-xs uppercase tracking-[0.4em]"
              style={{
                color: theme.primary_color,
              }}
            >
              The World of Patek Philippe
            </p>

            <h2
              className="mt-5 text-5xl font-light leading-tight md:text-6xl"
              style={{
                color: theme.text_primary,
              }}
            >
              Where every detail
              <br />
              <span style={{ color: theme.secondary_color }}>
                tells a story.
              </span>
            </h2>
          </div>

          <p
            className="max-w-xl self-end text-lg leading-8 lg:justify-self-end"
            style={{
              color: theme.text_secondary,
            }}
          >
            Discover the philosophy behind Patek Philippe through its
            craftsmanship, mechanical expertise and enduring approach to design.
          </p>
        </div>

        {/* Gallery */}
        <div
          className="mt-20 grid gap-px border"
          style={{ borderColor: theme.border_color }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.number}
              className={`group relative min-h-80 overflow-hidden border-b p-8 transition-all duration-500 md:p-12 ${
                index % 2 === 0 ? "md:col-span-1" : "md:col-span-1"
              }`}
              style={{
                backgroundColor: theme.card_color,
                borderColor: theme.border_color,
              }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full border transition-transform duration-700 group-hover:scale-125"
                style={{
                  borderColor: theme.divider_color,
                }}
              />

              <div
                className="absolute right-10 top-10 h-32 w-32 rounded-full border transition-transform duration-700 group-hover:scale-110"
                style={{
                  borderColor: theme.border_color,
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs tracking-[0.3em]"
                    style={{
                      color: theme.text_muted,
                    }}
                  >
                    {item.number}
                  </span>

                  <ArrowUpRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    style={{
                      color: theme.accent_color,
                    }}
                  />
                </div>

                <div className="mt-20 max-w-lg">
                  <h3
                    className="text-3xl font-light"
                    style={{
                      color: theme.text_primary,
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    className="mt-5 h-px w-12 transition-all duration-500 group-hover:w-20"
                    style={{
                      backgroundColor: theme.accent_color,
                    }}
                  />

                  <p
                    className="mt-6 leading-7"
                    style={{
                      color: theme.text_secondary,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className="mt-24 border-y py-16 text-center"
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
            Every Patek Philippe timepiece is an expression of patience,
            precision and the pursuit of something that can endure.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className="h-px w-10"
              style={{
                backgroundColor: theme.accent_color,
              }}
            />

            <span
              className="text-xs uppercase tracking-[0.35em]"
              style={{
                color: theme.secondary_color,
              }}
            >
              Patek Philippe
            </span>

            <span
              className="h-px w-10"
              style={{
                backgroundColor: theme.accent_color,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
