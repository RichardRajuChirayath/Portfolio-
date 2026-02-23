import { Metadata } from 'next';
import { Resume } from '@/components/Resume';

export const metadata: Metadata = {
    title: "Resume | Richard Raju - Product Engineer & Founder",
    description: "Product-oriented Software Engineer and founder with experience designing and deploying real-world AI and full-stack applications. Built and launched multiple products end-to-end, combining engineering depth with product thinking.",
};

export default function ResumePage() {
    return <Resume />;
}
