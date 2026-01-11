import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 md:py-32 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Header */}
      <header className="mb-12 space-y-2">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
          Your Name
        </h1>
        <p className="text-lg text-neutral-500">
          Software Engineer & Designer
        </p>
      </header>

      {/* Bio */}
      <section className="prose prose-neutral prose-lg leading-relaxed text-neutral-800">
        <p className="mb-6">
          I build minimal, high-performance web interfaces. This is my digital business card. 
          I focus on typography, speed, and clean code.
        </p>
        <p className="mb-6">
          Currently based in Italy, taking inspiration from the classics to build the future. 
          I am always open to discussing new projects.
        </p>
      </section>

      {/* Links / Footer */}
      <footer className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Socials */}
          <div>
            <h3 className="text-xs font-sans font-semibold text-neutral-400 uppercase tracking-widest mb-4">
              Connect
            </h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link 
                  href="https://twitter.com" 
                  className="hover:text-neutral-500 transition-colors border-b border-neutral-300 hover:border-neutral-500 pb-0.5"
                >
                  Twitter / X
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:hello@example.com" 
                  className="hover:text-neutral-500 transition-colors border-b border-neutral-300 hover:border-neutral-500 pb-0.5"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link 
                  href="https://linkedin.com" 
                  className="hover:text-neutral-500 transition-colors border-b border-neutral-300 hover:border-neutral-500 pb-0.5"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects or Other Links */}
          <div>
            <h3 className="text-xs font-sans font-semibold text-neutral-400 uppercase tracking-widest mb-4">
              Work
            </h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link 
                  href="#" 
                  className="hover:text-neutral-500 transition-colors border-b border-neutral-300 hover:border-neutral-500 pb-0.5"
                >
                  Torbet Inspiration
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-neutral-500 transition-colors border-b border-neutral-300 hover:border-neutral-500 pb-0.5"
                >
                  Minimal Portfolio
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </main>
  );
}
