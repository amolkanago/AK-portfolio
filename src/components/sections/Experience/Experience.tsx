import { Section } from "../../ui/Section";
import ExperienceTimeline from "./ExperienceTimeline";

export function Experience() {
    return (
        <Section
            id="experience"
            title="Professional Experience"
            subtitle="Career Journey"
            className="bg-white dark:bg-slate-900"
        >
            <ExperienceTimeline />
        </Section>
    );
}