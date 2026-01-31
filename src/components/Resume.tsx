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
                    <div className="p-10 print:p-12 font-serif text-gray-900 leading-tight">

                        {/* Header - Centered Style */}
                        <header className="text-center mb-8">
                            <h1 className="text-3xl font-bold mb-1">Richard Raju</h1>
                            <p className="text-[14px] text-gray-800 mb-1">
                                Product Engineer <span className="mx-1">•</span> Full-Stack Developer <span className="mx-1">•</span> AI Solutions Architect
                            </p>
                            <p className="text-[13px] text-gray-700 mb-1">Bengaluru, Karnataka, India</p>
                            <div className="text-[13px] text-gray-700 space-x-2">
                                <span><strong>Mobile:</strong> 9606669730</span>
                                <span><strong>Email:</strong> richardrajuchirayath@gmail.com</span>
                            </div>
                            <div className="text-[13px] text-gray-700 mt-1">
                                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/richard-raju-939186316" target="_blank" className="hover:underline">linkedin.com/in/richard-raju</a>
                                <span className="mx-2 font-bold">Portolio:</span> <a href="https://richardraju.dev" target="_blank" className="hover:underline">richardraju.dev</a>
                            </div>
                        </header>

                        {/* Professional Summary */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold border-b border-gray-800 pb-0.5 mb-2">Professional Summary</h2>
                            <p className="text-[13px] text-gray-700 leading-relaxed text-justify italic">
                                Product-focused engineer and founder building reliable, workflow-driven software systems across web and mobile platforms.
                                Strong foundation in full-stack engineering, AI integration, and UX-flow design — with emphasis on clarity,
                                interaction behavior, and deployable real-world solutions.
                            </p>
                        </section>

                        {/* Experience */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold border-b border-gray-800 pb-0.5 mb-3">Experience</h2>
                            <div className="space-y-4">
                                {/* Verblyn Labs */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-[14px]">Founder & Technical Lead — Verblyn Labs</h3>
                                        <span className="text-[13px] italic">2024 — Present</span>
                                    </div>
                                    <p className="text-[13px] text-gray-600 mb-1 italic">Bengaluru, India</p>
                                    <ul className="list-disc list-outside ml-5 text-[13px] text-gray-700 space-y-0.5">
                                        <li>Founded a product studio focused on building user-centric AI solutions across EdTech and Healthcare domains.</li>
                                        <li>Led development of multiple production applications serving thousands of users with a focus on impact and scale.</li>
                                        <li>Implemented AI-powered features using Groq, Llama, and other LLM technologies to automate complex workflows.</li>
                                        <li>Managed end-to-end product lifecycle from ideation, system architecture to global deployment.</li>
                                    </ul>
                                </div>

                                {/* Qohesive */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-[14px]">Co-Founder — Qohesive</h3>
                                        <span className="text-[13px] italic">2025 — Present</span>
                                    </div>
                                    <p className="text-[13px] text-gray-600 mb-1 italic">Remote / Bengaluru</p>
                                    <ul className="list-disc list-outside ml-5 text-[13px] text-gray-700 space-y-0.5">
                                        <li>Building a unified AI platform that simplifies how complex software is created, operated, and scaled autonomously.</li>
                                        <li>Architecting self-healing cloud systems and agentic workflows to unify the entire development tech stack.</li>
                                        <li>Developing innovative approaches to AI-driven software development and deployment automation.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Selected Projects */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold border-b border-gray-800 pb-0.5 mb-3">Selected Projects</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-[14px] mb-1">Clyentra — AI Compliance Engine (Llama 3.3 + Agentic Workflows)</h3>
                                    <ul className="list-disc list-outside ml-5 text-[13px] text-gray-700 space-y-0.5">
                                        <li>Built an enterprise-grade agentic AI for design agencies to extract action items from unstructured data.</li>
                                        <li>Achieved 95% accuracy in task extraction using Llama 70B models, resulting in 40% faster feedback processing.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[14px] mb-1">AQMD — Cognitive Alignment Platform (Full-Stack + AI)</h3>
                                    <ul className="list-disc list-outside ml-5 text-[13px] text-gray-700 space-y-0.5">
                                        <li>Developed a high-performance EdTech platform serving 3600+ active users with smart PDF parsing and OCR.</li>
                                        <li>Implemented predictive exam modeling and workflow-guided learning experiences using Next.js 15 and Groq.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[14px] mb-1">Medaurin — Medication Safety Engine (Healthcare Workflow Tool)</h3>
                                    <ul className="list-disc list-outside ml-5 text-[13px] text-gray-700 space-y-0.5">
                                        <li>Built a safety-oriented guided-input system for structured medical interaction flows with complex drug-condition mapping.</li>
                                        <li>Validated medicine safety across 4+ global authorities using a proprietary 6-Factor Risk Engine.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Core Strengths */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold border-b border-gray-800 pb-0.5 mb-2">Core Strengths</h2>
                            <p className="text-[13px] text-gray-700">
                                Product Thinking <span className="mx-1">•</span> UX-Flow Design <span className="mx-1">•</span> System Architecture <span className="mx-1">•</span> Deployment Ownership <span className="mx-1">•</span> Decision-Logic Modeling <span className="mx-1">•</span> Rule-Based Workflows <span className="mx-1">•</span> Independent Execution
                            </p>
                        </section>

                        {/* Education */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold border-b border-gray-800 pb-0.5 mb-2">Education</h2>
                            <div>
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-[14px]">Christ University, Bangalore</h3>
                                    <span className="text-[13px] italic">Jan 2024 — Mar 2028 (Expected)</span>
                                </div>
                                <p className="text-[13px] text-gray-700">B.Tech, Computer Science Engineering (Artificial Intelligence & Machine Learning)</p>
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold border-b border-gray-800 pb-0.5 mb-2">Skills</h2>
                            <p className="text-[13px] text-gray-700">
                                Full-Stack Development <span className="mx-1">•</span> TypeScript/Next.js <span className="mx-1">•</span> Python/AI APIs <span className="mx-1">•</span> PostgreSQL/NoSQL <span className="mx-1">•</span> Product Engineering <span className="mx-1">•</span> Workflow Modeling <span className="mx-1">•</span> Cloud Infrastructure <span className="mx-1">•</span> Testing & Deployment
                            </p>
                        </section>

                        {/* Languages */}
                        <section>
                            <h2 className="text-lg font-bold border-b border-gray-800 pb-0.5 mb-2">Languages</h2>
                            <p className="text-[13px] text-gray-700">
                                English (Full Professional) <span className="mx-1">•</span> Malayalam (Native) <span className="mx-1">•</span> Kannada (Working) <span className="mx-1">•</span> Hindi (Elementary) <span className="mx-1">•</span> French (Elementary)
                            </p>
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
