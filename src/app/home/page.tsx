import { HomePage } from "@/components/home/home-page";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function Home() {
    const cookieStore = await cookies();

    const session = cookieStore.get("luxury_session");

    if (!session) {
        redirect("/login");
    }

    return <HomePage />;
}