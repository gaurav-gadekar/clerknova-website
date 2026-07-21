import { createFileRoute } from "@tanstack/react-router";
import { NovaMark } from "../components/NovaMark";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClerkNova — The AI employee that sells, supports & answers the phone" },
      {
        name: "description",
        content:
          "ClerkNova is an AI sales & support agent for Shopify. It works website chat, WhatsApp, and phone calls — recommends products, closes sales, handles returns, and shows the profit it makes.",
      },
      { property: "og:title", content: "ClerkNova — AI Sales & Support for E-commerce" },
      {
        property: "og:description",
        content:
          "The AI employee that sells, supports, and answers the phone for your Shopify store.",
      },
      { name: "twitter:title", content: "ClerkNova — AI Sales & Support for E-commerce" },
      {
        name: "twitter:description",
        content:
          "The AI employee that sells, supports, and answers the phone for your Shopify store.",
      },
    ],
  }),
  component: HomePage,
});

/* --------------------------------- Icons --------------------------------- */

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-[#fffdfa] shadow-[0_10px_30px_-12px_rgba(185,137,91,0.7)]"
      style={{
        background:
          "linear-gradient(135deg, #d1a479 0%, #b9895b 55%, #9a6f45 100%)",
      }}
    >
      {children}
    </div>
  );
}

const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

const CartIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>);
const ChatIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M21 12a8 8 0 1 1-3.2-6.4L21 4l-1 4a8 8 0 0 1 1 4Z"/></svg>);
const PhoneIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>);
const ReturnIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 5 5v6"/></svg>);
const ChartIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M4 20V6"/><path d="M10 20V10"/><path d="M16 20v-6"/><path d="M22 20H2"/></svg>);
const LeadIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M12 3 4 8v6c0 4 3.5 6.5 8 7 4.5-.5 8-3 8-7V8Z"/><path d="m9 12 2 2 4-4"/></svg>);

const Check = () => (
  <span
    className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full"
    style={{ background: "#b9895b" }}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16130f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5L20 7" />
    </svg>
  </span>
);

/* ---------------------------------- Page --------------------------------- */

