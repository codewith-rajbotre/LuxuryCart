import Image from "next/image";

interface RolexGalleryProps {
  brand: any;
  theme: any;
}

const galleryImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    title: "Rolex Craftsmanship",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
    title: "Swiss Precision",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a",
    title: "Luxury Collection",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    title: "Timeless Elegance",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    title: "Swiss Movement",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    title: "Iconic Design",
  },
];

export default function RolexGallery({ theme }: RolexGalleryProps) {
  return (
    <section
      id="gallery"
      className="py-32"
      style={{
        backgroundColor: theme.surface_color,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <p
          className="text-sm uppercase tracking-[0.35em]"
          style={{
            color: theme.primary_color,
          }}
        >
          Gallery
        </p>

        <h2
          className="mt-4 text-5xl font-light"
          style={{
            color: theme.text_primary,
          }}
        >
          The World of Rolex
        </h2>

        <p
          className="mt-6 max-w-3xl text-lg leading-8"
          style={{
            color: theme.text_secondary,
          }}
        >
          Explore a curated collection showcasing timeless design, precision
          engineering and the elegance that defines every Rolex creation.
        </p>

      </div>
    </section>
  );
}
