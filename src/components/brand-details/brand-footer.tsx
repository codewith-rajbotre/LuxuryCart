import Link from "next/link";

interface BrandFooterProps {
  brand: any;
  theme: any;
}

export default function BrandFooter({ brand, theme }: BrandFooterProps) {
  return (
    <footer
      className="border-t py-12"
      style={{
        backgroundColor: theme.footer_color,
        borderColor: theme.border_color,
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p
            className="text-lg tracking-[0.15em]"
            style={{
              color: theme.text_inverse,
            }}
          >
            {brand.name}
          </p>

          <p
            className="mt-2 text-sm"
            style={{
              color: theme.text_muted,
            }}
          >
            {brand.description}
          </p>
        </div>

        {brand.website_url && (
          <Link
            href={brand.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
            style={{
              color: theme.text_inverse,
            }}
          >
            Official Website
          </Link>
        )}
      </div>
    </footer>
  );
}
