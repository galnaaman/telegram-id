import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get your Telegram ID — free, instant, zero tracking",
  description:
    "Find your Telegram user ID, group ID, or channel ID. Message the bot, get the number. No signup, no data stored.",
  keywords: [
    "telegram id",
    "telegram user id",
    "find telegram id",
    "get telegram id",
    "telegram chat id",
  ],
  openGraph: {
    title: "Get your Telegram ID",
    description:
      "Message the bot. Get your ID. No signup, no tracking.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get your Telegram ID",
    description:
      "Message the bot. Get your ID. No signup, no tracking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
        style={{ backgroundColor: "#0a0a0a", color: "#fafafa" }}
      >
        {children}
      </body>
    </html>
  );
}
