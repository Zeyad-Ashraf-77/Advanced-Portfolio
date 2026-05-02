"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";

function SkillBar({ name, level, delay, visible }: {
  name: string;
  level: number;
  delay: number;
  visible: boolean;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [visible, level, delay]);

  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-sky-400 transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-sky-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill bg-gradient-to-r from-sky-500 to-cyan-400"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const current = skills[activeTab];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <span className="font-mono text-sky-400 text-sm">02.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Skills
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
              Technologies I{" "}
              <span className="gradient-text">work with</span>
            </h2>

            <p
              className={`text-[var(--text-secondary)] text-lg mb-10 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Focused on the modern JavaScript ecosystem — from pixel-perfect
              frontends to scalable backend APIs.
            </p>

            {/* Category tabs */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {skills.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                      : "glass border border-[var(--border)] text-[var(--text-secondary)] hover:border-sky-400/30 hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div
              className={`mt-10 space-y-6 transition-all duration-700 delay-400 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {current.items.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 100 + 600}
                  visible={visible}
                />
              ))}
            </div>
          </div>

          {/* Right: visual grid */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {skills.flatMap((cat) =>
                cat.items.map((skill) => ({
                  name: skill.name,
                  level: skill.level,
                  color: cat.color,
                  category: cat.category,
                }))
              )
                .sort((a, b) => b.level - a.level)
                .slice(0, 8)
                .map((skill, i) => (
                  <div
                    key={skill.name}
                    className="group glass rounded-2xl p-5 border border-[var(--border)] hover:border-sky-400/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div
                      className={`text-xs font-mono mb-2 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                    >
                      {skill.category}
                    </div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm mb-3">
                      {skill.name}
                    </div>
                    <div className="skill-bar mb-1">
                      <div
                        className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
                        style={{ width: visible ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                    <div className="text-right text-xs font-mono text-[var(--text-secondary)]">
                      {skill.level}%
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Tech cloud */}
        <div
          className={`mt-20 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-8">
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux", "Socket.io", "JWT", "REST APIs", "Webpack",
              "ESLint", "Prettier", "SASS", "Bootstrap", "Axios", "Zustand",
            ].map((tech) => (
              <span key={tech} className="tag-pill hover:scale-105 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
