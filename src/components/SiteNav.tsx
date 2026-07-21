import { Link } from "@tanstack/react-router";
import { NovaMark } from "./NovaMark";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#16130f]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <NovaMark size={30} />
          <span className="text-[#f6f1e9] font-bold text-lg tracking-tight">
            ClerkNova
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#b9ad9d]">
          <a href="/#features" className="hover:text-[#f6f1e9] transition-colors">Features</a>
          <a href="/#why" className="hover:text-[#f6f1e9] transition-colors">Why ClerkNova</a>
          <a href="/#how" className="hover:text-[#f6f1e9] transition-colors">How it works</a>
        </nav>
        <a
          href="/#cta"
          className="inline-flex items-center rounded-full bg-[#b9895b] px-5 py-2.5 text-sm font-semibold text-[#16130f] transition-all hover:bg-[#d1a479] hover:shadow-[0_8px_30px_-8px_rgba(185,137,91,0.6)]"
        >
          Request access
        </a>
      </div>
    </header>
  );
}
