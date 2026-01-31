"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Smartphone, Layers, Code2, Sparkles, Terminal } from 'lucide-react';
import { Magnetic } from './Magnetic';

const techGroups = [
    {
        title: "Frontend Excellence",
        icon: <Globe className="w-5 h-5" />,
        skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "Framer Motion"],
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Backend & Systems",
        icon: <Database className="w-5 h-5" />,
        skills: ["Node.js", "PostgreSQL", "Prisma ORM", "Supabase", "REST/GraphQL"],
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: "Artificial Intelligence",
        icon: <Cpu className="w-5 h-5" />,
        skills: ["Llama 3.3", "Groq API", "Agentic Systems", "Prompt Eng", "PyTorch"],
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        title: "Mobile & Integration",
        icon: <Smartphone className="w-5 h-5" />,
        skills: ["Capacitor", "PWA", "WebSockets", "Auth.js", "Clerk"],
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    }
];

const stats = [
    { value: "3", label: "Foundations", icon: <Layers className="w-4 h-4" /> },
    { value: "50+", label: "Features Shipped", icon: <Terminal className="w-4 h-4" /> },
    { value: "98%", label: "Test Coverage", icon: <Sparkles className="w-4 h-4" /> },
    { value: "10ms", label: "Latency Focus", icon: <Code2 className="w-4 h-4" /> },
];

export const Skills = () => {
    return (
        <section id="stack" className="py-32 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side: Header & Stats */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="section-title">Tech Arsenal</span>
                            <h2 className="section-heading text-5xl lg:text-7xl font-bold tracking-tighter mb-8 italic">Engines of <br />Creation.</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                                A battle-tested stack selected for performance, scalability, and developer experience.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-6 rounded-[28px] bg-white/5 border border-white/5 flex flex-col gap-3 group hover:border-brand-primary/20 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-brand-primary transition-colors">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-white group-hover:text-brand-primary transition-colors">{stat.value}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Skill Bento Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {techGroups.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[32px] blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative glass-card !p-8 h-full flex flex-col gap-8 !rounded-[32px] hover:border-white/20 transition-all">
                                    <div className="flex items-center justify-between">
                                        <div className={`w-12 h-12 rounded-2xl ${group.bg} flex items-center justify-center ${group.color}`}>
                                            {group.icon}
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Category 0{i + 1}</span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{group.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {group.skills.map((skill, j) => (
                                                <Magnetic key={j} strength={0.15}>
                                                    <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-default">
                                                        {skill}
                                                    </span>
                                                </Magnetic>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
