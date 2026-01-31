"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/RichardRajuChirayath", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/richard-raju-939186316", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:richardrajuchirayath@gmail.com", label: "Email" },
];

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Massive Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

            <div className="section-container relative z-10">
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 text-center lg:text-left lg:flex lg:items-end lg:justify-between"
                    >
                        <div>
                            <span className="section-title">Ready to Start?</span>
                            <h2 className="section-heading !mb-0 text-5xl lg:text-7xl">Let's build the <br />next big thing.</h2>
                        </div>
                        <div className="mt-8 lg:mt-0 lg:max-w-md text-muted-foreground text-lg leading-relaxed">
                            Currently open to <span className="text-white">strategic partnerships</span>, high-impact roles, and speaking engagements at the intersection of AI & Product.
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Info Column (5 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-5 space-y-12"
                        >
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-brand-primary" />
                                    <span>Contact Information</span>
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-5 p-4 rounded-3xl bg-white/5 border border-white/5 group hover:border-brand-primary/20 transition-colors">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Me</div>
                                            <a href="mailto:richardrajuchirayath@gmail.com" className="text-white font-medium hover:text-brand-primary transition-colors flex items-center gap-1">
                                                richardrajuchirayath@gmail.com
                                                <ArrowUpRight className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 p-4 rounded-3xl bg-white/5 border border-white/5 group hover:border-cyan-500/20 transition-colors">
                                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Location</div>
                                            <div className="text-white font-medium">Bengaluru, KA, India</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/30">Connect Socially</h3>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((link, i) => (
                                        <motion.a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            whileHover={{ y: -5, scale: 1.05 }}
                                            className="px-6 py-4 rounded-3xl bg-surface-2 border border-white/5 flex items-center gap-3 text-white/60 hover:text-white hover:border-white/20 hover:bg-surface-1 transition-all group"
                                        >
                                            {link.icon}
                                            <span className="text-sm font-semibold">{link.label}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Column (7 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-[40px] blur-3xl opacity-50 pointer-events-none" />

                                <form onSubmit={handleSubmit} className="relative glass-card !p-10 !rounded-[40px] space-y-8 bg-surface-1/40">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-brand-primary/50 focus:bg-white/[0.08] transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-brand-primary/50 focus:bg-white/[0.08] transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Your Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            rows={5}
                                            className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-brand-primary/50 focus:bg-white/[0.08] transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-legendary btn-legendary-primary !rounded-2xl !py-5 justify-center shadow-2xl hover:shadow-brand-primary/10 transition-all active:scale-[0.98] disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-3">
                                                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-3 text-lg font-bold">
                                                Send Inquiry
                                                <Send className="w-5 h-5" />
                                            </span>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
