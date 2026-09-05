import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { HeroPlate } from "@/components/HeroPlate";
import { asset } from "@/lib/base";
import { pricing, abChallenge, bicepProgram, faq, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Two coaching plans — Programming ($150/mo) and Full coaching ($300/mo). Month to month, both starting with an assessment call.",
};

const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <HeroPlate />
        <div className="wrap">
          <span className="eyebrow">Pricing</span>
          <h1>Two plans. No contract.</h1>
          <p className="lede">
            Month to month, cancel any time. Both start with the same assessment
            call so we know it&apos;s a fit before you pay for a second month.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
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
                  className={`btn ${t.featured ? "btn--solid" : "btn--accent"}`}
                >
                  Apply for {t.name}
                </a>
              </Reveal>
            ))}
          </div>
          <p className="pricing-note">
            In-person blocks in Phoenix by arrangement — ask in your application.
          </p>
        </div>
      </section>

      <section className="split">
        <div className="split__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(abChallenge.image)} alt="" />
        </div>
        <Reveal className="split__body">
          <span className="kicker">{abChallenge.kicker}</span>
          <h2 style={{ marginTop: "12px" }}>{abChallenge.title}</h2>
          <p>{abChallenge.body}</p>
          <div style={{ margin: "18px 0 22px" }}>
            <span className="tier__price">{abChallenge.price}</span>
            <span className="tier__cadence">{abChallenge.cadence}</span>
          </div>
          <a
            href={mailto(abChallenge.title)}
            className="btn btn--accent"
          >
            {abChallenge.cta}
          </a>
        </Reveal>
      </section>

      <section className="split split--flip">
        <div className="split__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(bicepProgram.image)}
            alt=""
            style={{ objectPosition: bicepProgram.imagePosition }}
          />
        </div>
        <Reveal className="split__body">
          <span className="kicker">{bicepProgram.kicker}</span>
          <h2 style={{ marginTop: "12px" }}>{bicepProgram.title}</h2>
          <p>{bicepProgram.body}</p>
          <div style={{ margin: "18px 0 22px" }}>
            <span className="tier__price">{bicepProgram.price}</span>
            <span className="tier__cadence">{bicepProgram.cadence}</span>
          </div>
          <a href={mailto(bicepProgram.title)} className="btn btn--accent">
            {bicepProgram.cta}
          </a>
        </Reveal>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="kicker">Questions</span>
            <h2>Before you apply.</h2>
          </Reveal>
          <div className="faq">
            {faq.map((f, i) => (
              <Reveal className="faq__item" key={f.q} delay={i * 40}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="cta">
            <h2>Pick a plan on the call.</h2>
            <p>Start with the application. We&apos;ll figure out the rest together.</p>
            <Link href="/apply" className="btn btn--solid">
              Apply for coaching
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
