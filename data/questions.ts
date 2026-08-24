import type { AxisKey } from "./axes"

export type Question = {
  id: string
  text: string
  axis: AxisKey
  /** +1: agreeing moves score toward positive pole; -1: agreeing moves toward negative pole */
  polarity: 1 | -1
}

/**
 * 40 questions, 5 per axis × 8 axes. 5-point Likert scale:
 *   Strongly Agree +2 · Somewhat Agree +1 · Unsure 0 · Somewhat Disagree −1 · Strongly Disagree −2
 * Score per axis = Σ (userScore × polarity). Range per axis: [−10, +10].
 */
export const questions: Question[] = [
  // ---- Epistemology (5) ----
  {
    id: "e1",
    axis: "epistemology",
    polarity: 1,
    text: "The fundamental laws of politics — how power is acquired, held, and lost — are the same across cultures and centuries.",
  },
  {
    id: "e2",
    axis: "epistemology",
    polarity: -1,
    text: "What one culture calls 'justice' another might rightly call 'oppression' — and there is no neutral standpoint from which to judge which is correct.",
  },
  {
    id: "e3",
    axis: "epistemology",
    polarity: 1,
    text: "The great works of political theory contain knowledge about power that is as valid today as when it was written.",
  },
  {
    id: "e4",
    axis: "epistemology",
    polarity: -1,
    text: "History has no fixed meaning; each era interprets it to suit its own struggles.",
  },
  {
    id: "e5",
    axis: "epistemology",
    polarity: 1,
    text: "There are moral facts about politics as objective as facts about geometry.",
  },

  // ---- Anthropology (5) ----
  {
    id: "a1",
    axis: "anthropology",
    polarity: 1,
    text: "Left to themselves, absent laws or institutions, most strangers would treat each other with basic decency.",
  },
  {
    id: "a2",
    axis: "anthropology",
    polarity: -1,
    text: "Human beings are the only animal that will inflict cruelty on their own kind for pleasure.",
  },
  {
    id: "a3",
    axis: "anthropology",
    polarity: -1,
    text: "Whenever a society breaks down, the first thing that appears is not cooperation but predation.",
  },
  {
    id: "a4",
    axis: "anthropology",
    polarity: 1,
    text: "The behaviors we call 'evil' are almost always the product of bad institutions and bad conditions, not bad people.",
  },
  {
    id: "a5",
    axis: "anthropology",
    polarity: -1,
    text: "Human beings, in their private lives, are more inclined to selfishness than to generosity.",
  },

  // ---- Political Ontology (5) — probes pure autonomy vs reducibility;
  //       stripped of ethics-in-practice confounds per feedback pass 2026-08-24
  {
    id: "p1",
    axis: "politicalOntology",
    polarity: 1,
    text: "To understand a political situation, you have to think about it politically — you cannot apply moral, economic, or religious analysis and get the right answer.",
  },
  {
    id: "p2",
    axis: "politicalOntology",
    polarity: -1,
    text: "Political action is at its core a form of ethical engagement — the aim of politics is to realize what is morally right in public life.",
  },
  {
    id: "p3",
    axis: "politicalOntology",
    polarity: 1,
    text: "Political life has its own laws and patterns — power, coalition, incentive, force — that operate the same way whether the actors are saints or sinners.",
  },
  {
    id: "p4",
    axis: "politicalOntology",
    polarity: -1,
    text: "A society with the right economic structure would have very little of what we currently call 'politics' — most political conflict is really a symptom of the material base.",
  },
  {
    id: "p5",
    axis: "politicalOntology",
    polarity: 1,
    text: "Two people who share exactly the same moral beliefs can still disagree sharply about political strategy — because thinking clearly about power is a distinct skill from thinking clearly about morality.",
  },

  // ---- Universalism ↔ Particularism (5) ----
  {
    id: "u1",
    axis: "universalism",
    polarity: 1,
    text: "The rights of a human being are the same in Tokyo, Tehran, and Nashville.",
  },
  {
    id: "u2",
    axis: "universalism",
    polarity: -1,
    text: "You cannot really understand a society from the outside; its meanings only make sense to those inside it.",
  },
  {
    id: "u3",
    axis: "universalism",
    polarity: 1,
    text: "A universal moral standard exists to which all political systems can be held accountable.",
  },
  {
    id: "u4",
    axis: "universalism",
    polarity: -1,
    text: "Nations are not just human constructs — they are real communities with real claims on the people born into them.",
  },
  {
    id: "u5",
    axis: "universalism",
    polarity: 1,
    text: "Preferring members of one's own people to strangers — when those strangers have the same character, culture, and needs — is a moral failure.",
  },

  // ---- Individual ↔ Collective (5) ----
  {
    id: "i1",
    axis: "individualism",
    polarity: 1,
    text: "The proper unit of political concern is the individual person — not the family, community, or nation.",
  },
  {
    id: "i2",
    axis: "individualism",
    polarity: -1,
    text: "Individual freedom, taken to its logical conclusion, weakens the family, community, and cultural bonds that people actually need to flourish.",
  },
  {
    id: "i3",
    axis: "individualism",
    polarity: 1,
    text: "Government exists to protect persons so they can pursue their own lives on their own terms.",
  },
  {
    id: "i4",
    axis: "individualism",
    polarity: -1,
    text: "'The people' has needs and a will of its own that no individual member fully represents.",
  },
  {
    id: "i5",
    axis: "individualism",
    polarity: 1,
    text: "Rights belong to individuals; groups have interests, but only individuals have rights.",
  },

  // ---- Order (5) ----
  {
    id: "o1",
    axis: "order",
    polarity: 1,
    text: "A political order designed from clear principles is more legitimate than one that just accumulated over centuries.",
  },
  {
    id: "o2",
    axis: "order",
    polarity: -1,
    text: "Traditions that survive a long time have value that is not always understood by the modern culture.",
  },
  {
    id: "o3",
    axis: "order",
    polarity: 1,
    text: "If we started from a blank slate today, we could build a better constitution than the one we inherited.",
  },
  {
    id: "o4",
    axis: "order",
    polarity: -1,
    text: "Political institutions grown organically are more resilient than institutions designed with an intended outcome in mind.",
  },
  {
    id: "o5",
    axis: "order",
    polarity: 1,
    text: "The correct response to a bad institution is to completely redesign it from first principles, not to reform it around the edges.",
  },

  // ---- Authority (5) ----
  {
    id: "au1",
    axis: "authority",
    polarity: 1,
    text: "Most political decisions require expertise the average voter does not have and cannot easily acquire.",
  },
  {
    id: "au2",
    axis: "authority",
    polarity: -1,
    text: "Ordinary people better understand their own situation and how to fix it than outside experts do.",
  },
  {
    id: "au3",
    axis: "authority",
    polarity: 1,
    text: "A small, disciplined, well-trained cadre will outperform a large disorganized mass every time — and should.",
  },
  {
    id: "au4",
    axis: "authority",
    polarity: 1,
    text: "Every stable regime is really ruled by an organized minority; the appearance of popular sovereignty is a legitimating story.",
  },
  {
    id: "au5",
    axis: "authority",
    polarity: -1,
    text: "Political power should ultimately answer to the many, not the few — even at the cost of good decisions.",
  },

  // ---- Temporal (5) ----
  {
    id: "t1",
    axis: "temporal",
    polarity: 1,
    text: "Human societies, taken over the long run, are getting better.",
  },
  {
    id: "t2",
    axis: "temporal",
    polarity: -1,
    text: "There were past societies that got closer to the truth about how humans should live than we do now.",
  },
  {
    id: "t3",
    axis: "temporal",
    polarity: 1,
    text: "Progress is real: our children will live in a world morally superior to ours.",
  },
  {
    id: "t4",
    axis: "temporal",
    polarity: -1,
    text: "The task of politics is more often to preserve what has been well-made than to create something new.",
  },
  {
    id: "t5",
    axis: "temporal",
    polarity: 1,
    text: "Where we are headed as a species, whatever the setbacks, is toward more knowledge, more freedom, more flourishing.",
  },
]

