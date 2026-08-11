interface PatekPhilippeFooterProps {
  brand: any;
  theme: any;
}

export default function PatekPhilippeFooter({
  brand,
  theme,
}: PatekPhilippeFooterProps) {
  return (
    <footer
      className="border-t py-16"
      style={{
        backgroundColor: theme.footer_color,
        borderColor: theme.divider_color,
        color: theme.text_inverse,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-light tracking-[0.15em]"
              style={{ color: theme.text_inverse }}
            >
              {brand.name}
            </h3>

            <p
              className="mt-5 max-w-sm text-sm leading-7"
              style={{ color: theme.text_muted }}
            >
              {brand.description ??
                "A legacy of independent watchmaking, exceptional craftsmanship and timeless elegance."}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.25em]"
              style={{ color: theme.accent_color }}
            >
              Explore
            </h4>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href="#collections"
                className="block transition-opacity hover:opacity-70"
                style={{ color: theme.text_inverse }}
              >
                Collections
              </a>

              <a
                href="#heritage"
                className="block transition-opacity hover:opacity-70"
                style={{ color: theme.text_inverse }}
              >
                Heritage
              </a>

              <a
                href="#craftsmanship"
                className="block transition-opacity hover:opacity-70"
                style={{ color: theme.text_inverse }}
              >
                Craftsmanship
              </a>

              <a
                href="#gallery"
                className="block transition-opacity hover:opacity-70"
                style={{ color: theme.text_inverse }}
              >
                Gallery
              </a>
            </div>
          </div>

          {/* Brand Information */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.25em]"
              style={{ color: theme.accent_color }}
            >
              Maison
            </h4>

            <div className="mt-5 space-y-3 text-sm">
              <p style={{ color: theme.text_secondary }}>
                Founded: {brand.founded_year ?? "1839"}
              </p>

              <p style={{ color: theme.text_secondary }}>
                Country: {brand.country ?? "Switzerland"}
              </p>

              <p style={{ color: theme.text_secondary }}>
                Independent Swiss watchmaking
              </p>
            </div>
          </div>

          {/* Website */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.25em]"
              style={{ color: theme.accent_color }}
            >
              Discover
            </h4>

            <p
              className="mt-5 text-sm leading-7"
              style={{ color: theme.text_muted }}
            >
              Discover the world of Patek Philippe and explore its extraordinary
              tradition of fine watchmaking.
            </p>

            {brand.website_url && (
              <a
                href={brand.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border px-5 py-3 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                style={{
                  color: theme.text_inverse,
                  borderColor: theme.border_color,
                }}
              >
                Official Website
              </a>
            )}
          </div>
        </div>

        <div
          className="mt-14 border-t pt-8 text-center text-xs"
          style={{
            borderColor: theme.divider_color,
            color: theme.text_muted,
          }}
        >
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
