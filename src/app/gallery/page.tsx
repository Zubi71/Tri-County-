"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  CtaBand,
} from "../../components/site-chrome";

const FILTERS = ["All", "Carpentry", "Drywall & Paint", "Repairs", "Bath & Kitchen", "Outdoor & Decks"];

const ITEMS = [
  { img: "/images/portfolio-door.jpg", cat: "Carpentry", title: "Custom Entry Door Installation", sub: "Solid oak entry, fitted & sealed" },
  { img: "/images/portfolio-crown.jpg", cat: "Carpentry", title: "Crown Moulding & Built-ins", sub: "Seamless trim work, painted finish" },
  { img: "/images/portfolio-drywall.jpg", cat: "Drywall & Paint", title: "Seamless Drywall Repair", sub: "Patched, textured & blended" },
  { img: "/images/portfolio-vanity.jpg", cat: "Bath & Kitchen", title: "Bathroom Vanity Upgrade", sub: "Double vanity, marble top" },
  { img: "/images/portfolio-painting.jpg", cat: "Drywall & Paint", title: "Interior Painting", sub: "Fresh walls, crisp trim lines" },
  { img: "/images/portfolio-deck.jpg", cat: "Outdoor & Decks", title: "Deck Restoration", sub: "Rebuilt & re-stained" },
  { img: "/images/svc-carpentry.jpg", cat: "Carpentry", title: "Architectural Trim Work", sub: "Mitered crown moulding, on site" },
  { img: "/images/svc-drywall.jpg", cat: "Drywall & Paint", title: "Drywall Finishing", sub: "Feathered joints, level walls" },
  { img: "/images/svc-painting.jpg", cat: "Drywall & Paint", title: "Room Painting", sub: "Taped, prepped & cut in clean" },
  { img: "/images/svc-plumbing.jpg", cat: "Repairs", title: "Faucet Installation", sub: "New kitchen faucet, leak-free" },
  { img: "/images/svc-electrical.jpg", cat: "Repairs", title: "Ceiling Fan Installation", sub: "Braced, wired & balanced" },
  { img: "/images/svc-door.jpg", cat: "Repairs", title: "Front Door Fitting", sub: "Hung plumb, sealed & aligned" },
  { img: "/images/svc-assembly.jpg", cat: "Repairs", title: "Furniture Assembly", sub: "Built, anchored & checked" },
  { img: "/images/svc-deck.jpg", cat: "Outdoor & Decks", title: "Deck Staining", sub: "Cedar oil, restored finish" },
  { img: "/images/svc-flooring.jpg", cat: "Drywall & Paint", title: "LVP Flooring", sub: "Luxury vinyl plank install" },
];

const SHOWCASE = [
  {
    title: "Water-Damaged Ceiling Plaster & Trim Restoration",
    area: "Old Cloverdale Historic District",
    time: "2 Days Turnaround",
    desc: "Cut out saturated gypsum, reinforced compromised sagging joists, applied mildew-resistant backing, executed three-coat Level 5 feathering, and matched 1920s cove crown trim.",
    badge: "Lifetime Seam Warranted",
  },
  {
    title: "Eaves & Structural Fascia Rot Mitigation",
    area: "Prattville Ridge",
    time: "1.5 Days Turnaround",
    desc: "Excavated 38 linear feet of decaying framing lumber. Rebuilt with moisture-impervious cellular PVC boards, vented soffits, and integrated rain-diverting drip flashings.",
    badge: "Termite & Rot Proof",
  },
  {
    title: "Custom Floor-to-Ceiling Fireplace Feature",
    area: "Pike Road Waters",
    time: "3 Days Fabrication & Mount",
    desc: "Built interior framing, mounted precision-spaced nickel gap shiplap, set custom dark-stained cedar beam mantel, and routed recessed HDMI/power raceways.",
    badge: "Architectural Grade",
  },
];

const STANDARDS = [
  { title: "Laser Precision Leveling", desc: "No eyeballing. Digital cross-line leveling for all wall framing, tile assemblies, trim molding, and cabinetry." },
  { title: "HEPA Clean Site Policy", desc: "Negative-air dust containment, full plastic entryway barriers, and industrial HEPA vacuum sweep before our crew leaves daily." },
  { title: "Clean Job Site Promise", desc: "Drop cloths, HEPA vacuums, and full daily cleanups. We respect your residence like it is our own." },
  { title: "Transparent Pricing", desc: "Explicit quotes with no hidden fuel surcharges or surprise billing. You approve every penny before work begins." },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Montgomery Metro Portfolio"
          title="Our Craftsmanship in Action."
          sub="Explore authentic transformations, custom trim installations, and structural repairs executed with master precision across Montgomery and the surrounding areas."
        />

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Verified Structural Transformations</span>
              <h2>Featured project showcases</h2>
              <p>Clean trade execution, seamless architectural blends, and meticulous substrate leveling.</p>
            </div>
            <div className="cards-3">
              {SHOWCASE.map((s) => (
                <article key={s.title} className="card">
                  <span className="card-tag">{s.area} · {s.time}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <p className="card-note">✓ {s.badge}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Recent Commissions Across the River Region</span>
              <h2>Project archive</h2>
              <p>Filter through our completed work. Each job is signed off by a certified local master craftsman.</p>
            </div>
            <div className="filters">
              {FILTERS.map((f) => (
                <button key={f} className={filter === f ? "filter-btn active" : "filter-btn"} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
            <p className="filter-count">
              Showing {shown.length} {shown.length === 1 ? "work" : "works"}
            </p>
            <div className="portfolio-grid">
              {shown.map((w) => (
                <article key={w.img} className="work-card">
                  <Image src={w.img} alt={w.title} width={800} height={500} />
                  <div className="work-body">
                    <span className="work-cat">{w.cat}</span>
                    <h3>{w.title}</h3>
                    <p>{w.sub}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Zero-Cutting-Corners Protocol</span>
              <h2>The Montgomery trade standard</h2>
              <p>Every repair, trim cut, and fastener we place complies with our residential assurance framework.</p>
            </div>
            <div className="cards-3">
              {STANDARDS.map((s) => (
                <article key={s.title} className="card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Have a project in mind? Let's build something built to last."
          sub="Send photos of your repair or describe your custom carpentry concept. You will receive an upfront, itemized proposal within 24 hours. No hidden trip fees."
        />
      </main>
      <SiteFooter />
    </>
  );
}
