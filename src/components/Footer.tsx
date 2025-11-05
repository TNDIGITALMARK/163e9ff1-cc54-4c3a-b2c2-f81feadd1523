"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--navy-blue-dark))] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-[hsl(var(--primary-orange))] flex items-center justify-center text-white font-bold text-lg">
                OTF
              </div>
              <div className="text-base font-bold leading-tight">
                OTF Towing & Transport
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted partner for reliable 24/7 towing and transport services in the Greater Indianapolis area.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#towing"
                  className="text-sm text-gray-300 hover:text-[hsl(var(--primary-orange))] transition-colors"
                >
                  Towing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#transport"
                  className="text-sm text-gray-300 hover:text-[hsl(var(--primary-orange))] transition-colors"
                >
                  Vehicle Transport
                </Link>
              </li>
              <li>
                <Link
                  href="/services#roadside"
                  className="text-sm text-gray-300 hover:text-[hsl(var(--primary-orange))] transition-colors"
                >
                  Roadside Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-[hsl(var(--primary-orange))] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[hsl(var(--primary-orange))] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-[hsl(var(--primary-orange))] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-[hsl(var(--primary-orange))]" />
                <div>
                  <div className="text-sm font-semibold">Available 24/7</div>
                  <a
                    href="tel:555-8697"
                    className="text-sm text-gray-300 hover:text-[hsl(var(--primary-orange))] transition-colors"
                  >
                    555-TOWS
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-[hsl(var(--primary-orange))]" />
                <a
                  href="mailto:dispatch@otftowing.com"
                  className="text-sm text-gray-300 hover:text-[hsl(var(--primary-orange))] transition-colors"
                >
                  dispatch@otftowing.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[hsl(var(--primary-orange))]" />
                <address className="text-sm text-gray-300 not-italic">
                  1234 Meridian Street<br />
                  Indianapolis, IN 46204
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} OTF Towing & Transport LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/OTFTowing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[hsl(var(--primary-orange))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://business.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[hsl(var(--primary-orange))] transition-colors"
                aria-label="Google Business"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
