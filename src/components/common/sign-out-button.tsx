"use client";

import { useRouter } from "next/navigation";

import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SignOutButton() {
  const router = useRouter();

  async function signOut() {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    const result = await response.json();

    if (result.success) {
      router.replace("/login");
      router.refresh();
    }
  }

  return (
    <Button
      variant="outline"
      onClick={signOut}
      className="hidden h-10 rounded-lg border-brand-gold/30 px-5 text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-black lg:inline-flex"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  );
}
