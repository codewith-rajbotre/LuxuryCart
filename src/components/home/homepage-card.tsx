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
        <Card className="w-full max-w-2xl rounded-3xl border border-yellow-700/30 bg-black/70 shadow-2xl backdrop-blur-xl">

            <CardHeader className="space-y-3 text-center">

                <CardTitle className="font-serif text-5xl tracking-wide text-yellow-500">
                    Luxury Cart
                </CardTitle>

                <CardDescription className="text-base text-zinc-400">
                    Welcome to the Luxury Cart Admin Dashboard
                </CardDescription>

            </CardHeader>

            <CardContent className="space-y-8">

                <div className="grid grid-cols-3 gap-4">

                    <Card className="border-yellow-700/20 bg-zinc-950/60">
                        <CardContent className="p-6 text-center">
                            <p className="text-3xl font-bold text-yellow-500">
                                0
                            </p>

                            <p className="mt-2 text-sm text-zinc-400">
                                Products
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-yellow-700/20 bg-zinc-950/60">
                        <CardContent className="p-6 text-center">
                            <p className="text-3xl font-bold text-yellow-500">
                                0
                            </p>

                            <p className="mt-2 text-sm text-zinc-400">
                                Orders
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-yellow-700/20 bg-zinc-950/60">
                        <CardContent className="p-6 text-center">
                            <p className="text-3xl font-bold text-yellow-500">
                                1
                            </p>

                            <p className="mt-2 text-sm text-zinc-400">
                                Administrator
                            </p>
                        </CardContent>
                    </Card>

                </div>

                <Button
                    onClick={logout}
                    className="
                        h-12
                        w-full
                        rounded-xl
                        bg-yellow-600
                        font-semibold
                        text-black
                        transition-all
                        duration-300
                        hover:bg-yellow-500
                        hover:shadow-lg
                        hover:shadow-yellow-600/20
                    "
                >
                    Logout
                </Button>

            </CardContent>

        </Card>
    );
}