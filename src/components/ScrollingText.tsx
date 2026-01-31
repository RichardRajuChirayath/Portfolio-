"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useAnimationFrame, useSpring, useMotionValue } from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden whitespace-nowrap flex flex-nowrap">
            <motion.div className="scroller flex whitespace-nowrap space-x-12" style={{ x }}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="text-[120px] md:text-[180px] font-black uppercase text-white/[0.03] tracking-tighter leading-none select-none">
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

export const ScrollingText = () => {
    return (
        <section className="py-20 pointer-events-none relative z-0">
            <ParallaxText baseVelocity={-2}>Founder Developer AI Engineer</ParallaxText>
            <ParallaxText baseVelocity={2}>Shipping Digital Excellence</ParallaxText>
        </section>
    );
};
