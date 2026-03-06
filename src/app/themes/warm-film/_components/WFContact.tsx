'use client';

import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const serviceOptions = [
  "Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots",
  "Event Photography", "Product Photography", "Commercial Photography", "Other",
];

export default function WFContact() {
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
    background: "#EDE7DA",
    border: "1px solid rgba(44,24,16,0.15)",
    borderRadius: "4px",
    padding: "10px 14px",
    color: "#2C1810",
    fontFamily: "var(--font-playfair), serif",
    fontSize: "14px",
    outline: "none",
    width: "100%",
  };

  return (
    <section className="min-h-screen py-24 px-6" style={{ background: "#F5F0E8" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <h1
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#C9603A",
            }}
          >
            Get in Touch
          </h1>
          <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "15px", color: "#8B6552", marginTop: "8px" }}>
            Let&apos;s create something beautiful together.
          </p>
          <div style={{ width: "60px", height: "1px", background: "rgba(201,96,58,0.4)", marginTop: "16px" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {[
              { icon: Mail, text: "danucreations@gmail.com", href: "mailto:danucreations@gmail.com" },
              { icon: Phone, text: "+91 63979 88226", href: "tel:+916397988226" },
              { icon: MapPin, text: "Mohkampur, Dehradun, Uttarakhand 248018" },
            ].map(({ icon: Icon, text, href }) => (
              <div key={text} className="flex items-start gap-3">
                <Icon size={15} style={{ color: "#C9603A", marginTop: "2px", flexShrink: 0 }} />
                {href ? (
                  <a href={href} style={{ fontFamily: "var(--font-playfair), serif", fontSize: "14px", color: "#3A2010" }}>{text}</a>
                ) : (
                  <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "14px", color: "#3A2010" }}>{text}</span>
                )}
              </div>
            ))}

            <div style={{ marginTop: "8px" }}>
              <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "12px", color: "#8B6552", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>Hours</p>
              {[
                { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
                { day: "Sunday", hours: "By Appointment" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between mb-2">
                  <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "13px", color: "#8B6552" }}>{day}</span>
                  <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "13px", color: "#2C1810" }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="text-center py-20">
                <p style={{ fontFamily: "var(--font-great-vibes), cursive", fontSize: "48px", color: "#C9603A" }}>Thank You</p>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "15px", color: "#8B6552", marginTop: "8px" }}>
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-sm" style={{ color: "#C9603A", fontFamily: "var(--font-playfair), serif", borderBottom: "1px solid rgba(201,96,58,0.4)" }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={{ fontFamily: "var(--font-playfair), serif", fontSize: "12px", color: "#8B6552", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Hemant Dimri" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-playfair), serif", fontSize: "12px", color: "#8B6552", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={{ fontFamily: "var(--font-playfair), serif", fontSize: "12px", color: "#8B6552", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-playfair), serif", fontSize: "12px", color: "#8B6552", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Service *</label>
                    <select name="service" required value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" disabled>Select…</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-playfair), serif", fontSize: "12px", color: "#8B6552", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Preferred Date</label>
                  <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-playfair), serif", fontSize: "12px", color: "#8B6552", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us your vision…" style={{ ...inputStyle, resize: "none" }} />
                </div>
                <button type="submit" disabled={loading} className="self-start px-8 py-3 text-sm font-medium rounded transition-colors duration-200" style={{ background: "#C9603A", color: "#F5F0E8", fontFamily: "var(--font-playfair), serif", opacity: loading ? 0.7 : 1 }}>
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
