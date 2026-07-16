import Hero from "@/components/about/hero";
import Philosophy from "@/components/about/philosophy";
import Categories from "@/components/about/categories";
import WhyLuxuryCart from "@/components/about/why-luxury-cart";
import Craftsmanship from "@/components/about/craftsmanship";
import Experience from "@/components/about/experience";
import Promise from "@/components/about/promise";
import Closing from "@/components/about/closing";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <Hero />
            <Philosophy />
            <Categories />
            <WhyLuxuryCart />
            <Craftsmanship />
            <Experience />
            <Promise />
            <Closing />
        </main>
    );
}