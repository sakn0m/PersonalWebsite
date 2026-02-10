import { ObfuscatedEmail } from "@/app/obfuscated-email";
import { SectionHeader } from "@/components/ui/section-header";

export function ConnectSection() {
    return (
        <div>
            <SectionHeader title="Connect" />
            <ul className="flex flex-col gap-2">
                <li>
                    <ObfuscatedEmail className="text-lg border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 transition-all cursor-pointer min-h-[44px] inline-flex items-center w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 rounded" />
                </li>
            </ul>
        </div>
    );
}
