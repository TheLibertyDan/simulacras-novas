export type AxisKey =
  | "epistemology"
  | "anthropology"
  | "politicalOntology"
  | "universalism"
  | "individualism"
  | "order"
  | "authority"
  | "temporal"

export type AxisDef = {
  key: AxisKey
  /** Public-facing friendly name — used in UI everywhere except chart labels. */
  name: string
  /** Academic term — shown in glossary + as subtitle in profile modal. */
  technicalName: string
  /** Tight abbreviation for 3D chart labels. */
  short: string
  color: string
  posLabel: string
  negLabel: string
  /** One-sentence axis definition, shown in glossary popover. */
  question: string
  /** Explanation of what agreeing with the positive pole actually means. */
  posDescription: string
  /** Explanation of what agreeing with the negative pole actually means. */
  negDescription: string
  layer: "foundation" | "political"
}

/**
 * The 8-axis system. Two foundational (pre-political) axes, one
 * foundational-political axis, four derived political axes, one
 * theory-of-history axis. See `Bedrock Political Compass.md` in the
 * vault for the reasoning.
 *
 * Positive score = the "posLabel" pole. Negative = "negLabel". 0 = neutral.
 * `name` is the reader-friendly label; `technicalName` is the academic term
 * for the glossary.
 */
export const AXES: Record<AxisKey, AxisDef> = {
  epistemology: {
    key: "epistemology",
    name: "Truth",
    technicalName: "Epistemology",
    short: "Truth",
    color: "#f43f5e",
    posLabel: "Discovered",
    negLabel: "Made",
    question:
      "Is political truth mind-independent and discoverable, or is it constructed by human activity and perspective?",
    posDescription:
      "You believe there are real, knowable truths about politics that hold regardless of who is doing the knowing — akin to the laws of geometry. History, human nature, and power operate by patterns that a serious thinker can uncover.",
    negDescription:
      "You believe political 'truths' are always shaped by the perspective, culture, and interests of whoever is doing the claiming. There is no view from nowhere; what one culture calls justice another may rightly call oppression.",
    layer: "foundation",
  },
  anthropology: {
    key: "anthropology",
    name: "Human Nature",
    technicalName: "Anthropology",
    short: "Human",
    color: "#22c55e",
    posLabel: "Good",
    negLabel: "Evil",
    question: "Are humans naturally good, or naturally evil?",
    posDescription:
      "You see people as basically good, cooperative, and decent when institutions and conditions permit it — the Rousseau / Marx / Locke lineage. Bad behavior comes from bad systems, not bad nature.",
    negDescription:
      "You see people as naturally competitive, self-interested, or aggressive — the Hobbes / Machiavelli / Augustinian lineage. Order requires constraint because without it, people will predate on each other.",
    layer: "foundation",
  },
  politicalOntology: {
    key: "politicalOntology",
    name: "What Politics Is",
    technicalName: "Political Ontology",
    short: "Politics",
    color: "#3b82f6",
    posLabel: "Power",
    negLabel: "Ethics",
    question:
      "Does politics have its own irreducible logic, or does it derive from something more fundamental (morality, economics, culture, divine order)?",
    posDescription:
      "You believe politics is its own domain, with its own laws — power, coalition, force, friend/enemy — that cannot be reduced to ethics, economics, or theology. Rothfeld: 'politics is the adjudication of power.' Schmitt, Weber, Machiavelli.",
    negDescription:
      "You believe politics is really an expression of something more fundamental — morality (Kant), economics (Marx), culture (Burke), or divine order (Aquinas). Get the deeper thing right and politics follows.",
    layer: "foundation",
  },
  universalism: {
    key: "universalism",
    name: "Us or Everyone",
    technicalName: "Universalism ↔ Particularism",
    short: "Scope",
    color: "#a855f7",
    posLabel: "Everyone",
    negLabel: "Us",
    question:
      "One humanity and one truth for all, or particular peoples with particular traditions?",
    posDescription:
      "You see politics as ultimately about all humans everywhere — the same rights, the same moral standards, the same standards of justice apply in Tokyo, Tehran, and Nashville. Kant, Marx, Aquinas, Enlightenment liberalism.",
    negDescription:
      "You see politics as necessarily anchored in specific peoples, traditions, and places. A nation, a culture, a heritage is the real frame for political life. Burke, de Benoist, most nationalisms.",
    layer: "political",
  },
  individualism: {
    key: "individualism",
    name: "Person or Group",
    technicalName: "Individual ↔ Collective",
    short: "Unit",
    color: "#f97316",
    posLabel: "Person",
    negLabel: "Group",
    question: "Whose flourishing is politics for — persons or peoples?",
    posDescription:
      "You believe the individual person is the fundamental unit of political concern. Rights belong to individuals; groups have interests, but only persons have moral standing. Locke, Rothbard, Mill.",
    negDescription:
      "You believe the collective — the class, the nation, the community, the people — is a real political agent with real needs and a real will. Individualism, taken far, hollows out the bonds people need. Rousseau, Marx, Burke.",
    layer: "political",
  },
  order: {
    key: "order",
    name: "Order",
    technicalName: "Order Formation",
    short: "Order",
    color: "#06b6d4",
    posLabel: "Designed",
    negLabel: "Grown",
    question:
      "Can legitimate order be designed from first principles, or must it accumulate organically?",
    posDescription:
      "You believe political order should be built deliberately from clear principles — a designed constitution, planned institutions, blueprint reform. Hobbes, Rawls, Lenin, the Enlightenment.",
    negDescription:
      "You believe order must accumulate over generations, and traditions carry wisdom no single designer can articulate. Blueprint reform tends to break more than it builds. Burke, Oakeshott, Hayek.",
    layer: "political",
  },
  authority: {
    key: "authority",
    name: "Who Rules",
    technicalName: "Authority",
    short: "Auth",
    color: "#eab308",
    posLabel: "The Few",
    negLabel: "The Many",
    question: "Who legitimately rules — the many or the organized few?",
    posDescription:
      "You believe political decisions require expertise, discipline, or cadre training the disorganized many lack. Every stable regime is really run by an organized minority. Machiavelli, Yarvin, Lenin, the Italian School.",
    negDescription:
      "You believe political power should ultimately answer to the many, and that ordinary citizens understand their own situation better than credentialed experts. Populism, direct democracy, Ron Paul, Rothbard.",
    layer: "political",
  },
  temporal: {
    key: "temporal",
    name: "History's Arc",
    technicalName: "Temporal Orientation",
    short: "Arc",
    color: "#ec4899",
    posLabel: "Progress",
    negLabel: "Decline",
    question: "Does history have a positive arc, or has the past been better?",
    posDescription:
      "You believe history moves toward greater knowledge, freedom, and human flourishing. The future will be morally superior to the present. Marx, Kant, Enlightenment progressivism, Whig history.",
    negDescription:
      "You believe things have gotten worse and the task of politics is to preserve or restore what was well-made in the past. Burke, Yarvin, paleoconservatism, most traditionalisms.",
    layer: "political",
  },
}

export const AXIS_ORDER: AxisKey[] = [
  "epistemology",
  "anthropology",
  "politicalOntology",
  "universalism",
  "individualism",
  "order",
  "authority",
  "temporal",
]
