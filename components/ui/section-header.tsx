export function SectionHeader({ title }: { title: string }) {
    return (
        <h3 className="text-xs font-sans font-bold text-neutral-400 uppercase tracking-widest mb-4">
            {title}
        </h3>
    );
}
