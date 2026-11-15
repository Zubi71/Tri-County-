"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SiteHeader,
  SiteFooter,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
} from "../components/site-chrome";

const SERVICES = [
  {
    icon: "wrench",
    title: "General Home Repairs",
    text: "Prompt resolution for the nagging items on your honey-do list. Restoring comfort, function, and stability.",
    points: ["Drywall patch & trim touchups", "Hardware & handle replacement", "Loose fixture securing & leveling"],
  },
  {
    icon: "paint",
    title: "Drywall Repair & Patching",
    text: "Flawless drywall blending that makes holes, cracks, and moisture stains completely invisible to the eye.",
    points: ["Hole patching from doorknobs & moves", "Water damage cutout & replacement", "Seamless orange peel & knockdown texture"],
  },
  {
    icon: "brush",
    title: "Interior & Exterior Painting",
    text: "Crisp cut lines, premium low-VOC coatings, and meticulous surface prep that transforms rooms and facades.",
    points: ["Living areas, kitchens & vaulted ceilings", "Exterior trim, shutters & portico accents", "Cabinet repainting & architectural staining"],
  },
  {
    icon: "drop",
    title: "Plumbing Fixture Repairs",
    text: "Swift leak resolution, faucet retrofits, and replacement services to stop waste and protect your structure.",
    points: ["Leaky sink faucets & shower cartridge swap", "Toilet rebuilds, flappers & resets", "Garbage disposal installations & line traps"],
  },
  {
    icon: "bolt",
    title: "Electrical Updates & Lighting",
    text: "Safe installation of modern lighting fixtures, ceiling fans, smart home thermostats, and safety receptacles.",
    points: ["Ceiling fans & chandelier replacements", "GFCI safety outlets & dimmer switches", "Outdoor floodlights & motion sensors"],
  },
  {
    icon: "door",
    title: "Door & Window Repairs",
    text: "Re-hanging dragging doors, replacing failed hinges, installing new entry locks, and sealing seasonal drafts.",
    points: ["Draft stripping & threshold weathersealing", "Deadbolts, smart locks & handlesets", "Sliding screen patio track adjustments"],
  },
  {
    icon: "chair",
    title: "Furniture & Equipment Assembly",
    text: "Avoid the headache of endless instructions. Precision assembly and wall anchoring for maximum household safety.",
    points: ["Complex IKEA, Wayfair & office workstations", "Master bedroom sets, dressers & bunk beds", "Anti-tip safety wall anchoring"],
  },
  {
    icon: "leaf",
    title: "Seasonal Home Maintenance",
    text: "Proactive preventative care to preserve your property value and eliminate costly future structural repairs.",
    points: ["Gutter flushing & downspout inspection", "Pressure washing driveways & walkways", "Attic insulation & crawlspace barrier checks"],
  },
  {
    icon: "floor",
    title: "Flooring & Tile Repairs",
    text: "Eliminate tripping hazards and unsightly cracks. Precision repair of ceramic tiles, luxury vinyl plank, and hardwoods.",
    points: ["Cracked tile removal & color-matched re-grout", "Damaged LVP/LVT board replacement", "Custom metal and wood transition strips"],
  },
];

const WORKS = [
  { img: "/images/portfolio-door.jpg", tag: "Carpentry", cat: "Carpentry", title: "Custom Door & Frame Restoration", text: "Replaced rotted jambs with architectural red oak trim, fitted with satin brass hinges." },
  { img: "/images/portfolio-crown.jpg", tag: "Carpentry", cat: "Carpentry", title: "Precision Crown Moulding Installation", text: "Seamless compound miter corners spanning 240 linear feet of traditional historic detailing." },
  { img: "/images/portfolio-drywall.jpg", tag: "Drywall & Paint", cat: "Drywall & Paint", title: "Flawless Drywall & Texture Match", text: "Removed a 4x8 ft ceiling section after a leak, reinforced joists, and blended ceiling texture seamlessly." },
  { img: "/images/portfolio-vanity.jpg", tag: "Repairs", cat: "Repairs", title: "Modern Bathroom Vanity Update", text: "Replaced a dated double sink vanity, reconfigured P-traps, and mounted matte black faucets." },
  { img: "/images/portfolio-painting.jpg", tag: "Drywall & Paint", cat: "Drywall & Paint", title: "Living Room Color Transformation", text: "Complete surface preparation, minor crack stabilization, and two coats of washable satin enamel." },
  { img: "/images/portfolio-deck.jpg", tag: "Carpentry", cat: "Carpentry", title: "Deck & Railing Structural Refurb", text: "Swapped weathered handrails, reinforced support posts, and sealed with deep penetrating stain." },
];

