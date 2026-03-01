'use client';

import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Wedding Photography",
  "Portrait Photography",
  "Pre-Wedding Shoots",
  "Event Photography",
  "Product Photography",
  "Commercial Photography",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  eventDate: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  eventDate: "",
  message: "",
};

function ContactUs() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (form.phone && !/^[+\d][\d\s\-]{7,14}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!form.service) newErrors.service = "Please select a service.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate async submission (replace with real API call)
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <section className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Let&apos;s Work Together
          </p>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Contact Us
          </h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-base">
            Have a shoot in mind? Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Left: Info Panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-8 flex flex-col gap-6">
              <h2 className="text-lg font-semibold text-white">Get In Touch</h2>

              <InfoRow icon={Mail} label="Email" href="mailto:danucreations@gmail.com">
                danucreations@gmail.com
              </InfoRow>
              <InfoRow icon={Phone} label="Phone" href="tel:+919876543210">
                +91 98765 43210
              </InfoRow>
              <InfoRow icon={MapPin} label="Location">
                Dehra Dun, Uttarakhand, India
              </InfoRow>

              <hr className="border-neutral-800" />

              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Follow Us</p>
                <div className="flex gap-4">
                  <SocialIcon
                    icon={Instagram}
                    href="https://www.instagram.com/danu.creations"
                    label="Instagram"
                    className="hover:text-pink-400"
                  />
                  <SocialIcon
                    icon={Facebook}
                    href="https://www.facebook.com/danucreations"
                    label="Facebook"
                    className="hover:text-blue-400"
                  />
                  <SocialIcon
                    icon={Youtube}
                    href="https://www.youtube.com/@danucreations"
                    label="YouTube"
                    className="hover:text-red-400"
                  />
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-8">
              <h2 className="text-lg font-semibold text-white mb-4">Working Hours</h2>
              <ul className="space-y-2 text-sm text-neutral-400">
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
                  { day: "Sunday", hours: "By Appointment Only" },
                ].map(({ day, hours }) => (
                  <li key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span className="text-neutral-300">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-8 md:p-10">
            {submitted ? (
              <SuccessBanner onReset={() => setSubmitted(false)} />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <h2 className="text-lg font-semibold text-white mb-1">Send Us a Message</h2>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Full Name *"
                    name="name"
                    type="text"
                    placeholder="Hemant Dimri"
                    value={form.name}
                    error={errors.name}
                    onChange={handleChange}
                  />
                  <Field
                    label="Email Address *"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    error={errors.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    error={errors.phone}
                    onChange={handleChange}
                  />
                  {/* Service select */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-neutral-400">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`rounded-lg px-4 py-2.5 text-sm bg-neutral-800 text-white border ${
                        errors.service ? "border-red-500" : "border-neutral-700"
                      } outline-none focus:border-neutral-500 transition-colors appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-xs text-red-400">{errors.service}</span>
                    )}
                  </div>
                </div>

                {/* Event Date */}
                <Field
                  label="Preferred Event / Shoot Date"
                  name="eventDate"
                  type="date"
                  placeholder=""
                  value={form.eventDate}
                  onChange={handleChange}
                />

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-neutral-400">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your vision, location ideas, or any specific requirements…"
                    value={form.message}
                    onChange={handleChange}
                    className={`rounded-lg px-4 py-2.5 text-sm bg-neutral-800 text-white border ${
                      errors.message ? "border-red-500" : "border-neutral-700"
                    } outline-none focus:border-neutral-500 transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400">{errors.message}</span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-neutral-400">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`rounded-lg px-4 py-2.5 text-sm bg-neutral-800 text-white border ${
          error ? "border-red-500" : "border-neutral-700"
        } outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600`}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <Icon size={16} className="mt-0.5 shrink-0 text-neutral-500" />
      <div>
        <p className="text-xs text-neutral-500 uppercase tracking-wide">{label}</p>
        <p className="text-sm text-neutral-300">{children}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="hover:text-white transition-colors">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function SocialIcon({
  icon: Icon,
  href,
  label,
  className,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`text-neutral-400 transition-colors duration-200 ${className}`}
    >
      <Icon size={20} />
    </a>
  );
}

function SuccessBanner({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-5 text-center">
      <CheckCircle size={56} className="text-green-400" strokeWidth={1.5} />
      <h2 className="text-2xl font-bold text-white">Message Sent!</h2>
      <p className="text-neutral-400 max-w-sm">
        Thank you for reaching out. Our team will get back to you within 24 hours.
      </p>
      <button
        onClick={onReset}
        className="mt-2 px-5 py-2 text-sm rounded-lg border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white transition-colors"
      >
        Send Another Message
      </button>
    </div>
  );
}

export default ContactUs;
