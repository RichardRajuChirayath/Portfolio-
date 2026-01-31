"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
            setIsHovered(!!target.closest('a, button, [role="button"]'));
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed w-3 h-3 bg-white rounded-full mix-blend-difference"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Trailing Outer Ring */}
            <motion.div
                className="fixed w-10 h-10 border border-white/20 rounded-full"
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    borderWidth: isHovered ? '0px' : '1px',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Subtle Glow */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed w-20 h-20 bg-brand-primary/20 blur-2xl rounded-full"
                    style={{
                        left: cursorXSpring,
                        top: cursorYSpring,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />
            )}
        </div>
    );
};
