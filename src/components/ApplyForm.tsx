"use client";

import { useState } from "react";
import { site, apply } from "@/content/site";

export function ApplyForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Location / time zone: ${f.get("location")}`,
      `Plan: ${f.get("plan")}`,
      "",
      "Where you're at now:",
      `${f.get("now")}`,
      "",
      "What you're after:",
      `${f.get("goal")}`,
    ].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Coaching application — " + (f.get("name") || ""),
    )}&body=${encodeURIComponent(lines)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="location">Location / time zone</label>
        <input id="location" name="location" />
      </div>
      <div>
        <label htmlFor="plan">Plan you're leaning toward</label>
        <select id="plan" name="plan" defaultValue="Not sure yet">
          <option>Not sure yet</option>
          <option>Programming — $150/mo</option>
          <option>Full coaching — $300/mo</option>
          <option>In-person block (Phoenix)</option>
        </select>
      </div>
      <div>
        <label htmlFor="now">Where you&apos;re at now</label>
        <textarea
          id="now"
          name="now"
          required
          placeholder="Training history, injuries, schedule, equipment…"
        />
      </div>
      <div>
        <label htmlFor="goal">What you&apos;re after</label>
        <textarea
          id="goal"
          name="goal"
          required
          placeholder="The outcome, and any deadline attached to it."
        />
      </div>
      <button type="submit" className="btn btn--solid">
        {apply.cta}
      </button>
      {sent && (
        <p className="form__note">
          Your email app should have opened with the application filled in. If it
          didn&apos;t, email me directly at {site.email}.
        </p>
      )}
    </form>
  );
}
