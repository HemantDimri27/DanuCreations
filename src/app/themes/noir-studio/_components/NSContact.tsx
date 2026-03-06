'use client';

import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import CameraIcon from "./CameraIcon";

const serviceOptions = [
  "Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots",
  "Event Photography", "Product Photography", "Commercial Photography", "Other",
];

export default function NSContact() {
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
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    padding: "10px 0",
    color: "#FFFFFF",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    outline: "none",
    width: "100%",
  };

  const labelStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "9px",
    fontWeight: 600 as const,
    color: "#888888",
    textTransform: "uppercase" as const,
    letterSpacing: "0.25em",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <section className="min-h-screen py-24 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex items-end gap-6">
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.4em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
              Let&apos;s Work Together
            </p>
            <h1 style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1 }}>
              Contact Us
            </h1>
            <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)", marginTop: "16px" }} />
          </div>
          <div className="hidden md:block mb-2">
            <CameraIcon size={48} opacity={0.15} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: Mail, text: "danucreations@gmail.com", href: "mailto:danucreations@gmail.com" },
                { icon: Phone, text: "+91 63979 88226", href: "tel:+916397988226" },
                { icon: MapPin, text: "Mohkampur, Dehradun, Uttarakhand 248018" },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={14} style={{ color: "rgba(255,255,255,0.35)", marginTop: "2px", flexShrink: 0 }} />
                  {href ? (
                    <a href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{text}</a>
                  ) : (
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
              <p style={labelStyle}>Working Hours</p>
              {[
                { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
                { day: "Sunday", hours: "By Appointment" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between mb-2">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888888" }}>{day}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-8" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-5 text-center">
                <CameraIcon size={48} opacity={0.5} />
                <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "32px", color: "#FFFFFF" }}>
                  Message Sent.
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888888" }}>
                  Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                    marginTop: "8px",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "18px", color: "#FFFFFF", marginBottom: "4px" }}>
                  Send a Message
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><label style={labelStyle}>Full Name *</label><input name="name" required value={form.name} onChange={handleChange} placeholder="Hemant Dimri" style={{ ...inputStyle, "::placeholder": { color: "#444" } }} /></div>
                  <div><label style={labelStyle}>Email *</label><input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><label style={labelStyle}>Phone</label><input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle} /></div>
                  <div>
                    <label style={labelStyle}>Service *</label>
                    <select name="service" required value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", background: "transparent" }}>
                      <option value="" disabled style={{ background: "#111" }}>Select…</option>
                      {serviceOptions.map((s) => <option key={s} value={s} style={{ background: "#111" }}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div><label style={labelStyle}>Preferred Date</label><input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} style={inputStyle} /></div>
                <div><label style={labelStyle}>Message *</label><textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your vision…" style={{ ...inputStyle, resize: "none" }} /></div>
                <button
                  type="submit"
                  disabled={loading}
                  className="self-start px-8 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    color: "#FFFFFF",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.25em",
                    opacity: loading ? 0.6 : 1,
                  }}
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