function HomePage() {
  return (
    <div className="min-h-screen bg-[#fffdfa] text-[#16130f]">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#16130f] text-[#f6f1e9]">
        {/* radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 20%, rgba(185,137,91,0.22) 0%, rgba(185,137,91,0.05) 40%, transparent 70%)",
          }}
        />
        {/* ghosted nova */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 nova-rotate"
          style={{ opacity: 0.06 }}
        >
          <NovaMark size={900} dotCount={260} />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-28 md:pt-32 md:pb-36 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-[#d1a479] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b9895b]" />
            AI Sales &amp; Support for E-commerce
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            The AI employee that{" "}
            <span className="text-[#b9895b]">sells, supports</span> &amp; answers the phone
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#b9ad9d] md:text-xl">
            ClerkNova plugs into your Shopify store and works your website chat,
            WhatsApp, and real phone calls — recommending products, closing sales,
            and handling returns like your best team member.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-[#b9895b] px-6 py-3.5 text-sm font-semibold text-[#16130f] transition-all hover:bg-[#d1a479] hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(185,137,91,0.8)]"
            >
              Request early access
            </a>
            <a
              href="#how"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-[#f6f1e9] transition-colors hover:bg-white/[0.06]"
            >
              See how it works
            </a>
          </div>

          <p className="mt-8 text-xs text-[#6b6156]">
            Currently onboarding early partner stores · No code · Live in minutes
          </p>
        </div>

        {/* channel strip */}
        <div className="relative border-t border-white/5 bg-[#211c17]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 text-xs uppercase tracking-[0.18em] text-[#b9ad9d] md:text-sm">
            <span className="text-[#6b6156]">Works across</span>
            <span>Website chat</span>
            <span className="text-[#b9895b]">·</span>
            <span>WhatsApp</span>
            <span className="text-[#b9895b]">·</span>
            <span>Phone calls</span>
            <span className="text-[#b9895b]">·</span>
            <span>Profit dashboard</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-[#fffdfa] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              One AI agent doing the work of a whole team
            </h2>
            <p className="mt-4 text-lg text-[#6b6156]">
              Not another chatbot. ClerkNova acts on your real store — products,
              inventory, orders — and closes conversations into revenue.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: <CartIcon />, t: "Sells on your storefront", d: "Recommends the right product, answers questions, and drops a checkout link — right inside the chat." },
              { i: <ChatIcon />, t: "Runs your WhatsApp shop", d: "Native WhatsApp commerce with product cards, order tracking, and pay-in-chat that customers actually use." },
              { i: <PhoneIcon />, t: "Answers the phone like a human", d: "Real voice calls, real conversations. Places orders, answers questions, escalates cleanly when needed." },
              { i: <ReturnIcon />, t: "Handles returns by the book", d: "Follows your policy line by line — approves, rejects, or asks for details. No angry tickets in your inbox." },
              { i: <ChartIcon />, t: "Shows the profit it makes", d: "A profit dashboard that ties every conversation to real revenue. Know exactly what ClerkNova earned this week." },
              { i: <LeadIcon />, t: "Captures leads & recovers carts", d: "Follows up on abandoned carts across channels and turns curious visitors into buyers with the right nudge." },
            ].map((f) => (
              <div
                key={f.t}
                className="group rounded-2xl border border-[#16130f]/8 bg-[#fffdfa] p-7 transition-all hover:-translate-y-1 hover:border-[#b9895b]/40 hover:shadow-[0_20px_50px_-25px_rgba(22,19,15,0.25)]"
              >
                <IconTile>{f.i}</IconTile>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b6156]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="bg-[#f6f1e9] py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">
              Why ClerkNova
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              An AI store employee — not a chatbot that charges per answer
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
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3">
                  <Check />
                  <div>
                    <p className="font-semibold text-[#16130f]">{t}</p>
                    <p className="text-sm text-[#6b6156]">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat mock */}
          <div className="rounded-3xl bg-[#16130f] p-6 text-[#f6f1e9] shadow-[0_40px_80px_-30px_rgba(22,19,15,0.5)] md:p-8">
            <div className="flex items-center gap-2.5 border-b border-white/5 pb-4">
              <NovaMark size={22} />
              <span className="text-sm font-semibold">ClerkNova · Live chat</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-[#b9ad9d]">
                <span className="h-2 w-2 rounded-full bg-[#b9895b]" /> Online
              </span>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <Bubble who="them">
                Hey — looking for an all-mountain snowboard, size 156. Under $600 ideally.
              </Bubble>
              <Bubble who="us">
                Got you. Based on your height and what's in stock, here are two solid picks:
              </Bubble>

              <div className="grid gap-3 sm:grid-cols-2">
                <ProductCard name="Aurora All-Mountain 156" price="$549" tag="In stock" />
                <ProductCard name="Ember Freeride 156" price="$589" tag="2 left" />
              </div>

              <Bubble who="them">The Aurora, please. Ship to Denver?</Bubble>
              <Bubble who="us">
                Perfect choice. Free 2-day shipping to Denver. Here's your checkout —
                <a className="ml-1 text-[#d1a479] underline underline-offset-2" href="#">
                  clerknova.shop/co/aurora-156
                </a>
              </Bubble>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="bg-[#fffdfa] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              Live in minutes. No flow-builder required.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Install & connect", "One-click Shopify install. ClerkNova reads your products, policies, and past orders."],
              ["02", "Connect WhatsApp", "Link your business number with a single click. Meta-verified in the same flow."],
              ["03", "Set your rules", "Tell it your voice, your return policy, and what it can promise. That's it."],
            ].map(([n, t, d]) => (
              <div
                key={n}
                className="rounded-2xl border-l-4 border-[#b9895b] bg-[#f6f1e9]/40 py-7 pl-6 pr-6 transition-colors hover:bg-[#f6f1e9]"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-[#b9895b]">
                  STEP {n}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight">{t}</h3>
                <p className="mt-2 text-sm text-[#6b6156]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#f6f1e9] py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
          {[
            ["3", "channels, one AI brain"],
            ["24/7", "always on"],
            ["<5 min", "to go live"],
            ["0", "flows to build by hand"],
          ].map(([n, l]) => (
            <div key={l} className="text-center md:text-left">
              <div className="text-4xl font-extrabold tracking-tight text-[#b9895b] md:text-5xl">
                {n}
              </div>
              <div className="mt-2 text-sm text-[#6b6156]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section id="cta" className="relative overflow-hidden bg-[#16130f] py-28 text-[#f6f1e9] md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 nova-rotate"
          style={{ opacity: 0.07 }}
        >
          <NovaMark size={780} dotCount={220} />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(185,137,91,0.2) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Give every store the team only giants could afford
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#b9ad9d]">
            Join the early partner stores using ClerkNova to sell, support, and
            answer the phone — around the clock.
          </p>
          <div className="mt-10">
            <a
              href="mailto:support@clerknova.com?subject=Early%20access"
              className="inline-flex items-center rounded-full bg-[#b9895b] px-7 py-4 text-sm font-semibold text-[#16130f] transition-all hover:bg-[#d1a479] hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(185,137,91,0.8)]"
            >
              Request early access
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ------------------------------- Sub-parts ------------------------------- */

function Bubble({ who, children }: { who: "us" | "them"; children: React.ReactNode }) {
  const mine = who === "us";
  return (
    <div className={mine ? "flex justify-start" : "flex justify-end"}>
      <div
        className={
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed " +
          (mine
            ? "bg-[#b9895b]/15 text-[#f6f1e9] rounded-tl-sm"
            : "bg-white/[0.06] text-[#f6f1e9] rounded-tr-sm")
        }
      >
        {children}
      </div>
    </div>
  );
}

function ProductCard({ name, price, tag }: { name: string; price: string; tag: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#211c17] p-3">
      <div
        className="mb-3 h-20 rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, rgba(209,164,121,0.35), rgba(154,111,69,0.2))",
        }}
      />
      <p className="text-xs font-semibold text-[#f6f1e9]">{name}</p>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm font-bold text-[#d1a479]">{price}</span>
        <span className="text-[10px] uppercase tracking-wider text-[#b9ad9d]">{tag}</span>
      </div>
    </div>
  );
}
