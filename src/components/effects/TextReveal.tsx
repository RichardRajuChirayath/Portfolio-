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
 * Premium Text with a subtle entrance animation.
 * Text is always visible - no transparent/clip effects that hide content.
 */
export const PremiumText = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const mounted = useMounted();

    // Always show visible text, even before mount
    if (!mounted) return <span className={className}>{text}</span>;

    return (
        <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-block ${className}`}
        >
            {text}
        </motion.span>
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
