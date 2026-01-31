"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, BookOpen, BarChart3, Activity, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "Clyentra",
        category: "AI Compliance Engine",
        year: "2025",
        tagline: "Never miss a client insight again",
        description: "A Client Feedback Enforcer for design agencies. Uses Llama 3.3 (70B) to extract action items from messy client emails and create non-negotiable checklists.",
        highlights: [
            { icon: <Zap className="w-4 h-4" />, text: "40% faster feedback processing" },
            { icon: <Shield className="w-4 h-4" />, text: "AI contradiction detection" },
        ],
        tech: ["Next.js", "Llama 3.3", "Prisma", "Groq API"],
        link: "https://client-feedback-enforcer-production.up.railway.app/",
        github: "https://github.com/RichardRajuChirayath/Client-Feedback-Enforcer",
        image: "/projects/clyentra.png",
        type: "web",
        color: "#8b5cf6",
    },
    {
        title: "AQMD",
        category: "Cognitive Alignment Platform",
        year: "2024",
        tagline: "Transforming reading into quantified mastery",
        description: "Advanced Cognitive Engine V2.0 for high-performance learning. Bridges the gap between study materials and real-world exam performance through institutional-grade AI analysis.",
        highlights: [
            { icon: <Users className="w-4 h-4" />, text: "36+ Active Users" },
            { icon: <BookOpen className="w-4 h-4" />, text: "Smart PDF Study Companion" },
            { icon: <BarChart3 className="w-4 h-4" />, text: "5-Year Exam Pattern Prediction" },
        ],
        tech: ["Next.js 15+", "Llama 3.3", "Capacitor 8.0", "OCR.space"],
        link: "https://www.aqmd.site/",
        github: "https://github.com/RichardRajuChirayath/aqmd",
        image: "/projects/aqmd.jpg",
        type: "mobile",
        color: "#3b82f6",
    },
    {
        title: "Medaurin",
        category: "Health-Security Ecosystem",
        year: "2024",
        tagline: "The Proactive Medicine Guardian",
        description: "A premium healthcare security system featuring a '6-Factor' Risk Engine. Validates medicine safety across 4+ global authorities and protects users from drug conflicts.",
        highlights: [
            { icon: <Activity className="w-4 h-4" />, text: "6-Factor proprietary Risk Engine" },
            { icon: <Users className="w-4 h-4" />, text: "Caregiver Guardian Mode" },
        ],
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
        link: "https://medaurin-web-production.up.railway.app/",
        github: "https://github.com/RichardRajuChirayath/Medaurin",
        image: "/projects/medaurin.jpg",
        type: "mobile",
        color: "#10b981",
    }
];

export const Projects = () => {
    return (
        <section id="work" className="py-24 relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="section-title">Projects</p>
                    <h2 className="section-heading">Featured Work</h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Real products solving real problems. Engineered with precision and high-performance AI.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute -inset-1 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                                style={{ backgroundColor: project.color }}
                            />

                            <div className="relative glass-card !p-0 overflow-hidden !rounded-[2rem] border-white/[0.08]">
                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                                    {/* Visual Container */}
                                    <div className="relative bg-surface-1 min-h-[400px] lg:min-h-[550px] flex items-center justify-center overflow-hidden lg:w-[55%] shrink-0">
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                                        <div
                                            className="absolute inset-0 opacity-10"
                                            style={{ background: `radial-gradient(circle at center, ${project.color}40, transparent 70%)` }}
                                        />

                                        {project.type === 'web' ? (
                                            /* Browser Mockup */
                                            <div className="w-[90%] shadow-2xl rounded-2xl overflow-hidden border border-white/15 group-hover:scale-[1.02] transition-transform duration-700">
                                                <div className="bg-surface-3 px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                                    <div className="ml-3 flex-1 bg-surface-1 rounded-md h-5 flex items-center px-3">
                                                        <span className="text-[10px] text-white/30 font-mono truncate">{project.link.replace('https://', '')}</span>
                                                    </div>
                                                </div>
                                                <div className="relative aspect-[16/9] bg-surface-2">
                                                    <Image src={project.image} alt={project.title} fill className="object-cover object-top" quality={100} priority />
                                                </div>
                                            </div>
                                        ) : (
                                            /* Mobile Mockup - Proper Size */
                                            <div className="relative w-[220px] lg:w-[260px] aspect-[9/19.5] bg-[#1a1a1a] rounded-[3rem] p-[6px] shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-white/10 group-hover:scale-[1.03] transition-transform duration-700">
                                                {/* Phone Highlight */}
                                                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                                                {/* Dynamic Island */}
                                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
                                                {/* Screen */}
                                                <div className="relative w-full h-full rounded-[2.6rem] overflow-hidden bg-black">
                                                    <Image src={project.image} alt={project.title} fill className="object-cover" quality={100} />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-surface-2/30 lg:w-[45%]">
                                        <div className="flex items-center justify-between mb-6">
                                            <span
                                                className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
                                                style={{ color: project.color, borderColor: `${project.color}40`, backgroundColor: `${project.color}10` }}
                                            >
                                                {project.category}
                                            </span>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                                                {project.year}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
                                            {project.title}
                                        </h3>

                                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="grid grid-cols-1 gap-3 mb-8">
                                            {project.highlights.map((h, i) => (
                                                <div key={i} className="flex items-center gap-4 group/h">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors"
                                                        style={{ borderColor: `${project.color}30`, backgroundColor: `${project.color}10`, color: project.color }}
                                                    >
                                                        {h.icon}
                                                    </div>
                                                    <span className="text-sm font-medium text-white/70 group-hover/h:text-white transition-colors">{h.text}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-10">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-white/40">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-legendary btn-legendary-primary !px-8">
                                                <span>Launch App</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm font-bold text-white/40 hover:text-white transition-all px-4 py-2 hover:translate-x-1">
                                                <Github className="w-5 h-5" />
                                                <span>Source Code</span>
                                            </a>
                                        </div>
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
