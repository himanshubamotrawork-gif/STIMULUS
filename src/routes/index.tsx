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
  { label: "About Food Assistance", href: "#about" },
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
            href="#options"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-forest-deep"
          >
            Check My Options
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#options"
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
              href="#options"
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
            When you're looking for food support, the hardest part can be knowing what to
            search for first. This is designed to make that first step easier.
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

/* ---------- About Food Assistance ---------- */

const programs = [
  {
    name: "SNAP",
    alsoKnownAs: "Supplemental Nutrition Assistance Program",
    text: "Monthly benefits on a card you can use to buy groceries at most stores and farmers markets. Often called food stamps.",
  },
  {
    name: "WIC",
    alsoKnownAs: "Women, Infants & Children",
    text: "Nutrition support for people who are pregnant or caregiving, and for young children up to age five.",
  },
  {
    name: "School meals",
    alsoKnownAs: "National School Lunch & Breakfast",
    text: "Free or reduced-price meals for school-age children, based on household income.",
  },
  {
    name: "Local food banks",
    alsoKnownAs: "Community food resources",
    text: "Free groceries and meals from community organizations, usually with no application at all.",
  },
];

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-mint/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">
              About Food Assistance
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What these programs actually do
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Food assistance programs are run by states with federal funding. They exist to
              help households keep groceries on the table — and millions of eligible people
              never apply, often because the process feels confusing or intimidating.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Reaching out to a program does not affect your credit, your immigration status
              on its own, or your standing with any employer. The first step is simply
              learning what's out there.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {programs.map((p) => (
              <article key={p.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-forest">{p.name}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {p.alsoKnownAs}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Check My Options (CTA target) ---------- */

const factors = [
  {
    title: "Household size",
    text: "Programs look at how many people you buy and prepare food with — not just who lives at your address.",
  },
  {
    title: "Household income",
    text: "Gross and net monthly income, including wages and benefits, are compared to program limits.",
  },
  {
    title: "Expenses",
    text: "Rent, utilities, childcare and medical costs can raise the amount a household may receive.",
  },
  {
    title: "Your state",
    text: "Each state runs its own application with its own process and limits.",
  },
];

function Options() {
  return (
    <section id="options" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">
                Check My Options
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What programs usually look at
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every situation is different, but these are the factors most food assistance
                programs consider. Seeing them up front helps you know what to have handy —
                nothing more.
              </p>

              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {factors.map((f) => (
                  <li key={f.title}>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckIcon className="h-5 w-5 shrink-0 text-forest" />
                      {f.title}
                    </h3>
                    <p className="mt-1.5 pl-7 text-sm leading-relaxed text-muted-foreground">
                      {f.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-5 bg-mint/50 p-8 sm:p-12">
              <h3 className="text-xl font-semibold text-foreground">Ready for the real thing?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Applications are handled by your state, not by MovPerk. The official USDA
                state directory takes you straight to your state's SNAP application and
                contact information.
              </p>
              <a
                href="https://www.fns.usda.gov/snap/state-directory"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-forest-deep"
              >
                Go to your state's official site
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path d="M6 14 14 6m0 0H8m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="text-xs text-muted-foreground">
                Opens the official USDA Food and Nutrition Service website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "Does MovPerk cost anything?",
    a: "No. Exploring information here is completely free, and we don't ask for payment details anywhere on the site.",
  },
  {
    q: "Do I need to give my Social Security number here?",
    a: "No. This initial exploration asks for nothing personal. If you later apply to a program, your state agency will explain exactly what it needs and why.",
  },
  {
    q: "Is this a government website?",
    a: "No. MovPerk is an independent guide. We explain programs in plain language and link you to official government resources when you're ready to apply.",
  },
  {
    q: "Will checking this page affect anything officially?",
    a: "No. Reading about programs or visiting official sites doesn't register you anywhere or start an application unless you choose to apply yourself.",
  },
  {
    q: "Can I qualify if I work or own a car?",
    a: "Possibly. Many SNAP households include someone with a job. Rules vary by state, and expenses like rent, utilities and childcare are considered alongside income.",
  },
  {
    q: "How long does applying take?",
    a: "State applications are usually shorter than people expect — often 15–30 minutes. Some states let you apply online, by mail, by phone, or in person.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">FAQs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Common questions, honest answers
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted/60 sm:text-base"
                >
                  {item.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-forest transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
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
              Helping households discover their next step toward food assistance.
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
            MovPerk is an independent resource guide and is not affiliated with, endorsed by,
            or acting on behalf of any government agency. Program names are provided for
            information only. Eligibility decisions are made solely by official state
            agencies; final rules and amounts may vary by state and circumstance. This page is
            informational and does not constitute legal, financial, or benefits advice.
          </p>
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
        <HowItWorks />
        <About />
        <Options />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}
