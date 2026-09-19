"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HomepageCard() {
  const router = useRouter();

  async function logout() {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    const result = await response.json();

    if (result.success) {
      router.replace("/login");
    }
  }

  return (
    <Card className="w-full max-w-2xl rounded-3xl border border-border bg-card/90 text-card-foreground shadow-2xl backdrop-blur-xl">
      <CardHeader className="space-y-3 text-center">
        <CardTitle className="font-serif text-5xl tracking-wide text-brand-gold">
          AUREQUIS PARIJAT
        </CardTitle>

        <CardDescription className="text-base text-muted-foreground">
          Welcome to the AUREQUIS PARIJAT Admin Dashboard
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-border bg-muted/40 shadow-sm">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-brand-gold">0</p>

              <p className="mt-2 text-sm text-muted-foreground">Products</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/40 shadow-sm">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-brand-gold">0</p>

              <p className="mt-2 text-sm text-muted-foreground">Orders</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/40 shadow-sm">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-brand-gold">1</p>

              <p className="mt-2 text-sm text-muted-foreground">
                Administrator
              </p>
            </CardContent>
          </Card>
        </div>

        <Button
          onClick={logout}
          className="h-12 w-full rounded-xl bg-brand-gold font-semibold text-black transition-colors hover:opacity-90"
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
