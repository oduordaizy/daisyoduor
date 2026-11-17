"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  return (
    <header className="legacy-header">
      <nav className="legacy-nav" aria-label="Main navigation">
        <Link href="/" className="legacy-wordmark" onClick={closeNav}>
          Daisy Oduor<span>.</span>
        </Link>
        <div className="legacy-desktop-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button
          className="legacy-menu-button"
          onClick={() => setNavOpen((open) => !open)}
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navOpen}
          aria-controls="legacy-mobile-navigation"
        >
          {navOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        {navOpen && (
          <div className="legacy-mobile-links" id="legacy-mobile-navigation">
            <Link href="/" onClick={closeNav}>Home</Link>
            <Link href="/about" onClick={closeNav}>About</Link>
            <Link href="/projects" onClick={closeNav}>Projects</Link>
            <Link href="/services" onClick={closeNav}>Services</Link>
            <Link href="/contact" onClick={closeNav}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}