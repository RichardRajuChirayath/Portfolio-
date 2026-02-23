import { Metadata } from 'next';
import { Resume } from '@/components/Resume';

export const metadata: Metadata = {
    title: "Resume | Richard Raju - Product Engineer & Founder",
    description: "Second-year B.Tech Computer Science student at Christ University, focused on product-oriented software engineering and real-world system building.",
};

export default function ResumePage() {
    return <Resume />;
}
