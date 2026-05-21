"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Compass,
  Layers3,
  MessageSquareMore,
  MonitorSmartphone,
  Orbit,
  ServerCog,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Web Platforms",
    description: "Marketing sites, SaaS products, dashboards, portals, and internal tools built to convert and scale.",
    icon: Code2,
  },
  {
    title: "App Development",
    description: "Mobile and cross-platform app experiences with product thinking, smooth UX, and clean architecture.",
    icon: MonitorSmartphone,
  },
  {
    title: "Custom Software",
    description: "Operational systems, admin workflows, AI integrations, and business software shaped around real constraints.",
    icon: ServerCog,
  },
];

const stats = [
  { value: "Web", label: "products, landing pages, and software interfaces" },
  { value: "App", label: "experiences for startups, teams, and modern brands" },
  { value: "System", label: "thinking across UX, engineering, and launch" },
];

const phases = [
  {
    step: "01",
    title: "Clarify",
    text: "We define the product direction, audience, offer, and constraints before design drifts into guesswork.",
  },
  {
    step: "02",
    title: "Design",
    text: "We shape a visual and structural system that feels premium, usable, and built for the business behind it.",
  },
  {
    step: "03",
    title: "Build",
    text: "We implement fast, scalable frontend and backend systems with clean components and sensible technical choices.",
  },
  {
    step: "04",
    title: "Launch",
    text: "We refine, ship, and prepare the product for real users, iteration, and growth after release.",
  },
];

const work = [
  { name: "Launch-ready startup sites", type: "Positioning, product UI, conversion" },
  { name: "Client dashboards", type: "Complex states, data views, internal workflows" },
  { name: "Mobile product interfaces", type: "Cross-platform UX and scalable design systems" },
  { name: "Business software", type: "Operations tools, automations, admin panels" },
];

const showcaseDesktop = [
  {
    src: "/showcase/showcase-desktop-1.png",
    alt: "Modern web interface showcase",
    title: "Web product systems",
    size: "large" as const,
  },
  {
    src: "/showcase/showcase-desktop-2.png",
    alt: "Website interface showcase",
    title: "Conversion-focused pages",
    size: "medium" as const,
  },
  {
    src: "/showcase/showcase-desktop-3.png",
    alt: "Dashboard showcase",
    title: "Clean dashboard experiences",
    size: "medium" as const,
  },
];

const showcaseMobile = [
  {
    src: "/showcase/showcase-mobile-1.jpg",
    alt: "Mobile app screen showcase",
    title: "Food and delivery UI",
  },
  {
    src: "/showcase/showcase-mobile-2.jpg",
    alt: "Mobile app product screen",
    title: "Mobile flows",
  },
  {
    src: "/showcase/showcase-mobile-3.jpg",
    alt: "Mobile app menu interface",
    title: "App interaction design",
  },
  {
    src: "/showcase/showcase-mobile-4.jpg",
    alt: "Mobile app detail interface",
    title: "Feature-rich product screens",
  },
];

const principles = [
  "Modern without looking disposable",
  "Fast-loading layouts with strong visual hierarchy",
  "Product-minded design, not just decoration",
  "Systems that can evolve after launch",
];

const projectIdeas = [
  "Business website",
  "Landing page",
  "Web application",
  "Mobile app",
  "Custom software",
  "Dashboard or admin panel",
  "MVP for startup",
  "Something else",
];

function BackgroundVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/30 ${className}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,12,0.18),rgba(4,8,12,0.62)_55%,rgba(4,8,12,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,26,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,205,254,0.18),transparent_34%)]" />
      <div className="relative h-full min-h-[22rem]" />
    </div>
  );
}

