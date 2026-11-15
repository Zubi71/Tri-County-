import Image from "next/image";
import Link from "next/link";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  CtaBand,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../../components/site-chrome";

export const metadata = {
  title: "Services | Tri County Handyman Inc. — Montgomery, AL",
  description:
    "Carpentry, drywall, painting, plumbing fixtures, electrical, doors, assembly, decks and flooring — one reliable crew in Montgomery, AL. Free estimates.",
};

const SERVICES = [
  {
    id: "carpentry",
    cat: "Carpentry",
    title: "Custom Carpentry, Crown Moulding & Built-ins",
    desc: "Upgrade interior aesthetics with crisp mitered corners, custom shelving alcoves, board-and-batten accent walls, and custom baseboards crafted with laser-level precision.",
    img: "/images/svc-carpentry.jpg",
    alt: "Carpenter cutting crown moulding on a miter saw",
    points: [
      "Crown moulding, casing, wainscoting & baseboards",
      "Custom pantry shelving & mudroom bench units",
      "Precision caulking, wood-filling, and sanding prep",
    ],
    time: "Typical: 1–2 Days",
    price: "Fixed Project Quote",
  },
  {
    id: "drywall",
    cat: "Drywall",
    title: "Drywall Repair, Hole Patching & Texture Match",
    desc: "Invisible repairs for doorknob punches, water leak ceiling cutouts, stress cracks, and settled joints. Expert orange-peel, knockdown, and smooth texture matching.",
    img: "/images/svc-drywall.jpg",
    alt: "Handyman smoothing joint compound over a drywall patch",
    points: [
      "Backer board backing & reinforced mesh taping",
      "Multi-coat mudding with feather-edge vacuum sanding",
      "Exact spray texture matching & primer sealing",
    ],
    time: "Typical: 3–6 Hours",
    price: "Standard Flat Rates",
  },
  {
    id: "painting",
    cat: "Painting",
    title: "Interior & Exterior Painting • Low-VOC Precision",
    desc: "Comprehensive prep work is our trademark: scraping, caulking, priming, and hand-rolled finishes that will not peel, streak, or bleed over edges.",
    img: "/images/svc-painting.jpg",
    alt: "Painter cutting in a freshly painted slate blue wall",
    points: [
      "Full surface deglossing, power washing & hole filling",
      "Clean razor edge tape lines & non-bleeding sealants",
      "Premium Sherwin-Williams / Benjamin Moore finishes",
    ],
    time: "Typical: 1–3 Days",
    price: "Room or SqFt Pricing",
  },
  {
    id: "plumbing",
    cat: "Plumbing",
    title: "Plumbing Fixture Repairs & Upgrades",
    desc: "Fast, watertight replacements of malfunctioning sink faucets, running toilets, garbage disposals, shower valves, and supply shutoff gate valves.",
    img: "/images/svc-plumbing.jpg",
    alt: "Plumber installing a kitchen faucet under the sink",
    points: [
      "Old fixture disconnection, haul away & disposal",
      "Quarter-turn emergency shut-off valve replacements",
      "Pressure check & zero-drip dynamic testing",
    ],
    time: "Typical: 1–3 Hours",
    price: "Flat Rate Tiered",
  },
  {
    id: "electrical",
    cat: "Electrical",
    title: "Electrical Updates, Fans, Dimmers & Safety Outlets",
    desc: "Secure installations of heavy ceiling fans, modern LED recessed can conversions, GFCI wet-location outlets, and smart video doorbells.",
    img: "/images/svc-electrical.jpg",
    alt: "Electrician installing a ceiling fan",
    points: [
      "Heavy-duty ceiling fan brace retrofitting",
      "Kitchen/Bath GFCI shock-protection upgrades",
      "Smart dimmer, timer switches & ring cameras",
    ],
    time: "Typical: 2–4 Hours",
    price: "Standard Pricing Menu",
  },
  {
    id: "doors",
    cat: "Entryways",
    title: "Door, Lockset & Window Weatherization",
    desc: "Fix sticking doors, loose threshold draft seals, damaged screen mesh, sagging pocket doors, and rekey or install smart security electronic deadbolts.",
    img: "/images/svc-door.jpg",
    alt: "Handyman fitting a craftsman front door",
    points: [
      "Interior / Exterior door hung plumb and square",
      "Heavy duty weatherstripping & sweep replacements",
      "Smart lock alignment, strike mortising & latch tuning",
    ],
    time: "Typical: 2–5 Hours",
    price: "Standard Per-Door Rate",
  },
  {
    id: "assembly",
    cat: "Assembly",
    title: "Furniture & Equipment Assembly • IKEA & Gym Setup",
    desc: "Avoid hundreds of confusing manual pages. We assemble complex modular systems, home gym equipment, gazebos, kids play sets, and heavy cabinetry.",
    img: "/images/svc-assembly.jpg",
    alt: "Technician assembling a wooden dresser",
    points: [
      "Unboxing, parts verification, and packaging disposal",
      "Wall-anchoring for bookshelves & dressers",
      "Torque adjustment & stability safety check",
    ],
    time: "Typical: 2–6 Hours",
    price: "Hourly or Box Rate",
  },
  {
    id: "exterior",
    cat: "Exterior Living",
    title: "Deck, Porch & Fence Wood Restoration",
    desc: "Alabama heat and moisture deteriorate outdoor timber rapidly. We replace rotted boards, reinforce loose railings, deep clean, and seal decks to last years.",
    img: "/images/svc-deck.jpg",
    alt: "Restored wooden deck, half stained cedar",
    points: [
      "Rotted board replacement with pressure-treated wood",
      "Structural lag screw tightening & handrail stability",
      "Deep cleaning wash & waterproof penetrating stain",
    ],
    time: "Typical: 1–3 Days",
    price: "Square Foot Package",
  },
  {
    id: "flooring",
    cat: "Flooring & Tile",
    title: "Flooring, LVP & Tile Grout Restoration",
    desc: "Repair cracked ceramic tiles, recaulk mildewed tub and shower seams, replace squeaking subfloor patches, or install waterproof Luxury Vinyl Plank (LVP).",
    img: "/images/svc-flooring.jpg",
    alt: "Tradesman installing luxury vinyl plank flooring",
    points: [
      "Single-tile extractions and color-matched regrouting",
      "100% silicone mold-resistant shower re-caulking",
      "T-molding, threshold transitions & quarter-round shoe",
    ],
    time: "Typical: 1–2 Days",
    price: "Custom Scope Quote",
  },
];

