"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, MessageSquare, Truck, Car, Wrench, Clock, Shield, DollarSign } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/generated/hero-tow-truck.png"
              alt="Tow truck on Indianapolis street"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Reliable 24/7 Towing & Transport in Indianapolis
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
                Fast Response Times • Licensed & Insured • Serving Greater Indianapolis Area
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:555-8697"
                  className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary-orange))] text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--navy-blue))] border-2 border-[hsl(var(--navy-blue))] text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[hsl(var(--navy-blue-dark))] transition-all"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Request a Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--text-dark))] mb-4">
                Our Services
              </h2>
              <p className="text-lg text-[hsl(var(--text-gray))] max-w-2xl mx-auto">
                Professional towing and transport solutions for every situation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Towing Service */}
              <div className="bg-white rounded-[var(--radius)] p-8 shadow-card hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mb-6">
                  <Truck className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-4">
                  Towing
                </h3>
                <p className="text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                  Emergency vehicle recovery and transport. Fast response times for breakdowns, accidents, and vehicle relocations.
                </p>
                <Link
                  href="/services#towing"
                  className="inline-flex items-center text-[hsl(var(--primary-orange))] font-semibold hover:text-[hsl(var(--primary-orange-hover))] transition-colors"
                >
                  Learn more →
                </Link>
              </div>

              {/* Vehicle Transport */}
              <div className="bg-white rounded-[var(--radius)] p-8 shadow-card hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mb-6">
                  <Car className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-4">
                  Vehicle Transport
                </h3>
                <p className="text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                  Local & long distance vehicle transport without mileage. Safe and secure transportation for all vehicle types.
                </p>
                <Link
                  href="/services#transport"
                  className="inline-flex items-center text-[hsl(var(--primary-orange))] font-semibold hover:text-[hsl(var(--primary-orange-hover))] transition-colors"
                >
                  Learn more →
                </Link>
              </div>

              {/* Roadside Assistance */}
              <div className="bg-white rounded-[var(--radius)] p-8 shadow-card hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mb-6">
                  <Wrench className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-4">
                  Roadside Assistance
                </h3>
                <p className="text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                  Jump-starts, tire changes, and lockout services. We get you back on the road quickly and safely.
                </p>
                <Link
                  href="/services#roadside"
                  className="inline-flex items-center text-[hsl(var(--primary-orange))] font-semibold hover:text-[hsl(var(--primary-orange-hover))] transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-[hsl(var(--background-gray))]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--text-dark))] mb-4">
                Why Choose Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary-orange))] flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--text-dark))] mb-2">
                  Fast Response Times
                </h3>
                <p className="text-[hsl(var(--text-gray))]">
                  Quick arrival to get you back on track
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary-orange))] flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--text-dark))] mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-[hsl(var(--text-gray))]">
                  Professional service you can trust
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary-orange))] flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--text-dark))] mb-2">
                  Competitive Pricing
                </h3>
                <p className="text-[hsl(var(--text-gray))]">
                  Fair rates with no hidden fees
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[hsl(var(--navy-blue))]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get help now!
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Available 24/7 for all your towing and transport needs in the Indianapolis area
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