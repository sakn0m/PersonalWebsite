import { ObfuscatedEmail } from "@/app/obfuscated-email";
import { SectionHeader } from "@/components/ui/section-header";

export function ConnectSection() {
    return (
        <div>
            <SectionHeader title="Connect" />
            <ul className="flex flex-col gap-2">
                <li>
                    <ObfuscatedEmail className="text-lg border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 transition-all cursor-pointer block w-fit" />
                </li>
            </ul>
        </div>
    );
}
