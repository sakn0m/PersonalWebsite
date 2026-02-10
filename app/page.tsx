import { ThemeToggle } from "@/app/theme-toggle";
import { BioSection } from "@/components/sections/bio-section";
import { ToolkitSection } from "@/components/sections/toolkit-section";
import { ConnectSection } from "@/components/sections/connect-section";
import { WorkSection } from "@/components/sections/work-section";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <main className="max-w-[600px] mx-auto px-6 py-24 md:py-32 font-serif fade-in relative">
      <div className="absolute top-6 right-6 md:top-12 md:right-0">
        <ThemeToggle />
      </div>

      <BioSection />
      <ToolkitSection />

      <nav
        aria-label="Contact and work links"
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10"
      >
        <ConnectSection />
        <WorkSection />
      </nav>

      <JsonLd />
    </main>
  );
}