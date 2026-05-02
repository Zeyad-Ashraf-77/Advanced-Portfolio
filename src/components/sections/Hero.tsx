"use client";
import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, ArrowDown, Sparkles, Download, Facebook, Instagram, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

const TYPED_STRINGS = [
  "Full Stack Developer",
  "React Specialist",
  "Next.js Engineer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

function TypedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[currentIndex];

    if (isPausing) {
      const t = setTimeout(() => setIsPausing(false), 1500);
      return () => clearTimeout(t);
    }

    if (!isDeleting && displayed === current) {
      setIsPausing(true);
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setCurrentIndex((i) => (i + 1) % TYPED_STRINGS.length);
      return;
    }

    const speed = isDeleting ? 40 : 80;
    const t = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [displayed, isDeleting, isPausing, currentIndex]);

  return (
    <span className="gradient-text cursor-blink">{displayed}</span>
  );
}

function FloatingOrb({
  size,
  color,
  style,
}: {
  size: number;
  color: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="orb animate-float"
      style={{
        width: size,
        height: size,
        background: color,
        ...style,
      }}
    />
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [showFloatingImage, setShowFloatingImage] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingImage(window.scrollY < 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const orbs = el.querySelectorAll<HTMLElement>("[data-parallax]");
      orbs.forEach((orb) => {
        const speed = parseFloat(orb.dataset.parallax || "1");
        orb.style.transform = `translate(${x * speed * 30}px, ${y * speed * 30}px)`;
      });
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      {/* Background orbs */}
      <FloatingOrb
        size={600}
        color="radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)"
        style={{ top: "10%", left: "-5%", animationDelay: "0s" }}
      />
      <FloatingOrb
        size={500}
        color="radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)"
        style={{ top: "40%", right: "-10%", animationDelay: "2s" }}
      />
      <FloatingOrb
        size={400}
        color="radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)"
        style={{ bottom: "5%", left: "20%", animationDelay: "4s" }}
      />

      {/* Parallax decorative elements */}
      <div
        data-parallax="2"
        className="absolute top-[20%] right-[15%] w-24 h-24 rounded-2xl border border-sky-500/20 glass hidden lg:block transition-transform duration-300"
      />
      <div
        data-parallax="1.5"
        className="absolute bottom-[25%] left-[10%] w-16 h-16 rounded-xl border border-purple-500/20 glass hidden lg:block transition-transform duration-300"
      />
      <div
        data-parallax="3"
        className="absolute top-[60%] right-[8%] w-8 h-8 rounded-lg bg-sky-400/20 hidden lg:block transition-transform duration-300"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sky-500/20 mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-[var(--text-secondary)]">
            Available for new opportunities
          </span>
          <Sparkles size={12} className="text-sky-400" />
        </div>

        {/* Greeting */}
        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-mono text-sky-400 text-sm tracking-widest uppercase">
            Hello, World! 👋 I&apos;m
          </span>
        </div>

        {/* Profile Picture */}
        <div
          className={`mt-6 transition-all duration-700 delay-150 ${
            visible && showFloatingImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } hidden lg:block fixed top-16 left-40 z-20`}
        >
          <div className="w-36 h-36 rounded-xl overflow-hidden border-2 border-sky-400/30 shadow-xl">
            <Image
              src="/ITI.jpg"
              alt="Zeyad Ashraf"
              width={144}
              height={144}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className={`mt-6 font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ fontFamily: "Clash Display, sans-serif" }}
        >
          <span className="text-[var(--text-primary)] rounded-2xl px-5 shadow-2xl shadow-sky-400 ">ZEYAD</span>
          <br />
          <span className="text-stroke text-[var(--text-primary)] opacity-30">
            Ashraf
          </span>
        </h1>

        {/* Typed text */}
        <div
          className={`mt-6 text-2xl md:text-3xl font-medium transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <TypedText />
        </div>

        {/* Tagline */}
        <p
          className={`mt-6 max-w-xl mx-auto text-[var(--text-secondary)] text-lg leading-relaxed transition-all duration-700 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {personalInfo.subtitle}. Based in{" "}
          <span className="text-[var(--text-primary)] font-medium">
            Cairo, Egypt
          </span>{" "}
          — crafting digital experiences that matter.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:scale-105"
          >
            View My Work
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1M5Ct6V1oX5eEclcWGyhlbjLLIfZXLFEv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-full glass border border-[var(--border)] hover:border-sky-400/30 font-semibold transition-all duration-300 hover:scale-105"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Social links */}
        <div
          className={`mt-10 flex items-center justify-center gap-4 transition-all duration-700 delay-[600ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { href: personalInfo.github, Icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: personalInfo.instagram, Icon: Instagram, label: "Instagram" },
            { href: personalInfo.facebook, Icon: Facebook, label: "Facebook" },
            { href: personalInfo.whatsApp, Icon: Phone, label: "WhatsApp" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400/30 hover:scale-110 transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs font-mono text-[var(--text-secondary)] tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-sky-400/50 to-transparent" />
          <ArrowDown size={14} className="text-sky-400 animate-bounce" />
        </div>
      </div>

      {/* Decorative number count */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-6 text-right">
        {[
          { num: "20+", label: "Projects" },
          { num: "3+", label: "Years" },
          { num: "∞", label: "Passion" },
        ].map(({ num, label }) => (
          <div key={label} className="opacity-40 hover:opacity-100 transition-opacity">
            <div className="font-display text-2xl font-bold text-sky-400" style={{ fontFamily: "Clash Display, sans-serif" }}>
              {num}
            </div>
            <div className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
