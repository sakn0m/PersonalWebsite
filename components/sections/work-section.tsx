import { CvTooltip } from "@/app/cv-tooltip";
import { SocialLink } from "@/components/ui/social-link";
import { SectionHeader } from "@/components/ui/section-header";

export function WorkSection() {
    return (
        <div>
            <SectionHeader title="Work" />
            <ul className="flex flex-col gap-2">
                <li>
                    <CvTooltip />
                </li>
                <li>
                    <SocialLink href="https://www.linkedin.com/in/giorgio-vanini-8627123a4/">
                        LinkedIn
                    </SocialLink>
                </li>
                <li>
                    <SocialLink href="https://github.com/sakn0m">
                        GitHub
                    </SocialLink>
                </li>
            </ul>
        </div>
    );
}
