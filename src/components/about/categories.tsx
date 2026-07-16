import {
    Car,
    Gem,
    Home,
    Shirt,
    Watch,
    Wine,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const categories = [
    {
        title: "Luxury Watches",
        icon: Watch,
        brands: [
            "Rolex",
            "Patek Philippe",
            "Audemars Piguet",
            "Omega",
            "Cartier",
        ],
        description:
            "Timeless masterpieces crafted with extraordinary precision, heritage, and innovation.",
    },
    {
        title: "Luxury Automobiles",
        icon: Car,
        brands: [
            "Rolls-Royce",
            "Lamborghini",
            "Ferrari",
            "BMW",
            "Mercedes-Benz",
        ],
        description:
            "Engineering excellence where performance, comfort, and prestige become one experience.",
    },
    {
        title: "Fashion & Apparel",
        icon: Shirt,
        brands: [
            "Gucci",
            "Louis Vuitton",
            "Polo Ralph Lauren",
            "Armani",
            "Hugo Boss",
        ],
        description:
            "Collections that combine elegance, confidence, and timeless style.",
    },
    {
        title: "Jewelry",
        icon: Gem,
        brands: [
            "Cartier",
            "Tiffany & Co.",
            "Bvlgari",
            "Chopard",
            "Van Cleef & Arpels",
        ],
        description:
            "Exceptional creations representing artistry, heritage, and sophistication.",
    },
    {
        title: "Luxury Living",
        icon: Home,
        brands: [
            "Fendi Casa",
            "Versace Home",
            "Bentley Home",
            "Boca do Lobo",
            "Lalique",
        ],
        description:
            "Premium interiors and lifestyle collections crafted for refined living.",
    },
    {
        title: "Fine Dining",
        icon: Wine,
        brands: [
            "Lalique",
            "Christofle",
            "Bernardaud",
            "Baccarat",
            "Georg Jensen",
        ],
        description:
            "Luxury tableware and dining collections that celebrate craftsmanship.",
    },
];

export default function Categories() {
    return (
        <section className="relative overflow-hidden py-32">

            {/* Background Glow */}

            <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
                        Signature Collections
                    </p>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
                        Explore
                        <span className="block bg-linear-to-r from-[#D4AF37] via-[#F4E08A] to-[#D4AF37] bg-clip-text text-transparent">
                            Iconic Luxury Categories
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
                        Every collection brings together internationally
                        respected brands known for their heritage, innovation,
                        craftsmanship, and timeless excellence.
                    </p>

                </div>

                {/* Grid */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <Card
                                key={category.title}
                                className="group rounded-3xl border border-[#D4AF37]/20 bg-[#0B0B0B]/90 transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                            >
                                <CardHeader>

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">

                                        <Icon className="h-8 w-8 text-[#D4AF37]" />

                                    </div>

                                    <CardTitle className="pt-6 text-2xl text-white">
                                        {category.title}
                                    </CardTitle>

                                    <CardDescription className="pt-2 text-base leading-7 text-neutral-400">
                                        {category.description}
                                    </CardDescription>

                                </CardHeader>

                                <CardContent>

                                    <div className="flex flex-wrap gap-3">

                                        {category.brands.map((brand) => (
                                            <span
                                                key={brand}
                                                className="rounded-full border border-[#D4AF37]/20 bg-[#111111] px-4 py-2 text-sm text-[#D4AF37] transition-colors duration-300 group-hover:border-[#D4AF37]/40"
                                            >
                                                {brand}
                                            </span>
                                        ))}

                                    </div>

                                </CardContent>

                            </Card>
                        );
                    })}

                </div>

                {/* Bottom Statement */}

                <div className="mt-24">

                    <Card className="rounded-3xl border border-[#D4AF37]/20 bg-[#0A0A0A]/80">

                        <CardContent className="py-14 text-center">

                            <h3 className="text-3xl font-bold text-white">
                                One Destination.
                                <span className="block mt-2 text-[#D4AF37]">
                                    Countless Icons.
                                </span>
                            </h3>

                            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-neutral-400">
                                Luxury Cart brings together legendary names
                                across multiple categories, allowing every
                                collection to reflect the prestige, heritage,
                                and excellence associated with the world's most
                                admired brands.
                            </p>

                        </CardContent>

                    </Card>

                </div>

            </div>

        </section>
    );
}