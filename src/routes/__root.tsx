import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#16130f] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#f6f1e9]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#f6f1e9]">Page not found</h2>
        <p className="mt-2 text-sm text-[#b9ad9d]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#b9895b] px-5 py-2.5 text-sm font-semibold text-[#16130f] transition-colors hover:bg-[#d1a479]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#16130f] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-[#f6f1e9]">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[#b9ad9d]">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[#b9895b] px-5 py-2.5 text-sm font-semibold text-[#16130f] transition-colors hover:bg-[#d1a479]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-[#f6f1e9] transition-colors hover:bg-white/5"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "ClerkNova" },
      { name: "theme-color", content: "#16130f" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "ClerkNova — The AI employee that sells, supports & answers the phone" },
      { property: "og:title", content: "ClerkNova — The AI employee that sells, supports & answers the phone" },
      { name: "twitter:title", content: "ClerkNova — The AI employee that sells, supports & answers the phone" },
      { name: "description", content: "ClerkNova is an AI sales & support agent for Shopify. It works website chat, WhatsApp, and phone calls — recommends products, closes sales, handles returns, and shows the profit it makes." },
      { property: "og:description", content: "ClerkNova is an AI sales & support agent for Shopify. It works website chat, WhatsApp, and phone calls — recommends products, closes sales, handles returns, and shows the profit it makes." },
      { name: "twitter:description", content: "ClerkNova is an AI sales & support agent for Shopify. It works website chat, WhatsApp, and phone calls — recommends products, closes sales, handles returns, and shows the profit it makes." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/474d091d-f278-4c01-8018-da91085f9b09/id-preview-972fb299--9317c418-b3c8-4111-a78d-8a69f93f7130.lovable.app-1784818427240.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/474d091d-f278-4c01-8018-da91085f9b09/id-preview-972fb299--9317c418-b3c8-4111-a78d-8a69f93f7130.lovable.app-1784818427240.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
