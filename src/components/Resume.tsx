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
                    <div className="p-10 print:p-8 font-['Inter',sans-serif] text-gray-900">

                        {/* Header */}
                        <header className="border-b-2 border-gray-900 pb-4 mb-6">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
                                RICHARD RAJU
                            </h1>
                            <p className="text-lg font-medium text-gray-700 mb-3">
                                Product Engineer & Founder
                            </p>
                            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600">
                                <a href="mailto:richardrajuchirayath@gmail.com" className="flex items-center gap-1.5 hover:text-gray-900">
                                    <Mail className="w-3.5 h-3.5" />
                                    richardrajuchirayath@gmail.com
                                </a>
                                <a href="tel:+919606669730" className="flex items-center gap-1.5 hover:text-gray-900">
                                    <Phone className="w-3.5 h-3.5" />
                                    +91 9606669730
                                </a>
                                <a href="https://linkedin.com/in/richard-raju-939186316" target="_blank" className="flex items-center gap-1.5 hover:text-gray-900">
                                    <Linkedin className="w-3.5 h-3.5" />
                                    linkedin.com/in/richard-raju
                                </a>
                                <a href="https://github.com/RichardRajuChirayath" target="_blank" className="flex items-center gap-1.5 hover:text-gray-900">
                                    <Github className="w-3.5 h-3.5" />
                                    github.com/RichardRajuChirayath
                                </a>
                                <a href="https://portfolio-amber-six-58.vercel.app/" target="_blank" className="flex items-center gap-1.5 hover:text-gray-900 font-semibold text-blue-600">
                                    <Globe className="w-3.5 h-3.5" />
                                    Portfolio
                                </a>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5" />
                                    Bengaluru, India
                                </span>
                            </div>
                        </header>

                        {/* Summary */}
                        <section className="mb-6">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
                                Professional Summary
                            </h2>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Serial entrepreneur and Product Engineer with a proven track record of building and shipping production-ready applications.
                                Founder of Verblyn Labs and Co-Founder of Qohesive. Expertise in full-stack development, AI integration, and product design.
                                Passionate about creating technology solutions that solve real-world problems with clarity and measurable impact.
                            </p>
                        </section>

                        {/* Experience */}
                        <section className="mb-6">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
                                Experience
                            </h2>

                            <div className="space-y-5">
                                {/* Verblyn Labs */}
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <div>
                                            <h3 className="font-bold text-gray-900">Founder & Technical Lead</h3>
                                            <p className="text-sm text-gray-600">Verblyn Labs</p>
                                        </div>
                                        <span className="text-sm text-gray-500">2024 - Present</span>
                                    </div>
                                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-1">
                                        <li>Founded a product studio focused on building user-centric AI solutions across EdTech and Healthcare domains</li>
                                        <li>Led development of multiple production applications serving thousands of users</li>
                                        <li>Implemented AI-powered features using Groq, Llama, and other LLM technologies</li>
                                        <li>Managed end-to-end product lifecycle from ideation to deployment</li>
                                    </ul>
                                </div>

                                {/* Qohesive */}
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <div>
                                            <h3 className="font-bold text-gray-900">Co-Founder</h3>
                                            <p className="text-sm text-gray-600">Qohesive</p>
                                        </div>
                                        <span className="text-sm text-gray-500">2025 - Present</span>
                                    </div>
                                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-1">
                                        <li>Building a unified AI platform that simplifies software creation, operation, and scaling</li>
                                        <li>Architecting systems that enable AI to build, run, and scale applications autonomously</li>
                                        <li>Developing innovative approaches to AI-driven software development</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section className="mb-6">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
                                Key Projects
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-gray-900">Clyentra - AI Compliance Engine</h3>
                                            <a href="https://client-feedback-enforcer-production.up.railway.app/" target="_blank" className="text-blue-600 hover:underline text-xs flex items-center gap-1">
                                                <ExternalLink className="w-3 h-3" />
                                                Live
                                            </a>
                                        </div>
                                        <span className="text-sm text-gray-500">2025</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Client Feedback Enforcer for design agencies using Llama 3.3 (70B). Extracts action items from client emails and creates non-negotiable checklists. 40% faster feedback processing.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-gray-900">AQMD - Cognitive Alignment Platform</h3>
                                            <a href="https://www.aqmd.site/" target="_blank" className="text-blue-600 hover:underline text-xs flex items-center gap-1">
                                                <ExternalLink className="w-3 h-3" />
                                                Live
                                            </a>
                                        </div>
                                        <span className="text-sm text-gray-500">2023 - 2024</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        High-performance EdTech platform with 36+ active users. Features smart PDF engine, OCR integration, and predictive exam modeling. Built with Next.js 15+, TypeScript, and Groq AI.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-gray-900">Medaurin - Medication Safety Engine</h3>
                                            <a href="https://medaurin-web-production.up.railway.app/" target="_blank" className="text-blue-600 hover:underline text-xs flex items-center gap-1">
                                                <ExternalLink className="w-3 h-3" />
                                                Live
                                            </a>
                                        </div>
                                        <span className="text-sm text-gray-500">2024</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        HealthTech application featuring 6-Factor proprietary Risk Engine. Validates medicine safety across 4+ global authorities with drug-condition mapping and safety alerts.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-gray-900">Personal Portfolio - Interactive Experience</h3>
                                            <a href="https://portfolio-amber-six-58.vercel.app/" target="_blank" className="text-blue-600 hover:underline text-xs flex items-center gap-1">
                                                <ExternalLink className="w-3 h-3" />
                                                Live
                                            </a>
                                        </div>
                                        <span className="text-sm text-gray-500">2025</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Premium, high-performance portfolio engineered with Next.js, Framer Motion, and Tailwind CSS. Features custom cursor interactions, editorial typography, and high-fidelity animations.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="mb-6">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div>
                                    <span className="font-semibold text-gray-900">Languages:</span>
                                    <span className="text-gray-700"> TypeScript, JavaScript, Python, Java, SQL</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900">Frontend:</span>
                                    <span className="text-gray-700"> React, Next.js, Tailwind CSS, Framer Motion</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900">Backend:</span>
                                    <span className="text-gray-700"> Node.js, Express, REST APIs, Prisma</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900">AI/ML:</span>
                                    <span className="text-gray-700"> Groq, Llama, LangChain, OpenAI API</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900">Databases:</span>
                                    <span className="text-gray-700"> PostgreSQL, MongoDB, Supabase, Firebase</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900">Tools:</span>
                                    <span className="text-gray-700"> Git, Docker, Vercel, Figma, VS Code</span>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
                                Education
                            </h2>
                            <div className="flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className="relative w-10 h-10 shrink-0 border border-gray-100 rounded-md overflow-hidden bg-white">
                                        <Image
                                            src="/logos/christ.png"
                                            alt="Christ University"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Bachelor of Technology (B.Tech)</h3>
                                        <p className="text-sm text-gray-600">Christ University, Bengaluru</p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500">2024 - 2028 (Expected)</span>
                            </div>
                        </section>

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