const TESTIMONIALS = [
  {
    quote: "They arrived exactly at 7:30 AM as scheduled. Repaired three damaged drywall sections after our AC overflow and re-hung two sticky interior doors. The texture match was unbelievable — you literally cannot see where the patch begins.",
    name: "Steve & Elena Vance",
    area: "Montgomery • Old Cloverdale",
    initials: "MV",
  },
  {
    quote: "Honest flat rates and no surprises. Other contractors wouldn't even return my calls for smaller carpentry adjustments. Tri County Handyman treated our home with incredible respect and left the work area cleaner than they found it.",
    name: "Patricia Holloway",
    area: "Montgomery • Bell Road Area",
    initials: "PH",
  },
  {
    quote: "Installed new bathroom faucets, re-anchored exterior railing, and painted our entire kitchen in just under two days. Fast, punctual, and genuine southern hospitality. We will never use anyone else.",
    name: "David Reynolds",
    area: "Montgomery • Dalraida",
    initials: "DR",
  },
];

const WHY = [
  { title: "Dependable & On-Time", text: "We honor confirmed arrival windows and communicate proactively before we arrive at your door." },
  { title: "Master Quality Work", text: "High-grade fasteners, durable materials, and true carpentry mastery backing every project." },
  { title: "Attention to Detail", text: "Boot covers, clean drop cloths, and a full vacuum sweep before we consider a project wrapped." },
  { title: "Honest Transparent Pricing", text: "Clear upfront written estimates with zero surprise surcharges or hidden travel fees." },
  { title: "Customer-Focused", text: "We listen intently to your goals and tailor repair strategies to your household budget and timeline." },
  { title: "Solutions That Last", text: "No quick temporary hacks. We fix the underlying cause so your problem stays solved permanently." },
];

function ServiceIcon({ name }: { name: string }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "wrench":
      return (<svg {...common}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>);
    case "paint":
      return (<svg {...common}><rect x="3" y="4" width="14" height="6" rx="1" /><path d="M7 10v4a2 2 0 0 0 4 0V10" /><path d="M9 16v4" /></svg>);
    case "brush":
      return (<svg {...common}><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" /><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" /></svg>);
    case "drop":
      return (<svg {...common}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>);
    case "bolt":
      return (<svg {...common}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></svg>);
    case "door":
      return (<svg {...common}><rect x="4" y="3" width="16" height="18" rx="1" /><circle cx="15" cy="12" r="1" /></svg>);
    case "chair":
      return (<svg {...common}><path d="M6 3v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" /><path d="M4 13h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z" /><path d="M6 20v1M18 20v1" /></svg>);
    case "leaf":
      return (<svg {...common}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>);
    default:
      return (<svg {...common}><path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" /><path d="M9 21V12h6v9" /></svg>);
  }
}

