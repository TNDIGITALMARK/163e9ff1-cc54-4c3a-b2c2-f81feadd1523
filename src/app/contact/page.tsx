"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicleType: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! We'll contact you shortly to confirm your quote.");
      setFormData({
        name: "",
        phone: "",
        pickupLocation: "",
        dropoffLocation: "",
        vehicleType: "",
        notes: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-[hsl(var(--navy-blue))] py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Get in touch for immediate assistance or request a quote
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-[hsl(var(--background-gray))]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone */}
              <a
                href="tel:555-8697"
                className="bg-white rounded-[var(--radius)] p-6 shadow-card hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary-orange))] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--text-dark))] mb-1">
                      Call Us 24/7
                    </h3>
                    <p className="text-2xl font-bold text-[hsl(var(--primary-orange))]">
                      555-TOWS
                    </p>
                    <p className="text-sm text-[hsl(var(--text-gray))] mt-1">
                      Tap to call now
                    </p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:dispatch@otftowing.com"
                className="bg-white rounded-[var(--radius)] p-6 shadow-card hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--icon-blue))] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--text-dark))] mb-1">
                      Email Us
                    </h3>
                    <p className="text-base font-semibold text-[hsl(var(--icon-blue))]">
                      dispatch@otftowing.com
                    </p>
                    <p className="text-sm text-[hsl(var(--text-gray))] mt-1">
                      Send us a message
                    </p>
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="bg-white rounded-[var(--radius)] p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--navy-blue))] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--text-dark))] mb-1">
                      Our Location
                    </h3>
                    <address className="text-base text-[hsl(var(--text-gray))] not-italic">
                      1234 Meridian Street<br />
                      Indianapolis, IN 46204
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Quote Request Form */}
              <div>
                <h2 className="text-3xl font-bold text-[hsl(var(--text-dark))] mb-4">
                  Request a Quote
                </h2>
                <p className="text-[hsl(var(--text-gray))] mb-8">
                  Fill out the form below and we'll get back to you with a quote as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[hsl(var(--text-dark))] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--input))] rounded-[var(--radius-input)] focus:outline-none focus:border-[hsl(var(--primary-orange))] focus:ring-2 focus:ring-[hsl(var(--primary-orange))]/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[hsl(var(--text-dark))] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--input))] rounded-[var(--radius-input)] focus:outline-none focus:border-[hsl(var(--primary-orange))] focus:ring-2 focus:ring-[hsl(var(--primary-orange))]/20 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Pickup Location */}
                  <div>
                    <label htmlFor="pickupLocation" className="block text-sm font-semibold text-[hsl(var(--text-dark))] mb-2">
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--input))] rounded-[var(--radius-input)] focus:outline-none focus:border-[hsl(var(--primary-orange))] focus:ring-2 focus:ring-[hsl(var(--primary-orange))]/20 transition-all"
                      placeholder="Street address or intersection"
                    />
                  </div>

                  {/* Dropoff Location */}
                  <div>
                    <label htmlFor="dropoffLocation" className="block text-sm font-semibold text-[hsl(var(--text-dark))] mb-2">
                      Drop-off Location *
                    </label>
                    <input
                      type="text"
                      id="dropoffLocation"
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--input))] rounded-[var(--radius-input)] focus:outline-none focus:border-[hsl(var(--primary-orange))] focus:ring-2 focus:ring-[hsl(var(--primary-orange))]/20 transition-all"
                      placeholder="Destination address"
                    />
                  </div>

                  {/* Vehicle Type */}
                  <div>
                    <label htmlFor="vehicleType" className="block text-sm font-semibold text-[hsl(var(--text-dark))] mb-2">
                      Vehicle Type *
                    </label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--input))] rounded-[var(--radius-input)] focus:outline-none focus:border-[hsl(var(--primary-orange))] focus:ring-2 focus:ring-[hsl(var(--primary-orange))]/20 transition-all"
                    >
                      <option value="">Select vehicle type</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="truck">Truck</option>
                      <option value="van">Van</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-[hsl(var(--text-dark))] mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-[hsl(var(--input))] rounded-[var(--radius-input)] focus:outline-none focus:border-[hsl(var(--primary-orange))] focus:ring-2 focus:ring-[hsl(var(--primary-orange))]/20 transition-all resize-none"
                      placeholder="Tell us any additional details about your request..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[hsl(var(--primary-orange))] text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[hsl(var(--primary-orange-hover))] transition-all shadow-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit Request</span>
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitMessage && (
                    <div className="bg-green-50 border border-green-200 rounded-[var(--radius-input)] p-4">
                      <p className="text-green-800 text-sm font-medium">{submitMessage}</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Google Maps & Business Hours */}
              <div className="space-y-8">
                {/* Map */}
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))] mb-4">
                    Find Us
                  </h3>
                  <div className="rounded-[var(--radius)] overflow-hidden shadow-card">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97491.65018182653!2d-86.23886604785155!3d39.76838370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="OTF Towing & Transport Location"
                    />
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-[hsl(var(--background-gray))] rounded-[var(--radius)] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-8 w-8 text-[hsl(var(--primary-orange))]" />
                    <h3 className="text-2xl font-bold text-[hsl(var(--text-dark))]">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[hsl(var(--text-gray))] font-medium">Monday - Sunday</span>
                      <span className="text-[hsl(var(--text-dark))] font-bold">24/7</span>
                    </div>
                    <div className="pt-4 border-t border-[hsl(var(--border))]">
                      <p className="text-sm text-[hsl(var(--text-gray))]">
                        We're available around the clock, every day of the year, to provide emergency towing
                        and roadside assistance when you need it most.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-12 bg-[hsl(var(--primary-orange))]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Don't wait - call us now for emergency towing services
            </p>
            <a
              href="tel:555-8697"
              className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(var(--primary-orange))] px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[hsl(var(--background-gray))] transition-all shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>Call 555-TOWS Now</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
