"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface RolexHeaderProps {
    brand: any;
    theme: any;
}

export default function RolexHeader({
    brand,
    theme,
}: RolexHeaderProps) {
    return (
        <header
            className="sticky top-0 z-50 border-b backdrop-blur-xl"
            style={{
                backgroundColor: `${theme.navbar_color}E6`,
                borderColor: theme.border_color,
            }}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                <div className="flex items-center gap-4">

                    {brand.logo_url && (
                        <Image
                            src={brand.logo_url}
                            alt={brand.name}
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    )}

                    <div>

                        <h2
                            className="text-lg font-semibold tracking-[0.25em] uppercase"
                            style={{
                                color: theme.text_primary,
                            }}
                        >
                            {brand.name}
                        </h2>

                        <p
                            className="text-xs uppercase tracking-[0.35em]"
                            style={{
                                color: theme.text_secondary,
                            }}
                        >
                            Luxury Collection
                        </p>

                    </div>

                </div>

                <nav className="hidden items-center gap-8 lg:flex">

                    {[
                        "Collections",
                        "Heritage",
                        "Craftsmanship",
                        "Gallery",
                    ].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium transition-all hover:opacity-80"
                            style={{
                                color: theme.text_primary,
                            }}
                        >
                            {item}
                        </a>
                    ))}

                </nav>

                <Link href="/brands">

                    <Button
                        style={{
                            backgroundColor: theme.primary_color,
                            color: theme.button_text,
                        }}
                    >
                        All Brands
                    </Button>

                </Link>

            </div>
        </header>
    );
}