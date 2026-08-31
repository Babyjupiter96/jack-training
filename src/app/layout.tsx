import type { Metadata } from "next";
import { cinzel, cormorant, jost } from "./fonts";
import { site } from "@/content/site";
import "./globals.css";

const title = `${site.name} — Online 1-on-1 Coaching`;
const description =
  "Private online performance coaching. Training, nutrition, and accountability built around your week — programmed and adjusted by Jack Bamis, not an app.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: { title, description, url: site.url, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <header className="nav">
          <div className="wrap nav__row">
            <a href="#top" className="wordmark">
              Jack <span>&middot;</span> Bamis
            </a>
            <nav className="nav__right" aria-label="Primary">
              <a className="nav__links" href="#method">
                Method
              </a>
              <a className="nav__links" href="#pricing">
                Pricing
              </a>
              <a href="#apply" className="btn btn--accent">
                Apply
              </a>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
