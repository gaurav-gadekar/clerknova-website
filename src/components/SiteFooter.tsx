import { Link } from "@tanstack/react-router";
import { NovaMark } from "./NovaMark";

export function SiteFooter() {
  return (
    <footer className="bg-[#f6f1e9] border-t border-[#16130f]/8">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <NovaMark size={28} variant="copper" />
          <span className="text-[#16130f] font-bold tracking-tight">ClerkNova</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-6 text-sm text-[#6b6156]">
          <Link to="/privacy" className="hover:text-[#16130f] transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-[#16130f] transition-colors">Terms</Link>
          <a href="mailto:support@clerknova.com" className="hover:text-[#16130f] transition-colors">
            support@clerknova.com
          </a>
        </nav>
        <p className="text-xs text-[#6b6156]">
          © {new Date().getFullYear()} ClerkNova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
