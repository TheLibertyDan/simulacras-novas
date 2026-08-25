"use client"

import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { AXES, AXIS_ORDER, type AxisKey } from "@/data/axes"
import type { UserScores } from "@/data/questions"
import { distance } from "@/data/questions"
import { decodeScores } from "@/data/share"
import { composeDescriptor, shortLabel } from "@/data/descriptor"
import AxisInfo from "./AxisInfo"

interface CompareModalProps {
  yourScores: UserScores
  onClose: () => void
}

export default function CompareModal({ yourScores, onClose }: CompareModalProps) {
  const [input, setInput] = useState("")
  const [friendScores, setFriendScores] = useState<UserScores | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [openAxisInfo, setOpenAxisInfo] = useState<AxisKey | null>(null)

  useEffect(() => {
    setMounted(true)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  const handleCompare = () => {
    const trimmed = input.trim()
    if (!trimmed) {
      setError("Paste your friend's share URL or their 8 scores.")
      return
    }
    const decoded = decodeScores(trimmed)
    if (!decoded) {
      setError(
        "Couldn't parse those. Paste a share URL like simulacras-novas.com/?s=7,-8,10,-1,5,-6,4,-3 or the 8 numbers separated by commas.",
      )
      return
    }
    setError(null)
    setFriendScores(decoded)
  }

  const reset = () => {
    setFriendScores(null)
    setInput("")
    setError(null)
  }

  if (!mounted) return null

  const modal = (
    <div
      className="fixed inset-0 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-4"
      style={{ zIndex: 2147483647 }}
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header — always visible so × is reachable at any scroll position */}
        <div className="flex items-start gap-3 p-5 md:p-6 border-b border-slate-800 flex-shrink-0 bg-slate-900">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl md:text-2xl font-bold text-slate-100">
              Compare to a friend
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {friendScores
                ? "Head-to-head across the 8 axes."
                : "Paste their share URL (or their 8 scores) to see how you line up."}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="text-slate-400 hover:text-white text-3xl leading-none flex-shrink-0 cursor-pointer -mt-1 -mr-1 w-9 h-9 flex items-center justify-center rounded hover:bg-slate-800"
            aria-label="Close and go back to your results"
            title="Close and go back to your results"
          >
            ×
          </button>
        </div>

        {/* Scrolling body */}
        <div className="overflow-y-auto flex-1">
          {!friendScores ? (
            <InputForm
              input={input}
              setInput={setInput}
              error={error}
              onCompare={handleCompare}
            />
          ) : (
            <ComparisonView
              yourScores={yourScores}
              friendScores={friendScores}
              onReset={reset}
              onOpenAxisInfo={setOpenAxisInfo}
            />
          )}
        </div>
      </div>

      {/* Axis info modal opens on top of Compare */}
      {openAxisInfo && (
        <AxisInfo axis={openAxisInfo} onClose={() => setOpenAxisInfo(null)} />
      )}
    </div>
  )

  return createPortal(modal, document.body)
}

function InputForm({
  input,
  setInput,
  error,
  onCompare,
}: {
  input: string
  setInput: (s: string) => void
  error: string | null
  onCompare: () => void
}) {
  return (
    <div className="p-5 md:p-6">
      <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-2">
        Friend's share URL or scores
      </label>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste https://simulacras-novas.com/?s=7,-8,10,-1,5,-6,4,-3 or just the 8 numbers, comma-separated"
        className="w-full min-h-[100px] bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-lg p-3 font-mono focus:outline-none focus:border-slate-500 resize-none"
      />
      {error && (
        <div className="mt-3 text-xs text-rose-400 font-mono leading-relaxed">
          {error}
        </div>
      )}
      <div className="mt-4 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div className="text-[10px] text-slate-500 font-mono leading-relaxed">
          The 8 numbers, in order:
          <br />
          Truth · Human Nature · Politics · Us/Everyone · Person/Group · Order ·
          Authority · Arc
        </div>
        <button
          onClick={onCompare}
          className="w-full md:w-auto text-sm px-6 py-3 rounded-lg bg-pink-500 hover:bg-pink-400 text-white font-mono font-bold cursor-pointer shadow-lg"
        >
          Compare →
        </button>
      </div>
    </div>
  )
}

function ComparisonView({
  yourScores,
  friendScores,
  onReset,
  onOpenAxisInfo,
}: {
  yourScores: UserScores
  friendScores: UserScores
  onReset: () => void
  onOpenAxisInfo: (axis: AxisKey) => void
}) {
  const d = distance(yourScores, friendScores)
  const yourLabel = shortLabel(yourScores)
  const friendLabel = shortLabel(friendScores)

  const sortedByDivergence = useMemo(() => {
    return [...AXIS_ORDER]
      .map((key) => ({
        key,
        you: yourScores[key],
        friend: friendScores[key],
        diff: Math.abs(yourScores[key] - friendScores[key]),
      }))
      .sort((a, b) => b.diff - a.diff)
  }, [yourScores, friendScores])

  // Interpretation of distance in 8-space (max is sqrt(8 * 20²) ≈ 56.6).
  const closenessLabel =
    d < 10
      ? "very close — you basically live in the same neighborhood"
      : d < 18
        ? "close — meaningful alignment with real disagreements"
        : d < 28
          ? "moderate — you share some bedrock, disagree on plenty"
          : d < 40
            ? "far — mostly a different orientation to politics"
            : "very far — you're on opposite sides of the bedrock map"

  const biggestGap = sortedByDivergence[0]
  const biggestAlign = sortedByDivergence[sortedByDivergence.length - 1]

  return (
    <div className="p-5 md:p-6 space-y-6">
      {/* Distance headline */}
      <div className="text-center">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-2">
          Distance
        </div>
        <div className="text-4xl md:text-5xl font-bold text-slate-100 leading-none">
          {d.toFixed(1)}
        </div>
        <div className="text-xs text-slate-400 mt-2 italic max-w-md mx-auto">
          {closenessLabel}
        </div>
      </div>

      {/* Both taglines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-slate-800/60 border border-yellow-500/40 rounded-lg p-3">
          <div className="text-[10px] uppercase tracking-widest text-yellow-300 font-mono mb-1">
            You
          </div>
          <div className="text-xs text-slate-300 font-mono">{yourLabel}</div>
        </div>
        <div className="bg-slate-800/60 border border-pink-500/40 rounded-lg p-3">
          <div className="text-[10px] uppercase tracking-widest text-pink-300 font-mono mb-1">
            Friend
          </div>
          <div className="text-xs text-slate-300 font-mono">{friendLabel}</div>
        </div>
      </div>

      {/* Axis-by-axis bars — both dots, sorted by divergence */}
      <div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-3">
          Axis-by-axis · sorted by biggest gap
        </div>
        <div className="space-y-3">
          {sortedByDivergence.map(({ key, you, friend, diff }) => {
            const axis = AXES[key]
            const youPct = ((you + 10) / 20) * 100
            const friendPct = ((friend + 10) / 20) * 100
            return (
              <div key={key} className="flex items-center gap-2 md:gap-3">
                <button
                  onClick={() => onOpenAxisInfo(key)}
                  className="w-20 md:w-28 flex-shrink-0 text-left cursor-pointer group"
                  title={`What is ${axis.name}?`}
                >
                  <span
                    className="text-[10px] md:text-xs font-semibold leading-tight group-hover:underline decoration-dotted underline-offset-2 inline-flex items-center gap-1"
                    style={{ color: axis.color }}
                  >
                    {axis.name}
                    <span
                      className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-current text-[8px] opacity-60 group-hover:opacity-100"
                      aria-hidden
                    >
                      ⓘ
                    </span>
                  </span>
                </button>
                <div className="flex-1 relative h-4 bg-slate-800 rounded-full">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-full w-px bg-slate-600"
                    style={{ left: "50%" }}
                  />
                  {/* Line connecting the two dots */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-slate-600"
                    style={{
                      left: `${Math.min(youPct, friendPct)}%`,
                      width: `${Math.abs(youPct - friendPct)}%`,
                    }}
                  />
                  {/* You dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-slate-950 shadow-md bg-yellow-400"
                    style={{
                      left: `${youPct}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    title={`You: ${you}`}
                  />
                  {/* Friend dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-slate-950 shadow-md bg-pink-400"
                    style={{
                      left: `${friendPct}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    title={`Friend: ${friend}`}
                  />
                </div>
                <div className="w-8 md:w-12 text-right text-[10px] md:text-xs font-mono text-slate-400 flex-shrink-0">
                  Δ{diff}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400" /> You
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink-400" /> Friend
            </span>
          </div>
          <span>Δ = point gap</span>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-rose-950/30 border border-rose-800/40 rounded-lg p-3">
          <div className="text-[10px] uppercase tracking-widest text-rose-400 font-mono mb-1">
            Biggest disagreement
          </div>
          <button
            onClick={() => onOpenAxisInfo(biggestGap.key)}
            className="text-sm font-semibold inline-flex items-center gap-1 hover:underline decoration-dotted underline-offset-2 cursor-pointer"
            style={{ color: AXES[biggestGap.key].color }}
          >
            {AXES[biggestGap.key].name}
            <span
              className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-current text-[8px] opacity-60"
              aria-hidden
            >
              ⓘ
            </span>
          </button>
          <div className="text-xs text-slate-400 mt-1 font-mono">
            you {biggestGap.you > 0 ? "+" : ""}
            {biggestGap.you} · friend {biggestGap.friend > 0 ? "+" : ""}
            {biggestGap.friend} · Δ{biggestGap.diff}
          </div>
        </div>
        <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-lg p-3">
          <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono mb-1">
            Biggest agreement
          </div>
          <button
            onClick={() => onOpenAxisInfo(biggestAlign.key)}
            className="text-sm font-semibold inline-flex items-center gap-1 hover:underline decoration-dotted underline-offset-2 cursor-pointer"
            style={{ color: AXES[biggestAlign.key].color }}
          >
            {AXES[biggestAlign.key].name}
            <span
              className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-current text-[8px] opacity-60"
              aria-hidden
            >
              ⓘ
            </span>
          </button>
          <div className="text-xs text-slate-400 mt-1 font-mono">
            you {biggestAlign.you > 0 ? "+" : ""}
            {biggestAlign.you} · friend {biggestAlign.friend > 0 ? "+" : ""}
            {biggestAlign.friend} · Δ{biggestAlign.diff}
          </div>
        </div>
      </div>

      {/* Reset */}
      <div className="flex justify-center">
        <button
          onClick={onReset}
          className="text-xs px-4 py-2 rounded border border-slate-700 text-slate-300 hover:border-slate-500 cursor-pointer font-mono"
        >
          Compare to someone else
        </button>
      </div>
    </div>
  )
}
