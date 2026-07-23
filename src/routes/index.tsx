import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { NovaMark } from "../components/NovaMark";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClerkNova — The AI employee that sells, supports & answers the phone" },
      {
        name: "description",
        content:
          "ClerkNova is an AI sales & support agent for Shopify. It works website chat, WhatsApp, and phone calls — recommends products, closes sales, handles returns, and shows the profit it makes.",
      },
      { property: "og:title", content: "ClerkNova — The AI employee that sells, supports & answers the phone" },
      {
        property: "og:description",
        content: "ClerkNova is an AI sales & support agent for Shopify. It works website chat, WhatsApp, and phone calls — recommends products, closes sales, handles returns, and shows the profit it makes.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ClerkNova — The AI employee that sells, supports & answers the phone" },
      {
        name: "twitter:description",
        content: "ClerkNova is an AI sales & support agent for Shopify. It works website chat, WhatsApp, and phone calls — recommends products, closes sales, handles returns, and shows the profit it makes.",
      },
    ],
  }),
  component: HomePage,
});

/* --------------------------------- Icons --------------------------------- */

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const CartIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>);
const ChatIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M21 12a8 8 0 1 1-3.2-6.4L21 4l-1 4a8 8 0 0 1 1 4Z"/></svg>);
const PhoneIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>);
const ReturnIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 5 5v6"/></svg>);
const ChartIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M4 20V6"/><path d="M10 20V10"/><path d="M16 20v-6"/><path d="M22 20H2"/></svg>);
const LeadIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M12 3 4 8v6c0 4 3.5 6.5 8 7 4.5-.5 8-3 8-7V8Z"/><path d="m9 12 2 2 4-4"/></svg>);

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#b9895b]/12 text-[#9a6f45] transition-all duration-500 group-hover:bg-[#b9895b] group-hover:text-[#fffdfa] group-hover:-rotate-6">
      {children}
    </div>
  );
}

function Check() {
  return (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#b9895b]/15 text-[#9a6f45]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12 5 5L20 7" />
      </svg>
    </span>
  );
}

/* ---------------------------------- Page --------------------------------- */

