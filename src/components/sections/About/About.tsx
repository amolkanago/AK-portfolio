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
            <div className="grid gap-12 lg:grid-cols-5 items-start">
                <aside className="lg:col-span-2 lg:sticky lg:top-24">
                    <AboutInfoCards />
                </aside>

                <div className="lg:col-span-3">
                    <AboutContent />
                </div>
            </div>
        </Section>
    );
}