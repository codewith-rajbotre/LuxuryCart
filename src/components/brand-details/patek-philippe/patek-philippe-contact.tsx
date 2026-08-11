interface PatekPhilippeContactProps {
  brand: any;
  theme: any;
}

export default function PatekPhilippeContact({
  brand,
  theme,
}: PatekPhilippeContactProps) {
  return (
    <section
      id="contact"
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p
          className="text-sm uppercase tracking-[0.4em]"
          style={{
            color: theme.primary_color,
          }}
        >
          Discover {brand.name}
        </p>

        <h2
          className="mt-6 text-5xl font-light leading-tight md:text-6xl"
          style={{
            color: theme.text_primary,
          }}
        >
          The Art of Fine Watchmaking
        </h2>

        <p
          className="mx-auto mt-8 max-w-3xl text-lg leading-8"
          style={{
            color: theme.text_secondary,
          }}
        >
          Discover exceptional timepieces shaped by generations of
          craftsmanship, technical mastery and an uncompromising pursuit of
          excellence.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#collections"
            className="px-8 py-4 text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
            style={{
              backgroundColor: theme.primary_color,
              color: theme.button_text,
            }}
          >
            Explore Collections
          </a>

          {brand.website_url && (
            <a
              href={brand.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-8 py-4 text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
              style={{
                borderColor: theme.border_color,
                color: theme.text_primary,
              }}
            >
              Official Website
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
