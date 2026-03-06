'use client';

import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const serviceOptions = [
  "Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots",
  "Event Photography", "Product Photography", "Commercial Photography", "Other",
];

export default function MinContact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", eventDate: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    color: "#1A1A1A",
    background: "#FFFFFF",
    border: "1px solid #E0E0E0",
    borderRadius: "4px",
    padding: "10px 14px",
    outline: "none",
    width: "100%",
  };

  const labelStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    color: "#6B6B6B",
    display: "block",
    marginBottom: "6px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  };

  return (
    <section className="py-24 px-6" style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto">
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#1A1A1A",
          }}
        >
          Get in Touch
        </h1>
        <hr style={{ border: "none", borderTop: "1px solid #E0E0E0", marginBottom: "48px" }} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: Mail, text: "danucreations@gmail.com", href: "mailto:danucreations@gmail.com" },
                { icon: Phone, text: "+91 63979 88226", href: "tel:+916397988226" },
                { icon: MapPin, text: "Mohkampur, Dehradun, Uttarakhand 248018", href: undefined },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={15} style={{ color: "#9B9B9B", marginTop: "2px", flexShrink: 0 }} />
                  {href ? (
                    <a href={href} className="text-sm" style={{ color: "#3A3A3A", fontFamily: "Inter, sans-serif" }}>{text}</a>
                  ) : (
                    <span className="text-sm" style={{ color: "#3A3A3A", fontFamily: "Inter, sans-serif" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#9B9B9B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Working Hours</p>
              {[
                { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
                { day: "Sunday", hours: "By Appointment" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between mb-2">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#6B6B6B" }}>{day}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#1A1A1A" }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="text-center py-20">
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "32px", color: "#1A1A1A" }}>Thank you.</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B6B6B", marginTop: "8px" }}>We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-sm" style={{ color: "#E8B4B8", fontFamily: "Inter, sans-serif", borderBottom: "1px solid #E8B4B8" }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Hemant Dimri" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Service *</label>
                    <select name="service" required value={form.service} onChange={handleChange} style={inputStyle}>
                      <option value="" disabled>Select a service…</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Preferred Date</label>
                  <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your vision…" style={{ ...inputStyle, resize: "none" }} />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="self-start px-8 py-3 text-sm font-medium transition-colors duration-200"
                  style={{ background: "#E8B4B8", color: "#1A1A1A", fontFamily: "Inter, sans-serif", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
