"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, MessageSquare, Truck, Car, Wrench, Clock, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-[hsl(var(--navy-blue))] py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive towing and transport solutions for Indianapolis and surrounding areas
            </p>
          </div>
        </section>

        {/* Services Detail Sections */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Towing Service */}
            <div id="towing" className="scroll-mt-20 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mb-6">
                    <Truck className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--text-dark))] mb-4">
                    Towing
                  </h2>
                  <p className="text-lg text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                    Professional emergency vehicle recovery and transport services. We handle breakdowns,
                    accidents, and vehicle relocations with care and efficiency.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">24/7 emergency towing services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Light, medium, and heavy-duty towing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Accident recovery and impound services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Flatbed and wheel-lift towing options</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:555-8697"
                      className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary-orange))] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-button"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call Now</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[hsl(var(--navy-blue))] text-[hsl(var(--navy-blue))] px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[hsl(var(--navy-blue))] hover:text-white transition-all"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Get a Quote</span>
                    </Link>
                  </div>
                </div>
                <div className="bg-[hsl(var(--background-gray))] rounded-[var(--radius)] p-8 lg:p-12">
                  <div className="aspect-square flex items-center justify-center">
                    <Truck className="h-48 w-48 text-[hsl(var(--icon-blue))] opacity-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[hsl(var(--border))] my-16" />

            {/* Vehicle Transport Service */}
            <div id="transport" className="scroll-mt-20 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-[hsl(var(--background-gray))] rounded-[var(--radius)] p-8 lg:p-12">
                    <div className="aspect-square flex items-center justify-center">
                      <Car className="h-48 w-48 text-[hsl(var(--icon-blue))] opacity-20" />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mb-6">
                    <Car className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--text-dark))] mb-4">
                    Vehicle Transport
                  </h2>
                  <p className="text-lg text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                    Safe and secure vehicle transport services for local and long-distance moves.
                    Transport your vehicle without adding mileage or wear and tear.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Local and long-distance transport</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Zero mileage added to your vehicle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Enclosed and open transport options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Fully insured during transport</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:555-8697"
                      className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary-orange))] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-button"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call Now</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[hsl(var(--navy-blue))] text-[hsl(var(--navy-blue))] px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[hsl(var(--navy-blue))] hover:text-white transition-all"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Get a Quote</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[hsl(var(--border))] my-16" />

            {/* Roadside Assistance Service */}
            <div id="roadside" className="scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mb-6">
                    <Wrench className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--text-dark))] mb-4">
                    Roadside Assistance
                  </h2>
                  <p className="text-lg text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                    Quick and reliable roadside assistance to get you back on the road.
                    From jump-starts to tire changes, we're here to help when you need it most.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Battery jump-start services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Flat tire changes and repairs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Vehicle lockout assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--text-gray))]">Emergency fuel delivery</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:555-8697"
                      className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary-orange))] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-button"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call Now</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[hsl(var(--navy-blue))] text-[hsl(var(--navy-blue))] px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[hsl(var(--navy-blue))] hover:text-white transition-all"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Get a Quote</span>
                    </Link>
                  </div>
                </div>
                <div className="bg-[hsl(var(--background-gray))] rounded-[var(--radius)] p-8 lg:p-12">
                  <div className="aspect-square flex items-center justify-center">
                    <Wrench className="h-48 w-48 text-[hsl(var(--icon-blue))] opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Availability Banner */}
        <section className="py-12 bg-[hsl(var(--accent))]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
              <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))]">
                Available 24/7
              </h3>
            </div>
            <p className="text-lg text-[hsl(var(--text-gray))] mb-6">
              Emergency services available around the clock, every day of the year
            </p>
            <a
              href="tel:555-8697"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary-orange))] text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-button"
            >
              <Phone className="h-5 w-5" />
              <span>Call 555-TOWS</span>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[hsl(var(--navy-blue))]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote or immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:555-8697"
                className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary-orange))] text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-white hover:text-[hsl(var(--navy-blue))] transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
