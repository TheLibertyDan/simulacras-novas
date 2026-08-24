"use client"

import { useState, useMemo } from "react"
import { AXES, AXIS_ORDER, type AxisKey } from "@/data/axes"
import type { UserScores } from "@/data/questions"
import { distance } from "@/data/questions"
import { thinkers } from "@/data/thinkers"
import { profiles, findProfile } from "@/data/profiles"
import { composeDescriptor, shortLabel } from "@/data/descriptor"
import ProfileCard, { Portrait } from "./ProfileCard"
import AxisInfo from "./AxisInfo"

interface ResultsProps {
  scores: UserScores
  onBack: () => void
  onRetake: () => void
  onOpenChart: (scores: UserScores) => void
}

export default function Results({
  scores,
  onBack,
  onRetake,
  onOpenChart,
}: ResultsProps) {
  const [openProfile, setOpenProfile] = useState<string | null>(null)
  const [openAxisInfo, setOpenAxisInfo] = useState<AxisKey | null>(null)

  // Every thinker with a profile shows up in comparisons — all 55, unified.
  const profileNames = useMemo(() => new Set(profiles.map((p) => p.name)), [])
  const comparableThinkers = thinkers.filter((t) => profileNames.has(t.name))

  const ranked = useMemo(() => {
    return comparableThinkers
      .map((t) => ({
        thinker: t,
        distance: distance(scores, t),
      }))
      .sort((a, b) => a.distance - b.distance)
  }, [scores, comparableThinkers])

  const descriptor = useMemo(() => composeDescriptor(scores), [scores])
  const label = useMemo(() => shortLabel(scores), [scores])

  const nearest = ranked[0]
  const farthest = ranked[ranked.length - 1]

  const activeProfile = openProfile ? findProfile(openProfile) : null

  const asScores = (t: (typeof thinkers)[number]): Record<AxisKey, number> => ({
    epistemology: t.epistemology,
    anthropology: t.anthropology,
    politicalOntology: t.politicalOntology,
    universalism: t.universalism,
    individualism: t.individualism,
    order: t.order,
    authority: t.authority,
    temporal: t.temporal,
  })

  return (
    <div className="fixed inset-0 bg-slate-950 text-slate-100 overflow-y-auto p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Your Simulacras Novas</h1>
            <p className="text-sm text-slate-400 mt-1">
              Where you land on eight philosophical axes — and who you think like.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onRetake}
              className="text-xs px-3 py-1.5 rounded border border-slate-700 text-slate-300 hover:border-slate-500 cursor-pointer font-mono"
            >
              Retake
            </button>
            <button
              onClick={onBack}
              className="text-xs px-3 py-1.5 rounded border border-slate-700 text-slate-300 hover:border-slate-500 cursor-pointer font-mono"
            >
              ← Chart
            </button>
          </div>
        </div>

        {/* Hyper-philosophical one-liner descriptor */}
        <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/30 border border-slate-800 rounded-xl p-6 mb-6">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-3">
            You are
          </div>
          <p className="text-lg md:text-xl text-slate-100 leading-snug font-medium">
            {descriptor}
          </p>
          <div className="mt-3 text-xs font-mono text-slate-500">
            in short: <span className="text-slate-300">{label}</span>
          </div>
        </div>

        {/* Nearest / farthest headline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-900/70 border border-emerald-800/40 rounded-xl p-5">
            <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono mb-2">
              Closest to
            </div>
            <button
              onClick={() => setOpenProfile(nearest.thinker.name)}
              className="flex items-center gap-3 group w-full text-left cursor-pointer"
            >
              <ProfilePic name={nearest.thinker.name} size={56} />
              <div>
                <div className="text-lg font-bold group-hover:text-white transition-colors">
                  {findProfile(nearest.thinker.name)?.fullName ?? nearest.thinker.name}
                </div>
                <div className="text-xs font-mono text-slate-500">
                  distance {nearest.distance.toFixed(1)} · click for profile
                </div>
              </div>
            </button>
          </div>
          <div className="bg-slate-900/70 border border-rose-800/40 rounded-xl p-5">
            <div className="text-[10px] uppercase tracking-widest text-rose-400 font-mono mb-2">
              Furthest from
            </div>
            <button
              onClick={() => setOpenProfile(farthest.thinker.name)}
              className="flex items-center gap-3 group w-full text-left cursor-pointer"
            >
              <ProfilePic name={farthest.thinker.name} size={56} />
              <div>
                <div className="text-lg font-bold group-hover:text-white transition-colors">
                  {findProfile(farthest.thinker.name)?.fullName ?? farthest.thinker.name}
                </div>
                <div className="text-xs font-mono text-slate-500">
                  distance {farthest.distance.toFixed(1)} · click for profile
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Your scores */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 mb-8">
          <h2 className="text-sm uppercase tracking-widest text-slate-500 font-mono mb-4">
            Your scores across the 8 axes
          </h2>
          <div className="space-y-3">
            {AXIS_ORDER.map((axisKey) => {
              const axis = AXES[axisKey]
              const score = scores[axisKey]
              const pct = ((score + 10) / 20) * 100
              return (
                <div key={axisKey} className="flex items-center gap-3">
                  <button
                    onClick={() => setOpenAxisInfo(axisKey)}
                    className="w-36 flex-shrink-0 text-left cursor-pointer group"
                    title={`What is ${axis.name}?`}
                  >
                    <div
                      className="text-xs font-semibold group-hover:underline decoration-dotted underline-offset-2"
                      style={{ color: axis.color }}
                    >
                      {axis.name}
                    </div>
                    <div className="text-[9px] font-mono text-slate-600 group-hover:text-slate-400 mt-0.5 italic">
                      ({axis.technicalName})
                    </div>
                  </button>
                  <div className="flex-1 relative h-2 bg-slate-800 rounded-full">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-full w-px bg-slate-600"
                      style={{ left: "50%" }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-slate-950 shadow-md"
                      style={{
                        left: `${pct}%`,
                        transform: "translate(-50%, -50%)",
                        background: axis.color,
                      }}
                    />
                  </div>
                  <div className="w-16 text-right text-xs font-mono text-slate-400 flex-shrink-0">
                    {score > 0 ? "+" : ""}{score}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-600">
            <span>← negative pole</span>
            <span>neutral (0)</span>
            <span>positive pole →</span>
          </div>
        </div>

        {/* All 9 subjects — click to open profile */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 mb-8">
          <h2 className="text-sm uppercase tracking-widest text-slate-500 font-mono mb-4">
            Compare to — click any face for the full profile
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
            {profiles.map((profile) => {
              const t = thinkers.find((x) => x.name === profile.name)
              const d = t ? distance(scores, asScores(t)) : 0
              return (
                <button
                  key={profile.name}
                  onClick={() => setOpenProfile(profile.name)}
                  className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer group"
                >
                  <Portrait
                    src={profile.image}
                    alt={profile.fullName}
                    size={56}
                    fallbackName={profile.fullName}
                  />
                  <div className="text-[10px] text-center text-slate-300 leading-tight font-medium">
                    {profile.name}
                  </div>
                  <div className="text-[9px] font-mono text-slate-500">
                    {d.toFixed(1)}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* CTA — see yourself on the chart */}
        <div className="text-center">
          <button
            onClick={() => onOpenChart(scores)}
            className="inline-block text-sm px-6 py-3 rounded-lg bg-slate-100 text-slate-900 hover:bg-white font-mono font-semibold cursor-pointer transition-colors shadow-lg"
          >
            See yourself on the 3D chart →
          </button>
        </div>
      </div>

      {activeProfile && (
        <ProfileCard
          profile={activeProfile}
          scores={
            findProfile(activeProfile.name)
              ? asScores(thinkers.find((t) => t.name === activeProfile.name)!)
              : scores
          }
          onClose={() => setOpenProfile(null)}
        />
      )}

      {openAxisInfo && (
        <AxisInfo axis={openAxisInfo} onClose={() => setOpenAxisInfo(null)} />
      )}
    </div>
  )
}

function ProfilePic({ name, size }: { name: string; size: number }) {
  const profile = findProfile(name)
  if (!profile) return null
  return (
    <Portrait
      src={profile.image}
      alt={profile.fullName}
      size={size}
      fallbackName={profile.fullName}
    />
  )
}
