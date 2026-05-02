import { Github, Linkedin, Heart, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-secondary)]">
          Built with{" "}
          <Heart size={12} className="inline text-rose-400 mx-1" />
          by{" "}
          <span className="text-sky-400 font-medium">Zeyad Ashraf</span> — 2025
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Zeyad-Ashraf-77"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400/30 transition-all"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/zeyad-ashraf-859a88249/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400/30 transition-all"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="https://wa.me/201065767412"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400/30 transition-all"
          >
            <Phone size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
