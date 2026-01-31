"use client";

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            {/* Print Button - Hidden when printing */}
            <div className="fixed top-6 right-6 z-50 print:hidden">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg"
                >
                    <Download className="w-4 h-4" />
                    Download PDF
                </button>
            </div>

            {/* Resume Container */}
            <div className="min-h-screen bg-gray-100 py-10 px-4 print:bg-white print:py-0 print:px-0">
                <div className="max-w-[850px] mx-auto bg-white shadow-xl print:shadow-none">

                    {/* Resume Content */}
                    <div className="p-10 print:p-12 font-['Inter',sans-serif] text-gray-900 leading-normal">

                        {/* Header */}
                        <header className="border-b-4 border-gray-900 pb-6 mb-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-4xl font-black tracking-tighter text-gray-900 mb-1">
                                        RICHARD RAJU
                                    </h1>
                                    <p className="text-xl font-bold text-blue-600 tracking-tight mb-4">
                                        Product Engineer & Serial Founder
                                    </p>
                                </div>
                                <div className="text-right print:hidden">
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                        <MapPin className="w-3 h-3" />
                                        Bengaluru, India
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-gray-600">
                                <a href="mailto:richardrajuchirayath@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    richardrajuchirayath@gmail.com
                                </a>
                                <a href="tel:+919606669730" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    +91 9606669730
                                </a>
                                <a href="https://linkedin.com/in/richard-raju-939186316" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <Linkedin className="w-4 h-4 text-gray-400" />
                                    linkedin.com/in/richard-raju
                                </a>
                                <a href="https://github.com/RichardRajuChirayath" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <Github className="w-4 h-4 text-gray-400" />
                                    github.com/RichardRaju
                                </a>
                                <a href="https://portfolio-amber-six-58.vercel.app/" target="_blank" className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors">
                                    <Globe className="w-4 h-4" />
                                    richardraju.dev
                                </a>
                                <div className="flex items-center gap-2 md:hidden">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    Bengaluru, India
                                </div>
                            </div>
                        </header>

                        <div className="grid grid-cols-1 gap-8">
                            {/* Summary */}
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-3 flex items-center gap-2">
                                    <span className="w-8 h-px bg-gray-200" />
                                    Executive Summary
                                </h2>
                                <p className="text-[15px] text-gray-800 leading-relaxed font-medium">
                                    Dynamic <span className="text-black font-bold">Product Engineer and Serial Founder</span> with a high-velocity approach to shipping production AI systems.
                                    Proven track record in scaling products from zero to thousands of users. Expertise in architecting <span className="text-black font-bold">agentic AI workflows</span>
                                    and high-performance full-stack ecosystems that drive measurable business impact and operational efficiency.
                                </p>
                            </section>

                            {/* Core Focus Area - ATS Optimization */}
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-3 flex items-center gap-2">
                                    <span className="w-8 h-px bg-gray-200" />
                                    Core Competencies
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {["Agentic AI Architecture", "Full-Stack Engineering", "Product Strategy", "System Design", "Cloud Infrastructure", "Startup Scaling", "LLM Integration", "UI/UX Engineering"].map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-md border border-gray-200">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Experience */}
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-5 flex items-center gap-2">
                                    <span className="w-12 h-px bg-gray-200" />
                                    Professional Experience
                                </h2>

                                <div className="space-y-8">
                                    {/* Qohesive */}
                                    <div className="relative pl-6 border-l-2 border-blue-600/20">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600 shadow-sm" />
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 leading-none">Co-Founder</h3>
                                                <p className="text-blue-600 font-bold text-sm">Qohesive</p>
                                            </div>
                                            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">2025 – PRESENT</span>
                                        </div>
                                        <ul className="list-disc list-outside ml-4 text-[14px] text-gray-700 space-y-2">
                                            <li><span className="font-bold text-gray-900">Architecting an autonomous AI platform</span> aimed at automating the entire Software Development Lifecycle (SDLC).</li>
                                            <li>Developing self-healing cloud systems that enable AI to build, deploy, and scale applications with zero human intervention.</li>
                                            <li>Implementing advanced <span className="font-bold text-gray-900">Vector Search and RAG strategies</span> to enhance AI context-awareness and reasoning capabilities.</li>
                                        </ul>
                                    </div>

                                    {/* Verblyn Labs */}
                                    <div className="relative pl-6 border-l-2 border-purple-600/20">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-purple-600 shadow-sm" />
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 leading-none">Founder & Technical Lead</h3>
                                                <p className="text-purple-600 font-bold text-sm">Verblyn Labs (Govt. of India Recognized MSME)</p>
                                            </div>
                                            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">2024 – PRESENT</span>
                                        </div>
                                        <ul className="list-disc list-outside ml-4 text-[14px] text-gray-700 space-y-2">
                                            <li><span className="font-bold text-gray-900">Founded an AI-first product studio</span>, successfully shipping and scaling 4+ production applications in EdTech and Healthcare.</li>
                                            <li>Engineered a custom <span className="font-bold text-gray-900">Agentic Feedback Engine</span> using Llama 3.3 and Groq, decreasing manual coordination tasks by 40%.</li>
                                            <li>Spearheaded end-to-end product delivery, managing team workflows and architecting scalable backend infrastructures on Vercel and Railway.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Key Projects */}
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-5 flex items-center gap-2">
                                    <span className="w-12 h-px bg-gray-200" />
                                    Strategic Projects
                                </h2>

                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        {
                                            title: "Clyentra - AI Compliance Engine",
                                            link: "client-feedback-enforcer.vercel.app",
                                            desc: "Enterprise-grade agentic AI for design agencies. Extracts action items from unstructured data with 95% accuracy using Llama 70B models."
                                        },
                                        {
                                            title: "AQMD - Cognitive Alignment Platform",
                                            link: "aqmd.site",
                                            desc: "High-performance EdTech engine featuring advanced PDF parsing, OCR integration, and predictive exam modeling for 3,600+ users."
                                        },
                                        {
                                            title: "Medaurin - Medication Safety Engine",
                                            link: "medaurin.vercel.app",
                                            desc: "Proprietary 6-Factor Risk Engine validating medicine safety across 4+ global authorities with complex drug-condition mapping."
                                        },
                                        {
                                            title: "Personal Portfolio - High Fidelity",
                                            link: "richardraju.dev",
                                            desc: "Premium, high-performance interactive experience engineered with Next.js 15, Framer Motion, and Tailwind CSS."
                                        }
                                    ].map((project, i) => (
                                        <div key={i} className="group border border-gray-100 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                            <div className="flex justify-between items-center mb-1">
                                                <h3 className="font-bold text-gray-900">{project.title}</h3>
                                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Selected Works</span>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-2">{project.desc}</p>
                                            <div className="flex items-center gap-1.5 text-xs text-blue-600 font-bold">
                                                <ExternalLink className="w-3 h-3" />
                                                {project.link}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Technical Stack */}
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-px bg-gray-200" />
                                    Technical Architecture
                                </h2>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { label: "Engineering", items: "TypeScript, Python, Java" },
                                        { label: "Neural/AI", items: "Groq, LangChain, RAG" },
                                        { label: "Frontend", items: "Next.js 15, React, Tailwind" },
                                        { label: "Backend/Cloud", items: "Prisma, PostgreSQL, Docker" }
                                    ].map((stack, i) => (
                                        <div key={i}>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{stack.label}</p>
                                            <p className="text-xs font-bold text-gray-900 underline decoration-blue-600/30 decoration-2 underline-offset-4">{stack.items}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-px bg-gray-200" />
                                    Academic Background
                                </h2>
                                <div className="flex justify-between items-center group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center p-2 group-hover:border-blue-600/30 transition-colors">
                                            <Image src="/logos/christ.png" alt="Christ" width={32} height={32} className="object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 leading-none mb-1 text-base">Bachelor of Technology (B.Tech)</h3>
                                            <p className="text-sm font-medium text-gray-500 italic">Christ University, Bengaluru</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-black text-gray-400">CLASS OF 2028</p>
                                        <p className="text-[10px] font-bold text-blue-600">Expected Graduation</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>

            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0.5in;
                    }
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            `}</style>
        </>
    );
};
