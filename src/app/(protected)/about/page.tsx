import AboutHeaderSection from "@/components/about/about-header-section";
import AboutContentSection from "@/components/about/about-content-section";
import AboutSupportSection from "@/components/about/about-support-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AboutHeaderSection />

      <AboutContentSection />

      <AboutSupportSection />
    </main>
  );
}
