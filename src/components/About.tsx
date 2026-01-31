"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Rocket, Zap, Target, Sparkles } from 'lucide-react';
import { Tilt } from './Tilt';
import { Magnetic } from './Magnetic';
import { WordReveal, PremiumText } from './effects/TextReveal';
import Image from 'next/image';

const ventures = [
    {
        name: "Verblyn Labs",
        role: "Founder & Technical Lead",
        description: "A multi-disciplinary product studio building user-centric AI solutions across various high-impact domains. Creating technology that solves genuine problems with clarity and real-world impact.",
        url: "https://www.linkedin.com/company/verblynlabs/",
        color: "from-brand-primary to-brand-secondary",
        logo: "/logos/verblyn.png"
    },
    {
        name: "Qohesive",
        role: "Co-Founder",
        description: "Building a unified AI platform that simplifies how software is created, operated, and scaled. Unifying the entire tech stack into autonomous AI systems.",
        url: "https://www.linkedin.com/company/qohesive/",
        color: "from-cyan-500 to-blue-500",
        logo: "/logos/qohesive.png"
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    {/* Left - Story Narrative (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-10"
                        >
                            <div className="relative inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl blur-lg opacity-30" />
                                <div className="relative w-44 h-44 rounded-3xl overflow-hidden border-2 border-white/10">
                                    <Image
                                        src="/richard.png"
                                        alt="Richard Raju"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <span className="section-title">Genesis</span>
                        <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-10 text-white leading-[0.85] uppercase flex flex-col items-start">
                            <span>Founder.</span>
                            <span>Engineer.</span>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white/90 to-brand-secondary"
                            >
                                Visionary.
                            </motion.span>
                        </h2>

                        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                            <p className="border-l-2 border-brand-primary/30 pl-6">
                                I don't just write code; I <span className="text-white font-bold">architect ventures.</span> As a serial entrepreneur based in <span className="text-white">Bengaluru</span>, my journey is defined by the relentless pursuit of blending complex AI engineering with premium user experiences.
                            </p>
                            <p className="pl-6">
                                At the age of 19, I am leading <span className="text-brand-primary font-bold">Verblyn Labs</span> and <span className="text-brand-secondary font-bold">Qohesive</span>—two startups aimed at redefining how AI integrates into high-impact industries and autonomous software development cycles.
                            </p>
                            <p className="pl-6">
                                My philosophy is simple: <span className="italic text-white">Create technology that feels like magic but works like clockwork.</span> I bridge the gap between "what's possible" and "what's profitable."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                            {[
                                { value: "2", label: "Ventures", icon: <Target className="w-4 h-4" /> },
                                { value: "19", label: "Years Old", icon: <Sparkles className="w-4 h-4" /> },
                                { value: "3+", label: "Products", icon: <Rocket className="w-4 h-4" /> },
                                { value: "24/7", label: "Building", icon: <Zap className="w-4 h-4" /> },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 rounded-3xl bg-white/5 border border-white/5">
                                    <div className="text-2xl font-black text-white">{stat.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 truncate">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Venture Showcase (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-8 border-b border-white/5 pb-4">Principal Ventures</h3>

                        {ventures.map((venture, i) => (
                            <Tilt key={i}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-[35px] blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <a
                                        href={venture.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative block p-8 rounded-[32px] bg-surface-1/40 backdrop-blur-3xl border border-white/5 hover:border-white/20 transition-all duration-500"
                                    >
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-surface-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors overflow-hidden">
                                                <Image
                                                    src={venture.logo}
                                                    alt={venture.name}
                                                    width={36}
                                                    height={36}
                                                    className="rounded-lg"
                                                />
                                            </div>
                                            <Magnetic strength={0.2}>
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all">
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </div>
                                            </Magnetic>
                                        </div>

                                        <h4 className={`text-3xl font-black bg-gradient-to-r ${venture.color} bg-clip-text text-transparent mb-2`}>
                                            {venture.name}
                                        </h4>
                                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">{venture.role}</p>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {venture.description}
                                        </p>
                                    </a>
                                </motion.div>
                            </Tilt>
                        ))}

                        {/* Graduation Card */}
                        <div className="p-6 rounded-[32px] bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent border border-white/5 flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5 overflow-hidden">
                                    <Image
                                        src="/logos/christ.png"
                                        alt="Christ University"
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="text-white font-bold">B.Tech CSE '28</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Christ University</div>
                                </div>
                            </div>
                            <div className="text-[32px] font-black text-white/5 group-hover:text-white/10 transition-colors">2028</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const ArrowUpRight = ({ className }: { className?: string }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);
