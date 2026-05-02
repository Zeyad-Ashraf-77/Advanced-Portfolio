"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Mail,Phone, Github, Linkedin, Twitter, MapPin, Instagram, Facebook } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <span className="font-mono text-sky-400 text-sm">05.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Contact
          </span>
          <div className="flex-1 h-px bg-[var(--border)] max-w-24" />
        </div>

        {/* Big heading */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="font-display text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            Let&apos;s work{" "}
            <span className="gradient-text">together</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-xl">
            I&apos;m always open to new opportunities, interesting projects, and
            great conversations. Let&apos;s build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Info */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Contact cards */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: "zeyadaltantawy365@gmail.com",
                href: "mailto:zeyadaltantawy365@gmail.com",
              },
              {
                icon: MapPin,
                label: "Location",
                value: personalInfo.location,
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-5 glass rounded-2xl p-4 md:p-5 border border-[var(--border)] hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors flex-shrink-0">
                  <Icon size={20} className="text-sky-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-1">
                    {label}
                  </div>
                  <div className="font-medium text-[var(--text-primary)]">{value}</div>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div>
              <p className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-4">
                Find me on
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { href: personalInfo.github, Icon: Github, label: "GitHub" },
                  { href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn" },
                  { href: personalInfo.whatsApp, Icon: Phone, label: "WhatsApp" },           
                  { href: personalInfo.instagram, Icon: Instagram, label: "Instagram" },
                  { href: personalInfo.facebook, Icon: Facebook, label: "Facebook" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full glass border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-4 md:p-6 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-emerald-400">
                  Currently available
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                I&apos;m open to full-time roles, freelance projects, and interesting
                collaborations. Response time is usually within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 border border-[var(--border)] space-y-5"
            >
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)]" style={{ fontFamily: "Clash Display, sans-serif" }}>
                Send a message
              </h3>

              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    placeholder={placeholder}
                    required
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-sky-400/50 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={5}
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-sky-400/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  status === "sent"
                    ? "bg-emerald-500 text-white"
                    : "bg-sky-500 hover:bg-sky-400 text-white hover:shadow-lg hover:shadow-sky-500/25 hover:scale-[1.01]"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "idle" && (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {status === "sent" && "✓ Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
