import type { AxisKey } from "./axes"
import type { UserScores } from "./questions"

/**
 * Descriptor bands per axis. For each axis, the score band → descriptor
 * words. These get composed into a hyper-philosophical one-liner about
 * where the user actually sits.
 *
 * Band cutoffs: strong ≥ 7, mild 3–6, near-neutral < 3.
 */
type Band = "strongPos" | "mildPos" | "neutral" | "mildNeg" | "strongNeg"

function bandOf(score: number): Band {
  if (score >= 7) return "strongPos"
  if (score >= 3) return "mildPos"
  if (score > -3) return "neutral"
  if (score > -7) return "mildNeg"
  return "strongNeg"
}

const DESCRIPTORS: Record<AxisKey, Record<Band, string>> = {
  epistemology: {
    strongPos: "objectivist",
    mildPos: "empirical",
    neutral: "epistemically-mixed",
    mildNeg: "pragmatist",
    strongNeg: "perspectivist",
  },
  anthropology: {
    strongPos: "Rousseauian",
    mildPos: "hopeful",
    neutral: "anthropologically-moderate",
    mildNeg: "skeptical",
    strongNeg: "Hobbesian",
  },
  politicalOntology: {
    strongPos: "realist",
    mildPos: "operationally-realist",
    neutral: "ontologically-mixed",
    mildNeg: "moralist-leaning",
    strongNeg: "moralist",
  },
  universalism: {
    strongPos: "cosmopolitan",
    mildPos: "universalist",
    neutral: "mixed-scope",
    mildNeg: "particularist",
    strongNeg: "nativist-particularist",
  },
  individualism: {
    strongPos: "Lockean-individualist",
    mildPos: "individualist",
    neutral: "person-community-balanced",
    mildNeg: "communitarian",
    strongNeg: "collectivist",
  },
  order: {
    strongPos: "constructivist",
    mildPos: "reformist",
    neutral: "order-eclectic",
    mildNeg: "traditionalist",
    strongNeg: "Burkean",
  },
  authority: {
    strongPos: "vanguardist",
    mildPos: "cadre-leaning",
    neutral: "authority-mixed",
    mildNeg: "populist-leaning",
    strongNeg: "populist",
  },
  temporal: {
    strongPos: "meliorist",
    mildPos: "progressive",
    neutral: "cyclical",
    mildNeg: "declinist",
    strongNeg: "restorationist",
  },
}

/**
 * Produce a hyper-philosophical one-liner from the user's scores.
 *
 * Format: "A [ANTHRO] [PolOnt] [ORDER descriptor if strong] operating in a
 *          [IND] [U/P] ends-frame with [AUTH] instincts and a [TEMP] arc."
 *
 * Pieces get elided when the score is near-neutral (< 3 absolute) — the
 * descriptor stays punchy and doesn't spam "moderate" labels.
 */
export function composeDescriptor(scores: UserScores): string {
  const d = (k: AxisKey) => DESCRIPTORS[k][bandOf(scores[k])]
  const strong = (k: AxisKey) => Math.abs(scores[k]) >= 3

  // Backbone: Anthropology + Political Ontology — the "what they think politics is."
  const anthro = strong("anthropology") ? d("anthropology") : ""
  const ontology = d("politicalOntology") // always show ontology

  // Second clause: their institutional/order + universalist frame.
  const order = strong("order") ? d("order") : ""
  const ind = strong("individualism") ? d("individualism") : ""
  const up = strong("universalism") ? d("universalism") : ""

  // Modifiers: authority + temporal.
  const auth = strong("authority") ? d("authority") : ""
  const temp = strong("temporal") ? d("temporal") : ""

  // Epistemology is a background layer — only add if strong.
  const epist = Math.abs(scores.epistemology) >= 5 ? d("epistemology") : ""

  const primary = [anthro, ontology].filter(Boolean).join(" ")
  const orderClause = order ? ` with ${order} instincts` : ""
  const frameParts = [ind, up].filter(Boolean).join(" ")
  const frame = frameParts ? `, operating in a ${frameParts} ends-frame` : ""
  const authClause = auth ? ` — ${auth} on authority` : ""
  const tempClause = temp ? ` — ${temp} on the arc of history` : ""
  const epistClause = epist ? ` with ${epist} foundations` : ""

  const capitalized = primary.charAt(0).toUpperCase() + primary.slice(1)

  return `A ${capitalized}${orderClause}${frame}${authClause}${tempClause}${epistClause}.`
}

/**
 * Shorter tagline — just the 2-3 most extreme features.
 */
export function shortLabel(scores: UserScores): string {
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
  const top = axes
    .map((k) => ({ k, abs: Math.abs(scores[k]) }))
    .sort((a, b) => b.abs - a.abs)
    .slice(0, 3)
    .filter((x) => x.abs >= 3)
    .map((x) => DESCRIPTORS[x.k][bandOf(scores[x.k])])

  if (top.length === 0) return "moderate all around"
  return top.join(" · ")
}
