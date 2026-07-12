"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (loading) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.trim(),
                    password,
                }),
            });

            const result = await response.json();

            if (result.success) {
                router.replace("/home");
                return;
            }

            alert(result.message ?? "Login failed.");
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card className="w-full max-w-[430px] rounded-3xl border border-yellow-700/30 bg-black/70 p-10 shadow-2xl backdrop-blur-xl">
            <div className="space-y-3 text-center">
                <h1 className="text-4xl font-serif tracking-wide text-yellow-500">
                    Luxury Cart
                </h1>

                <p className="text-sm text-zinc-400">
                    Reserved for the Exceptional
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-zinc-300"
                    >
                        Email Address
                    </label>

                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="h-12 rounded-xl border border-yellow-700/40 bg-zinc-950 text-white placeholder:text-zinc-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-zinc-300"
                    >
                        Password
                    </label>

                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            required
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            className="h-12 rounded-xl border border-yellow-700/40 bg-zinc-950 pr-12 text-white placeholder:text-zinc-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-yellow-500"
                            aria-label={
                                showPassword ? "Hide password" : "Show password"
                            }
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full rounded-xl bg-yellow-600 font-semibold text-black transition-all duration-300 hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Authenticating...
                        </>
                    ) : (
                        "Sign In"
                    )}
                </Button>
            </form>
        </Card>
    );
}