import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/base";
import { Reveal } from "@/components/Reveal";
import { HeroPlate } from "@/components/HeroPlate";
import { coach, method, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jack Bamis — Division I football at Idaho, then years coaching and training. The method: assess honestly, program precisely, adjust often.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <HeroPlate />
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1>Assess. Program. Adjust.</h1>
          <p className="lede">
            The same standard I was held to as a Division I athlete, pointed at
            your training.
          </p>
        </div>
      </section>

      <section className="split">
        <div className="split__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/media/jack-gym.jpg")} alt="Jack Bamis in the gym" />
        </div>
        <div className="split__body">
          {coach.long.map((para, i) => (
            <Reveal as="p" key={i} delay={i * 60}>
              {para}
            </Reveal>
          ))}
          <a
            className="link"
            href={site.rosterUrl}
            target="_blank"
            rel="noreferrer"
          >
            Vandals roster ↗
          </a>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="kicker">The method</span>
            <h2>How a week actually runs.</h2>
          </Reveal>
          <ul className="get-list">
            {method.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 50}>
                <span className="idx">{m.num}</span>
                <span>
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                    {m.title}.
                  </strong>{" "}
                  {m.body}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="cta">
            <h2>See if it&apos;s a fit.</h2>
            <p>
              Coaching is 1-on-1. The assessment call tells us both whether this
              works.
            </p>
            <Link href="/apply" className="btn btn--solid">
              Apply for coaching
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
