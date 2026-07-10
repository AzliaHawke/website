"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Labs", href: "#labs" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
];

const stats = [
  { value: "20+", label: "Technologies Supported" },
  { value: "97%", label: "AI Confidence" },
  { value: "24/7", label: "Automation" },
  { value: "100%", label: "Built by IT Professionals" },
];

const products = [
  {
    name: "MSP Copilot",
    description:
      "AI ticket analysis, documentation, automation, and technician assistance.",
    status: "Active Development",
    statusColor: "text-[#22C55E] border-[#22C55E]/30 bg-[#22C55E]/10",
    accent: "from-[#2563EB] to-[#7C3AED]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M8 9h8M8 13h5M7 3h10a2 2 0 012 2v14l-4-2.5L13 19l-2-1.5L9 19l-2-1.5L3 19V5a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Healthcare AI",
    description:
      "AI solutions designed for medical practices and healthcare providers.",
    status: "Coming Soon",
    statusColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    accent: "from-[#22C55E] to-[#2563EB]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 6v12M6 12h12M4 4h16v16H4V4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Automation Engine",
    description:
      "Scripts, workflows, and intelligent automation for repetitive IT work.",
    status: "In Progress",
    statusColor: "text-[#2563EB] border-[#2563EB]/30 bg-[#2563EB]/10",
    accent: "from-[#7C3AED] to-[#2563EB]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "AzliaHawke Labs",
    description:
      "Experimental AI projects, automation research, and future products.",
    status: "Research",
    statusColor: "text-[#7C3AED] border-[#7C3AED]/30 bg-[#7C3AED]/10",
    accent: "from-[#7C3AED] to-[#22C55E]",
    id: "labs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M10 2v6l-4 8a4 4 0 003.5 6h5a4 4 0 003.5-6l-4-8V2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M8.5 14h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Resources",
    description:
      "Documentation, scripts, SOPs, templates, and best practices.",
    status: "Coming Soon",
    statusColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    accent: "from-[#2563EB] to-[#22C55E]",
    id: "resources",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Marketplace",
    description:
      "Digital templates, blueprints, scripts, and downloadable IT resources.",
    status: "Planned",
    statusColor: "text-zinc-400 border-zinc-600/30 bg-zinc-800/60",
    accent: "from-[#22C55E] to-[#7C3AED]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 9l9-6 9 6v11a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const trustedTechnologies = [
  "Microsoft 365",
  "Azure",
  "Entra ID",
  "Active Directory",
  "Exchange Online",
  "SharePoint",
  "Intune",
  "WatchGuard",
  "SonicWall",
  "Fortinet",
  "Meraki",
  "VMware",
  "Hyper-V",
  "QuickBooks",
  "Athena Health",
  "Dragon Medical",
  "OpenAI",
  "Anthropic",
];

type TerminalStep = {
  label: string;
  status: "active" | "done";
  detail: string;
};

type TerminalScenario = {
  command: string;
  title: string;
  steps: TerminalStep[];
  confidence: number;
  resultTitle: string;
  resultBody: string;
};

const terminalScenarios: TerminalScenario[] = [
  {
    command: "msp-copilot analyze --ticket TKT-48291",
    title: "msp-copilot --analyze",
    steps: [
      { label: "Analyzing ticket", status: "active", detail: "TKT-48291 -- MFA enrollment failure" },
      { label: "Microsoft 365", status: "done", detail: "License and conditional access verified" },
      { label: "Entra ID", status: "done", detail: "User sign-in logs reviewed" },
      { label: "Active Directory", status: "done", detail: "Group membership synced" },
      { label: "WatchGuard", status: "done", detail: "Firewall policy checked" },
    ],
    confidence: 97,
    resultTitle: "Client update generated",
    resultBody:
      "Root cause identified: stale MFA method on mobile device. Recommended action: reset authenticator app and re-enroll via conditional access policy. Draft reply ready for technician review.",
  },
  {
    command: "msp-copilot analyze --ticket TKT-51034",
    title: "msp-copilot --analyze",
    steps: [
      { label: "Analyzing ticket", status: "active", detail: "TKT-51034 -- QuickBooks company file error" },
      { label: "Company File", status: "done", detail: "File integrity and permissions verified" },
      { label: "Database Manager", status: "done", detail: "Service status and connections checked" },
      { label: "Windows Event Logs", status: "done", detail: "Application and system errors reviewed" },
      { label: "Network Share", status: "done", detail: "SMB access and path mapping validated" },
    ],
    confidence: 94,
    resultTitle: "Resolution path identified",
    resultBody:
      "Database connection timeout caused by stale ODBC DSN on workstation. Recommended action: recreate DSN, verify Database Manager service, and confirm network share permissions. Technician steps ready for review.",
  },
  {
    command: "msp-copilot analyze --ticket TKT-52807",
    title: "msp-copilot --analyze",
    steps: [
      { label: "Analyzing ticket", status: "active", detail: "TKT-52807 -- Clinical workflow login failure" },
      { label: "Athena Health", status: "done", detail: "EHR session and profile access reviewed" },
      { label: "Dragon Medical", status: "done", detail: "Speech profile and licensing verified" },
      { label: "MFA", status: "done", detail: "Authentication method and policy checked" },
      { label: "User Profile", status: "done", detail: "Roaming profile and permissions validated" },
    ],
    confidence: 96,
    resultTitle: "Clinical workflow update generated",
    resultBody:
      "Expired MFA token blocking Athena Health session sync. Recommended action: reset MFA enrollment, verify Dragon Medical profile mapping, and confirm user profile permissions. HIPAA-safe draft ready for review.",
  },
];

const footerLinks = [
  { label: "Products", href: "#products" },
  { label: "Labs", href: "#labs" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function LogoMark({
  className,
  width = 41,
  height = 36,
  variant = "default",
}: {
  className?: string;
  width?: number;
  height?: number;
  variant?: "default" | "large";
}) {
  if (variant === "large") {
    return (
      <img
        src="/brand/logo-mark-lg.png"
        srcSet="/brand/logo-mark-lg.png 1x, /brand/logo-mark-lg@2x.png 2x"
        alt=""
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    <img
      src="/brand/logo-mark.png"
      srcSet="/brand/logo-mark.png 1x, /brand/logo-mark@2x.png 2x, /brand/logo-mark@3x.png 3x"
      alt=""
      width={width}
      height={height}
      className={className}
    />
  );
}

function NavbarLogo() {
  return (
    <LogoMark className="h-9 w-auto transition-[filter] duration-300 group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.6),0_0_18px_rgba(124,58,237,0.45)]" />
  );
}

function FooterWordmark() {
  return (
    <img
      src="/brand/wordmark.png"
      srcSet="/brand/wordmark.png 1x, /brand/wordmark@2x.png 2x"
      alt="AzliaHawke — Engineering the Future of IT"
      width={400}
      height={95}
      className="h-auto w-full max-w-[min(100%,400px)]"
    />
  );
}

function TerminalDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const scenario = terminalScenarios[scenarioIndex];

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setScenarioIndex((current) => (current + 1) % terminalScenarios.length);
        setVisible(true);
      }, 400);
    }, 9000);

    return () => clearInterval(cycleTimer);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#2563EB]/40 via-[#7C3AED]/20 to-transparent opacity-60 blur-sm" />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#18181B] shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
          <span className="font-mono text-xs text-zinc-500">{scenario.title}</span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
            </span>
            <span className="text-xs text-[#22C55E]">Live</span>
          </div>
        </div>

        <div
          key={scenarioIndex}
          className={`space-y-1 p-4 font-mono text-xs transition-opacity duration-400 sm:p-5 sm:text-sm ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-zinc-500">
            <span className="text-[#2563EB]">$</span> {scenario.command}
          </p>

          <div className="mt-4 space-y-3">
            {scenario.steps.map((step, index) => (
              <div
                key={`${scenarioIndex}-${step.label}`}
                className="animate-[fadeSlideIn_0.5s_ease-out_both]"
                style={{ animationDelay: `${index * 400}ms` }}
              >
                <div className="flex items-center gap-2">
                  {step.status === "active" ? (
                    <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-[#2563EB] border-t-transparent" />
                  ) : (
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#22C55E]" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M6.5 11.5L3 8l1-1 2.5 2.5L12 4l1 1-6.5 6.5z"
                      />
                    </svg>
                  )}
                  <span
                    className={
                      step.status === "active" ? "text-[#FAFAFA]" : "text-zinc-400"
                    }
                  >
                    {step.label}
                  </span>
                </div>
                <p className="ml-5 mt-0.5 text-zinc-600">{step.detail}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-5 animate-[fadeSlideIn_0.5s_ease-out_both] rounded-lg border border-zinc-800 bg-zinc-900/60 p-3"
            style={{ animationDelay: "2000ms" }}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-zinc-400">Confidence</span>
              <span className="font-semibold text-[#22C55E]">{scenario.confidence}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#22C55E] animate-[growWidth_1.5s_ease-out_both]"
                style={{
                  animationDelay: "2200ms",
                  ["--target-width" as string]: `${scenario.confidence}%`,
                }}
              />
            </div>
          </div>

          <div
            className="mt-4 animate-[fadeSlideIn_0.5s_ease-out_both] rounded-lg border border-[#22C55E]/20 bg-[#22C55E]/5 p-3"
            style={{ animationDelay: "2800ms" }}
          >
            <div className="flex items-center gap-2 text-[#22C55E]">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.5 11.5L3 8l1-1 2.5 2.5L12 4l1 1-6.5 6.5z"
                />
              </svg>
              <span className="font-medium">{scenario.resultTitle}</span>
            </div>
            <p className="mt-2 text-zinc-400 leading-relaxed">{scenario.resultBody}</p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-zinc-600">
              <span className="animate-pulse text-[#2563EB]">_</span>
            </p>
            <div className="flex gap-1.5">
              {terminalScenarios.map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 rounded-full transition-all ${
                    index === scenarioIndex
                      ? "w-4 bg-[#2563EB]"
                      : "w-1.5 bg-zinc-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growWidth {
          from { width: 0%; }
          to { width: var(--target-width, 97%); }
        }
      `}</style>

      <div className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-[#FAFAFA]">
        <div className="pointer-events-none fixed inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#2563EB]/8 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/6 blur-[100px]" />
        </div>

        <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-[#09090B]/70 backdrop-blur-xl backdrop-saturate-150">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" aria-label="AzliaHawke home" className="group inline-flex shrink-0">
              <NavbarLogo />
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-[#FAFAFA]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#products"
              className="rounded-lg bg-[#FAFAFA] px-4 py-2 text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90"
            >
              Explore Products
            </a>
          </nav>

          <div className="flex gap-6 overflow-x-auto border-t border-zinc-800/40 px-6 py-2.5 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="shrink-0 text-xs text-zinc-400 transition-colors hover:text-[#FAFAFA]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <main>
          <section
            id="solutions"
            className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24"
          >
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#18181B]/60 px-3 py-1 text-xs text-zinc-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-50" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  </span>
                  AI-powered IT intelligence platform
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                  Engineering the{" "}
                  <span className="future-text">Future</span>{" "}
                  of Modern IT
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
                  Creating AI-powered software for Managed Service Providers,
                  Healthcare, and Enterprise IT -- helping teams automate, secure,
                  and simplify modern infrastructure.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all hover:bg-[#1d4ed8] hover:shadow-[#2563EB]/40"
                  >
                    Explore Products
                  </a>
                  <a
                    href="#labs"
                    className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-[#FAFAFA]"
                  >
                    Explore Labs
                  </a>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:gap-x-8">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="flex items-center gap-2 text-sm text-zinc-500">
                      {index > 0 && (
                        <div className="mr-2 hidden h-4 w-px bg-zinc-800 sm:block" />
                      )}
                      <span className="font-semibold text-[#FAFAFA]">{stat.value}</span>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <TerminalDemo />
            </div>
          </section>

          <section id="products" className="relative border-t border-zinc-800/50 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-widest text-[#2563EB]">
                  Products
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Intelligent software for modern IT teams
                </h2>
                <p className="mt-4 text-zinc-400">
                  From AI ticket analysis to automation research, every product is
                  built to help IT professionals work smarter, faster, and with
                  greater confidence.
                </p>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <article
                    key={product.name}
                    id={product.id}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#18181B] p-6 transition-all hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div
                        className={`inline-flex rounded-lg bg-gradient-to-br ${product.accent} p-2.5 text-white shadow-lg`}
                      >
                        {product.icon}
                      </div>
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${product.statusColor}`}
                      >
                        {product.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA]">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {product.description}
                    </p>
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative border-t border-zinc-800/50 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <LogoMark
                  variant="large"
                  width={110}
                  height={96}
                  className="mx-auto mb-4 h-24 w-auto drop-shadow-[0_0_20px_rgba(37,99,235,0.45),0_0_32px_rgba(124,58,237,0.3)]"
                />
                <p className="text-sm font-medium uppercase tracking-widest text-[#7C3AED]">
                  Trusted Technologies
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Built around the platforms IT teams rely on
                </h2>
                <p className="mt-4 text-zinc-400">
                  AzliaHawke is being designed for the tools and ecosystems that
                  power MSP, healthcare, and enterprise environments every day.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {trustedTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 bg-[#18181B] px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-[#FAFAFA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="relative border-t border-zinc-800/50 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#18181B]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#7C3AED]/10" />
                <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-[#7C3AED]">
                      About
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                      Built by IT professionals, for IT professionals
                    </h2>
                  </div>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      Founded by Richard Gonzales, AzliaHawke develops intelligent
                      software for Managed Service Providers, Healthcare
                      organizations, and Enterprise IT.
                    </p>
                    <p>
                      Every product is built from real-world experience solving
                      complex technology challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="contact" className="border-t border-zinc-800/50 bg-[#09090B]">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <FooterWordmark />
                <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {footerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-[#FAFAFA]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <LogoMark
                  width={46}
                  height={40}
                  className="h-10 w-auto shrink-0 drop-shadow-[0_0_12px_rgba(37,99,235,0.35),0_0_18px_rgba(124,58,237,0.25)]"
                />
                <div className="space-y-2 text-sm text-zinc-400">
                  <a
                    href="mailto:hello@azliahawke.com"
                    className="block transition-colors hover:text-[#FAFAFA]"
                  >
                    hello@azliahawke.com
                  </a>
                  <a
                    href="mailto:support@azliahawke.com"
                    className="block transition-colors hover:text-[#FAFAFA]"
                  >
                    support@azliahawke.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-zinc-800/50 pt-8">
              <p className="text-xs text-zinc-600">
                &copy; 2026 AzliaHawke. Engineering the Future of Modern IT.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
