import "./globals.css";
import type { Metadata } from "next";
import { Calistoga, Geist, Geist_Mono, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  weight: ["400"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          calistoga.variable,
          inter.variable,
          `antialiased bg-gray-900 text-white font-sans`
        )}
      >
        {children}
      </body>
    </html>
  );
}
