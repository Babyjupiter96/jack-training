export const site = {
  name: "Jack Bamis",
  eyebrow: "Online Performance Coaching",
  email: "vandalbamis@gmail.com",
  location: "Phoenix, AZ · Coaching online",
  // TODO: add your training Instagram handle + URL.
  instagram: { handle: "", url: "" },
  rosterUrl: "https://govandals.com/sports/football/roster/jack-bamis/4910",
  url: "https://babyjupiter96.github.io/jack-training",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/apply", label: "Apply" },
];

export const hero = {
  headline: "A body that",
  headlineAccent: "performs.",
  sub: "Private online coaching for people who don't have time to guess. Training, nutrition, and accountability built around your week — programmed and adjusted by me, not an app.",
  primary: "Apply for coaching",
  secondary: "See pricing",
};

export const marquee = [
  "Strength",
  "Conditioning",
  "Nutrition",
  "Accountability",
  "Weekly review",
  "Form checks",
  "Travel protocols",
  "Deloads",
];

export const statement = {
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
  short:
    "Jack Bamis. Division I football at Idaho — running back and linebacker — then years training clients and coaching 7-on-7 on weekends. Same method every time: assess honestly, program precisely, adjust often.",
  long: [
    "I played Division I football at the University of Idaho — running back and linebacker — with a freshman year jumping in track. Four years of being programmed for, tested, and coached to a standard.",
    "After that I trained clients and coached football on weekends while I built the rest of my skill set. I've written programs for people cutting for a wedding and people trying to add fifty pounds to a squat. Different goals, same job: assess honestly, program precisely, adjust often.",
    "This is 1-on-1 and online. You get my eyes on your week, a plan that moves with your life, and a straight answer every time you ask.",
  ],
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

export const abChallenge = {
  kicker: "One-time · 75 Days",
  title: "The 75 Day Ab Challenge",
  body: "A focused 75-day block on the midsection: daily core programming, nutrition guardrails, and weekly check-ins to keep you honest. Same coaching, one clear goal, a hard deadline.",
  price: "$30",
  cadence: "one-time",
  image: "/media/ab-challenge.jpg",
  cta: "Apply for the Challenge",
};

// TODO: confirm price before launch.
export const bicepProgram = {
  kicker: "One-time · Add-on Program",
  title: "The Bicep Program",
  body: "A focused arm block layered on top of your training: curl variation and volume progression, form checks, and a clear rep target every week until your arms actually change.",
  price: "$XXX",
  cadence: "one-time",
  image: "/media/bicep-program.jpg",
  imagePosition: "50% 32%",
  cta: "Apply for the Program",
};

export const faq: { q: string; a: string }[] = [
  {
    q: "Do I need a full gym?",
    a: "No. The program is built around the equipment you actually have — commercial gym, garage setup, or a couple of dumbbells and a bench. We sort that out on the assessment call.",
  },
  {
    q: "What if I travel a lot?",
    a: "Then that's built in. You get travel and hotel-gym protocols, and the week gets adjusted around trips instead of falling apart on them.",
  },
  {
    q: "How do we communicate?",
    a: "A dedicated thread for day-to-day questions, plus a written review every week. Full coaching adds a weekly video call.",
  },
  {
    q: "Is there a contract?",
    a: "No. It's month to month — cancel any time. Both plans start with the same assessment call so we know it's a fit.",
  },
  {
    q: "Can we train in person?",
    a: "In Phoenix, in blocks, by arrangement. Mention it in your application.",
  },
];

export const apply = {
  title: "Apply",
  body: "Coaching is 1-on-1, so spots are limited. Tell me where you are and what you're after. If it's a fit, we'll book the assessment call — no pressure either way.",
  cta: "Send application",
};
