import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, type LucideIcon } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Section } from '../../ui/Section';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { personalInfo } from '../../../data/portfolioData';

interface ContactItem {
    icon: LucideIcon;
    label: string;
    value: string;
    href?: string;
}

const contactInfo: ContactItem[] = [
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

export function Contact() {
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
                    <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                        Open to Frontend Opportunities
                    </h3>

                    <p className="mx-auto mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
                        I'm actively seeking React.js, Next.js and Frontend
                        Developer opportunities. Feel free to reach out through
                        any of the channels below.
                    </p>

                    {/* Contact Information */}
                    <div className="mb-10 grid gap-4 md:grid-cols-3">
                        {contactInfo.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800"
                            >
                                <item.icon className="mx-auto mb-3 h-6 w-6 text-primary-600" />

                                <p className="mb-1 text-sm text-slate-500">
                                    {item.label}
                                </p>

                                {item.href ? (
                                    <a
                                        href={item.href}
                                        aria-label={`${item.label}: ${item.value}`}
                                        className="font-medium text-slate-900 transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-white"
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
                    <div className="mb-10 flex justify-center gap-4">
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit LinkedIn profile"
                            className="rounded-xl bg-slate-100 p-4 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-slate-800"
                        >
                            <FaLinkedin className="h-6 w-6" />
                        </a>

                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit GitHub profile"
                            className="rounded-xl bg-slate-100 p-4 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-slate-800"
                        >
                            <FaGithub className="h-6 w-6" />
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg">
                            <a href={`mailto:${personalInfo.email}`}>
                                <Mail className="mr-2 h-4 w-4" />
                                Email Me
                            </a>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <a href={personalInfo.resumeUrl} download>
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume PDF
                            </a>
                        </Button>
                    </div>
                </Card>
            </motion.div>
        </Section>
    );
}