import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[600px] mx-auto px-6 py-24 md:py-32 font-serif text-neutral-900 antialiased fade-in">

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
          Your Name
        </h1>
        <p className="text-xl text-neutral-500 italic">
          Software Engineer & Designer
        </p>
      </header>

      {/* Bio Section */}
      <section className="text-lg leading-relaxed space-y-6 text-neutral-800">
        <p>
          I build minimal, high-performance web interfaces. This is my digital business card.
          I focus on typography, speed, and clean code.
        </p>
        <p>
          Currently based in Italy, taking inspiration from the classics to build the future.
          I am always open to discussing new projects.
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
              <Link href="https://twitter.com" className="text-lg border-b border-transparent hover:border-neutral-400 transition-all">
                Twitter / X
              </Link>
            </li>
            <li>
              <Link href="mailto:email@example.com" className="text-lg border-b border-transparent hover:border-neutral-400 transition-all">
                Email
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" className="text-lg border-b border-transparent hover:border-neutral-400 transition-all">
                LinkedIn
              </Link>
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
              <Link href="#" className="text-lg border-b border-transparent hover:border-neutral-400 transition-all">
                Torbet Inspiration
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg border-b border-transparent hover:border-neutral-400 transition-all">
                Minimal Portfolio
              </Link>
            </li>
          </ul>
        </div>

      </footer>
    </main>
  );
}