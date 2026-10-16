"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Languages, Timer, Truck } from "lucide-react";

// ─── Pharmacy details ───────────────────────────────────────────────
const PHONE_DISPLAY = "(818) 763-4334";
const PHONE_TEL = "tel:+18187634334";
const EMAIL = "staff@elcaminopharmacy.com";
const ADDRESS_LINE1 = "10940 Victory Blvd";
const ADDRESS_LINE2 = "North Hollywood, CA 91606";
const MAPS_URL =
  "https://maps.google.com/?q=10940+Victory+Blvd+North+Hollywood+CA+91606";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "@id": "https://elcaminopharmacy.com",
  name: "El Camino Pharmacy",
  image: [
    "https://elcaminopharmacy.com",
    "https://elcaminopharmacy.com",
    "https://elcaminopharmacy.com",
  ],
  telephone: "+18187634334",
  email: "staff@elcaminopharmacy.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10940 Victory Blvd",
    addressLocality: "North Hollywood",
    addressRegion: "CA",
    postalCode: "91606",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1866945,
    longitude: -118.3693455,
  },
  url: "https://elcaminopharmacy.com",
  foundingDate: "1989",
  priceRange: "$$",

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Care", href: "#care" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const CORES = [
  {
    title: "Most Insurances Welcome",
    description: "Accepting Medi-Cal, Medicare, and major private plans.",
    icon: (
      <ShieldCheck className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />
    ),
  },
  {
    title: "5 Languages Spoken",
    description: "English, Español, 한국어, Հայերեն, and Русский.",
    icon: <Languages className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />,
  },
  {
    title: "Minimal Wait Times",
    description: "Quick, accurate prescription filling without the long lines.",
    icon: <Timer className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />,
  },
  {
    title: "Local Delivery",
    description: "Bringing your medications safely straight to your doorstep.",
    icon: <Truck className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />,
  },
];

const SERVICES = [
  {
    title: "Refills & transfers",
    desc: "Refill in a quick call or transfer prescriptions from another pharmacy.",
  },
  {
    title: "Medication management",
    desc: "Ongoing therapy management so every prescription works together safely.",
  },
  {
    title: "One-on-one counseling",
    desc: "Talk through every medication with a pharmacist who knows you.",
  },
  {
    title: "Prescriber coordination",
    desc: "We work directly with your doctors to keep your care in sync.",
  },
  {
    title: "Mental health focus",
    desc: "Specialized support and coordination for complex mental health regimens.",
  },
  {
    title: "$5 local delivery",
    desc: "Flat $5 delivery within 5 miles, brought right to your door.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "They actually know me by name and take time to explain every medication. I've never had a pharmacy care like this.",
    name: "Maria G.",
    detail: "North Hollywood",
  },
  {
    quote:
      "The delivery is a lifesaver, and they coordinate everything with my doctor. Switching here was the easiest decision.",
    name: "David R.",
    detail: "Valley Village",
  },
  {
    quote:
      "Compassionate, patient, and genuinely helpful with my mental health prescriptions. Highly recommend.",
    name: "Anna K.",
    detail: "Toluca Lake",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "9:30 AM – 6:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const LANGUAGES = ["English", "Spanish", "Korean", "Armenian", "Russian"];

// ─── Small building blocks ──────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
      {children}
    </span>
  );
}

// Fade + rise on scroll into view. Wraps any content.
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#faf9f6]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-neutral-900"
        >
          El Camino Pharmacy
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={PHONE_TEL}
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Call us
        </a>
      </div>
    </header>
  );
}

