import type { AxisKey } from "./axes"
import type { UserScores } from "./questions"

/**
 * Compact score encoding for URL sharing.
 * Order is fixed: epist, anthro, polOnt, univ, ind, order, auth, temp.
 * Format: comma-separated integers. Example: `?s=7,-8,10,-1,5,-6,4,-3`
 * Range per value: [-10, 10] inclusive.
 */

const AXIS_ORDER_FOR_SHARE: AxisKey[] = [
  "epistemology",
  "anthropology",
  "politicalOntology",
  "universalism",
  "individualism",
  "order",
  "authority",
  "temporal",
]

export function encodeScores(scores: UserScores): string {
  return AXIS_ORDER_FOR_SHARE.map((k) => Math.round(scores[k])).join(",")
}

export function decodeScores(encoded: string): UserScores | null {
  // Extract the first 8 integers (optionally negative) from the string,
  // ignoring any trailing garbage. iOS's native share sheet sometimes
  // concatenates share text into the URL when "Copy" is chosen, so a
  // pasted link can look like `?s=7,-8,10,-1,5,-6,4,-3 My result — ...`
  // — we still want to succeed.
  const matches = encoded.match(/-?\d+/g)
  if (!matches || matches.length < AXIS_ORDER_FOR_SHARE.length) return null
  const parts = matches.slice(0, AXIS_ORDER_FOR_SHARE.length).map(Number)
  if (parts.some((n) => !Number.isFinite(n) || n < -10 || n > 10)) return null
  const out: Partial<UserScores> = {}
  AXIS_ORDER_FOR_SHARE.forEach((k, i) => {
    out[k] = parts[i]
  })
  return out as UserScores
}

/** Full shareable URL for a set of scores (origin + `?s=...`). */
export function buildShareUrl(scores: UserScores, origin?: string): string {
  const base =
    origin ??
    (typeof window !== "undefined" ? window.location.origin : "https://simulacras-novas.com")
  return `${base}/?s=${encodeScores(scores)}`
}
