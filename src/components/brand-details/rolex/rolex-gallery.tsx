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

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.id} className="group overflow-hidden rounded-2xl">
              <div className="relative h-105">
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
              </div>

              <div className="py-5">
                <h3
                  className="text-xl font-medium"
                  style={{
                    color: theme.text_primary,
                  }}
                >
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
