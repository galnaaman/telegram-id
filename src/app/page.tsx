"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import {
  PaperPlaneTilt,
  ChatCircle,
  Hash,
  Lightning,
  ShieldCheck,
  Globe,
  CaretDown,
  Copy,
  Check,
  ArrowUpRight,
} from "@phosphor-icons/react";
import {
  HeroColorPanelsRoot,
  HeroColorPanelsContainer,
  HeroColorPanelsContent,
  HeroColorPanelsHeading,
  HeroColorPanelsDescription,
  HeroColorPanelsVisual,
  HeroColorPanelsMobileVisual,
} from "@/components/ui/hero-color-panel";

const BOT_USERNAME = "gal_telegram_user_info_bot";
const ACCENT = "#10b981"; // emerald-500

/* ------------------------------------------------------------------ */
/*  Utility: Copy Button                                               */
/* ------------------------------------------------------------------ */
function CopyID({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 rounded-lg bg-white/[0.04] px-3 py-1.5 font-mono text-xs tracking-wide text-white/50 ring-1 ring-white/[0.06] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.08] hover:text-white/70 active:scale-[0.97]"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="ok"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1.5 text-emerald-400"
          >
            <Check weight="bold" size={14} /> copied
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1.5"
          >
            <Copy weight="regular" size={14} /> copy
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Magnetic CTA Button                                                */
/* ------------------------------------------------------------------ */
function MagneticCTA() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useTransform(x, [-150, 150], [-6, 6]);
  const ty = useTransform(y, [-150, 150], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={`https://t.me/${BOT_USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: tx, y: ty }}
      className="group relative inline-flex items-center gap-3 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_-8px_rgba(16,185,129,0.35)] transition-shadow duration-500 hover:shadow-[0_0_60px_-4px_rgba(16,185,129,0.45)] active:scale-[0.97]"
    >
      <PaperPlaneTilt weight="bold" size={18} />
      <span>Open bot in Telegram</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
        <ArrowUpRight weight="bold" size={14} />
      </span>
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  Step Card (Double-Bezel)                                           */
/* ------------------------------------------------------------------ */
function StepCard({
  icon: Icon,
  step,
  title,
  desc,
  delay,
}: {
  icon: typeof ChatCircle;
  step: number;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      {/* outer shell */}
      <div className="rounded-[1.75rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04]">
        {/* inner core */}
        <div className="rounded-[calc(1.75rem-0.375rem)] bg-zinc-900/60 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <Icon weight="regular" size={22} />
          </div>
          <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.15em] text-white/25">
            Step {step}
          </p>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight text-white/90">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-white/40">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Item                                                           */
/* ------------------------------------------------------------------ */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-[15px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
      >
        {q}
        <CaretDown
          weight="bold"
          size={14}
          className={`shrink-0 text-white/25 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-white/35 max-w-[65ch]">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const steps = [
  {
    icon: ChatCircle,
    title: "Open the bot",
    desc: "Tap the button to launch the Telegram bot directly",
  },
  {
    icon: PaperPlaneTilt,
    title: "Send any message",
    desc: "Hit start or type anything — doesn't matter what",
  },
  {
    icon: Hash,
    title: "Get your ID",
    desc: "The bot replies instantly with your numeric Telegram ID",
  },
];

const traits = [
  {
    icon: Lightning,
    label: "Instant",
    detail: "Under 2 seconds",
  },
  {
    icon: ShieldCheck,
    label: "Private",
    detail: "Zero data stored",
  },
  {
    icon: Globe,
    label: "Free forever",
    detail: "No signup, no ads",
  },
];

const faqs = [
  {
    q: "What is a Telegram ID?",
    a: "A unique numeric identifier assigned to every Telegram account. Unlike usernames, your ID is permanent and never changes.",
  },
  {
    q: "Why would I need it?",
    a: "Bot development, API integrations, notification services, connecting tools that need your chat ID. Anything that talks to the Telegram API.",
  },
  {
    q: "Is this safe?",
    a: "The bot reads the chat ID that Telegram attaches to every message automatically and sends it back. Nothing is stored. No messages, no IDs, no metadata.",
  },
  {
    q: "Can I get a group or channel ID?",
    a: "Add the bot to a group or forward a message from a channel. It returns the corresponding chat ID.",
  },
  {
    q: "My ID is negative?",
    a: "Group and channel IDs are negative numbers. User IDs are positive. Both are correct.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Hero ── */}
      <HeroColorPanelsRoot
        srTitle="Get your Telegram ID"
        title={
          <span className="text-white">
            Get your
            <br />
            <span style={{ color: ACCENT }}>Telegram ID</span>
          </span>
        }
        subtitle={
          <span className="block text-lg font-normal tracking-normal text-white/35 sm:text-xl md:text-2xl">
            in seconds. for free. no tracking.
          </span>
        }
        description={
          <span className="text-white/40">
            Message the bot, get the number. Works for users, groups, and
            channels. We store nothing.
          </span>
        }
        showCta={false}
        showBadges={false}
        desktopShaderProps={{
          colors: ["#10b981", "#059669", "#0d9488", "#10b981"],
          colorBack: "#0a0a0a00",
          speed: 2.5,
          density: 3.5,
          blur: 0.3,
          fadeIn: 0.9,
          gradient: 0.5,
        }}
        mobileShaderProps={{
          colors: ["#10b981", "#059669", "#0d9488", "#10b981"],
          colorBack: "#0a0a0a00",
          speed: 2.5,
          density: 3.5,
          blur: 0.3,
          fadeIn: 0.9,
          gradient: 0.5,
          style: { height: "100%", width: "100%" },
        }}
        className="flex min-h-[92dvh] items-center"
      >
        <HeroColorPanelsContainer>
          <HeroColorPanelsContent className="gap-6 lg:gap-8">
            <HeroColorPanelsHeading headingClassName="text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tighter leading-none font-bold" />
            <HeroColorPanelsDescription descriptionClassName="text-white/40 text-base lg:text-lg" />

            {/* CTA */}
            <div className="flex justify-center pt-2 lg:justify-start">
              <MagneticCTA />
            </div>

            {/* Traits row */}
            <div className="flex flex-wrap items-center gap-6 pt-2 justify-center lg:justify-start">
              {traits.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-white/30">
                  <t.icon weight="regular" size={16} className="text-emerald-400/60" />
                  <span className="text-xs font-medium tracking-wide">
                    {t.label}
                    <span className="ml-1.5 text-white/15">{t.detail}</span>
                  </span>
                </div>
              ))}
            </div>
          </HeroColorPanelsContent>
          <HeroColorPanelsVisual />
        </HeroColorPanelsContainer>
        <HeroColorPanelsMobileVisual />
      </HeroColorPanelsRoot>

      {/* ── Demo ID ── */}
      <section className="relative z-10 mx-auto -mt-4 max-w-md px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="rounded-[1.5rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04]">
            <div className="rounded-[calc(1.5rem-0.375rem)] bg-zinc-900/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                Your Telegram ID
              </p>
              <div className="flex items-center justify-between gap-4">
                <code className="font-mono text-2xl font-bold tabular-nums tracking-wider text-white/85">
                  729712388
                </code>
                <CopyID text="729712388" />
              </div>
              <p className="mt-3 text-[11px] text-white/15">
                Demo — open the bot to get yours
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── How it works ── */}
      <section className="mx-auto max-w-5xl px-6 pb-32">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400/50"
        >
          How it works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-12 text-2xl font-bold tracking-tighter text-white/90 sm:text-3xl"
        >
          Three steps. Two seconds.
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <StepCard
              key={s.title}
              icon={s.icon}
              step={i + 1}
              title={s.title}
              desc={s.desc}
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-2xl px-6 pb-32">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400/50"
        >
          Questions
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-10 text-2xl font-bold tracking-tighter text-white/90 sm:text-3xl"
        >
          Frequently asked
        </motion.h2>
        <div className="rounded-[1.5rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04]">
          <div className="rounded-[calc(1.5rem-0.375rem)] bg-zinc-900/40 px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            {faqs.map((f) => (
              <FAQ key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="mx-auto max-w-2xl px-6 pb-40 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-3 text-2xl font-bold tracking-tighter text-white/90"
        >
          Ready?
        </motion.h2>
        <p className="mb-8 text-sm text-white/30">Takes two seconds.</p>
        <a
          href={`https://t.me/${BOT_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] px-7 py-3.5 text-sm font-medium text-white/80 ring-1 ring-white/[0.08] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.1] hover:text-white active:scale-[0.97]"
        >
          <PaperPlaneTilt weight="regular" size={16} />
          Get my Telegram ID
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04] py-8 text-center">
        <p className="text-[11px] text-white/15">
          Free and open source. No data stored.
        </p>
      </footer>
    </div>
  );
}
