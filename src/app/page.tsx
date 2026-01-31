"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { GrainyBackground } from '@/components/GrainyBackground';

export default function Home() {
    return (
        <>
            <GrainyBackground />
            <Navbar />
            <main className="relative">
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
