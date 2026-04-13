import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Get Your Telegram ID — Free & Instant",
  description:
    "Find your Telegram user ID instantly. Free tool — just message our bot and get your ID in seconds. No signup required.",
  keywords: ["telegram id", "telegram user id", "find telegram id", "get telegram id", "telegram chat id"],
  openGraph: {
    title: "Get Your Telegram ID — Free & Instant",
    description: "Find your Telegram user ID instantly. Free tool — no signup required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Telegram ID — Free & Instant",
    description: "Find your Telegram user ID instantly. Free tool — no signup required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
