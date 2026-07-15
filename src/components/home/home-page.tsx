"use client";

import { Footer } from "../layout/layout/footer";
import { Navbar } from "../navbar";
import { HomepageCard } from "./homepage-card";

export function HomePage() {
    return (
        <main className="relative flex min-h-screen flex-col overflow-hidden bg-background">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_45%)]" />

            <div className="absolute left-1/2 top-40 h-125 w-125 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />

            <Navbar />

            <section className="container relative z-10 mx-auto flex flex-1 items-center justify-center px-6 py-12">

                <HomepageCard />

            </section>

            <Footer />

        </main>
    );
}