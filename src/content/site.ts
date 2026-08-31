export const site = {
  name: "Jack Bamis",
  brandTag: "1-on-1 Coaching",
  eyebrow: "Online Performance Coaching",
  email: "vandalbamis@gmail.com",
  location: "Phoenix, AZ · Coaching online",
  // TODO: add your training Instagram handle + URL.
  instagram: { handle: "", url: "" },
  rosterUrl: "https://govandals.com/sports/football/roster/jack-bamis/4910",
  // Public URL — swap to a custom domain later.
  url: "https://babyjupiter96.github.io/jack-training",
};

export const hero = {
  headline: "A body that",
  headlineAccent: "performs.",
  sub: "Private online coaching for people who don't have time to guess. Training, nutrition, and accountability built around your week — programmed and adjusted by me, not an app.",
  primary: "Apply for coaching",
  secondary: "See pricing",
};

export const problem = {
  title: "You don't need more information",
  body: "You've read the articles. You've tried the apps. What's missing isn't knowledge — it's a plan that fits the week you actually have, and someone who changes it when the week changes.",
};

export const method: { num: string; title: string; body: string }[] = [
  {
    num: "I.",
    title: "Assessment",
    body: "A call and a full intake — training history, injuries, schedule, equipment, and what you're actually chasing.",
  },
  {
    num: "II.",
    title: "The build",
    body: "A program written for your life: the days you have, the gym you're in, the food you'll actually eat.",
  },
  {
    num: "III.",
    title: "Weekly review",
    body: "You send your logs and lifts. I review the video, check the numbers, and tell you what changed and why.",
  },
  {
    num: "IV.",
    title: "Adjust",
    body: "Nothing is fixed. A travel week, bad sleep, a tweak in your knee — the plan moves with it. That's the point of a coach.",
  },
];

export const deliverables: string[] = [
  "A training program built and updated for you — not pulled off a shelf",
  "Nutrition targets and a way to hit them without weighing every gram",
  "Weekly video form checks with a written review",
  "A direct line to me — not a support queue",
  "Deload and travel protocols so momentum survives real life",
];

export const coach = {
  title: "Who's coaching you",
  body: "Jack Bamis. Division I football at Idaho — running back and linebacker — then years training clients and coaching 7-on-7 on weekends. I've programmed for people cutting for a wedding and people trying to add fifty pounds to a squat. Same method every time: assess honestly, program precisely, adjust often.",
};

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

// TODO: confirm pricing before launch.
export const pricing: Tier[] = [
  {
    name: "Programming",
    price: "$150",
    cadence: "/ month",
    summary: "For people who train well on their own and want the plan right.",
    includes: [
      "Custom program, updated every week",
      "Nutrition targets",
      "Written weekly review",
      "Message thread for questions",
    ],
  },
  {
    name: "Full coaching",
    price: "$300",
    cadence: "/ month",
    summary: "Programming, plus eyes on every week and a call to keep it honest.",
    includes: [
      "Everything in Programming",
      "Weekly video call",
      "Video form checks",
      "Priority replies, 7 days a week",
    ],
    featured: true,
  },
];

export const apply = {
  title: "Apply",
  body: "Coaching is 1-on-1, so spots are limited. Tell me where you are and what you're after. If it's a fit, we'll book the assessment call.",
  cta: "Start your application",
};