function ProductFrame() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl">
      <div className="float-slow absolute inset-x-14 -top-10 h-32 rounded-full bg-[rgba(255,122,26,0.24)] blur-3xl" />
      <div className="float-delay absolute -left-8 top-24 h-48 w-48 rounded-full bg-[rgba(29,205,254,0.18)] blur-3xl" />
      <div className="float-slower absolute -right-8 bottom-8 h-56 w-56 rounded-full bg-[rgba(255,215,0,0.12)] blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,14,20,0.88)] shadow-panel">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff6b57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2f]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-xs text-white/45 md:block">
            nexel-labs / product command center
          </div>
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#ff9c52]">Live Build</p>
                <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Software that looks sharp and works hard.</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 text-left text-xs text-white/60">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2">Design system</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2">Frontend</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2">Backend</div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={false}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <BackgroundVideo src="/showcase/background-auto-transcode.mp4" />
              </motion.div>

              <div className="grid gap-4">
                <motion.div
                  initial={false}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[1.4rem] border border-white/10 bg-[#0d1118] p-4"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-white/55">Studio focus</span>
                    <Orbit className="h-4 w-4 text-[#ff9c52]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/[0.04] p-4">
                      <p className="text-2xl font-semibold text-white">UX</p>
                      <p className="mt-1 text-xs text-white/50">clarity</p>
                    </div>
                    <div className="rounded-2xl bg-white/[0.04] p-4">
                      <p className="text-2xl font-semibold text-white">DX</p>
                      <p className="mt-1 text-xs text-white/50">clean code</p>
                    </div>
                    <div className="col-span-2 rounded-2xl bg-[linear-gradient(135deg,rgba(255,122,26,0.18),rgba(29,205,254,0.14))] p-4">
                      <p className="text-sm text-white/70">Built for founders, operators, and teams who need more than a pretty homepage.</p>
                    </div>
                  </div>
                </motion.div>

                <div className="rounded-[1.4rem] border border-white/10 bg-[#0d1118] p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
                    <Blocks className="h-4 w-4 text-[#1dcdfe]" />
                    Delivery stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "Node", "TypeScript", "Postgres", "Cloud"].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <motion.div
              initial={false}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[1.6rem] border border-white/10 bg-[#0d1118] p-5"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#1dcdfe]">What you do</p>
              <h4 className="mt-3 text-2xl font-semibold text-white">Web, app, and software development under one direction.</h4>
              <p className="mt-4 text-sm leading-7 text-white/62">
                The site now positions you as a product-focused development partner instead of a generic freelancer.
              </p>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,122,26,0.14),rgba(255,255,255,0.03))] p-5"
            >
              <p className="text-sm text-white/55">Current emphasis</p>
              <div className="mt-4 space-y-3">
                {["Positioning", "Design quality", "Build quality"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-white/70">
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-[#ff9c52]" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xredqrrj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-site text-stone-100">
      <div className="hero-noise pointer-events-none absolute inset-0 opacity-40" />
      <section className="relative px-5 pb-16 pt-5 md:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="surface-panel sticky top-5 z-30 flex items-center justify-between rounded-full px-4 py-3 md:px-6">
            <a href="#top" className="flex items-center gap-3">
              <Image
                src="/nexel-labs-icon.svg"
                alt="Nexel Labs"
                width={44}
                height={44}
                className="h-11 w-11 rounded-2xl object-cover"
                priority
              />
              <div>
                <div className="font-display text-sm uppercase tracking-[0.3em] text-white/50">Nexel Labs</div>
                <div className="text-sm text-white/80">Web, app and software development</div>
              </div>
            </a>
            <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#approach" className="transition hover:text-white">Approach</a>
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
            <a href="#contact" className="rounded-full bg-[linear-gradient(135deg,#ff7a1a,#ffb36b)] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-105">
              Book a project
            </a>
          </nav>

          <div id="top" className="relative pt-16 md:pt-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65">
              <Sparkles className="h-4 w-4 text-[#ff9c52]" />
              Product-minded development for modern businesses
            </div>

            <div className="mt-8 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[6.6rem]">
                  Modern websites, apps, and software with a sharper point of view.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                  You build digital products. Your website should look like it. Nexel Labs designs and develops high-trust
                  experiences for clients who need stronger positioning, cleaner systems, and better execution.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#ff7a1a,#ffb36b)] px-7 py-4 font-semibold text-black transition hover:brightness-105"
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start a project
                    <ArrowRight className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#work"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-7 py-4 font-semibold text-white transition hover:bg-white/[0.07]"
                    whileHover={{ y: -3 }}
                  >
                    See selected work
                  </motion.a>
                </div>
              </div>

              <div className="grid gap-4 lg:pb-4">
                {stats.map((item) => (
                  <motion.div
                    key={item.value}
                    initial={false}
                    whileHover={{ x: 6 }}
                    className="surface-panel rounded-[1.75rem] p-6"
                  >
                    <div className="font-display text-4xl font-semibold tracking-[-0.05em] text-white">{item.value}</div>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/58">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <ProductFrame />
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm uppercase tracking-[0.28em] text-white/36">
          <span>Next.js</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Node</span>
          <span>UX Systems</span>
          <span>App Architecture</span>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Promo</p>
              <h2 className="section-title">A direct look at the kind of digital presence you are building.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/64">
                This promotional reel gives the site a stronger first impression and shows your work in motion instead of relying
                only on static screens.
              </p>
            </div>

            <motion.div
              initial={false}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -4 }}
              className="surface-card overflow-hidden rounded-[2.2rem] p-4"
            >
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/30 shadow-panel">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source src="/showcase/promotional-video.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">Services</p>
            <h2 className="section-title">A sharper studio presence for the kind of work you actually do.</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div key={service.title} className="surface-card rounded-[2rem] p-7">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,122,26,0.22),rgba(29,205,254,0.18))] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/35">Studio Offer</span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-semibold tracking-[-0.04em] text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/62">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">Approach</p>
            <h2 className="section-title">Design language, product thinking, and engineering discipline in one build process.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/64">
              Most developer sites either oversell aesthetics or undersell capability. This direction balances both. It shows you
              can design premium interfaces and deliver the systems behind them.
            </p>
            <div className="mt-10 grid gap-3">
              {principles.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white/74">
                  <Compass className="h-5 w-5 text-[#ff9c52]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-5 md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {phases.map((phase) => (
                <div key={phase.step} className="rounded-[1.6rem] border border-white/10 bg-black/20 p-5">
                  <div className="font-display text-sm uppercase tracking-[0.28em] text-[#1dcdfe]">{phase.step}</div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{phase.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker">Selected Direction</p>
              <h2 className="section-title">Built to attract better clients, not just fill space.</h2>
            </div>
            <p className="max-w-md text-white/56">
              The work section is framed around outcomes and product categories, which fits a development studio better than random
              template cards.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={false} className="surface-card relative overflow-hidden rounded-[2.2rem] p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,26,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,205,254,0.16),transparent_32%)]" />
              <div className="relative grid gap-4">
                <div className="flex items-center justify-between px-2 pt-2">
                  <div />
                  <BriefcaseBusiness className="h-5 w-5 text-[#ff9c52]" />
                </div>

                <motion.div
                  initial={false}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ y: -6, rotate: -0.4 }}
                  className="tilt-card"
                >
                  <BackgroundVideo src="/showcase/background-nexellabs.mp4" className="min-h-[30rem]" />
                </motion.div>

                <div className="grid gap-4 md:grid-cols-2">
                  {showcaseDesktop.slice(1).map((item, index) => (
                    <motion.div
                      key={item.src}
                      initial={false}
                      whileHover={{ y: -6 }}
                      className="tilt-card overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={index === 0 ? 1920 : 1120}
                        height={index === 0 ? 1080 : 662}
                        className="h-56 w-full object-cover transition duration-500 hover:scale-[1.03]"
                      />
                      <div className="border-t border-white/10 px-4 py-4">
                        <p className="text-sm font-medium text-white">{item.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial={false}
                className="surface-card rounded-[2.2rem] p-5"
              >
                <div className="h-6" />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {showcaseMobile.map((item, index) => (
                  <motion.div
                    key={item.src}
                    initial={false}
                    animate={{ y: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
                    transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                    className="surface-card tilt-card overflow-hidden rounded-[1.9rem] p-3"
                  >
                    <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={720}
                        height={1600}
                        className="h-[24rem] w-full object-cover object-top transition duration-500 hover:scale-[1.04]"
                      />
                    </div>
                    <p className="px-2 pb-2 pt-4 text-sm text-white/72">{item.title}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4">
                {work.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={false}
                    whileHover={{ x: 6 }}
                    className="surface-card rounded-[1.7rem] px-5 py-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="mt-2 text-lg font-semibold text-white">{item.name}</h4>
                        <p className="mt-1 text-sm text-white/55">{item.type}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#ff9c52]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,122,26,0.16),rgba(29,205,254,0.12),rgba(255,255,255,0.03))] p-6 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="section-kicker">Contact</p>
                <h2 className="section-title max-w-3xl">Need a site that matches the quality of your development work?</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
                  Give clients a simple way to choose what they want built and explain the idea in their own words.
                </p>
              </div>

              <div className="surface-panel rounded-[2rem] p-6">
                <form
                  name="project-inquiry"
                  method="POST"
                  action="https://formspree.io/f/xredqrrj"
                  onSubmit={handleSubmit}
                  className="grid gap-4"
                >
                  <label className="grid gap-2 text-sm text-white/70">
                    Your name
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#ff9c52]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-white/70">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#1dcdfe]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-white/70">
                    Subject
                    <input
                      type="text"
                      name="inquirySubject"
                      placeholder="New project inquiry"
                      className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#ff9c52]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-white/70">
                    What do you want to build?
                    <select
                      name="projectType"
                      defaultValue=""
                      required
                      className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#ff9c52]"
                    >
                      <option value="" disabled>
                        Pick an idea
                      </option>
                      {projectIdeas.map((idea) => (
                        <option key={idea} value={idea} className="text-black">
                          {idea}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm text-white/70">
                    Project message
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="resize-none rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#1dcdfe]"
                    />
                  </label>

                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center gap-3">
                      <MessageSquareMore className="h-5 w-5 text-[#ff9c52]" />
                      <p className="font-medium text-white">Direct email</p>
                    </div>
                    <p className="mt-3 break-all text-sm leading-7 text-white/58">nexellabs.business@outlook.com</p>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#ff7a1a,#ffb36b)] px-6 py-4 font-semibold text-black transition hover:brightness-105"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Book a project"}
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  {formStatus === "success" && (
                    <p className="text-sm text-emerald-300">Your inquiry was sent successfully.</p>
                  )}

                  {formStatus === "error" && (
                    <p className="text-sm text-red-300">Submission failed. Please try again or email us directly.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/nexel-labs-icon.svg"
                alt="Nexel Labs"
                width={44}
                height={44}
                className="h-11 w-11 rounded-2xl object-cover"
              />
              <div>
                <p className="font-display text-lg font-semibold text-white">Nexel Labs</p>
                <p className="text-sm text-white/56">Web, app and software development</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/52">
              Modern websites, mobile apps, and custom software systems for brands, startups, and growing businesses.
            </p>
          </div>

          <div className="grid gap-5 text-sm text-white/58 md:text-right">
            <div className="flex flex-wrap gap-5 md:justify-end">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#approach" className="transition hover:text-white">Approach</a>
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
            <a href="mailto:nexellabs.business@outlook.com" className="transition hover:text-white">
              nexellabs.business@outlook.com
            </a>
            <p className="text-white/38">© 2026 Nexel Labs</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
