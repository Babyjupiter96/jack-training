import Link from "next/link";
import { asset } from "@/lib/base";
import { Reveal } from "@/components/Reveal";
import { HeroPlate } from "@/components/HeroPlate";
import {
  hero,
  marquee,
  statement,
  method,
  deliverables,
  coach,
  site,
} from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroPlate />
        <div className="wrap hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">{site.eyebrow}</span>
            <h1>
              {hero.headline}{" "}
              <span className="sheen">{hero.headlineAccent}</span>
            </h1>
            <p className="hero__sub">{hero.sub}</p>
            <div className="hero__actions">
              <Link href="/apply" className="btn btn--solid">
                {hero.primary}
              </Link>
              <Link href="/pricing" className="btn">
                {hero.secondary}
              </Link>
            </div>
          </div>
          <div className="hero__photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/media/jack-hero.jpg")} alt="Jack Bamis" />
          </div>
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

      {/* Statement */}
      <section className="statement">
        <div className="wrap statement__inner">
          <Reveal as="h2">{statement.title}.</Reveal>
          <Reveal as="p" delay={80}>
            {statement.body}
          </Reveal>
        </div>
      </section>

      {/* Method */}
      <section className="section" id="method">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="kicker">How it works</span>
            <h2>Four moving parts.</h2>
            <p>
              The first three set it up. The fourth is why you hire a coach
              instead of buying a template.
            </p>
          </Reveal>
        </div>
        <div className="method">
          {method.map((m, i) => (
            <Reveal key={m.title} className="method__cell" delay={i * 60}>
              <span className="method__num">{m.num}</span>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="kicker">What you get</span>
            <h2>Everything, actually used.</h2>
          </Reveal>
          <ul className="get-list">
            {deliverables.map((d, i) => (
              <Reveal as="li" key={d} delay={i * 50}>
                <span className="idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{d}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Coach split */}
      <section className="split split--flip">
        <div className="split__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/media/jack-gym.jpg")} alt="Jack Bamis in the gym" />
        </div>
        <Reveal className="split__body">
          <span className="kicker">Who's coaching you</span>
          <h2 style={{ marginTop: "12px" }}>Jack Bamis</h2>
          <p>{coach.short}</p>
          <Link href="/about" className="link">
            More about the method &rarr;
          </Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <Reveal className="cta">
            <h2>Ready to stop guessing?</h2>
            <p>
              Two plans, month to month, both starting with the same assessment
              call.
            </p>
            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/apply" className="btn btn--solid">
                Apply for coaching
              </Link>
              <Link href="/pricing" className="btn">
                See pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
