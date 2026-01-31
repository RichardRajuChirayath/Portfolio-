"use client";

import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUpRight, Phone } from 'lucide-react';

import Image from 'next/image';

const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/RichardRajuChirayath", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/richard-raju-939186316", label: "LinkedIn" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:richardrajuchirayath@gmail.com", label: "Email" },
    { icon: <Phone className="w-4 h-4" />, href: "tel:+919606669730", label: "Phone" },
];

const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 border-t border-white/5 bg-surface-1/30">
            <div className="section-container">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                                <Image
                                    src="/richard.png"
                                    alt="Richard Raju"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-white">Richard Raju</div>
                                <div className="text-xs text-white/40">Product Engineer</div>
                            </div>
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                            Building startups that ship. Turning ideas into production-ready products.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1 group">
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Connect</h4>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-xl bg-surface-2 border border-white/5 flex items-center justify-center text-white/40 hover:text-brand-primary hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <a
                            href="/resume"
                            target="_blank"
                            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-brand-primary hover:underline"
                        >
                            Download Resume
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-white/30">
                        © {currentYear} Richard Raju. All rights reserved.
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-white/30">
                        <span>Built with</span>
                        <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
