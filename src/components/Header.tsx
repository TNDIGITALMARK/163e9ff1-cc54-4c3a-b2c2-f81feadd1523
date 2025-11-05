"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-[hsl(var(--primary-orange))] flex items-center justify-center text-white font-bold text-lg">
                OTF
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-[hsl(var(--text-dark))] leading-tight">
                  OTF Towing & Transport LLC
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-[hsl(var(--text-dark))] hover:text-[hsl(var(--primary-orange))] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-[hsl(var(--text-dark))] hover:text-[hsl(var(--primary-orange))] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-[hsl(var(--text-dark))] hover:text-[hsl(var(--primary-orange))] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Phone CTA */}
          <a
            href="tel:555-8697"
            className="button-primary hidden md:flex items-center gap-2 bg-[hsl(var(--primary-orange))] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-button hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            <span>555-TOWS</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[hsl(var(--text-dark))]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(var(--border))]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-base font-semibold text-[hsl(var(--text-dark))] hover:text-[hsl(var(--primary-orange))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-base font-semibold text-[hsl(var(--text-dark))] hover:text-[hsl(var(--primary-orange))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold text-[hsl(var(--text-dark))] hover:text-[hsl(var(--primary-orange))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:555-8697"
                className="flex items-center justify-center gap-2 bg-[hsl(var(--primary-orange))] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-button mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>Call 555-TOWS</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
