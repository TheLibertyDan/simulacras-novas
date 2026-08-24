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
  const parts = encoded.split(",").map((s) => Number(s.trim()))
  if (parts.length !== AXIS_ORDER_FOR_SHARE.length) return null
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
    (typeof window !== "undefined" ? window.location.origin : "https://simulacras-novas.vercel.app")
  return `${base}/?s=${encodeScores(scores)}`
}
