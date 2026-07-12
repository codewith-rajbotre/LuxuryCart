import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { fetchAdminByEmail } from "@/db/supabase/login";
import { createSession } from "@/lib/auth/session";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    const admin = await fetchAdminByEmail(email);

    if (!admin) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid credentials",
            },
            { status: 401 }
        );
    }

    const valid = await bcrypt.compare(password, admin.password);

    if (!valid) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid credentials",
            },
            { status: 401 }
        );
    }

    await createSession(admin.id);

    return NextResponse.json({
        success: true,
    });
}