"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { MobileNavbar } from "./mobile-navbar";
import { NavbarLinks } from "./navbar-links";
import { NavbarLogo } from "./navbar-logo";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/70">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">

                <Link
                    href="/"
                    aria-label="Luxury Cart Home"
                >
                    <NavbarLogo />
                </Link>

                <NavbarLinks />

                <div className="flex items-center gap-3">

                    <Button
                        variant="outline"
                        className="hidden md:inline-flex"
                    >
                        Login
                    </Button>

                    <MobileNavbar />

                </div>

            </div>
        </header>
    );
}