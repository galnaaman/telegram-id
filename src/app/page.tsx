"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Shield,
  Zap,
  Globe,
  MessageCircle,
  Hash,
  ChevronDown,
  Bot,
} from "lucide-react";
import {
  HeroColorPanelsRoot,
  HeroColorPanelsContainer,
  HeroColorPanelsContent,
  HeroColorPanelsHeading,
  HeroColorPanelsDescription,
  HeroColorPanelsActions,
  HeroColorPanelsBadges,
  HeroColorPanelsVisual,
  HeroColorPanelsMobileVisual,
} from "@/components/ui/hero-color-panel";
import { GlowCard } from "@/components/ui/glow-card";
import { CopyButton } from "@/components/ui/copy-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const BOT_USERNAME = "gal_telegram_user_info_bot";

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const steps = [
  {
    icon: MessageCircle,
    title: "Open the Bot",
    description: "Click the button above to open our Telegram bot",
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
    description: "No signup, no ads, no tracking",
  },
];

const faqs = [
  {
    q: "What is a Telegram ID?",
    a: "A Telegram ID is a unique numeric identifier assigned to every Telegram account. Unlike usernames (which can change), your ID is permanent and never changes.",
  },
  {
    q: "Why would I need my Telegram ID?",
    a: "You need it for bot development, API integrations, connecting to services, setting up notifications, or any tool that requires your Telegram chat ID.",
  },
  {
    q: "Is this safe?",
    a: "Completely. The bot only reads the chat ID from your message (which Telegram provides automatically) and sends it back. We don't store anything.",
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
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Hero Section — Cult UI Hero Color Panels */}
      <HeroColorPanelsRoot
        srTitle="Get Your Telegram ID"
        title={
          <span className="text-white">
            Get Your <br />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Telegram ID
            </span>
          </span>
        }
        subtitle={
          <span className="text-white/50 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            in seconds. for free.
          </span>
        }
        description={
          <>
            Free tool to find your Telegram user ID, group ID, or channel ID.
            Just message our bot — that&apos;s it. No signup, no tracking,{" "}
            <span className="font-medium text-white/80">no bullshit</span>.
          </>
        }
        showCta={true}
        ctaProps={{
          label: (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Open Bot in Telegram
            </span>
          ),
          href: `https://t.me/${BOT_USERNAME}`,
          target: "_blank",
          rel: "noopener noreferrer",
          buttonClassName:
            "bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white border-0 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 text-base px-8 py-6",
        }}
        techStack={[
          { name: "Telegram", icon: TelegramIcon },
          { name: "Free" },
          { name: "No Signup" },
          { name: "Instant" },
        ]}
        desktopShaderProps={{
          colors: ["#0ea5e9", "#6366f1", "#8b5cf6", "#0ea5e9"],
          colorBack: "#09090b00",
          speed: 3,
          density: 4,
          blur: 0.3,
        }}
        mobileShaderProps={{
          colors: ["#0ea5e9", "#6366f1", "#8b5cf6", "#0ea5e9"],
          colorBack: "#09090b00",
          speed: 3,
          density: 4,
          blur: 0.3,
          style: { height: "100%", width: "100%" },
        }}
        className="min-h-[85vh] flex items-center bg-zinc-950"
      >
        <HeroColorPanelsContainer>
          <HeroColorPanelsContent>
            <HeroColorPanelsHeading />
            <HeroColorPanelsDescription
              descriptionClassName="text-white/50"
            />
            <HeroColorPanelsActions />
            <div
              className="flex justify-center lg:justify-start"
              data-slot="hero-colorpanels-badges-wrap"
            >
              <HeroColorPanelsBadges />
            </div>
          </HeroColorPanelsContent>
          <HeroColorPanelsVisual />
        </HeroColorPanelsContainer>
        <HeroColorPanelsMobileVisual />
      </HeroColorPanelsRoot>

      {/* Demo ID Display */}
      <section className="relative z-10 mx-auto -mt-8 max-w-sm px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-xl">
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
              ↑ Demo. Open the bot to get your real ID.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-white">
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
              <h3 className="mb-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
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
              <h3 className="mb-1 font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-white/40">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-6 pb-24">
        <Separator className="mb-24 bg-white/5" />
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-white">
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
        <h2 className="mb-4 text-2xl font-bold text-white">Ready?</h2>
        <p className="mb-8 text-white/40">Takes literally two seconds.</p>
        <a
          href={`https://t.me/${BOT_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-zinc-950 transition-all hover:bg-white/90 active:scale-[0.98]"
        >
          <Send className="h-4 w-4" />
          Get My Telegram ID
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-xs text-white/20">
        <div className="mx-auto max-w-5xl px-6">
          Free & open source · No data stored · Built with ❤️
        </div>
      </footer>
    </div>
  );
}
