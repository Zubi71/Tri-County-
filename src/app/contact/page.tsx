"use client";

import { useState } from "react";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
} from "../../components/site-chrome";

const SERVICE_OPTIONS = [
  "Architectural Carpentry & Trim",
  "Drywall Repair & Texture Matching",
  "Interior / Exterior Painting",
  "Minor Plumbing & Fixture Upgrades",
  "Lighting, Ceiling Fans & Electrical",
  "Doors, Windows & Weatherization",
  "Deck Repairs & Exterior Maintenance",
  "Multiple Tasks / Full Punch List",
];

const FAQS = [
  {
    q: "Do you charge for estimates?",
    a: "No, our estimates are 100% complimentary with no obligation. For standard repairs, we can often provide a firm quote over the phone or email using your photos and measurements. For complex multi-trade projects or architectural carpentry, we visit your property in person to inspect the area thoroughly at zero charge.",
  },
  {
    q: "How quickly can you start?",
    a: "Most routine handyman jobs and urgent punch lists can be scheduled within 48 to 72 hours of receiving your estimate approval. For sudden plumbing leaks, storm damage, or urgent security issues, we prioritize rapid dispatch within Montgomery and adjacent communities.",
  },
  {
    q: "What if a project takes longer than anticipated?",
    a: "We stand by our upfront fixed-price quotations whenever scope is clearly defined. If an unexpected underlying structural condition arises (such as concealed dry rot behind drywall or outdated hidden wiring), we immediately pause, show you the issue, explain the options, and present a written change order before any additional work or cost is incurred. No surprises on your invoice.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Montgomery, AL and serve the surrounding areas. Send us your address with the estimate request and we will confirm coverage right away.",
  },
  {
    q: "Do you work with property managers or real estate brokers?",
    a: "Yes — we work regularly with local property managers and real estate brokers on multi-unit and commercial projects. Call the field desk to discuss scope and scheduling.",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Direct Contractor Dispatch • Tri-County Service"
          title="Let's Discuss Your Home Repair or Improvement"
          sub="Fast response, transparent rates, uncompromising trade integrity, and no sales fluff. Estimates are 100% free."
        />

        <section className="section">
          <div className="container contact-grid">
            <div className="form-wrap">
              <span className="eyebrow">Project Estimate Request</span>
              <h2>Tell us what needs fixing</h2>
              {sent ? (
                <div className="form-success">
                  <strong>✓ Estimate Request Received!</strong>
                  <p>
                    Thank you — your request is on its way to the team. Expect a call or message back soon to confirm
                    your estimate.
                  </p>
                </div>
              ) : (
                <form
                  className="quote-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const body = encodeURIComponent(
                      `Name: ${data.get("first")} ${data.get("last")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nAddress / Neighborhood: ${data.get("address")}\nPreferred contact: ${data.get("contact-method")}\nService: ${data.get("service")}\nTimeline: ${data.get("timeline")}\n\nProject description:\n${data.get("description")}`
                    );
                    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Estimate Request — Tri County Handyman")}&body=${body}`;
                    setSent(true);
                  }}
                >
                  <div className="form-row">
                    <label>
                      First Name *
                      <input name="first" required placeholder="First name" />
                    </label>
                    <label>
                      Last Name *
                      <input name="last" required placeholder="Last name" />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      Phone Number *
                      <input name="phone" type="tel" required placeholder="Your phone number" />
                    </label>
                    <label>
                      Email Address *
                      <input name="email" type="email" required placeholder="you@email.com" />
                    </label>
                  </div>
                  <label>
                    Street Address / Neighborhood *
                    <input name="address" required placeholder="Street address or neighborhood" />
                  </label>
                  <label>
                    Preferred Contact Method
                    <select name="contact-method">
                      <option>Phone Call</option>
                      <option>SMS / Text Message</option>
                      <option>Email</option>
                    </select>
                  </label>
                  <label>
                    Service Category *
                    <select name="service" required defaultValue="">
                      <option value="" disabled>
                        Select Primary Trade / Task
                      </option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Timeline / Urgency
                    <select name="timeline">
                      <option>Emergency / Rapid (Within 24-48 hrs)</option>
                      <option>Standard (Within this week)</option>
                      <option>Next 1–2 Weeks</option>
                      <option>Planning Phase / Flexible</option>
                    </select>
                  </label>
                  <label>
                    Project Description &amp; Scope *
                    <textarea name="description" rows={5} required placeholder="Describe the repair or project…" />
                  </label>
                  <button className="btn btn-amber" type="submit">
                    Submit Estimate Request →
                  </button>
                  <p className="form-note">Zero commitment. We never sell your personal information.</p>
                </form>
              )}
            </div>

            <aside className="contact-side">
              <div className="info-card">
                <h3>Direct Access — Reach Our Dispatch</h3>
                <p>Prefer to speak directly? Call or shoot us a quick text with photos of your project.</p>
                <a className="info-line" href={PHONE_HREF}>
                  <strong>Direct Phone (Call or Text)</strong>
                  <span>{PHONE_DISPLAY}</span>
                  <em>Fastest for urgent requests</em>
                </a>
                <a className="info-line" href={`mailto:${EMAIL}`}>
                  <strong>Direct Email</strong>
                  <span>{EMAIL}</span>
                  <em>Responses logged quickly</em>
                </a>
              </div>
              <div className="info-card">
                <h3>Operating Hours</h3>
                <p>
                  <strong>Monday – Saturday</strong>
                  <br />
                  7:00 AM – 7:00 PM
                </p>
                <p>
                  <strong>Sunday</strong>
                  <br />
                  Emergency Dispatch Only
                </p>
              </div>
              <div className="info-card">
                <h3>Tri-County Service Area</h3>
                <p>
                  Our fully equipped trade vans are actively deployed across the River Region every weekday. HQ:
                  Montgomery, AL.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Clear Answers</span>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our dispatch process, pricing, and trade standards.</p>
            </div>
            <div className="faq-list">
              {FAQS.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cards-3">
              <article className="card">
                <h3>Clean Job Site Promise</h3>
                <p>Drop cloths, HEPA vacuums, and full daily cleanups. We respect your residence like it is our own.</p>
              </article>
              <article className="card">
                <h3>Transparent Pricing</h3>
                <p>Explicit quotes with no hidden fuel surcharges or surprise billing. You approve every penny before work begins.</p>
              </article>
              <article className="card">
                <h3>Free Estimates</h3>
                <p>Every estimate is complimentary with no obligation — over the phone, by email, or in person.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
