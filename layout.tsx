import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attention Intelligence - Your Second Pair of Eyes",
  description: "Track and understand your attention across YouTube, Twitter/X, Reddit, Pinterest, Instagram, TikTok. 100% local, no accounts, your data never leaves your browser.",
  keywords: "attention tracking, youtube tracker, social media analytics, screen time, digital wellbeing, privacy-first",
  openGraph: {
    title: "Attention Intelligence",
    description: "Your second pair of eyes. Track attention across platforms. 100% local.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
