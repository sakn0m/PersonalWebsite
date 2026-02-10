interface SectionHeaderProps {
    title: string;
    as?: "h2" | "h3";
}

export function SectionHeader({ title, as: Tag = "h2" }: SectionHeaderProps) {
    return (
        <Tag className="text-xs font-sans font-bold text-neutral-400 uppercase tracking-widest mb-4">
            {title}
        </Tag>
    );
}
