"use client";

import { FooterCTA } from "./footer-cta";
import { FeaturedBrands } from "./featured-brands";
import { FeaturedCategories } from "./featured-categories";
import { HomeHero } from "./home-hero";
import { LuxuryShowcase } from "./luxury-showcase";
import { WhyLuxuryCart } from "./why-luxury-cart";

export function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_45%)]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-gold/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <HomeHero />

        <FeaturedCategories />

        <FeaturedBrands />

        <LuxuryShowcase />

        <WhyLuxuryCart />

        <FooterCTA />
      </div>
    </main>
  );
}
