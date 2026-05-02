"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/data/portfolio";

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: (typeof projects)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative glass rounded-2xl border border-[var(--border)] overflow-hidden transition-all duration-700 hover:border-sky-400/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      {/* Hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`}
      />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="text-4xl">{project.icon}</div>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded-full">
                <Star size={10} fill="currentColor" />
                Featured
              </span>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-sky-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-sky-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:gradient-text transition-all" style={{ fontFamily: "Clash Display, sans-serif" }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA on hover */}
      <div className={`px-7 pb-5 transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-sky-400 font-medium hover-underline"
        >
          View on GitHub <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<"all" | "featured" | "frontend" | "backend">("all");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const frontendTags = [
    "React",
    "React.js",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "Tailwind",
    "MUI",
    "shadcn/ui",
    "Shadcn UI",
    "Bootstrap",
    "CSS Modules",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
  ];

  const backendTags = [
    "Node.js",
    "Express",
    "NestJS",
    "MongoDB",
    "GraphQL",
    "RESTful API",
    "REST APIs",
    "Socket.io",
    "Redis",
    "Swagger",
    "Firebase",
  ];

  const isFrontend = (project: (typeof projects)[0]) =>
    project.tags.some((tag) => frontendTags.includes(tag));

  const isBackend = (project: (typeof projects)[0]) =>
    project.tags.some((tag) => backendTags.includes(tag));

  const filtered = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "frontend") return isFrontend(project);
    if (filter === "backend") return isBackend(project);
    return true;
  });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <span className="font-mono text-sky-400 text-sm">03.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Projects
          </span>
          <div className="flex-1 h-px bg-[var(--border)] max-w-24" />
        </div>

        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            Things I&apos;ve{" "}
            <span className="gradient-text">built</span>
          </h2>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {([
              { key: "all", label: "All" },
              { key: "featured", label: "Featured" },
              { key: "frontend", label: "Frontend" },
              { key: "backend", label: "Backend" },
            ] as const).map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                  filter === filterOption.key
                    ? "bg-sky-500 text-white"
                    : "glass border border-[var(--border)] text-[var(--text-secondary)] hover:border-sky-400/30"
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Want to see more? Check out my GitHub for additional projects.
          </p>
          <a
            href="https://github.com/Zeyad-Ashraf-77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-[var(--border)] hover:border-sky-400/30 text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