// Rendered left → right in this order. Kept as Disagree → Agree per Dan's
// UX preference: the axis of "more agreement" runs rightward.
export const LIKERT_OPTIONS = [
  { label: "Strongly Disagree", value: -2 },
  { label: "Somewhat Disagree", value: -1 },
  { label: "Unsure", value: 0 },
  { label: "Somewhat Agree", value: 1 },
  { label: "Strongly Agree", value: 2 },
] as const

export type UserScores = Record<AxisKey, number>

/** Compute per-axis scores from user's answers (question id → likert value). */
export function computeScores(answers: Record<string, number>): UserScores {
  const scores: Partial<UserScores> = {}
  for (const q of questions) {
    const val = answers[q.id] ?? 0
    scores[q.axis] = (scores[q.axis] ?? 0) + val * q.polarity
  }
  return scores as UserScores
}

/** Euclidean distance in N-axis space between two coordinate objects. */
export function distance(a: Record<AxisKey, number>, b: Record<AxisKey, number>): number {
  const axes: AxisKey[] = [
    "epistemology",
    "anthropology",
    "politicalOntology",
    "universalism",
    "individualism",
    "order",
    "authority",
    "temporal",
  ]
  let sum = 0
  for (const k of axes) {
    const d = (a[k] ?? 0) - (b[k] ?? 0)
    sum += d * d
  }
  return Math.sqrt(sum)
}
