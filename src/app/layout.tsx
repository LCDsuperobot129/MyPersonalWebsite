import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name | Full-Stack Developer & Engineer",
  description: "Elite software engineer specializing in full-stack development, AI/ML, and award-winning hackathon projects. View my portfolio and experience.",
  keywords: ["developer", "software engineer", "full-stack", "AI", "ML", "portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Full-Stack Developer",
    description: "Elite software engineer portfolio showcasing cutting-edge projects and achievements",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
