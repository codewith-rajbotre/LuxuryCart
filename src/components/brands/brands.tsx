"use client";

import type { Brand } from "@/lib/types/brand";

import BrandGrid from "./brand-grid";
import BrandHeader from "./brand-header";
import EmptyBrandState from "./empty-brand-state";

interface BrandsProps {
    brands: Brand[];
}

export default function Brands({
    brands,
}: BrandsProps) {
    return (
        <section className="min-h-screen bg-background">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10">

                <BrandHeader
                    totalBrands={brands.length}
                />

                {brands.length > 0 ? (
                    <BrandGrid brands={brands} />
                ) : (
                    <EmptyBrandState />
                )}

            </div>
        </section>
    );
}