// ─── Page ───────────────────────────────────────────────────────────
export default function ElCaminoPage() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#faf9f6] font-sans text-neutral-900 antialiased"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pt-28">
        <Reveal>
          <Eyebrow>North Hollywood, CA · Since 1989</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
            <span className="block">Your neighborhood pharmacy</span>
            <span className="block">with personal care.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-neutral-500">
            Our family-owned pharmacy combines decades of trusted expertise with
            a dedicated focus on mental health and comprehensive wellness. We
            accept most major insurance plans and provide dependable delivery
            within 5 miles to ensure your care is always within reach.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={PHONE_TEL}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="#services"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm text-neutral-700 transition-colors hover:border-neutral-900"
            >
              View services
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-16">
          <div className="group overflow-hidden rounded-2xl border border-neutral-200/80">
            <img
              src="/images/hero.webp"
              alt="El Camino Pharmacy"
              className="h-[280px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-[440px]"
            />
          </div>
        </Reveal>
      </section>

      {/* ── Cores band ───────────────────────────────────────────── */}
      {/* <section className="border-t border-neutral-200/80">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-4xl font-light tracking-tight md:text-5xl">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}
      <section className="border-t border-neutral-200/80">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
            {CORES.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-50 border border-neutral-200/60 mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section id="about" className="border-t border-neutral-200/80">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <Eyebrow>About us</Eyebrow>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight md:text-4xl">
              <span className="block">Family-owned.</span>
              <span className="block">Care Across Generations.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-500">
              We are a family-owned community pharmacy serving North Hollywood
              with friendly, reliable service. Our team offers one-on-one
              counseling, proactive refills, and coordination with your
              prescribers so you can stay on track—especially for complex mental
              health regimens.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="group overflow-hidden rounded-2xl border border-neutral-200/80">
              <img
                src="/images/about.png"
                alt="A pharmacist speaking one-on-one with a patient at the counter"
                className="h-[360px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Care / mental health focus ───────────────────────────── */}
      <section id="care" className="border-t border-neutral-200/80">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal className="md:order-2">
            <Eyebrow>Our focus</Eyebrow>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight md:text-4xl">
              <span className="block">Expert guidance.</span>
              <span className="block">Fast, accurate fills.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-500">
              Complex prescriptions deserve extra attention. We take the time to
              organize medications, watch for interactions, and coordinate
              closely with your prescribers—so your treatment stays consistent,
              safe, and easy to follow.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-500"
            >
              See how we help
            </a>
          </Reveal>
          <Reveal delay={150} className="md:order-1">
            <div className="group overflow-hidden rounded-2xl border border-neutral-200/80">
              <img
                src="/images/care.png"
                alt="A pharmacist carefully organizing medication into a weekly pill organizer"
                className="h-[360px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="services" className="border-t border-neutral-200/80">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight tracking-tight md:text-4xl">
              Everything you need from your pharmacy.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 100}>
                <div className="border-t border-neutral-200 pt-5">
                  <h3 className="text-base font-medium text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section id="reviews" className="border-t border-neutral-200/80">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <Eyebrow>What neighbors say</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight tracking-tight md:text-4xl">
              Trusted by our neighborhood.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white/40 p-7">
                  <blockquote className="text-pretty text-base leading-relaxed text-neutral-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-neutral-200 pt-4 text-sm">
                    <div className="font-medium text-neutral-900">{t.name}</div>
                    <div className="text-neutral-400">{t.detail}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit ────────────────────────────────────────────────── */}
      <section id="contact" className="border-t border-neutral-200/80">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <Eyebrow>Visit us</Eyebrow>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight md:text-4xl">
              Meet our pharmacists and technicians.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {/* Address */}
            <Reveal>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                Address
              </h3>
              <p className="mt-4 text-lg font-light leading-snug">
                {ADDRESS_LINE1}
              </p>
              <p className="text-sm text-neutral-500">{ADDRESS_LINE2}</p>
              <p className="mt-3 text-sm text-neutral-400">
                Parking in lot at back of building.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-500"
              >
                Open in Maps
              </a>
            </Reveal>

            {/* Hours */}
            <Reveal delay={100}>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                Hours
              </h3>
              <dl className="mt-4 space-y-3">
                {HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between text-sm"
                  >
                    <dt className="text-neutral-600">{row.day}</dt>
                    <dd className="text-neutral-400">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Contact */}
            <Reveal delay={200}>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                Contact
              </h3>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <div className="text-neutral-400">Phone</div>
                  <a
                    href={PHONE_TEL}
                    className="text-neutral-900 hover:text-neutral-500"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div>
                  <div className="text-neutral-400">Email</div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all text-neutral-900 hover:text-neutral-500"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <div className="text-neutral-400">Languages</div>
                  <p className="text-neutral-600">{LANGUAGES.join(", ")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-neutral-200/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-center">
          <span>© {new Date().getFullYear()} El Camino Pharmacy</span>
        </div>
      </footer>
    </div>
  );
}
