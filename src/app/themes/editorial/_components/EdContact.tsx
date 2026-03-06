'use client';

import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";

const serviceOptions = [
  "Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots",
  "Event Photography", "Product Photography", "Commercial Photography", "Other",
];

export default function EdContact() {
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
    background: "#F2F2F2",
    border: "none",
    borderBottom: "2px solid #0A0A0A",
    padding: "10px 0",
    color: "#0A0A0A",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    outline: "none",
    width: "100%",
  };

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* Black header bar */}
      <div style={{ background: "#0A0A0A", padding: "40px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
            Let&apos;s Work Together
          </p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1 }}>
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2">
            <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "18px", color: "#0A0A0A", marginBottom: "24px" }}>GET IN TOUCH</h2>
            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: Mail, text: "danucreations@gmail.com", href: "mailto:danucreations@gmail.com" },
                { icon: Phone, text: "+91 63979 88226", href: "tel:+916397988226" },
                { icon: MapPin, text: "Mohkampur, Dehradun, Uttarakhand 248018" },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={15} style={{ color: "#E63946", marginTop: "2px", flexShrink: 0 }} />
                  {href ? (
                    <a href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#0A0A0A" }}>{text}</a>
                  ) : (
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#0A0A0A" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
            <div style={{ borderTop: "2px solid #0A0A0A", paddingTop: "20px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>Hours</p>
              {[
                { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
                { day: "Sunday", hours: "By Appointment" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between mb-2">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#555" }}>{day}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", color: "#0A0A0A" }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-8" style={{ background: "#F2F2F2" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "64px", color: "#E63946", lineHeight: 1 }}>✓</span>
                <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "28px", color: "#0A0A0A" }}>MESSAGE SENT</h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#555" }}>Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "#E63946", textTransform: "uppercase", letterSpacing: "0.15em", borderBottom: "2px solid #E63946", marginTop: "8px" }}>
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "16px", color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Send a Message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Hemant Dimri" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>Service *</label>
                    <select name="service" required value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", background: "#F2F2F2" }}>
                      <option value="" disabled>Select…</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>Preferred Date</label>
                  <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your vision…" style={{ ...inputStyle, resize: "none" }} />
                </div>
                <button type="submit" disabled={loading} className="flex items-center gap-2 self-start px-8 py-3 font-bold text-sm uppercase tracking-widest transition-colors duration-200" style={{ background: "#E63946", color: "#FFFFFF", fontFamily: "Inter, sans-serif", opacity: loading ? 0.7 : 1 }}>
                  {loading ? "Sending…" : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
