import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[640px] mx-auto px-6 py-24 md:py-32 fade-in">
      {/* Header / Name */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black">
          Your Name
        </h1>
        <p className="mt-2 text-neutral-500 text-lg">
          Role / One-liner description
        </p>
      </header>

      {/* Main Content / Bio */}
      <section className="prose prose-neutral prose-lg text-neutral-800 leading-relaxed font-serif">
        <p>
          This is an informal business card. I build high-performance 
          software and design minimal interfaces. I value clarity over complexity 
          and speed over bells and whistles.
        </p>
        <p>
          Currently based in [Location], working on [Project] and open to 
          collaborating on interesting technical challenges.
        </p>
      </section>

      {/* Links Section */}
      <footer className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg">
          
          {/* Column 1: Socials */}
          <div>
            <h3 className="text-sm font-sans text-neutral-400 uppercase tracking-widest mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://twitter.com" className="link-hover">
                  Twitter / X
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="link-hover">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="mailto:you@example.com" className="link-hover">
                  Email
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Projects (Optional) */}
          <div>
            <h3 className="text-sm font-sans text-neutral-400 uppercase tracking-widest mb-4">
              Projects
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="link-hover">
                  Project Alpha
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover">
                  Studio Work
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </footer>
    </main>
  );
}
