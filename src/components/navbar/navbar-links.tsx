import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { navigationLinks } from "./navigation";

export function NavbarLinks() {
    return (
        <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
                {navigationLinks.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <Link
                            href={item.href}
                            className="px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] transition-colors hover:text-primary"
                        >
                            {item.title}
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}