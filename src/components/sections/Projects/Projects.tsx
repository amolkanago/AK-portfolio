import { Section } from '../../ui/Section';
import { projectsData } from '../../../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export function Projects() {
    return (
        <Section
            id="projects"
            title="Enterprise Solutions"
            subtitle="Products & Platforms Delivered"
            className="bg-slate-50 dark:bg-slate-800/50"
        >
            <div className="grid gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </Section>
    );
}