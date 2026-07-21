import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { NovaMark } from "./NovaMark";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 border-b transition-all duration-500 " +
        (scrolled
          ? "border-white/10 bg-[#16130f]/90 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
          : "border-transparent bg-[#16130f]/60 backdrop-blur-md")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="transition-transform duration-500 group-hover:rotate-45">
            <NovaMark size={30} />
          </span>
          <span className="text-[#f6f1e9] font-bold text-lg tracking-tight">
            ClerkNova
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#b9ad9d]">
          {[
            ["Features", "/#features"],
            ["Why ClerkNova", "/#why"],
            ["How it works", "/#how"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative hover:text-[#f6f1e9] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#b9895b] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/#cta"
          className="inline-flex items-center rounded-full bg-[#b9895b] px-5 py-2.5 text-sm font-semibold text-[#16130f] transition-all duration-300 hover:bg-[#d1a479] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(185,137,91,0.7)]"
        >
          Request access
        </a>
      </div>
    </header>
  );
}
