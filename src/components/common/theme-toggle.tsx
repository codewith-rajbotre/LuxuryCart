"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium shadow-sm">
          Theme
        </DropdownMenuTrigger>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
        {theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System"}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
