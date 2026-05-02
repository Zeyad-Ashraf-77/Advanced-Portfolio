"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-[var(--border)] py-3"
          : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-[var(--text-secondary)]">&lt;</span>
          <span className="text-sky-400">ZEYAD</span>
          <span className="text-[var(--text-secondary)]"> /&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={cn(
                "hover-underline text-sm font-medium transition-colors",
                active === link.href
                  ? "text-sky-400"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-sky-400/30 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-sky-400" />
            ) : (
              <Moon size={16} className="text-sky-600" />
            )}
          </button>

          <a
            href="#contact"
            onClick={() => handleNav("#contact")}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
          >
            Hire Me
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-[var(--border)] mt-3 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-sm font-medium text-[var(--text-secondary)] hover:text-sky-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
