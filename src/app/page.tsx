import { asset } from "@/lib/base";
import { Reveal } from "@/components/Reveal";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import {
  site,
  hero,
  problem,
  method,
  deliverables,
  coach,
  pricing,
  apply,
} from "@/content/site";

// Drop a photo at public/media/jack-gym.jpg and flip this to true.
const HERO_PHOTO_READY = false;

const marquee = [
  "Strength",
  "Conditioning",
  "Nutrition",
  "Accountability",
  "Weekly review",
  "Form checks",
  "Travel protocols",
  "Deloads",
];

const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <section className="hero">
        <HeroBackdrop />
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">{site.eyebrow}</span>
            <h1>
              {hero.headline}{" "}
              <span className="sheen">{hero.headlineAccent}</span>
            </h1>
            <p className="hero__sub">{hero.sub}</p>
            <div className="hero__actions">
              <a href="#apply" className="btn btn--accent">
                {hero.primary}
              </a>
              <a href="#pricing" className="btn">
                {hero.secondary}
              </a>
            </div>
          </div>

          <Reveal className="hero__photo" delay={150}>
            {HERO_PHOTO_READY ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={asset("/media/jack-gym.jpg")} alt="Jack Bamis" />
            ) : (
              <span className="hero__photo-fallback">
                Photo of Jack — add public/media/jack-gym.jpg
              </span>
            )}
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((m, i) => (
            <span className="marquee__item" key={i}>
              {m}
              <span>&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Problem statement */}
      <section className="statement">
        <div className="wrap section">
          <Reveal>
            <p>
              {problem.title}.{" "}
              <span className="soft">{problem.body}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="num">01</span>
              <h2>How it works</h2>
            </div>
            <p className="section-intro">
              Four moving parts. The first three set it up; the fourth is why you
              hire a coach instead of buying a template.
            </p>
          </Reveal>
        </div>
        <div className="method">
          {method.map((m, i) => (
            <Reveal key={m.title} className="method__cell" delay={i * 70}>
              <span className="method__num">{m.num}</span>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="section">
        <div className="wrap get">
          <Reveal>
            <div className="section-head">
              <span className="num">02</span>
              <h2>What you get</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="get__list">
              {deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Coach */}
      <section className="section">
        <div className="wrap">
          <Reveal className="coach">
            <h2>{coach.title}</h2>
            <p>{coach.body}</p>
            <a href={site.rosterUrl} target="_blank" rel="noreferrer">
              Vandals roster ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="num">03</span>
              <h2>Pricing</h2>
            </div>
            <p className="section-intro">
              Month to month. Cancel any time. Both plans start with the same
              assessment call.
            </p>
          </Reveal>
          <div className="pricing">
            {pricing.map((t, i) => (
              <Reveal
                key={t.name}
                className={`tier${t.featured ? " tier--featured" : ""}`}
                delay={i * 80}
              >
                <span className="tier__name">{t.name}</span>
                <div>
                  <span className="tier__price">{t.price}</span>
                  <span className="tier__cadence">{t.cadence}</span>
                </div>
                <p className="tier__summary">{t.summary}</p>
                <ul className="tier__includes">
                  {t.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <a
                  href={mailto(`Coaching — ${t.name}`)}
                  className="btn btn--accent"
                >
                  Apply
                </a>
              </Reveal>
            ))}
          </div>
          <p className="pricing-note">
            In-person blocks in Phoenix by arrangement — ask in your application.
          </p>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="section">
        <div className="wrap">
          <Reveal className="apply">
            <h2>{apply.title}</h2>
            <p>{apply.body}</p>
            <a
              href={mailto("Coaching application — Jack Bamis")}
              className="btn btn--accent"
            >
              {apply.cta}
            </a>
            <div className="apply__detail">
              <span>{site.location}</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {site.instagram.url && (
                <a href={site.instagram.url} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap footer__row">
          <span>
            &copy; {new Date().getFullYear()} {site.name}
          </span>
          <span className="footer__tag">Built with intention</span>
        </div>
      </footer>
    </div>
  );
}
