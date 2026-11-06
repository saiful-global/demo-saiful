"use client";

import { useState } from "react";
import Image from "next/image";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

/* ------------------------------------------------------------------ */
/* Fonts                                                               */
/* ------------------------------------------------------------------ */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

/* ------------------------------------------------------------------ */
/* Easy-to-edit content                                                */
/* ------------------------------------------------------------------ */

// Put the logo file inside /public and set the path here, e.g. "/logo.png".
// Leave empty to show a "Logo" placeholder box.
const LOGO_SRC = "/logo.jpg";

const RESTAURANT_NAME = "Food bucket";

// Every `image` field accepts a path from /public, e.g. "/images/biryani.jpg".
// Leave empty to show an "Image" placeholder box.
const MENU = {
  Starters: [
    { name: "Crispy Chicken Wings", desc: "Tossed in house hot sauce, served with a cool dip.", price: 280, image: "/1.jpg" },
    { name: "Beef Samosa", desc: "Hand-folded, filled with spiced beef and onion.", price: 120, image: "/2.jpg" },
    { name: "Fish Fingers", desc: "Golden fried, with tartar sauce and lemon.", price: 320, image: "/3.jpg" },
    { name: "Hot & Sour Soup", desc: "Thick, peppery and ready in minutes.", price: 220, image: "/4.jpg" },
  ],
  Mains: [
    { name: "Kacchi Biryani", desc: "Slow-cooked mutton and fragrant rice with borhani.", price: 520, image: "" },
    { name: "Grilled Chicken Platter", desc: "Charcoal-grilled chicken, rice, salad and sauce.", price: 450, image: "" },
    { name: "Beef Bhuna with Paratha", desc: "Dark, rich beef bhuna with two flaky parathas.", price: 380, image: "" },
    { name: "Mixed Veg Fried Rice", desc: "Wok-tossed rice with seasonal vegetables.", price: 300, image: "" },
  ],
  Desserts: [
    { name: "Firni", desc: "Creamy rice pudding set in a clay bowl.", price: 140, image: "" },
    { name: "Chocolate Brownie", desc: "Warm, with a scoop of vanilla ice cream.", price: 220, image: "" },
    { name: "Roshmalai", desc: "Soft cheese dumplings in sweet milk.", price: 160, image: "" },
    { name: "Caramel Custard", desc: "Silky custard with a burnt-sugar top.", price: 180, image: "" },
  ],
  Drinks: [
    { name: "Mango Lassi", desc: "Thick, chilled and made with real mango.", price: 150, image: "" },
    { name: "Fresh Lemon Mint", desc: "Squeezed to order, lots of ice.", price: 110, image: "" },
    { name: "Masala Tea", desc: "Brewed strong with ginger and cardamom.", price: 60, image: "" },
    { name: "Cold Coffee", desc: "Blended with milk and a little chocolate.", price: 180, image: "" },
  ],
};

const FEATURES = [
  { title: "Cooked to order", text: "Nothing sits under a lamp. Your food is started when you order." },
  { title: "Daily bazaar run", text: "Vegetables, fish and meat are bought fresh every morning." },
  { title: "Fast delivery", text: "Hot meals at your door, usually within 40 minutes." },
];

const REVIEWS = [
  { name: "Saiful", text: "The biryani was hot, the portion was big, and it tasted like home. We come back every Friday." },
  { name: "Customer Name", text: "Quick service even on a busy night. The grilled chicken is the best in the area." },
  { name: "Customer Name", text: "Booked a table for 12 and everything was ready when we walked in." },
];

const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

// Shows the real image when `src` is set, otherwise a labelled placeholder.
function Img({ src, alt = "", className = "", sizes = "100vw" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#DDE7DF] text-sm text-[#12372A]/60">
          Image
        </div>
      )}
    </div>
  );
}

