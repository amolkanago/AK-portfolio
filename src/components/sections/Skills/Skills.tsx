import { Section } from "../../ui/Section";

import SkillsGrid from "./SkillsGrid";
import CoreConcepts from "./CoreConcepts";

export function Skills() {
    return (
        <Section
            id="skills"
            title="Technical Skills"
            subtitle="Technologies, tools, and concepts I use to build modern web applications."
            className="
                bg-gradient-to-b
                from-slate-50
                via-white
                to-slate-50
                dark:from-slate-950
                dark:via-slate-900
                dark:to-slate-950
            "
        >
            <SkillsGrid />
            <CoreConcepts />
        </Section>
    );
}