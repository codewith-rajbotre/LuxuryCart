import Link from "next/link";

interface RollsRoyceFooterProps {
  brand: any;
  theme: any;
}

export default function RollsRoyceFooter({
  brand,
  theme,
}: RollsRoyceFooterProps) {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: theme.footer_color,
        borderColor: theme.border_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p
              className="text-sm uppercase tracking-[0.4em]"
              style={{
                color: theme.secondary_color,
              }}
            >
              {brand.name}
            </p>

            <h2
              className="mt-5 text-3xl font-light tracking-wide"
              style={{
                color: theme.text_inverse,
              }}
            >
              Crafted Without Compromise.
            </h2>

            <p
              className="mt-6 max-w-xl leading-8"
              style={{
                color: theme.text_muted,
              }}
            >
              A tradition of exceptional craftsmanship, uncompromising
              attention to detail and timeless automotive design.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3
              className="text-sm font-medium uppercase tracking-[0.25em]"
              style={{
                color: theme.text_inverse,
              }}
            >
              Explore
            </h3>

            <div className="mt-6 space-y-4">
              <Link
                href="#"
                className="block transition-opacity hover:opacity-70"
                style={{
                  color: theme.text_muted,
                }}
              >
                Models
              </Link>

              <Link
                href="#"
                className="block transition-opacity hover:opacity-70"
                style={{
                  color: theme.text_muted,
                }}
              >
                Bespoke
              </Link>

              <Link
                href="#"
                className="block transition-opacity hover:opacity-70"
                style={{
                  color: theme.text_muted,
                }}
              >
                Heritage
              </Link>

              <Link
                href="#"
                className="block transition-opacity hover:opacity-70"
                style={{
                  color: theme.text_muted,
                }}
              >
                Experience
              </Link>
            </div>
          </div>

          {/* Official Website */}
          <div>
            <h3
              className="text-sm font-medium uppercase tracking-[0.25em]"
              style={{
                color: theme.text_inverse,
              }}
            >
              Discover
            </h3>

            <div className="mt-6">
              {brand.website_url ? (
                <a
                  href={brand.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b pb-2 text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                  style={{
                    color: theme.secondary_color,
                    borderColor: theme.secondary_color,
                  }}
                >
                  Official Website
                </a>
              ) : (
                <span
                  className="text-sm"
                  style={{
                    color: theme.text_muted,
                  }}
                >
                  Website unavailable
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-12 border-t"
          style={{
            borderColor: theme.divider_color,
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p
            style={{
              color: theme.text_muted,
            }}
          >
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>

          <p
            style={{
              color: theme.text_muted,
            }}
          >
            {brand.country ?? "United Kingdom"}
          </p>
        </div>
      </div>
    </footer>
  );
}