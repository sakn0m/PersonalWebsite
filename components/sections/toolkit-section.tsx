import { SectionHeader } from "@/components/ui/section-header";

export function ToolkitSection() {
    return (
        <section className="mt-10" aria-label="Toolkit">
            <SectionHeader title="Toolkit" />
            <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed font-medium">
                Python, Pandas, SQL, R, PyTorch, Scikit-learn, Tableau, PowerBI,
                Git
            </p>
        </section>
    );
}
