"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  CtaBand,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
} from "../../components/site-chrome";

const REVIEWS = [
  {
    name: "Eleanor M.",
    area: "Old Cloverdale, Montgomery",
    date: "Apr 18, 2024",
    service: "Custom Wainscoting & Built-Ins",
    text: "We own a 1930s home in Old Cloverdale and needed crown molding and custom living room built-ins that respected the historic character. Tri County Handyman delivered true perfection. They protected our hardwood floors, leveled tricky uneven plaster joints flawlessly, and finished ahead of schedule. Absolute master tradesmen.",
    reply: "Historic preservation is our passion, Eleanor! Honored to help keep that gorgeous 1930s Cloverdale woodwork standing tall for another generation.",
  },
  {
    name: "Robert & Sarah H.",
    area: "Sturbridge, East Montgomery",
    date: "Apr 12, 2024",
    service: "Ceiling Drywall & Texture Match",
    text: "After an AC condensate drip damaged our upstairs ceiling, two other contractors told us we'd have to retexture the entire room. The crew from Tri County Handyman cut out the bad drywall, feather-blended the knock-down texture, and matched the paint so seamlessly you literally cannot spot the seam in direct sunlight.",
    reply: "Texture matching is pure art and science. Thrilled we saved you the cost and mess of doing the whole ceiling!",
  },
  {
    name: "Dr. Wallace B.",
    area: "Bell Road Corridor",
    date: "Apr 5, 2024",
    service: "Rapid Plumbing & Valve Replacement",
    text: "Main shutoff gate valve failed on a Friday afternoon right as family was arriving from Birmingham. Called their rapid dispatch, and Steve showed up with the exact brass quarter-turn valve and sharkbite fittings within 45 minutes. Upfront flat rate pricing, zero extortionate weekend fees. Lifetime customer here.",
    reply: "Plumbing emergencies do not wait for business hours. Glad we could resolve the valve crisis before your dinner guests arrived!",
  },
  {
    name: "Kristin & Kyle L.",
    area: "Pike Road, AL",
    date: "Mar 29, 2024",
    service: "Custom Deck Stair & Railing Rebuild",
    text: "Our rear porch stringers were starting to rot from wet winter leaves. Tri County Handyman gave us an itemized scope with timber grade options and completed the rebuild with heavy-duty structural anchors. Everything was left vacuumed and clear of nails. Solid, tight, and looks better than the original builder's work.",
    reply: "Safety first on multi-level decks! Enjoy those peaceful Pike Road evenings with complete peace of mind.",
  },
  {
    name: "James 'Chip' Thornton",
    area: "Dalraida, Montgomery",
    date: "Mar 15, 2024",
    service: "Exterior French Door Replacement",
    text: "Previous installer left our patio doors out of plumb, causing sticking and draft leaks every winter. The technician shimmed, sealed, and flash-taped the new double unit with incredible patience. Weatherstripping is airtight and the deadbolts align like butter. Truly superior craftsmanship.",
    reply: "A square door frame makes all the difference in southern humidity. Appreciate the kind words, Chip!",
  },
  {
    name: "Angela & David Lee",
    area: "Halcyon Summit",
    date: "Mar 2, 2024",
    service: "Cabinet Refacing & Interior Painting",
    text: "I was hesitant to hire an independent handyman for high-end kitchen cabinet spray finishing. Tri County Handyman treated our kitchen like an operating room: full plastic containment, HEPA air scrubbers, and impeccable prep. The finish looks factory-baked. No lingering odors and done right on the promised timeline.",
    reply: "Clean containment is the mark of real trade respect. Thank you Angela, that kitchen looks stunning!",
  },
];

const BACKED = [
  { img: "/images/rev-bookshelves.jpg", title: "Custom White Oak Built-In Library", area: "Old Cloverdale Historic District" },
  { img: "/images/rev-ceiling.jpg", title: "Seamless Ceiling Restoration & Texture Blend", area: "Sturbridge Estates" },
  { img: "/images/rev-deck.jpg", title: "Structural Cedar Staircase Rebuild", area: "Pike Road Country Home" },
];

