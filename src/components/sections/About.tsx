"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, GraduationCap, Code2, Zap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Zap, label: "Performance", desc: "Optimized for speed & UX" },
  { icon: GraduationCap, label: "Always Learning", desc: "Staying up with modern tech" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/[0.02] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <span className="font-mono text-sky-400 text-sm">01.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            About Me
          </span>
          <div className="flex-1 h-px bg-[var(--border)] max-w-24" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2
              className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Passionate about{" "}
              <span className="gradient-text">building things</span>
              <br />
              that live on the web
            </h2>

            <div
              className={`space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>{personalInfo.bio}</p>
              <p>
                My focus is on crafting <span className="text-[var(--text-primary)] font-medium">full-stack applications</span> that balance great
                developer experience with exceptional user experience. I enjoy
                turning complex problems into simple, elegant interfaces.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new frameworks, contributing
                to open source, or constantly leveling up my skills.
              </p>
            </div>

            {/* Location info */}
            <div
              className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <MapPin size={14} className="text-sky-400" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <GraduationCap size={14} className="text-sky-400" />
                {personalInfo.university}
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Main card */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-sky-500/10 rounded-3xl blur-2xl scale-110" />

              <div className="relative gradient-border rounded-2xl p-8">
                {/* Code block style */}
                <div className="font-mono text-sm space-y-1.5">
                  <div className="flex gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="text-violet-400">
                    const{" "}
                    <span className="text-sky-300">developer</span>
                    <span className="text-[var(--text-secondary)]"> = {"{"}</span>
                  </div>
                  <div className="pl-4 text-[var(--text-secondary)]">
                    name: <span className="text-emerald-400">&quot;Zeyad Ashraf&quot;</span>,
                  </div>
                  <div className="pl-4 text-[var(--text-secondary)]">
                    role: <span className="text-emerald-400">&quot;Full Stack Developer(MERN STACK)&quot;</span>,
                  </div>
                  <div className="pl-4 text-[var(--text-secondary)]">
                    location: <span className="text-emerald-400">&quot;Cairo, Egypt&quot;</span>,
                  </div>
                  <div className="pl-4 text-[var(--text-secondary)]">
                    stack: [
                    <span className="text-orange-400">
                      &quot;React&quot;, &quot;Next.js&quot;, &quot;Nest.js&quot;, &quot;Express&quot;, &quot;MongoDB&quot;
                    </span>
                    ],
                  </div>
                  <div className="pl-4 text-[var(--text-secondary)]">
                    available: <span className="text-sky-400">true</span>,
                  </div>
                  <div className="text-[var(--text-secondary)]">{"}"}</div>
                </div>

                {/* Status indicator */}
                <div className="mt-6 pt-6 border-t border-[var(--border)] flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">
                    Open to new opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-mono text-sky-400 border border-sky-500/20 shadow-lg">
              ⭐ TypeScript First
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-mono text-purple-400 border border-purple-500/20 shadow-lg">
              🎨 UI/UX Focused
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div
          className={`mt-20 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group glass rounded-2xl p-6 border border-[var(--border)] hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                <Icon size={20} className="text-sky-400" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">{label}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
