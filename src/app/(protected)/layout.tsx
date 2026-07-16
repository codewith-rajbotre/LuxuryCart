import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/layout/layout/footer";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
}
