interface PatekPhilippeHeritageProps {
  brand: any;
  theme: any;
}

const timeline = [
  {
    year: "1839",
    title: "The Beginning",
    description:
      "Patek Philippe is founded in Geneva, establishing a tradition dedicated to exceptional Swiss watchmaking.",
  },
  {
    year: "1868",
    title: "A Historic Milestone",
    description:
      "The manufacture creates one of the earliest Swiss wristwatches, demonstrating its commitment to innovation and refinement.",
  },
  {
    year: "1932",
    title: "The Calatrava",
    description:
      "The Calatrava becomes a defining expression of pure and timeless Patek Philippe design.",
  },
  {
    year: "1976",
    title: "The Nautilus",
    description:
      "The Nautilus introduces a distinctive interpretation of luxury sports watchmaking.",
  },
  {
    year: "1997",
    title: "The Aquanaut",
    description:
      "The Aquanaut brings a contemporary and dynamic character to the Patek Philippe collection.",
  },
  {
    year: "Today",
    title: "A Living Legacy",
    description:
      "Patek Philippe continues to preserve traditional craftsmanship while advancing the art of mechanical watchmaking.",
  },
];

export default function PatekPhilippeHeritage({
  brand,
  theme,
}: PatekPhilippeHeritageProps) {
  return (
    <section
      id="heritage"
      className="py-32"
      style={{
        backgroundColor: theme.background_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <p
            className="text-xs uppercase tracking-[0.4em]"
            style={{
              color: theme.primary_color,
            }}
          >
            Our Heritage
          </p>

          <h2
            className="mt-5 text-5xl font-light leading-tight md:text-6xl"
            style={{
              color: theme.text_primary,
            }}
          >
            Nearly two centuries
            <br />
            <span style={{ color: theme.secondary_color }}>
              devoted to time.
            </span>
          </h2>

          <p
            className="mt-8 text-lg leading-8"
            style={{
              color: theme.text_secondary,
            }}
          >
            From its origins in Geneva to its position among the world's most
            respected watchmakers, Patek Philippe has built its identity around
            innovation, craftsmanship and an enduring respect for tradition.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Timeline line */}
          <div
            className="absolute bottom-0 left-4 top-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{
              backgroundColor: theme.divider_color,
            }}
          />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative grid md:grid-cols-2"
                >
                  {/* Left side */}
                  <div
                    className={`hidden md:block ${
                      isEven ? "pr-20 text-right" : ""
                    }`}
                  >
                    {isEven && (
                      <div>
                        <p
                          className="text-4xl font-light"
                          style={{
                            color: theme.secondary_color,
                          }}
                        >
                          {item.year}
                        </p>

                        <h3
                          className="mt-3 text-2xl font-light"
                          style={{
                            color: theme.text_primary,
                          }}
                        >
                          {item.title}
                        </h3>

                        <p
                          className="mt-4 leading-7"
                          style={{
                            color: theme.text_secondary,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right side */}
                  <div className={`hidden md:block ${!isEven ? "pl-20" : ""}`}>
                    {!isEven && (
                      <div>
                        <p
                          className="text-4xl font-light"
                          style={{
                            color: theme.secondary_color,
                          }}
                        >
                          {item.year}
                        </p>

                        <h3
                          className="mt-3 text-2xl font-light"
                          style={{
                            color: theme.text_primary,
                          }}
                        >
                          {item.title}
                        </h3>

                        <p
                          className="mt-4 leading-7"
                          style={{
                            color: theme.text_secondary,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2"
                    style={{
                      backgroundColor: theme.accent_color,
                      boxShadow: `0 0 0 5px ${theme.background_color}`,
                    }}
                  />

                  {/* Mobile */}
                  <div className="pl-10 md:hidden">
                    <p
                      className="text-3xl font-light"
                      style={{
                        color: theme.secondary_color,
                      }}
                    >
                      {item.year}
                    </p>

                    <h3
                      className="mt-3 text-2xl font-light"
                      style={{
                        color: theme.text_primary,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-4 leading-7"
                      style={{
                        color: theme.text_secondary,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div
          className="mt-28 border-t pt-14 text-center"
          style={{
            borderColor: theme.divider_color,
          }}
        >
          <p
            className="text-xs uppercase tracking-[0.4em]"
            style={{
              color: theme.text_muted,
            }}
          >
            Geneva · Switzerland
          </p>

          <p
            className="mx-auto mt-6 max-w-3xl text-2xl font-light leading-relaxed md:text-3xl"
            style={{
              color: theme.text_primary,
            }}
          >
            Tradition is not the preservation of the past. It is the foundation
            upon which the future of fine watchmaking is created.
          </p>
        </div>
      </div>
    </section>
  );
}
