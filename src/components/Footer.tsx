import Link from "next/link";
import { site, nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__col footer__brand">
          <span className="wordmark">
            {site.name.split(" ")[0]} <span>&middot;</span>{" "}
            {site.name.split(" ").slice(1).join(" ")}
          </span>
          <p>Online 1-on-1 performance coaching.</p>
          <p>{site.location}</p>
        </div>
        <div className="footer__col">
          <h4>Navigate</h4>
          {nav.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.instagram.url && (
            <a href={site.instagram.url} target="_blank" rel="noreferrer">
              Instagram
            </a>
          )}
          <a href={site.rosterUrl} target="_blank" rel="noreferrer">
            Vandals roster
          </a>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <span>
          &copy; {new Date().getFullYear()} {site.name}
        </span>
        <span className="footer__tag">Built with intention</span>
      </div>
    </footer>
  );
}
