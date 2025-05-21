import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import CursorTrail from "@/components/CursorTrail";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amukta Malya | Portfolio",
  description: "Full-Stack Developer & Problem Solver | Building innovative solutions with modern technologies",
  keywords: "Full-Stack Developer, Software Engineer, Problem Solver, React, Node.js, Python, Competitive Programming",
  authors: [{ name: "Amukta Malya Yajamanyam" }],
  openGraph: {
    title: "Amukta Malya | Portfolio",
    description: "Full-Stack Developer & Problem Solver | Building innovative solutions with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <LoadingScreen />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <ScrollToTop />
        <CursorTrail />
      </body>
    </html>
  );
}
