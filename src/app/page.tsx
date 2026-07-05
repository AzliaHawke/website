const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Labs", href: "#labs" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const products = [
  {
    name: "MSP Copilot",
    description:
      "AI-powered ticket triage, root-cause analysis, and client-ready updates across your entire stack.",
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
    name: "Healthcare IT",
    description:
      "HIPAA-aware workflows, compliance monitoring, and secure automation built for clinical environments.",
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
    name: "Automation",
    description:
      "Orchestrate provisioning, patching, and remediation across Microsoft 365, Entra ID, and on-prem AD.",
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
    name: "AI Agents",
    description:
      "Deploy autonomous agents that investigate alerts, execute runbooks, and escalate with full audit trails.",
    accent: "from-[#2563EB] to-[#22C55E]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="13" r="1" fill="currentColor" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
        <path d="M12 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Labs",
    description:
      "Early access to experimental features, research prototypes, and the next generation of IT intelligence.",
    accent: "from-[#7C3AED] to-[#22C55E]",
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
    name: "Marketplace",
    description:
      "Integrations, scripts, and community-built connectors for the tools MSPs and IT teams rely on daily.",
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

const terminalSteps = [
  { label: "Analyzing ticket", status: "active" as const, detail: "TKT-48291 -- MFA enrollment failure" },
  { label: "Microsoft 365", status: "done" as const, detail: "License & conditional access verified" },
  { label: "Entra ID", status: "done" as const, detail: "User sign-in logs reviewed" },
  { label: "Active Directory", status: "done" as const, detail: "Group membership synced" },
  { label: "WatchGuard", status: "done" as const, detail: "Firewall policy checked" },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-[#2563EB]/20">
        <span className="font-mono text-xs font-bold text-[#FAFAFA]">AH</span>
        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
      </div>
      <span className="text-sm font-semibold tracking-tight text-[#FAFAFA]">
        AzliaHawke
      </span>
    </div>
  );
}

function TerminalDemo() {
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
          <span className="font-mono text-xs text-zinc-500">msp-copilot --analyze</span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
            </span>
            <span className="text-xs text-[#22C55E]">Live</span>
          </div>
        </div>

        <div className="space-y-1 p-4 font-mono text-xs sm:p-5 sm:text-sm">
          <p className="text-zinc-500">
            <span className="text-[#2563EB]">$</span> msp-copilot analyze --ticket TKT-48291
          </p>

          <div className="mt-4 space-y-3">
            {terminalSteps.map((step, index) => (
              <div
                key={step.label}
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
              <span className="font-semibold text-[#22C55E]">97%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#22C55E] animate-[growWidth_1.5s_ease-out_both]"
                style={{ animationDelay: "2200ms" }}
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
              <span className="font-medium">Client update generated</span>
            </div>
            <p className="mt-2 text-zinc-400 leading-relaxed">
              Root cause identified: stale MFA method on mobile device. Recommended
              action: reset authenticator app and re-enroll via conditional access
              policy. Draft reply ready for technician review.
            </p>
          </div>

          <p className="mt-4 text-zinc-600">
            <span className="animate-pulse text-[#2563EB]">_</span>
          </p>
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
          to { width: 97%; }
        }
      `}</style>

      <div className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-[#FAFAFA]">
        {/* Background effects */}
        <div className="pointer-events-none fixed inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#2563EB]/8 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/6 blur-[100px]" />
        </div>

        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-[#09090B]/70 backdrop-blur-xl backdrop-saturate-150">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#" aria-label="AzliaHawke home">
              <LogoMark />
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

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-[#FAFAFA] sm:inline-block"
              >
                Sign in
              </a>
              <a
                href="#products"
                className="rounded-lg bg-[#FAFAFA] px-4 py-2 text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90"
              >
                Get started
              </a>
            </div>
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
          {/* Hero */}
          <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
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
                  <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">
                    Future
                  </span>{" "}
                  of Modern IT
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
                  AzliaHawke builds AI-powered software for MSPs, healthcare IT,
                  automation, and security. Resolve tickets faster, automate with
                  confidence, and deliver exceptional client outcomes.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all hover:bg-[#1d4ed8] hover:shadow-[#2563EB]/40"
                  >
                    Explore Products
                  </a>
                  <a
                    href="mailto:hello@azliahawke.com"
                    className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-[#FAFAFA]"
                  >
                    Schedule a demo
                  </a>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#FAFAFA]">50+</span>
                    <span>Integrations</span>
                  </div>
                  <div className="h-4 w-px bg-zinc-800" />
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#FAFAFA]">97%</span>
                    <span>Analysis accuracy</span>
                  </div>
                  <div className="h-4 w-px bg-zinc-800" />
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#FAFAFA]">24/7</span>
                    <span>Agent availability</span>
                  </div>
                </div>
              </div>

              <TerminalDemo />
            </div>
          </section>

          {/* Products */}
          <section id="products" className="relative border-t border-zinc-800/50 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-widest text-[#2563EB]">
                  Platform
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Built for the teams that keep IT running
                </h2>
                <p className="mt-4 text-zinc-400">
                  From ticket resolution to autonomous remediation, every product
                  is designed to amplify your engineers -- not replace them.
                </p>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <article
                    key={product.name}
                    id={product.name === "Labs" ? "labs" : undefined}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#18181B] p-6 transition-all hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20"
                  >
                    <div
                      className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${product.accent} p-2.5 text-white shadow-lg`}
                    >
                      {product.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA]">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {product.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] opacity-0 transition-all group-hover:opacity-100"
                    >
                      Learn more
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M6 3l5 5-5 5V3z"
                        />
                      </svg>
                    </a>
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Mission */}
          <section id="about" className="relative border-t border-zinc-800/50 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#18181B]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#7C3AED]/10" />
                <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-[#7C3AED]">
                      Our Mission
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                      Empower IT teams with intelligence that acts
                    </h2>
                  </div>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      IT operations are under unprecedented pressure. Ticket volumes
                      are rising, environments are more complex, and the margin for
                      error keeps shrinking -- especially in healthcare and regulated
                      industries.
                    </p>
                    <p>
                      AzliaHawke exists to change that equation. We build AI systems
                      that understand your stack, respect your security boundaries,
                      and produce outcomes your team can trust: faster resolution,
                      clearer client communication, and automation that earns its
                      place in production.
                    </p>
                    <p className="text-[#FAFAFA]">
                      We believe the future of IT is not more dashboards. It is
                      intelligent software that works alongside your engineers every
                      single day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="contact" className="relative border-t border-zinc-800/50 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to transform your IT operations?
                </h2>
                <p className="mt-4 text-zinc-400">
                  Join the teams using AzliaHawke to deliver faster, smarter, and
                  more secure outcomes for their clients.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="mailto:hello@azliahawke.com"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#FAFAFA] px-6 py-3 text-sm font-semibold text-[#09090B] transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    Contact us
                  </a>
                  <a
                    href="#products"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-[#FAFAFA] sm:w-auto"
                  >
                    View products
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer id="resources" className="border-t border-zinc-800/50 bg-[#09090B]">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="sm:col-span-2 lg:col-span-1">
                <LogoMark />
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
                  Engineering the Future of Modern IT. AI-powered software for
                  MSPs, healthcare, automation, and security.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#FAFAFA]">Products</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
                  <li><a href="#products" className="transition-colors hover:text-zinc-300">MSP Copilot</a></li>
                  <li><a href="#products" className="transition-colors hover:text-zinc-300">Healthcare IT</a></li>
                  <li><a href="#products" className="transition-colors hover:text-zinc-300">Automation</a></li>
                  <li><a href="#products" className="transition-colors hover:text-zinc-300">AI Agents</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#FAFAFA]">Company</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
                  <li><a href="#about" className="transition-colors hover:text-zinc-300">About</a></li>
                  <li><a href="#labs" className="transition-colors hover:text-zinc-300">Labs</a></li>
                  <li><a href="#resources" className="transition-colors hover:text-zinc-300">Resources</a></li>
                  <li><a href="#contact" className="transition-colors hover:text-zinc-300">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#FAFAFA]">Connect</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
                  <li>
                    <a href="mailto:hello@azliahawke.com" className="transition-colors hover:text-zinc-300">
                      hello@azliahawke.com
                    </a>
                  </li>
                  <li><span>LinkedIn</span></li>
                  <li><span>GitHub</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/50 pt-8 sm:flex-row">
              <p className="text-xs text-zinc-600">
                &copy; {new Date().getFullYear()} AzliaHawke. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-zinc-600">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Security</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
