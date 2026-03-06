'use client';

import { useState } from "react";
import { Phone, MapPin, Mail, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots",
  "Event Photography", "Product Photography", "Commercial Photography", "Other",
];

export default function DLContact() {
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
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "8px",
    padding: "10px 14px",
    color: "#FFFFFF",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    outline: "none",
    width: "100%",
  };

  return (
    <section className="min-h-screen py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#C9A84C", fontFamily: "Inter, sans-serif" }}>
            Let&apos;s Work Together
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#FFFFFF",
            }}
          >
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-xl p-6 flex flex-col gap-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "18px", color: "#FFFFFF" }}>Get In Touch</h2>
              {[
                { icon: Mail, text: "danucreations@gmail.com", href: "mailto:danucreations@gmail.com" },
                { icon: Phone, text: "+91 63979 88226", href: "tel:+916397988226" },
                { icon: MapPin, text: "Mohkampur, Dehradun, Uttarakhand 248018" },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={15} style={{ color: "#C9A84C", marginTop: "2px", flexShrink: 0 }} />
                  {href ? (
                    <a href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{text}</a>
                  ) : (
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "18px", color: "#FFFFFF", marginBottom: "16px" }}>Working Hours</h2>
              {[
                { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
                { day: "Sunday", hours: "By Appointment" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between mb-2">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{day}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
                <CheckCircle size={48} style={{ color: "#C9A84C" }} strokeWidth={1.5} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "28px", color: "#FFFFFF" }}>Message Sent</h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-2 px-5 py-2 text-sm rounded-lg" style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontFamily: "Inter, sans-serif" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px", color: "#FFFFFF", marginBottom: "4px" }}>Send Us a Message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1.5 text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Hemant Dimri" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1.5 text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>Service *</label>
                    <select name="service" required value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" disabled style={{ background: "#111" }}>Select a service…</option>
                      {serviceOptions.map((s) => <option key={s} value={s} style={{ background: "#111" }}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-1.5 text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>Preferred Date</label>
                  <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label className="block mb-1.5 text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your vision…" style={{ ...inputStyle, resize: "none" }} />
                </div>
                <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200" style={{ background: "#C9A84C", color: "#080808", fontFamily: "Inter, sans-serif", opacity: loading ? 0.7 : 1 }}>
                  {loading ? <><span className="h-4 w-4 rounded-full border-2 border-[#080808] border-t-transparent animate-spin" /> Sending…</> : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
