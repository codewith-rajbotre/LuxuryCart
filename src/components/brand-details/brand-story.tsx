interface BrandStoryProps {
  brand: any;
  theme: any;
  content: any;
}

export default function BrandStory({ brand, theme, content }: BrandStoryProps) {
  return (
    <section
      id="story"
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <p
          className="text-sm uppercase tracking-[0.4em]"
          style={{
            color: theme.primary_color,
          }}
        >
          {content?.story_eyebrow ?? "Our Story"}
        </p>

        <div className="mt-8 grid gap-16 lg:grid-cols-2">
          <h2
            className="text-5xl font-light leading-tight"
            style={{
              color: theme.text_primary,
            }}
          >
            {content?.story_title ?? `The story of ${brand.name}`}
          </h2>

          <p
            className="text-lg leading-9"
            style={{
              color: theme.text_secondary,
            }}
          >
            {content?.story_description ??
              brand.description ??
              "A legacy shaped by exceptional craftsmanship and timeless design."}
          </p>
        </div>
      </div>
    </section>
  );
}
