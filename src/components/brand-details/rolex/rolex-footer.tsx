import Image from "next/image";
import Link from "next/link";

interface RolexFooterProps {
  brand: any;
  theme: any;
}

const footerLinks = [
  {
    title: "Collections",
    links: ["Submariner", "Day-Date", "Datejust", "Daytona", "GMT-Master II"],
  },
  {
    title: "Discover",
    links: ["Heritage", "Craftsmanship", "Innovation", "Gallery", "Contact"],
  },
  {
    title: "Company",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Support",
      "Careers",
      "Sustainability",
    ],
  },
];

export default function RolexFooter({ brand, theme }: RolexFooterProps) {
  return (
    <footer
      style={{
        backgroundColor: theme.footer_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-4">
          <div>
            {brand.logo_url && (
              <Image
                src={brand.logo_url}
                alt={brand.name}
                width={70}
                height={70}
                className="object-contain"
              />
            )}

            <h2
              className="mt-6 text-3xl font-light tracking-[0.25em] uppercase"
              style={{
                color: theme.text_inverse,
              }}
            >
              {brand.name}
            </h2>

            <p
              className="mt-6 leading-8"
              style={{
                color: "#BDBDBD",
              }}
            >
              Timeless luxury, precision engineering, and uncompromising
              craftsmanship have defined {brand.name} for generations.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3
                className="mb-6 text-lg font-semibold"
                style={{
                  color: theme.text_inverse,
                }}
              >
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link} className="transition hover:translate-x-1">
                    <Link
                      href="#"
                      style={{
                        color: "#BDBDBD",
                      }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="my-16 h-px"
          style={{
            backgroundColor: theme.border_color,
          }}
        />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p
              style={{
                color: "#9CA3AF",
              }}
            >
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <Link
              href="/brands"
              style={{
                color: "#BDBDBD",
              }}
            >
              All Brands
            </Link>

            <Link
              href={brand.website_url}
              target="_blank"
              style={{
                color: "#BDBDBD",
              }}
            >
              Official Website
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
