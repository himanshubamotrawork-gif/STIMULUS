import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroIllustration from "@/assets/hero-illustration.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MovPerk — Explore Food Assistance Options" },
      {
        name: "description",
        content:
          "Answer a few simple questions to explore food assistance programs and resources that may be relevant to your household.",
      },
      { property: "og:title", content: "MovPerk — Explore Food Assistance Options" },
      {
        property: "og:description",
        content:
          "A free, private way to explore food assistance programs and find your next step.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

/* ---------- Small shared pieces ---------- */

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 19c0-8 5-13 14-14 .5 9-4 14-11 14H5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M5 19c2-5 6-9 10-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        <LeafIcon className="h-5 w-5" />
      </span>
      <span className="text-lg font-bold tracking-tight text-foreground">MovPerk</span>
    </a>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
      <path
        d="m6 10.2 2.6 2.6L14 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Header ---------- */

const navLinks = [
  { label: "Common Questions", href: "#questions" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#start"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-forest-deep"
          >
            Check My Options
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#start"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Check My Options
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground"
          >
            {open ? (
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

const heroPoints = [
  "Free to explore",
  "No Social Security number needed for this initial check",
  "Private by design",
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-mint/60 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">
            Food Assistance Resource Guide
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Make Your Next Grocery Step a&nbsp;Little Easier.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Answer a few simple questions to explore food assistance programs and
            resources that may be relevant to your household.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#start"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lift transition-all hover:-translate-y-0.5 hover:bg-forest-deep"
            >
              Explore My Options
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#questions"
              className="text-sm font-semibold text-forest underline decoration-forest/30 decoration-2 underline-offset-4 transition-colors hover:decoration-forest"
            >
              See common questions
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-forest" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-4 rounded-[3rem] bg-mint" aria-hidden="true" />
          <img
            src={heroIllustration}
            alt="Illustration of a grocery bag filled with fresh vegetables, fruit and bread"
            width={1200}
            height={1408}
            className="relative mx-auto w-full max-w-sm rounded-[3rem] p-6 lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Common Questions ---------- */

const questions = [
  {
    q: "What kind of food assistance could I look into?",
    a: "Depending on your situation, there may be different food-assistance resources worth exploring. The questionnaire can help you start organizing the information needed to explore available options.",
  },
  {
    q: "Could my household qualify for a resource?",
    a: "Eligibility varies by program and household circumstances. Use the questionnaire as a starting point; completing it does not determine or guarantee eligibility.",
  },
  {
    q: "Where should I start looking?",
    a: "Start by sharing the basic information requested in the online questionnaire. You can then review the guidance and resources presented for your situation.",
  },
  {
    q: "Can I get a more organized guide?",
    a: "Yes. The linked experience is designed to provide a more organized starting point based on the information you submit.",
  },
];

function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="questions" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">
            Common Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start with the questions you already have
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Quick answers to the questions people ask most when they start looking
            into food assistance.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          {questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted/60 sm:text-base"
                >
                  <span className="shrink-0 font-mono text-xs font-bold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-forest transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pl-14 pr-6 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Next Step (yellow CTA block) ---------- */

function NextStep() {
  return (
    <section id="start" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-accent px-6 py-14 text-center shadow-lift sm:px-12 md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your next step can be surprisingly simple.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-accent-foreground/80">
            Take a moment to answer the questions and explore food-assistance
            resources that may be relevant to your situation.
          </p>
          <a
            href="https://www.fns.usda.gov/snap/state-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background shadow-lift transition-all hover:-translate-y-0.5"
          >
            Check Now
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-5 text-xs text-accent-foreground/70">
            Opens the official USDA Food and Nutrition Service website.
          </p>
        </div>
      </div>
    </section>
  );
}


/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-forest py-12 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <LeafIcon className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">MovPerk</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Independent food-support resource website
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm" aria-label="Footer">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#options" className="text-white/80 transition-colors hover:text-white">
              Check My Options
            </a>
            <a
              href="https://www.fns.usda.gov/snap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors hover:text-white"
            >
              Official SNAP info (USDA)
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="text-xs leading-relaxed text-white/60">
            MovPerk is not a government website and is not affiliated with or endorsed by
            USDA, SNAP, or any state agency. Information on this website is provided for
            general informational purposes. Completing a questionnaire does not mean you are
            approved, eligible, or owed benefits, and does not guarantee any specific amount
            of assistance.
          </p>
          <p className="mt-4 text-xs text-white/60">© 2026 MovPerk</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Questions />
        <About />
        <Options />
      </main>
      <Footer />
    </div>
  );
}
