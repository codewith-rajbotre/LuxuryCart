import Link from "next/link";

import { Button } from "@/components/ui/button";

interface RolexContactProps {
  brand: any;
  theme: any;
}

export default function RolexContact({ brand, theme }: RolexContactProps) {
  return (
    <section
      className="py-32"
      style={{
        backgroundColor: theme.background_color,
      }}
    >
      <div
        className="mx-auto max-w-5xl rounded-3xl px-10 py-20 text-center"
        style={{
          backgroundColor: theme.card_color,
          border: `1px solid ${theme.border_color}`,
        }}
      >
        <p
          className="text-sm uppercase tracking-[0.35em]"
          style={{
            color: theme.primary_color,
          }}
        >
          Contact
        </p>

        <h2
          className="mt-5 text-5xl font-light"
          style={{
            color: theme.text_primary,
          }}
        >
          Experience Rolex
        </h2>

        <p
          className="mx-auto mt-8 max-w-3xl text-lg leading-8"
          style={{
            color: theme.text_secondary,
          }}
        >
          Discover more about Rolex through its official website, explore its
          latest collections and immerse yourself in the world of Swiss
          watchmaking excellence.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div>
            <h4
              className="text-lg font-semibold"
              style={{
                color: theme.text_primary,
              }}
            >
              Country
            </h4>

            <p
              className="mt-3"
              style={{
                color: theme.text_secondary,
              }}
            >
              {brand.country}
            </p>
          </div>

          <div>
            <h4
              className="text-lg font-semibold"
              style={{
                color: theme.text_primary,
              }}
            >
              Founded
            </h4>

            <p
              className="mt-3"
              style={{
                color: theme.text_secondary,
              }}
            >
              {brand.founded_year}
            </p>
          </div>

          <div>
            <h4
              className="text-lg font-semibold"
              style={{
                color: theme.text_primary,
              }}
            >
              Website
            </h4>

            <p
              className="mt-3"
              style={{
                color: theme.text_secondary,
              }}
            >
              Official Rolex
            </p>
          </div>
        </div>

        <div className="mt-16">
          <Link href={brand.website_url} target="_blank">
            <Button
              size="lg"
              style={{
                backgroundColor: theme.primary_color,
                color: theme.button_text,
              }}
            >
              Visit Official Website
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
