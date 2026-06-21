import { personalInfo } from '../../../data/portfolioData';

export function FooterBrand() {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {personalInfo.name}
            </h3>

            <p className="text-slate-400 leading-relaxed">
                Frontend Developer passionate about building beautiful,
                functional web applications.
            </p>
        </div>
    );
}