const PRICING = [
  {
    title: "Flat-Rate Projects",
    sub: "Ideal for well-defined installations and single-item repair scopes.",
    points: ["Faucets, disposals & toilet replacements", "Ceiling fans, light fixtures & video doorbells", "Drywall patches under 12 inches", "Pre-hung door replacements & locksets"],
    note: "Guaranteed cost cap. If the installation takes us an extra hour due to stubborn fittings, your price never increases.",
  },
  {
    title: "Punch List & Half-Day Passes",
    sub: 'Most popular for "punch lists" — 5–15 small odd repairs around the house.',
    points: ["4-Hour Half-Day Handyman Block", "8-Hour Full-Day Comprehensive Overhaul", "Tackle doors, trim, hanging, patch & paint in one visit", "Fully equipped van with all common fasteners & tools"],
    note: "We knock through your punch list rapidly. No supply run delays — pure productivity.",
  },
  {
    title: "Itemized Written Quotes",
    sub: "For carpentry builds, full-room renovations, or multi-surface repainting.",
    points: ["Material cost transparency with trade receipts", "Clear milestone schedule and estimated completion day", "Free virtual estimate via phone photos", "Zero obligation to proceed after receiving written bid"],
    note: "We never collect final payment until you personally sign off on the craftsmanship walk-through.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Tri-County Field Directory • Montgomery, AL"
          title="Comprehensive Home Repairs & Maintenance Services"
          sub="One reliable crew for all residential trade projects. Master-level carpentry, prompt fixture swaps, clean drywall finishing, and architectural repairs delivered with guaranteed flat rates."
        />

        <section className="stats-band">
          <div className="container stats-grid">
            <div className="stat">
              <span className="stat-num">4.9 ★</span>
              <span className="stat-label">Rated on Google · 14 reviews</span>
            </div>
            <div className="stat">
              <span className="stat-num">9</span>
              <span className="stat-label">Service categories</span>
            </div>
            <div className="stat">
              <span className="stat-num">Free</span>
              <span className="stat-label">Estimates — no obligation</span>
            </div>
            <div className="stat">
              <span className="stat-num">1 crew</span>
              <span className="stat-label">No rushed subcontractors</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Standard Trade &amp; Repair Capabilities</span>
              <h2>Every project, handled by a licensed, tool-prepared crew</h2>
              <p>No rushed subcontractors, no lingering messes, and clean daily wrap-ups.</p>
            </div>
            <div className="detail-grid">
              {SERVICES.map((s) => (
                <article key={s.id} className="detail-card" id={s.id}>
                  <div className="detail-img">
                    <Image src={s.img} alt={s.alt} width={800} height={450} />
                  </div>
                  <div className="detail-body">
                    <span className="eyebrow">{s.cat}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className="check-list">
                      {s.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <div className="detail-meta">
                      <span>{s.time}</span>
                      <span>{s.price}</span>
                    </div>
                    <Link className="btn btn-navy" href="/contact">
                      Request this service →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">No Guesswork • Honest Accounting</span>
              <h2>Transparent pricing philosophy</h2>
              <p>You receive a firm, written quote prior to any work starting.</p>
            </div>
            <div className="cards-3">
              {PRICING.map((p) => (
                <article key={p.title} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.sub}</p>
                  <ul className="check-list">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <p className="card-note">{p.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Uncertain about your repair scope?</span>
              <h2>Schedule an on-site consultation</h2>
              <p>
                Have a custom remodeling idea or multiple repairs throughout your Montgomery property? A master
                tradesman will walk through your home and draft an itemized plan.
              </p>
            </div>
            <div className="hero-actions center">
              <a className="btn btn-amber" href="/contact">
                Book an In-Home Walkthrough →
              </a>
              <a className="btn btn-outline" href={PHONE_HREF}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <CtaBand
          title="Experience stress-free home repairs today"
          sub="Stop putting off home maintenance. Get a precise, zero-obligation estimate from Montgomery's most dependable handyman team."
        />
      </main>
      <SiteFooter />
    </>
  );
}
