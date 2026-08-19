import { useEffect, useState } from "react";

/**
 * Says plainly that ClerkNova is not released yet.
 *
 * Deliberately a bar across the top of every page rather than a splash screen
 * in front of the site. The whole purpose of the site right now is collecting
 * early-access sign-ups, and a page you have to click past loses the people it
 * is meant to convince. This is impossible to miss and costs nobody a click.
 *
 * Dismissable, remembered for the session only: a visitor who returns next week
 * to check on progress should be told the status again.
 */
export function ComingSoonBar() {
  // Visible by default, on the server and on the first client render alike, so
  // the two agree and there is no mismatch to warn about. Shown in the HTML
  // itself rather than added afterwards: it must not flash in a moment late,
  // and a crawler reading the page should see the status too.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("cn_status_dismissed") === "1") setHidden(true);
  }, []);

  if (hidden) return null;

  return (
    <div className="relative z-[60] bg-[#16130f] text-[#f6f1e9]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-3 gap-y-1 px-6 py-2.5 text-center flex-wrap">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d1a479]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b9895b] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b9895b]" />
          </span>
          In development
        </span>
        <p className="text-sm text-[#e8ded1]">
          ClerkNova is being built and is not publicly available yet. We are
          onboarding a small group of Shopify stores before launch.
        </p>
        <a
          href="#cta"
          className="text-sm font-semibold text-[#d1a479] underline underline-offset-4 hover:text-[#f6f1e9] transition-colors"
        >
          Join the early list
        </a>
      </div>
      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem("cn_status_dismissed", "1");
          setHidden(true);
        }}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-[#b9ad9d] hover:bg-white/10 hover:text-[#f6f1e9] transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path
            d="M1 1l12 12M13 1L1 13"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
