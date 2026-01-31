"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, Sparkles } from 'lucide-react';
import Image from 'next/image';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' }
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-6 px-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2
                }}
                className={cn(
                    "relative flex items-center justify-between gap-8 px-6 py-2.5 rounded-[24px] transition-all duration-700 w-full max-w-3xl group",
                    scrolled
                        ? "bg-surface-1/40 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.98]"
                        : "bg-transparent border border-transparent"
                )}
            >
                {/* Subtle Shine Effect */}
                <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            x: ['-100%', '100%']
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 2
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[20deg]"
                    />
                </div>

                {/* Logo */}
                <a href="#" className="flex items-center gap-3 relative z-10">
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="relative w-10 h-10 rounded-xl overflow-hidden animate-gradient shadow-lg shadow-brand-primary/20 border border-white/10"
                    >
                        <Image
                            src="/richard.png"
                            alt="Richard Raju"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Richard Raju</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-primary leading-none">Founder</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1.5 relative z-10">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onMouseEnter={() => setHoveredTab(item.name)}
                            onMouseLeave={() => setHoveredTab(null)}
                            className="relative px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
                        >
                            {item.name}
                            {hoveredTab === item.name && (
                                <motion.div
                                    layoutId="nav-hover"
                                    className="absolute inset-0 bg-white/[0.08] rounded-xl -z-10"
                                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4 relative z-10">
                    <a
                        href="#contact"
                        className="btn-legendary btn-legendary-primary !py-2.5 !px-5 flex items-center gap-2 group/btn"
                    >
                        <span className="text-sm font-semibold">Hire Me</span>
                        <Sparkles className="w-3.5 h-3.5 group-hover/btn:animate-pulse" />
                    </a>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-90 transition-all border border-white/5"
                    >
                        {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white/70" />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-4 right-4 mt-4 p-4 rounded-[28px] bg-surface-1/90 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] md:hidden z-[90]"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-between text-base text-white/60 hover:text-white px-6 py-4 rounded-2xl hover:bg-white/5 transition-all group"
                                >
                                    <span>{item.name}</span>
                                    <div className="w-2 h-2 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
