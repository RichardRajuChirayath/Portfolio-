"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Richard's ability to ship production-ready products at speed is remarkable. His work on Medaurin showcases exceptional technical depth.",
        name: "Startup Mentor",
        role: "Tech Advisor",
        avatar: "M"
    },
    {
        quote: "A rare blend of technical excellence and product thinking. Richard doesn't just code — he builds solutions that users love.",
        name: "Industry Peer",
        role: "Fellow Founder",
        avatar: "P"
    },
    {
        quote: "Impressive execution from concept to deployment. Richard's projects demonstrate real-world impact and attention to detail.",
        name: "Academic Guide",
        role: "Professor",
        avatar: "G"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="section-title">Testimonials</p>
                    <h2 className="section-heading">What People Say</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full p-6 rounded-2xl bg-surface-2/30 border border-white/5 hover:border-white/10 transition-all relative">
                                {/* Quote Icon */}
                                <div className="absolute top-4 right-4 text-brand-primary/20">
                                    <Quote className="w-8 h-8" />
                                </div>

                                {/* Quote Text */}
                                <p className="text-white/60 text-sm leading-relaxed mb-6 relative z-10">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 border border-white/10 flex items-center justify-center text-sm font-bold text-white/60">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-medium text-white text-sm">{testimonial.name}</div>
                                        <div className="text-xs text-white/40">{testimonial.role}</div>
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
