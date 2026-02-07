import { ThemeToggle } from "./theme-toggle";
import { ObfuscatedEmail } from "./obfuscated-email";
import { CvTooltip } from "./cv-tooltip";
import { SectionHeader } from "../components/ui/section-header";
import { SocialLink } from "../components/ui/social-link";

export default function Home() {
  return (
    <main className="max-w-[600px] mx-auto px-6 py-24 md:py-32 font-serif fade-in relative">

      {/* Dark Mode Button (Absolute Position Top Right) */}
      <div className="absolute top-6 right-6 md:top-12 md:right-0">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 dark:text-white">
          Giorgio Vanini
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 italic">
          Data Analyst
        </p>
      </header>

      {/* Bio Section */}
      <section className="text-lg leading-relaxed space-y-6 text-neutral-800 dark:text-neutral-300">
        <p>
          Graduating from LUISS Guido Carli, I am a Data Analyst with a strong background in statistics and machine learning.
        </p>
        <p>
          Currently based in Italy 🇮🇹 🇪🇺, I am always open to discussing new projects.
        </p>
      </section>

      {/* Toolkit Section */}
      <section className="mt-10">
        <SectionHeader title="Toolkit" />
        <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed font-medium">
          Python, Pandas, SQL, R, PyTorch, Scikit-learn, Tableau, PowerBI, Git
        </p>
      </section>

      {/* Links Section */}
      <footer className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">

        {/* Connect Column */}
        <div>
          <SectionHeader title="Connect" />
          <ul className="flex flex-col gap-2">
            <li>
              <ObfuscatedEmail className="text-lg border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 transition-all cursor-pointer block w-fit" />
            </li>
          </ul>
        </div>

        {/* Work Column */}
        <div>
          <SectionHeader title="Work" />
          <ul className="flex flex-col gap-2">
            <li>
              <CvTooltip />
            </li>
            <li>
              <SocialLink href="https://www.linkedin.com/in/giorgio-vanini-8627123a4/">
                LinkedIn
              </SocialLink>
            </li>
            <li>
              <SocialLink href="https://github.com/sakn0m">
                GitHub
              </SocialLink>
            </li>
          </ul>
        </div>

      </footer>
    </main>
  );
}