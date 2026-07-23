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
        "sticky top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "border-b border-[#16130f]/8 bg-[#fffdfa]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-[#fffdfa]/60 backdrop-blur-md")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <NovaMark size={44} variant="copper" className="transition-transform duration-500 group-hover:rotate-12" />
          <span className="text-[#16130f] font-bold text-lg tracking-tight">
            ClerkNova
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6b6156]">
          {[
            ["Features", "/#features"],
            ["Why ClerkNova", "/#why"],
            ["How it works", "/#how"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative hover:text-[#16130f] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#b9895b] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/#cta"
          className="inline-flex items-center rounded-full bg-[#16130f] px-5 py-2.5 text-sm font-semibold text-[#fffdfa] transition-all duration-300 hover:bg-[#b9895b] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(185,137,91,0.5)]"
        >
          Request access →
        </a>
      </div>
    </header>
  );
}
