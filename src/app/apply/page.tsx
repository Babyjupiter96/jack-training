import type { Metadata } from "next";
import { HeroPlate } from "@/components/HeroPlate";
import { ApplyForm } from "@/components/ApplyForm";
import { apply, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply for 1-on-1 coaching with Jack Bamis. Tell me where you're at and what you're after — if it's a fit, we book the assessment call.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="page-hero">
        <HeroPlate />
        <div className="wrap">
          <span className="eyebrow">Apply</span>
          <h1>{apply.title} for coaching.</h1>
          <p className="lede">{apply.body}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ApplyForm />
          <p className="form__note" style={{ marginTop: "24px" }}>
            Prefer email? Write me directly at{" "}
            <a href={`mailto:${site.email}`} style={{ color: "var(--steel)" }}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
