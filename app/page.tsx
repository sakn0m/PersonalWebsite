import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { ObfuscatedEmail } from "./obfuscated-email";
import { CvTooltip } from "./cv-tooltip";

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
        <h3 className="text-xs font-sans font-bold text-neutral-400 uppercase tracking-widest mb-4">
          Toolkit
        </h3>
        <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed font-medium">
          Python, Pandas, SQL, R, PyTorch, Scikit-learn, Tableau, PowerBI, Git
        </p>
      </section>

      {/* Links Section */}
      <footer className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">

        {/* Connect Column */}
        <div>
          <h3 className="text-xs font-sans font-bold text-neutral-400 uppercase tracking-widest mb-4">
            Connect
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <ObfuscatedEmail className="text-lg border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 transition-all cursor-pointer" />
            </li>
          </ul>
        </div>

        {/* Work Column */}
        <div>
          <h3 className="text-xs font-sans font-bold text-neutral-400 uppercase tracking-widest mb-4">
            Work
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <CvTooltip />
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/giorgio-vanini-8627123a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 transition-all"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/sakn0m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 transition-all"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>

      </footer>
    </main>
  );
}