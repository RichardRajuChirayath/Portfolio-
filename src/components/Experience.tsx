"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, ArrowUpRight } from 'lucide-react';
import { Magnetic } from './Magnetic';
import Image from 'next/image';

const experiences = [
    {
        role: "Co-Founder",
        company: "Qohesive",
        companyUrl: "https://www.linkedin.com/company/qohesive/",
        logo: "/logos/qohesive.png",
        period: "2026 - Present",
        description: "Building a unified AI platform that simplifies how software is created, operated, and scaled. Unifying the entire tech stack into an AI that builds, runs, and scales apps autonomously.",
        current: true,
        skills: ["System Architecture", "AI Automation", "Scaling"]
    },
    {
        role: "Founder & Technical Lead",
        company: "Verblyn Labs",
        companyUrl: "https://www.linkedin.com/company/verblynlabs/",
        logo: "/logos/verblyn.png",
        period: "2025 - Present",
        description: "A multi-disciplinary product studio building user-centric AI solutions across various high-impact domains. Creating technology that solves genuine problems with clarity and real-world impact.",
        current: true,
        skills: ["AI Strategy", "Product Design", "Lead Engineering"],
        badge: "🇮🇳 Govt. of India Recognized MSME",
        badgeSubtext: "UDYAM-KR-03-0647480"
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24"
                >
                    <span className="section-title">Career Path</span>
                    <h2 className="section-heading">Professional Journey</h2>
                    <p className="text-xl text-muted-foreground max-w-xl">
                        A track record of building, leading, and shipping high-impact technology.
                    </p>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary/40 via-brand-secondary/40 to-transparent" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="relative pl-20 group"
                        >
                            {/* Connector Circle */}
                            <div className="absolute left-6 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-surface-1 border-2 border-brand-primary z-10 group-hover:scale-125 transition-transform group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                            <div className="glass-card !p-8 lg:!p-10 hover:border-white/20 transition-all duration-500 relative overflow-hidden group/card">
                                {/* Subtle background role name */}
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[120px] font-black text-white/[0.02] tracking-tighter pointer-events-none select-none uppercase group-hover/card:text-white/[0.04] transition-colors duration-700">
                                    {exp.company.split(' ')[0]}
                                </div>

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
                                    {/* Left Side: Logo, Role & Company */}
                                    <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/5 pb-6 lg:pb-0 lg:pr-8">
                                        {/* Company Logo */}
                                        {exp.logo && (
                                            <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-white/10 flex items-center justify-center mb-4 group-hover/card:border-white/20 transition-colors">
                                                <Image
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-lg"
                                                />
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest mb-2">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {exp.period}
                                        </div>
                                        <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">
                                            {exp.role}
                                        </h3>
                                        {exp.companyUrl ? (
                                            <Magnetic strength={0.2}>
                                                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/link">
                                                    <span className="text-sm font-bold text-white/70 group-hover/link:text-white">{exp.company}</span>
                                                    <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover/link:text-brand-primary" />
                                                </a>
                                            </Magnetic>
                                        ) : (
                                            <div className="flex items-center gap-2 text-white/50">
                                                <Building className="w-4 h-4" />
                                                <span className="text-sm font-bold">{exp.company}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Side: Description & Skills */}
                                    <div className="lg:col-span-3 lg:pl-4 flex flex-col justify-center">
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {exp.skills.map((skill, j) => (
                                                <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-brand-primary/5 text-brand-primary rounded-full border border-brand-primary/10">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        {exp.badge && (
                                            <div className="inline-flex flex-col gap-1 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg w-fit">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">
                                                    {exp.badge}
                                                </span>
                                                {exp.badgeSubtext && (
                                                    <span className="text-[9px] font-mono text-green-400/60">
                                                        {exp.badgeSubtext}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