export default function Home() {
  const [filter, setFilter] = useState("All Projects");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "General Home Repairs", details: "" });

  const shownWorks = filter === "All Projects" ? WORKS : WORKS.filter((w) => w.cat === filter);

  function submitQuote(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Estimate Request — ${form.service} (${form.name})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService needed: ${form.service}\n\nProject details:\n${form.details}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="hero" id="home" style={{ paddingTop: 84, paddingBottom: 96 }}>
          <div className="container hero-grid">
            <div>
              <span className="eyebrow light">Montgomery&apos;s Home Repair &amp; Handyman Specialists</span>
              <h1>Reliable Handyman Services You Can Count On</h1>
              <p className="lead">From small repairs to complete home improvements, we get the job done right the first time. Quality workmanship, dependable service, and no second guessing.</p>
              <div className="hero-actions">
                <a className="btn btn-amber" href="#contact">Get a Free Estimate →</a>
                <a className="btn btn-outline" href="#services">Explore Our Services</a>
              </div>
              <div className="hero-badges">
                <span className="badge"><span className="star">★★★★★</span> 4.9 · 14 Google reviews</span>
                <span className="badge">✓ Free quotes</span>
                <span className="badge">✓ Montgomery, AL</span>
              </div>
            </div>
            <div className="glass dispatch-card">
              <span><span className="live-dot" />Dispatch Active Today</span>
              <h3 style={{ marginTop: 12 }}>Need Urgent Fixes?</h3>
              <p>From burst plumbing to broken locks, speak directly to our Montgomery team.</p>
              <span>Direct Technician Line</span>
              <a className="phone-big" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <a className="btn btn-amber" href={PHONE_HREF}>Call Now</a>
              <p className="note">Or send us an email — we reply the same day.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What we fix &amp; build</span>
              <h2>Home Repairs &amp; Improvements Made Easy</h2>
              <p className="section-sub">One trusted team for all your home maintenance and repair needs across Montgomery and the surrounding areas.</p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article className="service-card" key={s.title}>
                  <div className="service-icon"><ServiceIcon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="check-list">
                    {s.points.map((p) => (<li key={p}>{p}</li>))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Carpentry band */}
        <section className="carpentry">
          <div className="container carpentry-grid">
            <div>
              <span className="eyebrow light">Architectural trade specialty</span>
              <h2>Custom Carpentry, Built-ins &amp; Trim Work</h2>
              <p style={{ marginTop: 14 }}>Bespoke woodworking that elevates the character of your residence. From custom fireplace mantels and pantry shelving to historic crown molding replication and porch step reconstructions.</p>
              <div className="carpentry-checks">
                <span>Baseboards &amp; Crown</span>
                <span>Custom Wall Shelves</span>
                <span>Deck &amp; Porch Restorations</span>
              </div>
              <a className="btn btn-amber" href="#contact">Book a Carpentry Consultation →</a>
              <p style={{ marginTop: 16, fontSize: "0.88rem" }}>✓ Custom material sourcing available</p>
            </div>
            <Image src="/images/portfolio-door.jpg" alt="Custom oak entryway door casing and door frame installation" width={640} height={380} />
          </div>
        </section>

        {/* Why us */}
        <section id="about">
          <div className="container why-grid">
            <div className="why-img-wrap">
              <Image src="/images/hero-handyman.jpg" alt="Master handyman leveling and fitting a custom architectural door frame" width={640} height={460} />
              <div className="glass-light why-badge">
                <strong>Your Neighborhood Craftsmen</strong>
                <span>Montgomery&apos;s trusted local handyman partner</span>
              </div>
            </div>
            <div>
              <span className="eyebrow">The Tri County difference</span>
              <h2>Why Homeowners Choose Tri County Handyman</h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>We eliminate the friction, unreliability, and guesswork common in the contractor industry. Montgomery residents turn to us when they need decisive, uncompromising craftsmanship done right the first time.</p>
              <div className="why-list">
                {WHY.map((w) => (
                  <div className="why-item" key={w.title}>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="container stats-grid">
            <div className="stat"><b>4.9★</b><span>Google rating</span></div>
            <div className="stat"><b>14</b><span>Google reviews</span></div>
            <div className="stat"><b>9</b><span>Services offered</span></div>
          </div>
        </section>

        {/* How it works */}
        <section>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Simple &amp; stress-free</span>
              <h2>How It Works in 3 Easy Steps</h2>
              <p className="section-sub">We respect your time. From inquiry to job completion, our workflow is smooth, transparent, and direct.</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">1</div>
                <h3>Contact Us</h3>
                <p>Tell us what needs fixing via our quick online form or give us a direct phone call. Upload a photo or describe the scope in minutes.</p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3>Get Your Estimate</h3>
                <p>Receive a detailed, upfront estimate with clearly itemized labor and materials. Zero hidden charges, zero surprises, and no high-pressure sales.</p>
                <span className="step-tag">✓ Clear flat rates available</span>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3>We Get It Done</h3>
                <p>Sit back and relax. Our craftsmen arrive punctually with all necessary tools, finish cleanly, and stand behind their work.</p>
                <span className="step-tag">✓ 100% backed guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="gallery" style={{ background: "#fff" }}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Portfolio of craftsmanship</span>
              <h2>Our Work Speaks for Itself</h2>
              <p className="section-sub">Explore recent home repairs, architectural carpentry, and interior improvements completed right here in Montgomery.</p>
            </div>
            <div className="filters">
              {["All Projects", "Carpentry", "Drywall & Paint", "Repairs"].map((f) => (
                <button key={f} className={`filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
            <div className="portfolio-grid">
              {shownWorks.map((w) => (
                <article className="work-card" key={w.title}>
                  <Image src={w.img} alt={w.title} width={512} height={286} />
                  <div className="work-body">
                    <span className="work-tag">{w.tag}</span>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials" id="reviews">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Local testimonials</span>
              <h2>What Our Customers Say in Montgomery</h2>
            </div>
            <div className="testi-summary">
              <span className="stars">★★★★★</span> <b>4.9 star average from 14 Google reviews</b>
            </div>
            <div className="testi-grid">
              {TESTIMONIALS.map((t) => (
                <article className="testi-card" key={t.name}>
                  <div className="stars">★★★★★</div>
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="testi-who">
                    <span className="testi-avatar">{t.initials}</span>
                    <div><strong>{t.name}</strong><span>{t.area}</span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="cta-band">
          <div className="container">
            <span className="eyebrow light">Ready to restore your home?</span>
            <h2>Tri County Handyman. Get Your Home Fixed Right!</h2>
            <p>Need a repair or home improvement? Let our experienced Montgomery team solve it today with guaranteed craftsmanship.</p>
            <a className="btn btn-amber" href="#contact">Request Your Free Estimate →</a>
            <p className="cta-note">No obligation · Quick response · Free quotes</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Get in touch</span>
              <h2>Let&apos;s Get Your Project Started</h2>
              <p className="section-sub">Tell us about your home repair or improvement project in Montgomery. We&apos;ll follow up promptly with clear options and pricing.</p>
            </div>
            <div className="contact-grid">
              <form className="quote-form" onSubmit={submitQuote}>
                {sent && <div className="form-ok">Thank you! Your estimate request is ready to send — your email app should have opened. A technician will call you shortly.</div>}
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="q-name">Full Name</label>
                    <input id="q-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="q-phone">Phone Number</label>
                    <input id="q-phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="q-email">Email Address</label>
                    <input id="q-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="q-service">Primary Service Needed</label>
                    <select id="q-service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      {SERVICES.map((s) => (<option key={s.title}>{s.title}</option>))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="q-details">Project Details &amp; Preferred Schedule</label>
                  <textarea id="q-details" rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="Describe what needs fixing, or a specific timeline…" />
                </div>
                <button className="btn btn-amber" type="submit" style={{ width: "100%", justifyContent: "center" }}>Send My Request →</button>
              </form>
              <div className="contact-info">
                <div className="info-card">
                  <h3>Service Area</h3>
                  <p>Montgomery, AL and the surrounding areas.</p>
                </div>
                <div className="info-card">
                  <h3>Direct Phone (Call or Text)</h3>
                  <a className="big" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </div>
                <div className="info-card">
                  <h3>Email</h3>
                  <a className="big" href={`mailto:${EMAIL}`} style={{ fontSize: "1rem", wordBreak: "break-all" }}>{EMAIL}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
