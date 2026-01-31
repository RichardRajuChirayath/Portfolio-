"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, MapPin, GraduationCap, Sparkles, Zap, Shield, Cpu } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
            {/* Static Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left - Content (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 group cursor-default"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Available for Partnerships</span>
                        </motion.div>

                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]">
                                <span className="block text-white">Hi, I'm</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[size:200%_auto] animate-gradient">Richard.</span>
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/50 font-medium mb-10 max-w-xl"
                        >
                            I build <span className="text-white italic">startups that ship.</span> Serial entrepreneur turning ideas into production-ready products.
                        </motion.p>

                        {/* Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12"
                        >
                            <a href="https://www.linkedin.com/company/verblynlabs/" target="_blank" className="badge-legendary !bg-brand-primary/10 !border-brand-primary/20 !text-brand-primary flex items-center gap-2 hover:scale-105 transition-transform">
                                <Image src="/logos/verblyn.png" alt="Verblyn Labs" width={16} height={16} className="rounded-sm" />
                                <span>Founder @ Verblyn Labs</span>
                            </a>
                            <a href="https://www.linkedin.com/company/qohesive/" target="_blank" className="badge-legendary !bg-cyan-500/10 !border-cyan-500/20 !text-cyan-400 flex items-center gap-2 hover:scale-105 transition-transform">
                                <Image src="/logos/qohesive.png" alt="Qohesive" width={16} height={16} className="rounded-sm" />
                                <span>Co-Founder @ Qohesive</span>
                            </a>
                            <div className="badge-legendary flex items-center gap-2">
                                <GraduationCap className="w-3.5 h-3.5 text-white/40" />
                                <span>Christ University '28</span>
                            </div>
                            <div className="badge-legendary flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-white/40" />
                                <span>Bengaluru, IN</span>
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-5"
                        >
                            <a href="#work" className="btn-legendary btn-legendary-primary !px-8 !py-4 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                                <span className="text-lg">View Projects</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="/resume" target="_blank" className="btn-legendary btn-legendary-secondary !px-6 !py-4">
                                <span>Resume</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <div className="flex gap-3">
                                <a href="https://github.com/RichardRajuChirayath" target="_blank" className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all active:scale-90">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/in/richard-raju-939186316" target="_blank" className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all active:scale-90">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Visual (5 cols) */}
                    <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[500px]"
                        >
                            {/* Background Glow */}
                            <div className="absolute -inset-10 bg-brand-primary/10 rounded-full blur-[80px]" />

                            {/* Code Editor Window */}
                            <div className="relative bg-[#0d1117] rounded-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                                {/* Window Header */}
                                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <div className="text-[11px] font-mono text-white/30">richard@portfolio ~ </div>
                                    <div className="w-16" />
                                </div>

                                {/* Code Content */}
                                <div className="p-5 font-mono text-sm leading-relaxed">
                                    <div className="text-white/40 mb-4">// Building the future, one commit at a time</div>

                                    <div className="space-y-2">
                                        <div>
                                            <span className="text-[#ff7b72]">const</span>
                                            <span className="text-[#79c0ff]"> founder</span>
                                            <span className="text-white/60"> = </span>
                                            <span className="text-[#a5d6ff]">{`{`}</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-[#7ee787]">name</span>
                                            <span className="text-white/60">: </span>
                                            <span className="text-[#a5d6ff]">&quot;Richard Raju&quot;</span>
                                            <span className="text-white/40">,</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-[#7ee787]">role</span>
                                            <span className="text-white/60">: </span>
                                            <span className="text-[#a5d6ff]">&quot;Product Engineer & Founder&quot;</span>
                                            <span className="text-white/40">,</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-[#7ee787]">stack</span>
                                            <span className="text-white/60">: [</span>
                                            <span className="text-[#a5d6ff]">&quot;Next.js&quot;</span>
                                            <span className="text-white/40">, </span>
                                            <span className="text-[#a5d6ff]">&quot;Llama&quot;</span>
                                            <span className="text-white/40">, </span>
                                            <span className="text-[#a5d6ff]">&quot;TypeScript&quot;</span>
                                            <span className="text-white/60">]</span>
                                            <span className="text-white/40">,</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-[#7ee787]">status</span>
                                            <span className="text-white/60">: </span>
                                            <span className="text-[#a5d6ff]">&quot;Shipping products&quot;</span>
                                        </div>
                                        <div>
                                            <span className="text-[#a5d6ff]">{`}`}</span>
                                            <span className="text-white/40">;</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center gap-2">
                                        <span className="text-[#27c93f]">❯</span>
                                        <span className="text-white/70">npm run build-startup</span>
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                            className="w-2 h-5 bg-white/70"
                                        />
                                    </div>
                                </div>

                                {/* Stats Bar */}
                                <div className="px-5 py-3 bg-[#161b22] border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                        <span className="text-[10px] font-mono text-white/40">2 startups</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-white/30">main ✓</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Background Text Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 select-none overflow-hidden">
                    <span className="text-[20vw] font-black text-white/[0.015] tracking-tighter">BUILDER</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-brand-primary/50 rounded-full"></div>
                </motion.div>
            </motion.div>

            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)] -z-10"></div>
        </section>
    );
};
