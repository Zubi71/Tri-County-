"use client";

import { useState } from "react";
import Image from "next/image";

export const PHONE_DISPLAY = "(334) 313-7897";
export const PHONE_HREF = "tel:+13343137897";
export const EMAIL = "stevemegerson@yahoo.com";
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            Serving <strong>Montgomery, AL</strong> &amp; surrounding areas
          </span>
          <span>
            Call or text: <strong>{PHONE_DISPLAY}</strong>
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/">
            <Image src="/logo.svg" alt="Tri County Handyman logo" width={48} height={48} />
            <span>
              Tri County<small>Handyman Inc.</small>
            </span>
          </a>
          <nav className="main-nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-amber header-cta" href="/contact">
            Get a Free Estimate
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            ☰
          </button>
        </div>
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Get a Free Estimate →
          </a>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="/" style={{ color: "#fff" }}>
              <Image src="/logo.svg" alt="Tri County Handyman logo" width={48} height={48} />
              <span style={{ color: "#fff" }}>
                Tri County<small style={{ color: "#94a3b8" }}>Handyman Inc.</small>
              </span>
            </a>
            <p>
              Montgomery&apos;s residential repairs, custom carpentry, and prompt maintenance team. Honest rates and
              verified dependability.
            </p>
          </div>
          <div>
            <h4>Quick Navigation</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Popular Services</h4>
            <ul>
              <li>Drywall Repair &amp; Finishing</li>
              <li>Architectural Carpentry &amp; Trim</li>
              <li>Interior &amp; Exterior Painting</li>
              <li>Plumbing Fixtures &amp; Leaks</li>
              <li>Electrical Updates &amp; Lighting</li>
              <li>Doors &amp; Windows</li>
            </ul>
          </div>
          <div>
            <h4>Montgomery HQ</h4>
            <ul>
              <li>Serving Montgomery, AL and surrounding areas</li>
              <li>
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Tri County Handyman Inc. All rights reserved.</span>
          <span>
            <a href="/contact">Instant Quote</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{sub}</p>
        <div className="hero-actions">
          <a className="btn btn-amber" href="/contact">
            Get a Free Estimate →
          </a>
          <a className="btn btn-outline" href={PHONE_HREF}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="cta-band">
      <div className="container">
        <span className="eyebrow light">Ready when you are</span>
        <h2>{title}</h2>
        <p>{sub}</p>
        <a className="btn btn-amber" href="/contact">
          Request Your Free Estimate →
        </a>
        <p className="cta-note">No obligation · Quick response · Free quotes</p>
      </div>
    </section>
  );
}
