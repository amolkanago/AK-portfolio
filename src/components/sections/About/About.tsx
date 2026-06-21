import { Section } from "../../ui/Section";

import AboutInfoCards from "./AboutInfoCards";
import AboutContent from "./AboutContent";

export function About() {
    return (
        <Section
            id="about"
            title="About Me"
            subtitle="Introduction"
            className="bg-white dark:bg-slate-900"
        >
            <div className="grid lg:grid-cols-5 gap-12 items-start">
                <AboutInfoCards />
                <AboutContent />
            </div>
        </Section>
    );
}