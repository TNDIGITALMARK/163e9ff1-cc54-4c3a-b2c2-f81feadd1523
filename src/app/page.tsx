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
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--navy-blue-dark))] via-[hsl(var(--navy-blue))] to-[hsl(var(--navy-blue))]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/generated/hero-tow-truck.png"
              alt="Tow truck on Indianapolis street"
              fill
              className="object-cover opacity-30 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-blue-dark))]/95 via-[hsl(var(--navy-blue))]/90 to-[hsl(var(--navy-blue))]/85" />

            {/* Animated gradient orbs for depth */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-[hsl(var(--primary-orange))]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[hsl(var(--icon-blue))]/15 rounded-full blur-3xl animate-pulse animation-delay-200" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[hsl(var(--primary-orange))]/10 border border-[hsl(var(--primary-orange))]/30 text-[hsl(var(--primary-orange))] px-6 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm animate-fade-in">
                <Clock className="h-4 w-4" />
                <span>Available 24/7 • Fast Response</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight animate-fade-in animation-delay-100">
                Indianapolis&apos;s Most
                <span className="block mt-2 bg-gradient-to-r from-[hsl(var(--primary-orange))] via-orange-400 to-[hsl(var(--primary-orange))] bg-clip-text text-transparent">
                  Reliable Towing Service
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-white/80 text-xl md:text-2xl mb-4 leading-relaxed font-medium animate-fade-in animation-delay-200">
                Professional towing and roadside assistance when you need it most
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in animation-delay-300">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <Shield className="h-4 w-4 text-[hsl(var(--primary-orange))]" />
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <Clock className="h-4 w-4 text-[hsl(var(--primary-orange))]" />
                  Fast Response Times
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <DollarSign className="h-4 w-4 text-[hsl(var(--primary-orange))]" />
                  Competitive Rates
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
                <a
                  href="tel:555-8697"
                  className="group relative inline-flex items-center justify-center gap-3 bg-[hsl(var(--primary-orange))] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-2xl hover:shadow-[hsl(var(--primary-orange))]/50 hover:scale-105 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone className="h-6 w-6 animate-pulse" />
                  <span className="relative">Call Now: 555-8697</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[hsl(var(--navy-blue))] transition-all hover:scale-105"
                >
                  <MessageSquare className="h-6 w-6" />
                  <span>Get Free Quote</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in animation-delay-400">
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">15+</div>
                    <div className="text-white/70 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center border-x border-white/20">
                    <div className="text-4xl font-bold text-white mb-1">5K+</div>
                    <div className="text-white/70 text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">24/7</div>
                    <div className="text-white/70 text-sm">Available Always</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[hsl(var(--background-gray))]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-[hsl(var(--primary-orange))]/10 text-[hsl(var(--primary-orange))] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                WHAT WE OFFER
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--text-dark))] mb-6 tracking-tight">
                Our Services
              </h2>
              <p className="text-xl text-[hsl(var(--text-gray))] max-w-2xl mx-auto leading-relaxed">
                Professional towing and transport solutions for every situation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Towing Service */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary-orange))]/30 hover:-translate-y-2 animate-fade-in">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary-orange))] to-orange-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-4">
                  Emergency Towing
                </h3>
                <p className="text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                  Emergency vehicle recovery and transport. Fast response times for breakdowns, accidents, and vehicle relocations.
                </p>
                <Link
                  href="/services#towing"
                  className="inline-flex items-center gap-2 text-[hsl(var(--primary-orange))] font-bold hover:text-[hsl(var(--primary-orange-hover))] transition-colors group"
                >
                  <span>Learn more</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <div className="absolute top-8 right-8 w-24 h-24 bg-[hsl(var(--primary-orange))]/5 rounded-full blur-2xl group-hover:bg-[hsl(var(--primary-orange))]/10 transition-all" />
              </div>

              {/* Vehicle Transport */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[hsl(var(--border))] hover:border-[hsl(var(--icon-blue))]/30 hover:-translate-y-2 animate-fade-in animation-delay-100">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--icon-blue))] to-blue-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Car className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-4">
                  Vehicle Transport
                </h3>
                <p className="text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                  Local & long distance vehicle transport without mileage. Safe and secure transportation for all vehicle types.
                </p>
                <Link
                  href="/services#transport"
                  className="inline-flex items-center gap-2 text-[hsl(var(--icon-blue))] font-bold hover:opacity-80 transition-opacity group"
                >
                  <span>Learn more</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <div className="absolute top-8 right-8 w-24 h-24 bg-[hsl(var(--icon-blue))]/5 rounded-full blur-2xl group-hover:bg-[hsl(var(--icon-blue))]/10 transition-all" />
              </div>

              {/* Roadside Assistance */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[hsl(var(--border))] hover:border-[hsl(var(--navy-blue))]/30 hover:-translate-y-2 animate-fade-in animation-delay-200">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--navy-blue))] to-blue-900 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-4">
                  Roadside Assistance
                </h3>
                <p className="text-[hsl(var(--text-gray))] mb-6 leading-relaxed">
                  Jump-starts, tire changes, and lockout services. We get you back on the road quickly and safely.
                </p>
                <Link
                  href="/services#roadside"
                  className="inline-flex items-center gap-2 text-[hsl(var(--navy-blue))] font-bold hover:opacity-80 transition-opacity group"
                >
                  <span>Learn more</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <div className="absolute top-8 right-8 w-24 h-24 bg-[hsl(var(--navy-blue))]/5 rounded-full blur-2xl group-hover:bg-[hsl(var(--navy-blue))]/10 transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-32 bg-[hsl(var(--background-gray))] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-[hsl(var(--primary-orange))] rounded-full" />
            <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-[hsl(var(--icon-blue))] rounded-full" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block bg-[hsl(var(--icon-blue))]/10 text-[hsl(var(--icon-blue))] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--text-dark))] mb-6 tracking-tight">
                Excellence in Every Detail
              </h2>
              <p className="text-xl text-[hsl(var(--text-gray))] max-w-2xl mx-auto leading-relaxed">
                Trusted by thousands across Indianapolis for reliable, professional towing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in border border-[hsl(var(--border))] hover:border-[hsl(var(--primary-orange))]/30">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary-orange))] to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-3">
                  Fast Response Times
                </h3>
                <p className="text-[hsl(var(--text-gray))] leading-relaxed">
                  Average arrival time under 30 minutes. Quick arrival to get you back on track
                </p>
              </div>

              <div className="group text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in animation-delay-100 border border-[hsl(var(--border))] hover:border-[hsl(var(--icon-blue))]/30">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--icon-blue))] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-3">
                  Licensed & Insured
                </h3>
                <p className="text-[hsl(var(--text-gray))] leading-relaxed">
                  Fully certified and insured for your peace of mind and protection
                </p>
              </div>

              <div className="group text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in animation-delay-200 border border-[hsl(var(--border))] hover:border-[hsl(var(--navy-blue))]/30">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--navy-blue))] to-blue-900 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-3">
                  Competitive Pricing
                </h3>
                <p className="text-[hsl(var(--text-gray))] leading-relaxed">
                  Fair, transparent rates with no hidden fees or surprise charges
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-[hsl(var(--navy-blue-dark))] via-[hsl(var(--navy-blue))] to-[hsl(var(--navy-blue-dark))] overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--primary-orange))]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--icon-blue))]/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[hsl(var(--primary-orange))]/20 border border-[hsl(var(--primary-orange))]/40 text-[hsl(var(--primary-orange))] px-5 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
                <Clock className="h-4 w-4 animate-pulse" />
                <span>AVAILABLE 24/7</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Need Immediate Assistance?
              </h2>
              <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
                One call, and we&apos;ll be on our way. Fast, reliable service across Greater Indianapolis
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
                <a
                  href="tel:555-8697"
                  className="group relative inline-flex items-center justify-center gap-3 bg-[hsl(var(--primary-orange))] text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-2xl hover:shadow-[hsl(var(--primary-orange))]/50 hover:scale-105 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone className="h-7 w-7 animate-pulse" />
                  <span className="relative">Call: 555-8697</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white hover:text-[hsl(var(--navy-blue))] transition-all hover:scale-105"
                >
                  <MessageSquare className="h-7 w-7" />
                  <span>Get Free Quote</span>
                </Link>
              </div>

              {/* Features Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-white/90">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[hsl(var(--primary-orange))]" />
                  </div>
                  <span className="text-sm font-semibold">30 Min Response</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/90">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="h-5 w-5 text-[hsl(var(--primary-orange))]" />
                  </div>
                  <span className="text-sm font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/90">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-[hsl(var(--primary-orange))]" />
                  </div>
                  <span className="text-sm font-semibold">No Hidden Fees</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}