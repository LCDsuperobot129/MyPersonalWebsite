import type { Metadata } from "next";
import { Nunito, Lora } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"], // Regular, Medium, Semibold (lighter weights)
});

export const metadata: Metadata = {
  title: "Kevin's Portfolio"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${lora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
