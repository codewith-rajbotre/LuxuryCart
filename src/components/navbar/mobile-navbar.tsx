"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { navigationLinks } from "./navigation";

export function MobileNavbar() {
    return (
        <Sheet>
            <SheetTrigger
                className="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
                aria-label="Open navigation menu"
            >
                <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
                <SheetHeader>
                    <SheetTitle>Luxury Cart</SheetTitle>
                </SheetHeader>

                <nav className="mt-8 flex flex-col gap-2">
                    {navigationLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}