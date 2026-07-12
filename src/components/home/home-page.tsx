"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
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
        <main className="flex min-h-screen items-center justify-center bg-[#050505]">
            <Card className="w-[500px] rounded-3xl border border-yellow-700/30 bg-black/70 p-10 backdrop-blur-xl">
                <div className="space-y-5 text-center">
                    <h1 className="text-5xl font-serif text-yellow-500">
                        Luxury Cart
                    </h1>

                    <p className="text-zinc-400">
                        Welcome to the Luxury Cart Admin Dashboard
                    </p>

                    <Button
                        onClick={logout}
                        className="mt-6 h-12 w-full bg-yellow-600 text-black transition-all hover:bg-yellow-500"
                    >
                        Logout
                    </Button>
                </div>
            </Card>
        </main>
    );
}