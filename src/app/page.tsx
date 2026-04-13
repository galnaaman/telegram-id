"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  MessageCircle,
  Bot,
  Hash,
  ChevronDown,
} from "lucide-react";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { GlowCard } from "@/components/ui/glow-card";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { CopyButton } from "@/components/ui/copy-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BOT_USERNAME = "getmytgidbot"; // Change this to your bot username

const steps = [
  {
    icon: MessageCircle,
    title: "Open the Bot",
    description: "Click the button below to open our Telegram bot",
  },
  {
    icon: Send,
    title: "Send /start",
    description: "Send any message or just hit Start",
  },
  {
    icon: Hash,
    title: "Get Your ID",
    description: "The bot instantly replies with your Telegram ID",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant",
    description: "Get your ID in under 2 seconds",
  },
  {
    icon: Shield,
    title: "Private",
    description: "We don't store any data. Ever.",
  },
  {
    icon: Globe,
    title: "Free Forever",
    description: "No signup, no ads, no bullshit",
  },
];

const faqs = [
  {
    q: "What is a Telegram ID?",
    a: "A Telegram ID is a unique numeric identifier assigned to every Telegram account. Unlike usernames (which can change), your ID is permanent and never changes.",
  },
  {
    q: "Why would I need my Telegram ID?",
    a: "You need it for bot development, API integrations, connecting to services like OpenClaw, setting up notifications, or any tool that requires your Telegram chat ID.",
  },
  {
    q: "Is this safe?",
    a: "Completely. The bot only reads the chat ID from your message (which Telegram provides automatically) and sends it back. We don't store anything — no messages, no IDs, no metadata.",
  },
  {
    q: "Can I get a group or channel ID?",
    a: "Yes! Add the bot to your group or forward a message from a channel to the bot. It will return the corresponding chat ID.",
  },
  {
    q: "My ID is negative — is that wrong?",
    a: "No. Group and channel IDs are negative numbers (e.g., -1001234567890). User IDs are always positive. Both are correct.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-white/5 last:border-0"
      initial={false}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-white/90 transition-colors hover:text-white"
      >
        {q}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-white/50">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedGradient />

      {/* Noise texture overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold tracking-tight">TelegramID</span>
        </div>
        <Badge variant="secondary" className="border-white/10 bg-white/5 text-white/60 text-xs">
          100% Free
        </Badge>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-3xl px-6 pb-24 pt-20 text-center md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs"
            >
              <Zap className="mr-1 h-3 w-3" />
              No signup required
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Get Your{" "}
            <TextShimmer className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Telegram ID
            </TextShimmer>
            <br />
            <span className="text-white/50">in seconds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/50 md:text-lg"
          >
            Free tool to find your Telegram user ID, group ID, or channel ID.
            Just message our bot — that&apos;s it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={`https://t.me/${BOT_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:shadow-sky-500/30 active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
              Open Bot in Telegram
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Demo ID display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-16 max-w-sm"
          >
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/30">
                Your Telegram ID
              </p>
              <div className="flex items-center justify-between gap-4">
                <code className="text-2xl font-bold tracking-wider text-white/90 tabular-nums">
                  123456789
                </code>
                <CopyButton text="123456789" />
              </div>
              <p className="mt-3 text-xs text-white/20">
                ↑ This is a demo. Open the bot to get your real ID.
              </p>
            </div>
          </motion.div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight">
            Three steps. Two seconds.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <GlowCard key={step.title}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-400">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="mb-1 text-xs font-medium text-white/30">
                  Step {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <Separator className="mb-24 bg-white/5" />
          <div className="grid gap-12 md:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <feature.icon className="h-5 w-5 text-white/60" />
                </div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <p className="text-sm text-white/40">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-2xl px-6 pb-24">
          <Separator className="mb-24 bg-white/5" />
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            FAQ
          </h2>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 px-6 backdrop-blur-sm">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-2xl px-6 pb-32 text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready?</h2>
          <p className="mb-8 text-white/40">Takes literally two seconds.</p>
          <a
            href={`https://t.me/${BOT_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            <Send className="h-4 w-4" />
            Get My Telegram ID
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-xs text-white/20">
        <div className="mx-auto max-w-5xl px-6">
          Free & open source. No data stored.
        </div>
      </footer>
    </div>
  );
}
