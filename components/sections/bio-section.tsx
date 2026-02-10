export function BioSection() {
    return (
        <>
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 dark:text-white">
                    Giorgio Vanini
                </h1>
                <p className="text-xl text-neutral-500 dark:text-neutral-400 italic">
                    Data Analyst
                </p>
            </header>

            <section
                aria-label="About"
                className="text-lg leading-relaxed space-y-6 text-neutral-800 dark:text-neutral-300"
            >
                <p>
                    Graduating from LUISS Guido Carli, I am a Data Analyst with a
                    strong background in statistics and machine learning.
                </p>
                <p>
                    Currently based in Italy 🇮🇹 🇪🇺, I am always open to discussing
                    new projects.
                </p>
            </section>
        </>
    );
}
