import Image from "next/image";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  CtaBand,
} from "../../components/site-chrome";

export const metadata = {
  title: "About Us | Tri County Handyman Inc. — Montgomery, AL",
  description:
    "Built on reliability, craftsmanship, and Montgomery trust. Meet the crew, our four pillars, and the standards behind every repair.",
};

const PILLARS = [
  {
    n: "Pillar 01",
    title: "Punctuality & Respect",
    desc: "Your calendar matters. We notify you when our van departs, arrive inside our guaranteed arrival slot, and treat family spaces with quiet professionalism.",
    note: "Real-time dispatch SMS tracker",
  },
  {
    n: "Pillar 02",
    title: "Upfront Transparent Pricing",
    desc: "No hidden travel fees, no phantom hourly inflations, and no invoice surprises. All tasks receive an explicit, itemized scope before tools touch walls.",
    note: "Locked estimates prior to work",
  },
  {
    n: "Pillar 03",
    title: "True American Craftsmanship",
    desc: "We never take shortcuts behind drywall or under subfloors. Mortised joints, plumb framing, tight electrical terminations, and architectural precision.",
    note: "Decades of combined trade experience",
  },
  {
    n: "Pillar 04",
    title: "Clean Worksite Guarantee",
    desc: "Shoe coverings, floor runners, HEPA-filtered vacuum extraction, and meticulous debris removal ensure your home stays spotless after we depart.",
    note: "\u201CCleaner than we found it\u201D rule",
  },
];

const CRAFTS = [
  {
    title: "Finish Carpentry & Millwork",
    desc: "Custom wainscoting, pocket door alignment, historical trim replication, and structural subfloor repairs throughout Montgomery's historic districts.",
    tags: ["Cabinetry", "Door Hangs", "Historic Trim"],
  },
  {
    title: "Electrical & Plumbing",
    desc: "Electrical sub-panel maintenance, whole-home circuit updates, water fixture installations, tankless water heater diagnostics, and smart home lighting integrations.",
    tags: ["Breaker Panels", "Fixture Updates", "Leak Isolation"],
  },
  {
    title: "Drywall & Restoration",
    desc: "Seamless ceiling repairs, acoustic texture removal, flawless Level 5 drywall finishing, and accurate paint-matching across challenging interior spaces.",
    tags: ["Texture Blend", "Ceiling Patches", "Surface Prep"],
  },
];

const TESTIMONIALS = [
  {
    text: "They restored our 1928 wood front door and re-hung two sagging interior doors in Old Cloverdale. No guesswork, no mess, finished precisely on budget.",
    name: "Dr. Eleanor Hayes",
    area: "Old Cloverdale, Montgomery",
  },
  {
    text: "Had an urgent ceiling leak patch and drywall texture blend in Prattville. Caleb and Arturo arrived on time, wore shoe covers, and left the room immaculate.",
    name: "Thomas B.",
    area: "Prattville Homeowner",
  },
  {
    text: "Finding honest contractors in the River Region used to feel impossible. These guys are the gold standard. We don't call anyone else.",
    name: "Sarah & David M.",
    area: "Wetumpka Resident",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Montgomery Master Tradesmen"
          title="Built on Reliability, Craftsmanship, and Montgomery Trust."
          sub="Serving homeowners across Montgomery and the surrounding areas who value straight talk, prompt arrivals, and work performed right the first time."
        />

        <section className="section">
          <div className="container about-split">
            <div className="about-img">
              <Image src="/images/hero-handyman.jpg" alt="Handyman at work in a Montgomery home" width={900} height={650} />
            </div>
            <div>
              <span className="eyebrow">Our Founding Principle</span>
              <h2>Why we named it Tri County Handyman</h2>
              <p>
                After watching River Region neighbors suffer through endless broken contractor promises — unreturned
                calls, mysterious quote markups, and rushed half-done jobs — we laid down a clear standard: create a
                home repair service so transparent, disciplined, and skilled that hiring them requires zero hesitation.
              </p>
              <p>
                When a plumbing valve leaks under your subfloor or historical moulding needs seamless custom millwork,
                you shouldn&apos;t have to spend your weekend micromanaging a crew or dreading the final bill. We treat
                every residence with the same structural scrutiny we bring to our personal workshops.
              </p>
              <p className="quote-line">&ldquo;Never make homeowners second-guess quality.&rdquo;</p>
              <ul className="check-list">
                <li>Arrival Precision — exact 1-hour window</li>
                <li>Pricing Clarity — written upfront</li>
                <li>4.9 ★ rated on Google — 14 reviews</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">The Four Pillars</span>
              <h2>The non-negotiable standards of our crew</h2>
              <p>Every technician dispatched to your home adheres strictly to four operational doctrines.</p>
            </div>
            <div className="cards-3">
              {PILLARS.map((p) => (
                <article key={p.n} className="card">
                  <span className="card-tag">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <p className="card-note">✓ {p.note}</p>
                </article>
              ))}
              <article className="card">
                <span className="card-tag">Our Promise</span>
                <h3>Free estimates, always</h3>
                <p>
                  We arrive on time, protect your hardwood floors with heavy canvas drops, quote an honest flat rate
                  before turning a screw, and vacuum every wood shaving before we shake your hand.
                </p>
                <p className="card-note">✓ No obligation, ever</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">The Craftsmen In Your Home</span>
              <h2>Experienced masters, never subcontracted</h2>
              <p>We do not farm your projects out to nameless third parties. Meet the dedicated career tradesmen who uphold our name.</p>
            </div>
            <div className="cards-3">
              {CRAFTS.map((c) => (
                <article key={c.title} className="card">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="tag-row">
                    {c.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Our Regional Roots</span>
              <h2>Proudly anchored in the Montgomery community</h2>
              <p>
                We are not an out-of-state franchise or an anonymous app algorithm. We are Montgomery residents who
                shop local, support youth leagues, and volunteer trade hours to assist elderly homeowners in the River
                Region.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-num">4.9 ★</span>
                <span className="stat-label">Google rating · 14 reviews</span>
              </div>
              <div className="stat">
                <span className="stat-num">9</span>
                <span className="stat-label">Service categories</span>
              </div>
              <div className="stat">
                <span className="stat-num">Free</span>
                <span className="stat-label">Estimates, no obligation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What Montgomery homeowners say</span>
              <h2>Trusted by our neighbors</h2>
            </div>
            <div className="testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="testimonial-card">
                  <span className="stars">★★★★★</span>
                  <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.area}</span>
                  </figcaption>
                </figure>
              ))}
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
