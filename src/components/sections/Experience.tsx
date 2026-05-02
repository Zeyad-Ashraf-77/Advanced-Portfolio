"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <span className="font-mono text-sky-400 text-sm">04.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Experience
          </span>
          <div className="flex-1 h-px bg-[var(--border)] max-w-24" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div>
            <h2
              className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              My{" "}
              <span className="gradient-text">journey</span>
              <br />
              so far
            </h2>

            <p
              className={`text-[var(--text-secondary)] text-lg mb-8 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A timeline of my professional experience, education, and
              continuous growth as a developer.
            </p>

            {/* Stats row */}
            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { value: "3+", label: "Years coding" },
                { value: "20+", label: "Projects shipped" },
                { value: "100%", label: "Client satisfaction" },
                { value: "∞", label: "Lines of code" },
              ].map(({ value, label }) => (
                <div key={label} className="glass rounded-2xl p-5 border border-[var(--border)]">
                  <div
                    className="font-display text-3xl font-bold gradient-text mb-1"
                    style={{ fontFamily: "Clash Display, sans-serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-sky-400 via-purple-400 to-transparent" />

            <div className="space-y-8">
              {experience.map((item, i) => (
                <div
                  key={item.id}
                  className={`relative flex gap-6 transition-all duration-700 ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${(i + 2) * 150}ms` }}
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full glass border border-[var(--border)] flex items-center justify-center">
                    {item.type === "work" ? (
                      <Briefcase size={18} className="text-sky-400" />
                    ) : (
                      <GraduationCap size={18} className="text-purple-400" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="group glass rounded-2xl p-6 border border-[var(--border)] hover:border-sky-400/20 transition-all duration-300 hover:-translate-y-1 flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)]">
                          {item.role}
                        </h3>
                        <p className="text-sky-400 text-sm font-medium">{item.company}</p>
                      </div>
                      <span className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full border border-[var(--border)]">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((s) => (
                        <span key={s} className="tag-pill">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