function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2B705]">
      {LOGO_SRC ? (
        <Image src={LOGO_SRC} alt={`${RESTAURANT_NAME} logo`} width={44} height={44} className="h-11 w-11 object-contain" />
      ) : (
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-dashed text-xs ${
            light ? "border-white/50 text-white/70" : "border-[#12372A]/40 text-[#12372A]/60"
          }`}
        >
          Logo
        </div>
      )}
      <span
        className={`font-[family-name:var(--font-display)] text-xl font-bold ${
          light ? "text-white" : "text-[#12372A]"
        }`}
      >
        {RESTAURANT_NAME}
      </span>
    </a>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[#D62828] px-6 py-3 font-semibold text-white transition hover:bg-[#B81F1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function Demo() {
  const [open, setOpen] = useState(false);
  const categories = Object.keys(MENU);
  const [active, setActive] = useState(categories[0]);

  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} min-h-screen bg-white font-[family-name:var(--font-body)] text-[#1B1F1D]`}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#12372A]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-[#12372A] hover:text-[#D62828]">
                {n.label}
              </a>
            ))}
            <a href="#contact" className={`${btnPrimary} !py-2 text-sm`}>
              Order now
            </a>
          </nav>
          <button
            type="button"
            className="rounded p-2 text-[#12372A] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="border-t border-[#12372A]/10 bg-white px-5 pb-4 md:hidden" aria-label="Mobile">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[#12372A]/5 py-3 font-medium text-[#12372A]"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className={`${btnPrimary} mt-4 w-full`}>
              Order now
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-[#12372A] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Home Made
              <br />
              Fresh Cooked Food.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
              Family recipes, charcoal grills and big portions. Eat in, take away or get it delivered.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className={btnPrimary}>
                See the menu
              </a>
              <a href="#contact" className={btnOutline}>
                Book a table
              </a>
            </div>
            <p className="mt-8 text-sm text-white/60">Open daily, 11 am to 11 pm</p>
          </div>

          {/* Arch-shaped hero image */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <Img src="/2.jpg" alt="Signature dish" className="aspect-[4/5] w-full rounded-t-full" sizes="(min-width: 768px) 28rem, 90vw" />
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-[#F2B705] p-3 pr-5 text-[#12372A] shadow-lg sm:-left-8">
              <Img src="/1.jpg" alt="Today's special" className="h-14 w-14 rounded-xl" sizes="56px" />
              <div>
                <p className="text-sm font-semibold">Today&apos;s special</p>
                <p className="text-sm">Crispy Fried Snacks, ৳520</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="border-l-4 border-[#F2B705] pl-5">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#12372A]">{f.title}</h2>
              <p className="mt-2 leading-relaxed text-[#1B1F1D]/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-[#F2F6F3] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[#12372A]">Our menu</h2>
          <p className="mt-2 max-w-lg text-[#1B1F1D]/70">Pick a category. Every dish is made when you order it.</p>

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Menu categories">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] ${
                  active === c
                    ? "bg-[#12372A] text-white"
                    : "bg-white text-[#12372A] ring-1 ring-[#12372A]/20 hover:ring-[#12372A]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MENU[active].map((item) => (
              <article key={item.name} className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#12372A]/10">
                <Img src={item.image} alt={item.name} className="aspect-[4/3] w-full" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug text-[#12372A]">{item.name}</h3>
                    <span className="shrink-0 font-bold text-[#D62828]">৳{item.price}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#1B1F1D]/70">{item.desc}</p>
                  <button
                    type="button"
                    className="mt-4 rounded-full border border-[#12372A] py-2 text-sm font-semibold text-[#12372A] transition hover:bg-[#12372A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                  >
                    Add to order
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <Img src="/5.jpg" alt="Our kitchen" className="aspect-[5/4] w-full rounded-2xl" sizes="(min-width: 768px) 50vw, 100vw" />
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[#12372A]">
            A kitchen that never cut corners
          </h2>
          <p className="mt-4 leading-relaxed text-[#1B1F1D]/75">
            We started with one stove and a handful of family recipes. Today the menu is bigger, but the rule is the same:
            fresh ingredients, proper spices and no shortcuts.
          </p>
          <p className="mt-4 leading-relaxed text-[#1B1F1D]/75">
            Come in with friends, bring the whole family, or order from home. Either way, your food arrives hot.
          </p>
          <a href="#contact" className={`${btnPrimary} mt-6`}>
            Reserve a table
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#F2F6F3] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[#12372A]">From our tables</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Img src="/3.jpg" alt="Gallery 1" className="row-span-2 min-h-64 rounded-2xl" sizes="25vw" />
            <Img src="/6.jpg" alt="Gallery 2" className="aspect-square rounded-2xl" sizes="25vw" />
            <Img src="/7.jpg" alt="Gallery 3" className="aspect-square rounded-2xl" sizes="25vw" />
            <Img src="/8.jpg" alt="Gallery 4" className="row-span-2 min-h-64 rounded-2xl" sizes="25vw" />
            <Img src="/9.jpg" alt="Gallery 5" className="aspect-square rounded-2xl" sizes="25vw" />
            <Img src="/10.jpg" alt="Gallery 6" className="aspect-square rounded-2xl" sizes="25vw" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[#12372A]">What guests say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure key={i} className="rounded-2xl bg-[#12372A] p-6 text-white">
              <blockquote className="leading-relaxed text-white/90">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Img src="/saiful.png" alt={r.name} className="h-10 w-10 rounded-full" sizes="40px" />
                <span className="text-sm font-semibold">{r.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact / reservation */}
      <section id="contact" className="bg-[#D62828] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold">Book a table</h2>
            <p className="mt-3 max-w-md text-white/90">
              Tell us when you are coming and how many people. We will confirm by phone.
            </p>
            <dl className="mt-8 space-y-4 text-white/95">
              <div>
                <dt className="font-semibold">Address</dt>
                <dd>House 00, Road 00, Your Area, City</dd>
              </div>
              <div>
                <dt className="font-semibold">Phone</dt>
                <dd>01XXX-XXXXXX</dd>
              </div>
              <div>
                <dt className="font-semibold">Hours</dt>
                <dd>Every day, 11 am to 11 pm</dd>
              </div>
            </dl>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white p-6 text-[#1B1F1D]">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Name
                <input type="text" className="mt-1 w-full rounded-lg border border-[#12372A]/25 px-3 py-2 focus-visible:outline-2 focus-visible:outline-[#12372A]" />
              </label>
              <label className="block text-sm font-medium">
                Phone
                <input type="tel" className="mt-1 w-full rounded-lg border border-[#12372A]/25 px-3 py-2 focus-visible:outline-2 focus-visible:outline-[#12372A]" />
              </label>
              <label className="block text-sm font-medium">
                Date
                <input type="date" className="mt-1 w-full rounded-lg border border-[#12372A]/25 px-3 py-2 focus-visible:outline-2 focus-visible:outline-[#12372A]" />
              </label>
              <label className="block text-sm font-medium">
                Guests
                <input type="number" min="1" defaultValue="2" className="mt-1 w-full rounded-lg border border-[#12372A]/25 px-3 py-2 focus-visible:outline-2 focus-visible:outline-[#12372A]" />
              </label>
            </div>
            <button type="submit" className="mt-5 w-full rounded-full bg-[#12372A] py-3 font-semibold text-white transition hover:bg-[#0B2419] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]">
              Reserve my table
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B2419] py-10 text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
          <Logo light />
          <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <p className="text-sm">© {new Date().getFullYear()} {RESTAURANT_NAME}. All rights reserved. Made by Saiful Islam</p>
        </div>
      </footer>
    </div>
  );
}
