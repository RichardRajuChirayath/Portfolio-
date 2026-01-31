"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

/**
 * Custom hook to handle hydration.
 */
function useMounted() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return mounted;
}

/**
 * WordReveal with a subtle Y-axis entrance.
 * Optimized for a weighted, premium feel.
 */
export const WordReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const mounted = useMounted();
    if (!mounted) return <span className={className}>{text}</span>;

    const words = text.split(" ");
    return (
        <span className={`inline-flex flex-wrap ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 py-[0.1em]">
                    <motion.span
                        initial={{ y: "40%", opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 1.2,
                            delay: delay + i * 0.08,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

/**
 * Premium Text with a subtle, multi-stage entrance and shimmer.
 * Feels more "living" and high-end.
 */
export const PremiumText = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const mounted = useMounted();
    if (!mounted) return <span className={className}>{text}</span>;

    return (
        <div className={`relative inline-block ${className}`}>
            {/* Shimmer Base with extra vertical depth */}
            <motion.span
                initial={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/40 block"
            >
                {text}
            </motion.span>

            {/* Moving Shimmer Light - Refined Timing */}
            <motion.span
                initial={{ x: "-150%", opacity: 0 }}
                whileInView={{ x: "150%", opacity: [0, 1, 0] }}
                viewport={{ once: true }}
                transition={{
                    duration: 3,
                    delay: delay + 1,
                    ease: [0.33, 1, 0.68, 1]
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-clip-text text-transparent pointer-events-none select-none"
            >
                {text}
            </motion.span>
        </div>
    );
};

/**
 * High-fidelity LetterReveal with staggered entrance and weighted blur.
 */
export const LetterReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const mounted = useMounted();
    if (!mounted) return <span className={className}>{text}</span>;

    return (
        <span className={`inline-flex flex-wrap ${className}`}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(5px)", y: 8 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: delay + i * 0.03,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};
