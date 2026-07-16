import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const session = request.cookies.get("luxury_session");

    const { pathname } = request.nextUrl;

    const isLoginPage = pathname === "/login";

    if (!session && !isLoginPage) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (session && isLoginPage) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/home/:path*",
        "/about/:path*",
        "/products/:path*",
        "/brands/:path*",
    ],
};