export default function ReviewsPage() {
  const [sent, setSent] = useState(false);
  const [rating, setRating] = useState(5);
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Montgomery Community Trust Report"
          title="Trusted by Montgomery Homeowners"
          sub="Real experiences, authentic craftsmanship, and verified 5-star ratings across Old Cloverdale, Pike Road, Sturbridge, and the wider Tri-County region."
        />

        <section className="stats-band">
          <div className="container stats-grid">
            <div className="stat">
              <span className="stat-num">4.9 / 5.0</span>
              <span className="stat-label">Google rating · 14 reviews</span>
            </div>
            <div className="stat">
              <span className="stat-num">★ ★ ★ ★ ★</span>
              <span className="stat-label">Pristine Tri-County track record</span>
            </div>
            <div className="stat">
              <span className="stat-num">Google Verified</span>
              <span className="stat-label">4.9 star local merchant</span>
            </div>
            <div className="stat">
              <span className="stat-num">Neighborhood Fave</span>
              <span className="stat-label">Top-voted Tri-County pro</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What Montgomery homeowners say</span>
              <h2>Verified client reviews</h2>
              <p>Sorted by most recent date. Every review below carries an owner response.</p>
            </div>
            <div className="review-grid">
              {REVIEWS.map((r) => (
                <article key={r.name} className="review-card">
                  <div className="review-head">
                    <span className="review-avatar">{r.name.charAt(0)}</span>
                    <div>
                      <strong>{r.name}</strong>
                      <span className="review-area">{r.area} · {r.date}</span>
                    </div>
                    <span className="stars">★★★★★</span>
                  </div>
                  <span className="work-cat">{r.service}</span>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <div className="owner-reply">
                    <strong>Owner response</strong>
                    <p>&ldquo;{r.reply}&rdquo;</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Before &amp; After Authenticity</span>
              <h2>Recent work backed by reviews</h2>
            </div>
            <div className="portfolio-grid">
              {BACKED.map((b) => (
                <article key={b.img} className="work-card">
                  <Image src={b.img} alt={b.title} width={800} height={500} />
                  <div className="work-body">
                    <span className="work-cat">{b.area}</span>
                    <h3>{b.title}</h3>
                    <p>Verified project</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Past homeowner experience</span>
              <h2>Had work done recently? Share your experience.</h2>
              <p>We rely on word of mouth from Montgomery neighbors. Your review is read directly by our team.</p>
            </div>
            <div className="form-wrap narrow">
              {sent ? (
                <div className="form-success">
                  <strong>✓ Thank you!</strong>
                  <p>Your review has been sent. Thank you for sharing your experience.</p>
                </div>
              ) : (
                <form
                  className="quote-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const body = encodeURIComponent(
                      `Name: ${data.get("name")}\nNeighborhood: ${data.get("area")}\nProject: ${data.get("project")}\nRating: ${rating} / 5\n\n${data.get("feedback")}`
                    );
                    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Client Review — Tri County Handyman")}&body=${body}`;
                    setSent(true);
                  }}
                >
                  <label>
                    Your Full Name
                    <input name="name" required placeholder="Your name" />
                  </label>
                  <label>
                    Neighborhood / Town
                    <input name="area" required placeholder="e.g. Old Cloverdale" />
                  </label>
                  <label>
                    Project Category
                    <select name="project">
                      <option>Architectural Trim &amp; Carpentry</option>
                      <option>Drywall &amp; Interior Painting</option>
                      <option>Plumbing &amp; Leak Repair</option>
                      <option>Exterior Doors &amp; Decking</option>
                      <option>General Handyman Tasks</option>
                    </select>
                  </label>
                  <label>
                    Overall Rating
                    <span className="star-picker">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button type="button" key={n} className={rating >= n ? "star on" : "star"} onClick={() => setRating(n)} aria-label={`${n} stars`}>
                          ★
                        </button>
                      ))}
                      <span>{rating}.0 Star Experience</span>
                    </span>
                  </label>
                  <label>
                    Project Feedback &amp; Scope Summary
                    <textarea name="feedback" rows={4} required placeholder="Tell us how the work went…" />
                  </label>
                  <button className="btn btn-amber" type="submit">
                    Submit Client Review →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <CtaBand
          title="Ready to experience 5-star handyman service?"
          sub="Put Montgomery's top-rated trade team to work. Send us your project list or emergency repair request today for a prompt, flat-rate quote."
        />
      </main>
      <SiteFooter />
    </>
  );
}
