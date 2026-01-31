import { Metadata } from 'next';
import { Resume } from '@/components/Resume';

export const metadata: Metadata = {
    title: "Resume | Richard Raju - Product Engineer & Founder",
    description: "Professional resume of Richard Raju - Product Engineer, Founder, and Full Stack Developer.",
};

export default function ResumePage() {
    return <Resume />;
}