function HomePage() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#fffdfa] text-[#16130f]">
      <SiteNav />

      {/* HERO — light, split, live chat mock right */}
      <section className="relative overflow-hidden bg-[#fffdfa]">
        {/* soft warm blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl aurora"
            style={{ background: "radial-gradient(circle, rgba(185,137,91,0.18), transparent 70%)" }}
          />
          <div
            className="absolute top-40 -right-24 h-[520px] w-[520px] rounded-full blur-3xl aurora"
            style={{ background: "radial-gradient(circle, rgba(209,164,121,0.18), transparent 70%)", animationDelay: "-8s" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(22,19,15,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,19,15,0.05) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pt-20 pb-24 md:pt-28 md:pb-32 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
          <div>
            <span className="fade-up inline-flex items-center gap-2 rounded-full border border-[#16130f]/10 bg-[#fffdfa] px-3.5 py-1.5 text-xs font-medium text-[#6b6156] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b9895b] blink" />
              Now onboarding early Shopify partners
            </span>

            <h1 className="fade-up mt-6 text-[2.5rem] font-extrabold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.25rem]" style={{ animationDelay: "0.08s" }}>
              The AI employee that{" "}
              <span className="relative inline-block text-[#b9895b]">
                sells, supports
                <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 h-2 w-full" preserveAspectRatio="none">
                  <path d="M2 8 Q 75 2, 150 6 T 298 5" fill="none" stroke="#b9895b" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
                </svg>
              </span>{" "}
              & answers the phone.
            </h1>

            <p className="fade-up mt-6 max-w-xl text-lg text-[#6b6156] md:text-xl" style={{ animationDelay: "0.18s" }}>
              Plug ClerkNova into your Shopify store and it works website chat,
              WhatsApp, and real phone calls — recommending products, closing
              sales, and handling returns like your best team member.
            </p>

            <div className="fade-up mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.28s" }}>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-[#16130f] px-6 py-3.5 text-sm font-semibold text-[#fffdfa] transition-all duration-300 hover:bg-[#b9895b] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(185,137,91,0.55)]"
              >
                Request early access
                <span aria-hidden>→</span>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-[#16130f]/12 bg-[#fffdfa] px-6 py-3.5 text-sm font-semibold text-[#16130f] transition-all duration-300 hover:bg-[#f6f1e9] hover:-translate-y-0.5"
              >
                See how it works
              </a>
            </div>

            <div className="fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#6b6156]" style={{ animationDelay: "0.38s" }}>
              <span className="flex items-center gap-1.5"><span className="text-[#b9895b]">✓</span> No code</span>
              <span className="flex items-center gap-1.5"><span className="text-[#b9895b]">✓</span> Live in under 5 minutes</span>
              <span className="flex items-center gap-1.5"><span className="text-[#b9895b]">✓</span> Works with your existing stack</span>
            </div>
          </div>

          <div className="fade-up relative" style={{ animationDelay: "0.2s" }}>
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] blur-2xl"
              style={{ background: "radial-gradient(60% 60% at 60% 40%, rgba(185,137,91,0.25), transparent 70%)" }}
            />
            <LiveChatMock />
          </div>
        </div>

        {/* logo strip / channels */}
        <div className="relative border-y border-[#16130f]/8 bg-[#f6f1e9]/50">
          <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.22em] text-[#6b6156]">
            <span className="text-[#9a6f45] font-semibold">Works across</span>
            {["Website chat", "WhatsApp", "Phone calls", "Shopify orders", "Returns", "Profit dashboard"].map((s, i) => (
              <span key={s} className="flex items-center gap-10">
                <span>{s}</span>
                {i < 5 && <span className="text-[#b9895b]/50">✦</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-[#fffdfa] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">Features</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              One AI agent doing the work of a whole team.
            </h2>
            <p className="mt-4 text-lg text-[#6b6156]">
              Not another chatbot. ClerkNova acts on your real store — products,
              inventory, orders — and turns conversations into revenue.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: <CartIcon />, t: "Sells on your storefront", d: "Recommends the right product, answers questions, and drops a checkout link — right inside the chat." },
              { i: <ChatIcon />, t: "Runs your WhatsApp shop", d: "Native WhatsApp commerce with product cards, order tracking, and pay-in-chat that customers actually use." },
              { i: <PhoneIcon />, t: "Answers the phone like a human", d: "Real voice calls, real conversations. Places orders, answers questions, escalates cleanly when needed." },
              { i: <ReturnIcon />, t: "Handles returns by the book", d: "Follows your policy line by line — approves, rejects, or asks for details. No angry tickets in your inbox." },
              { i: <ChartIcon />, t: "Shows the profit it makes", d: "A profit dashboard that ties every conversation to real revenue. Know exactly what ClerkNova earned this week." },
              { i: <LeadIcon />, t: "Captures leads & recovers carts", d: "Follows up on abandoned carts across channels and turns curious visitors into buyers with the right nudge." },
            ].map((f, i) => (
              <div
                key={f.t}
                className="reveal group relative overflow-hidden rounded-2xl border border-[#16130f]/8 bg-[#fffdfa] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#b9895b]/40 hover:shadow-[0_25px_60px_-25px_rgba(22,19,15,0.25)]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <IconTile>{f.i}</IconTile>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b6156]">{f.d}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-4 right-5 text-[#b9895b] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="bg-[#f6f1e9] py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">Why ClerkNova</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              An AI store employee — not a chatbot that charges per answer.
            </h2>
            <p className="mt-5 text-lg text-[#6b6156]">
              Chatbots deflect tickets. ClerkNova sells product, picks up the
              phone, and drives revenue you can measure.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                ["Voice & phone calls", "A real AI phone line, not a menu tree. Handles inbound calls end-to-end."],
                ["Native WhatsApp commerce", "Product cards, order updates, and payment links right inside WhatsApp."],
                ["Profit intelligence", "Every reply tied to revenue and margin. See exactly what it earned."],
                ["Acts on your real store", "Reads live inventory, prices, and orders — never invents products."],
              ].map(([t, d], i) => (
                <li key={t} className="reveal flex items-start gap-3" style={{ transitionDelay: `${i * 90}ms` }}>
                  <Check />
                  <div>
                    <p className="font-semibold text-[#16130f]">{t}</p>
                    <p className="text-sm text-[#6b6156]">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <ChannelStack />
          </div>
        </div>
      </section>

      {/* PROFIT DASHBOARD */}
      <ProfitSection />

      {/* HOW */}
      <section id="how" className="bg-[#f6f1e9]/60 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">How it works</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              Live in minutes. No flow-builder required.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Install & connect", "One-click Shopify install. ClerkNova reads your products, policies, and past orders."],
              ["02", "Connect WhatsApp", "Link your business number with a single click. Meta-verified in the same flow."],
              ["03", "Set your rules", "Tell it your voice, your return policy, and what it can promise. That's it."],
            ].map(([n, t, d], i) => (
              <div
                key={n}
                className="reveal group relative rounded-2xl border border-[#16130f]/8 bg-[#fffdfa] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#b9895b]/40 hover:shadow-[0_25px_60px_-25px_rgba(22,19,15,0.2)]"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#16130f] text-sm font-bold text-[#fffdfa]">
                    {n}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">Step</span>
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{t}</h3>
                <p className="mt-2 text-sm text-[#6b6156]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#fffdfa] py-20 border-y border-[#16130f]/8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
          {[
            ["3", "channels, one AI brain"],
            ["24/7", "always on"],
            ["<5 min", "to go live"],
            ["0", "flows to build by hand"],
          ].map(([n, l], i) => (
            <div key={l} className="reveal text-center md:text-left" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-4xl font-extrabold tracking-tight text-[#b9895b] md:text-5xl">
                {n}
              </div>
              <div className="mt-2 text-sm text-[#6b6156]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#fffdfa] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">From the pilots</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Early stores. Real revenue.
            </h2>
          </div>
        </div>
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#fffdfa] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#fffdfa] to-transparent" />
          <div className="flex marquee-fast whitespace-nowrap gap-6">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex shrink-0 gap-6">
                {[
                  ["Aurora Boards", "\"ClerkNova closed 38 sales on WhatsApp in its first week. Our team hasn't answered a single tracking DM since.\""],
                  ["Ember Coffee Co.", "\"It picks up the phone at 2am and takes wholesale orders. That is not a chatbot — that is an employee.\""],
                  ["Northwind Apparel", "\"Return tickets down 71%. And I finally know which conversations actually make money.\""],
                  ["Solace Skincare", "\"Recommends the right product every time. Our AOV went up $14 in a month.\""],
                ].map(([name, quote]) => (
                  <figure
                    key={name + dup}
                    className="w-[360px] shrink-0 rounded-2xl border border-[#16130f]/8 bg-[#f6f1e9]/50 p-6 whitespace-normal transition-colors hover:bg-[#f6f1e9]"
                  >
                    <blockquote className="text-sm leading-relaxed text-[#16130f]">{quote}</blockquote>
                    <figcaption className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#9a6f45]">
                      <span className="h-1 w-6 rounded-full bg-[#b9895b]" /> {name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA — light warm */}
      <section id="cta" className="relative overflow-hidden bg-[#f6f1e9] py-28 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 40%, rgba(185,137,91,0.25) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center reveal">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[#16130f]">
            <NovaMark size={40} variant="white" />
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Give every store the team{" "}
            <span className="text-[#b9895b]">only giants</span> could afford.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#6b6156]">
            Join the early partner stores using ClerkNova to sell, support, and
            answer the phone — around the clock.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:support@clerknova.com?subject=Early%20access"
              className="inline-flex items-center gap-2 rounded-full bg-[#16130f] px-7 py-4 text-sm font-semibold text-[#fffdfa] transition-all duration-300 hover:bg-[#b9895b] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(185,137,91,0.55)]"
            >
              Request early access →
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-[#16130f]/15 bg-[#fffdfa] px-7 py-4 text-sm font-semibold text-[#16130f] transition-all duration-300 hover:bg-[#fffdfa]/80 hover:-translate-y-0.5"
            >
              Explore features
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ------------------------------- Sub-parts ------------------------------- */

const CHAT_SCRIPT = [
  { who: "them" as const, text: "Hey — looking for an all-mountain snowboard, size 156. Under $600?" },
  { who: "us" as const, text: "Got you. Based on your height and what's in stock, two solid picks:" },
  { who: "cards" as const, text: "" },
  { who: "them" as const, text: "The Aurora, please. Ship to Denver?" },
  { who: "us" as const, text: "Perfect. Free 2-day shipping to Denver — here's your checkout." },
];

function LiveChatMock() {
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (step >= CHAT_SCRIPT.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), 1500);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="relative rounded-[2rem] border border-[#16130f]/8 bg-[#fffdfa] p-4 shadow-[0_40px_80px_-30px_rgba(22,19,15,0.25)] md:p-5">
      {/* header */}
      <div className="flex items-center gap-2.5 rounded-2xl bg-[#f6f1e9]/70 px-4 py-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#16130f]">
          <NovaMark size={24} variant="white" />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-[#16130f]">ClerkNova</span>
          <span className="flex items-center gap-1 text-[10px] text-[#6b6156]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 blink" /> online · replies in seconds
          </span>
        </div>
        <span className="ml-auto text-[10px] uppercase tracking-widest text-[#b9895b] font-semibold">Live</span>
      </div>

      {/* messages */}
      <div className="mt-4 space-y-3 px-1 text-sm min-h-[360px]">
        {CHAT_SCRIPT.slice(0, step).map((m, idx) => {
          if (m.who === "cards") {
            return (
              <div key={idx} className="bubble-in grid gap-2 sm:grid-cols-2">
                <ProductCard name="Aurora All-Mountain 156" price="$549" tag="In stock" />
                <ProductCard name="Ember Freeride 156" price="$589" tag="2 left" />
              </div>
            );
          }
          return <Bubble key={idx} who={m.who}>{m.text}</Bubble>;
        })}
        {step < CHAT_SCRIPT.length && <TypingDots />}
        {step >= CHAT_SCRIPT.length && (
          <div className="bubble-in flex justify-start">
            <a
              href="#cta"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#b9895b] px-4 py-2 text-xs font-semibold text-[#16130f] transition-colors hover:bg-[#d1a479]"
            >
              Open checkout · $549 →
            </a>
          </div>
        )}
      </div>

      {/* input mock */}
      <div className="mt-4 flex items-center gap-2 rounded-2xl border border-[#16130f]/8 bg-[#f6f1e9]/40 px-4 py-3">
        <span className="text-xs text-[#6b6156]">Ask ClerkNova anything…</span>
        <button
          onClick={() => setStep(1)}
          className="ml-auto text-[11px] font-semibold text-[#9a6f45] hover:text-[#b9895b] transition-colors"
        >
          ↻ Replay
        </button>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-[#f6f1e9] px-3 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#b9895b] blink" style={{ animationDelay: "0s" }} />
        <span className="h-1.5 w-1.5 rounded-full bg-[#b9895b] blink" style={{ animationDelay: "0.2s" }} />
        <span className="h-1.5 w-1.5 rounded-full bg-[#b9895b] blink" style={{ animationDelay: "0.4s" }} />
      </div>
    </div>
  );
}

function Bubble({ who, children }: { who: "us" | "them"; children: React.ReactNode }) {
  const mine = who === "us";
  return (
    <div className={mine ? "flex justify-start" : "flex justify-end"}>
      <div
        className={
          "bubble-in max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed " +
          (mine
            ? "bg-[#16130f] text-[#f6f1e9] rounded-tl-sm"
            : "bg-[#f6f1e9] text-[#16130f] rounded-tr-sm")
        }
      >
        {children}
      </div>
    </div>
  );
}

function ProductCard({ name, price, tag }: { name: string; price: string; tag: string }) {
  return (
    <div className="group rounded-xl border border-[#16130f]/8 bg-[#fffdfa] p-3 transition-all duration-300 hover:border-[#b9895b]/50 hover:-translate-y-0.5">
      <div
        className="mb-3 h-20 rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ background: "linear-gradient(135deg, #f6d8b5 0%, #d1a479 55%, #b9895b 100%)" }}
      />
      <p className="text-xs font-semibold text-[#16130f]">{name}</p>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm font-bold text-[#9a6f45]">{price}</span>
        <span className="text-[10px] uppercase tracking-wider text-[#6b6156]">{tag}</span>
      </div>
    </div>
  );
}

/* ------------------------------ Channel Stack ---------------------------- */

function ChannelStack() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] blur-2xl"
        style={{ background: "radial-gradient(60% 60% at 40% 60%, rgba(185,137,91,0.2), transparent 70%)" }}
      />
      <div className="relative space-y-4">
        {/* WhatsApp */}
        <div className="rounded-2xl border border-[#16130f]/8 bg-[#fffdfa] p-5 shadow-[0_20px_50px_-25px_rgba(22,19,15,0.2)] transition-transform duration-500 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-700">
              <ChatIcon />
            </span>
            <div>
              <p className="text-sm font-bold">WhatsApp</p>
              <p className="text-[11px] text-[#6b6156]">+1 (415) 555 · Business API</p>
            </div>
            <span className="ml-auto rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
              12 chats
            </span>
          </div>
          <div className="mt-3 rounded-xl bg-[#f6f1e9]/60 px-3 py-2 text-xs text-[#16130f]">
            "Hi! Do you ship to Berlin?" — replied · sale $84
          </div>
        </div>

        {/* Phone call */}
        <div className="rounded-2xl border border-[#16130f]/8 bg-[#fffdfa] p-5 shadow-[0_20px_50px_-25px_rgba(22,19,15,0.2)] transition-transform duration-500 hover:-translate-y-1 md:ml-8">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#b9895b]/15 text-[#9a6f45]">
              <PhoneIcon />
            </span>
            <div>
              <p className="text-sm font-bold">Phone call · inbound</p>
              <p className="text-[11px] text-[#6b6156]">02:14 · caller from Denver</p>
            </div>
            <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-[#9a6f45]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b9895b] blink" /> live
            </span>
          </div>
          <div className="mt-3 flex items-center gap-1 h-8">
            {[3, 6, 4, 8, 5, 9, 4, 7, 5, 8, 3, 6, 4, 7, 5, 6].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-[#b9895b]/70 bar-grow"
                style={{ height: `${h * 3}px`, animationDelay: `${i * 60}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Website chat */}
        <div className="rounded-2xl border border-[#16130f]/8 bg-[#fffdfa] p-5 shadow-[0_20px_50px_-25px_rgba(22,19,15,0.2)] transition-transform duration-500 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#16130f] text-[#fffdfa]">
              <CartIcon />
            </span>
            <div>
              <p className="text-sm font-bold">Website chat</p>
              <p className="text-[11px] text-[#6b6156]">clerknova.shop · returning customer</p>
            </div>
            <span className="ml-auto rounded-full bg-[#16130f] px-2.5 py-1 text-[10px] font-semibold text-[#fffdfa]">
              checkout sent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Profit Section ---------------------------- */

function ProfitSection() {
  const bars = useMemo(() => [42, 58, 34, 71, 65, 88, 96], []);
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <section className="bg-[#fffdfa] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Dashboard mock */}
        <div className="reveal order-2 lg:order-1">
          <div className="relative rounded-3xl border border-[#16130f]/8 bg-[#fffdfa] p-6 shadow-[0_40px_80px_-30px_rgba(22,19,15,0.2)] md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6b6156]">Revenue by ClerkNova · 7d</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#16130f]">$18,420</p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700">
                +38% WoW
              </span>
            </div>

            <div className="mt-8 flex h-40 items-end gap-3">
              {bars.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-md bar-grow"
                    style={{
                      height: `${h}%`,
                      background: "linear-gradient(180deg, #d1a479 0%, #b9895b 60%, #9a6f45 100%)",
                      animationDelay: `${i * 90}ms`,
                    }}
                  />
                  <span className="text-[10px] text-[#6b6156]">{days[i]}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#16130f]/8 pt-6">
              {[
                ["Chats → sale", "27%"],
                ["Calls answered", "142"],
                ["Cart recovered", "$3.1k"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-[#f6f1e9]/60 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-[#6b6156]">{k}</p>
                  <p className="mt-1 text-sm font-bold text-[#16130f]">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">Profit dashboard</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Finally — an AI that shows what it{" "}
            <span className="text-[#b9895b]">actually earned</span>.
          </h2>
          <p className="mt-5 text-lg text-[#6b6156]">
            Every conversation tied to a real order, a real refund saved, a real
            cart recovered. Open the dashboard on Monday morning and see the
            week your AI employee had.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#16130f]">
            {[
              "Revenue attributed per channel — chat, WhatsApp, phone",
              "Margin-aware: knows what a discount actually costs you",
              "Weekly digest emailed to you every Monday",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <Check /> <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
