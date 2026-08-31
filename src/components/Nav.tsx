"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

export function Nav() {
  const pathname = usePathname();
  const current = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="wrap nav__row">
        <Link href="/" className="wordmark">
          {site.name.split(" ")[0]} <span>&middot;</span>{" "}
          {site.name.split(" ").slice(1).join(" ")}
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {nav
            .filter((l) => l.href !== "/apply")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={current(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          <Link href="/apply" className="btn btn--accent nav__cta">
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}
