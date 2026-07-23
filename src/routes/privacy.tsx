import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ClerkNova" },
      { name: "description", content: "How ClerkNova collects, uses, and protects merchant and end-user data across Shopify, WhatsApp, and voice channels." },
      { property: "og:title", content: "Privacy Policy — ClerkNova" },
      { property: "og:description", content: "How ClerkNova handles merchant and end-user data." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-[#fffdfa] text-[#16130f]">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9895b]">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[#6b6156]">Last updated: January 2026</p>

        <div className="prose-legal mt-10 space-y-8 text-[15px] leading-relaxed text-[#3a332b]">
          <Section title="1. Overview">
            ClerkNova, Inc. ("ClerkNova", "we", "us") provides an AI sales and support
            agent that connects to Shopify stores and works across website chat,
            WhatsApp, and phone. This Privacy Policy describes what information we
            process on behalf of merchants ("Merchants") and their end customers
            ("End Users"), how we use it, and the choices available to you.
          </Section>

          <Section title="2. Data we process">
            <p>To operate the service, ClerkNova processes:</p>
            <List items={[
              "Merchant account data — name, email, store URL, billing details, and login metadata.",
              "Store data from Shopify — products, collections, inventory, orders, policies, and configuration required to answer customer questions and complete sales.",
              "End User conversations — messages, voice call transcripts, phone numbers, WhatsApp identifiers, and any information a customer provides during a chat or call.",
              "Usage and diagnostics — logs, timestamps, latency, error events, and analytics used to run and improve the service.",
            ]} />
          </Section>

          <Section title="3. How we use data">
            <List items={[
              "To generate replies, product recommendations, checkout links, and return decisions on behalf of the Merchant.",
              "To connect and exchange messages with third-party channels such as Shopify, Meta / WhatsApp Business Platform, and voice telephony providers.",
              "To provide the Merchant with dashboards, analytics, and profit attribution for AI-driven conversations.",
              "To maintain security, prevent abuse, debug issues, and improve model quality (subject to the controls in Section 6).",
            ]} />
          </Section>

          <Section title="4. Shopify data">
            When a Merchant installs ClerkNova, we access store data through the
            Shopify APIs under the scopes granted at install. We use this data
            solely to operate the service for that Merchant and do not sell it or
            share it with other Merchants. Uninstalling the app revokes our access;
            Merchant data is deleted per Section 8.
          </Section>

          <Section title="5. WhatsApp / Meta">
            ClerkNova exchanges messages through the WhatsApp Business Platform on
            behalf of the Merchant. Message content, phone numbers, and delivery
            metadata are processed subject to Meta's terms and are used only to
            deliver the conversation, produce analytics, and maintain audit logs.
          </Section>

          <Section title="6. AI processing and training">
            ClerkNova uses third-party large language model providers to generate
            responses. Prompts and responses are transmitted to those providers
            under contractual terms that prohibit training on Merchant or End User
            content. We do not use identifiable Merchant or End User content to
            train foundation models.
          </Section>

          <Section title="7. Sharing">
            We share data only with (a) subprocessors that host, transmit, or
            analyze it on our behalf, (b) the channels and platforms required to
            deliver a conversation (Shopify, Meta/WhatsApp, voice providers, and
            payment providers), and (c) authorities when required by law.
          </Section>

          <Section title="8. Retention and deletion">
            We retain conversation history and store data for as long as the
            Merchant maintains an active account, plus a limited period for
            backups and legal compliance. Merchants and End Users may request
            deletion by writing to support@clerknova.com. We will delete or
            de-identify data within 30 days unless we are required to retain it.
          </Section>

          <Section title="9. Security">
            We use encryption in transit and at rest, least-privilege access
            controls, and audit logging. No system is perfectly secure; we work
            continuously to protect Merchant and End User information.
          </Section>

          <Section title="10. Your rights">
            Depending on your jurisdiction, you may have rights to access,
            correct, export, or delete personal data. End Users should contact
            the Merchant they are transacting with in the first instance;
            Merchants can contact us at support@clerknova.com.
          </Section>

          <Section title="11. Changes">
            We may update this policy from time to time. Material changes will be
            announced by email or in-product notice.
          </Section>

          <Section title="12. Contact">
            Questions? Email <a className="text-[#b9895b] underline underline-offset-2" href="mailto:support@clerknova.com">support@clerknova.com</a>.
          </Section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-[#16130f]">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-[#b9895b]">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}
