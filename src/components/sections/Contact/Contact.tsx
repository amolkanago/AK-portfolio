import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Section } from '../../ui/Section';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { personalInfo } from '../../../data/portfolioData';

export function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: Phone,
            label: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
        },
        {
            icon: MapPin,
            label: 'Location',
            value: personalInfo.location,
        },
    ];

    return (
        <Section
            id="contact"
            title="Get In Touch"
            subtitle="Let's Connect"
            className="bg-white dark:bg-slate-900"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <Card className="p-8 md:p-12 text-center">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Open to Frontend Opportunities
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                        I'm actively seeking React.js, Next.js and Frontend Developer
                        opportunities. Feel free to reach out through any of the channels
                        below.
                    </p>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-3 gap-4 mb-10">
                        {contactInfo.map((item) => (
                            <div
                                key={item.label}
                                className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800"
                            >
                                <item.icon className="w-6 h-6 mx-auto mb-3 text-primary-600" />

                                <p className="text-sm text-slate-500 mb-1">
                                    {item.label}
                                </p>

                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="font-medium text-slate-900 dark:text-white hover:text-primary-600 transition-colors"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="font-medium text-slate-900 dark:text-white">
                                        {item.value}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mb-10">
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-105 transition-transform"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>

                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-105 transition-transform"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg">
                            <a href={`mailto:${personalInfo.email}`}>
                                <Mail className="w-4 h-4 mr-2" />
                                Email Me
                            </a>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <a href="/resume.pdf" download>
                                <Download className="w-4 h-4 mr-2" />
                                Download Resume
                            </a>
                        </Button>
                    </div>
                </Card>
            </motion.div>
        </Section>
    );
}