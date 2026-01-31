import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: '--font-heading',
    weight: ['300', '400', '500', '600', '700'],
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
    title: "Richard Raju | Product Engineer & Founder",
    description: "Serial entrepreneur turning ideas into production-ready products. Founder @ Verblyn Labs, Co-Founder @ Qohesive. Building startups that ship.",
    keywords: ["Richard Raju", "Product Engineer", "Founder", "Startup", "Full Stack Developer", "Next.js", "React", "TypeScript"],
    authors: [{ name: "Richard Raju" }],
    creator: "Richard Raju",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://richardraju.dev",
        title: "Richard Raju | Product Engineer & Founder",
        description: "Serial entrepreneur turning ideas into production-ready products. Building startups that ship.",
        siteName: "Richard Raju",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Richard Raju - Product Engineer & Founder",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Richard Raju | Product Engineer & Founder",
        description: "Serial entrepreneur turning ideas into production-ready products. Building startups that ship.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.ico",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground antialiased`}>
                {children}
            </body>
        </html>
    );
}
