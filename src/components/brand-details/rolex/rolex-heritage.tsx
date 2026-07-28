interface RolexHeritageProps {
  brand: any;
  theme: any;
}

const timeline = [
  {
    year: "1905",
    title: "The Beginning",
    description:
      "Founded with a vision to create precise and reliable wristwatches.",
  },
  {
    year: "1926",
    title: "Oyster Case",
    description:
      "Introduction of the world's first waterproof wristwatch case.",
  },
  {
    year: "1953",
    title: "Submariner",
    description: "Launch of one of the most iconic diving watches ever made.",
  },
  {
    year: "1963",
    title: "Daytona",
    description: "A chronograph that became synonymous with motorsport.",
  },
  {
    year: "Today",
    title: "Global Legacy",
    description: "Continuing to set the benchmark for luxury watchmaking.",
  },
];

export default function RolexHeritage({ theme }: RolexHeritageProps) {
  return (
    <section
      id="heritage"
      className="py-32"
      style={{
        backgroundColor: theme.background_color,
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="text-sm uppercase tracking-[0.35em]"
          style={{
            color: theme.primary_color,
          }}
        >
          Heritage
        </p>

        <h2
          className="mt-4 text-5xl font-light"
          style={{
            color: theme.text_primary,
          }}
        >
          A Century of Innovation
        </h2>

        <div
          className="mt-20 border-l-2 pl-10"
          style={{
            borderColor: theme.primary_color,
          }}
        >
          {timeline.map((item) => (
            <div key={item.year} className="relative mb-20">
              <div
                className="absolute -left-12.25 h-5 w-5 rounded-full"
                style={{
                  backgroundColor: theme.primary_color,
                }}
              />

              <h3
                className="text-3xl font-light"
                style={{
                  color: theme.secondary_color,
                }}
              >
                {item.year}
              </h3>

              <h4
                className="mt-4 text-2xl font-medium"
                style={{
                  color: theme.text_primary,
                }}
              >
                {item.title}
              </h4>

              <p
                className="mt-4 max-w-3xl leading-8"
                style={{
                  color: theme.text_secondary,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
