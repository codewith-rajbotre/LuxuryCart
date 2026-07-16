import {
    ArrowRight,
    Compass,
    Crown,
    Gem,
    Search,
    Sparkles,
} from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

const journey = [
    {
        title: "Discover",
        icon: Search,
        description:
            "Begin your journey by exploring carefully curated luxury categories filled with globally admired brands.",
    },
    {
        title: "Explore",
        icon: Compass,
        description:
            "Learn about iconic collections, craftsmanship, heritage, and the stories that define each brand.",
    },
    {
        title: "Experience",
        icon: Sparkles,
        description:
            "Browse elegant product presentations designed to reflect the prestige and identity of every collection.",
    },
    {
        title: "Choose",
        icon: Crown,
        description:
            "Select products that align with your lifestyle while appreciating the excellence behind every creation.",
    },
    {
        title: "Own",
        icon: Gem,
        description:
            "Complete your journey with products that represent timeless quality, innovation, and enduring luxury.",
    },
];

export default function Experience() {
    return (
        <section className="relative overflow-hidden py-32">

            {/* Background */}

            <div className="absolute right-1/2 top-1/2 h-150 w-150 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
                        The Luxury Journey
                    </p>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
                        Every Visit is
                        <span className="block bg-linear-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] bg-clip-text text-transparent">
                            An Experience
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
                        Luxury Cart is designed to make discovering prestigious
                        brands as refined as the brands themselves. Every step
                        has been thoughtfully crafted to create an elegant,
                        immersive, and memorable experience.
                    </p>

                </div>

                {/* Timeline */}

                <div className="mt-24 flex flex-col gap-8">

                    {journey.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.title}
                                className="flex flex-col items-center lg:flex-row"
                            >

                                <Card className="w-full rounded-3xl border border-[#D4AF37]/20 bg-[#0B0B0B]/90 transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]">

                                    <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center">

                                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-[#D4AF37]/10">

                                            <Icon className="h-10 w-10 text-[#D4AF37]" />

                                        </div>

                                        <div className="flex-1">

                                            <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
                                                Step {index + 1}
                                            </p>

                                            <h3 className="mt-3 text-3xl font-bold text-white">
                                                {step.title}
                                            </h3>

                                            <p className="mt-4 leading-8 text-neutral-400">
                                                {step.description}
                                            </p>

                                        </div>

                                    </CardContent>

                                </Card>

                                {index !== journey.length - 1 && (
                                    <div className="my-4 flex justify-center lg:mx-6 lg:my-0">

                                        <ArrowRight className="h-8 w-8 text-[#D4AF37]" />

                                    </div>
                                )}

                            </div>
                        );
                    })}

                </div>

                {/* Bottom Quote */}

                <div className="mt-24">

                    <Card className="rounded-3xl border border-[#D4AF37]/20 bg-[#0A0A0A]">

                        <CardContent className="py-16 text-center">

                            <h3 className="text-3xl font-bold text-white">
                                Luxury is a Journey,
                                <span className="block mt-2 text-[#D4AF37]">
                                    Not Just a Destination.
                                </span>
                            </h3>

                            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-neutral-400">
                                Every interaction within Luxury Cart is designed
                                to celebrate the artistry, innovation, and
                                timeless heritage of the world's most iconic
                                brands—creating an experience that feels as
                                exceptional as the collections themselves.
                            </p>

                        </CardContent>

                    </Card>

                </div>

            </div>

        </section>
    );
}