"use client"

import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { useSearchParams } from "next/navigation"
import Compass from "./Compass"
import AxisPicker from "./AxisPicker"
import Assessment from "./Assessment"
import Results from "./Results"
import ProfileCard from "./ProfileCard"
import ShareButton from "./ShareButton"
import type { AxisKey } from "@/data/axes"
import type { UserScores } from "@/data/questions"
import { thinkers } from "@/data/thinkers"
import { profiles, findProfile } from "@/data/profiles"
import { decodeScores } from "@/data/share"

type View = "chart" | "assessment" | "results"

const PRESETS: { name: string; axes: [AxisKey, AxisKey, AxisKey] }[] = [
  { name: "Bedrock", axes: ["epistemology", "anthropology", "politicalOntology"] },
  { name: "Ideology", axes: ["universalism", "individualism", "politicalOntology"] },
  { name: "Strategy", axes: ["order", "authority", "politicalOntology"] },
  { name: "Foundations", axes: ["epistemology", "anthropology", "temporal"] },
  { name: "Historical arc", axes: ["temporal", "order", "authority"] },
]

export default function CompassApp() {
  const searchParams = useSearchParams()
  const sharedParam = searchParams?.get("s") ?? null

  const [view, setView] = useState<View>("chart")
  const [x, setX] = useState<AxisKey>("epistemology")
  const [y, setY] = useState<AxisKey>("anthropology")
  const [z, setZ] = useState<AxisKey>("politicalOntology")
  const [userScores, setUserScores] = useState<UserScores | null>(null)
  const [openProfile, setOpenProfile] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isShared, setIsShared] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // On landing: if URL has `?s=...`, decode and jump straight to Results.
  useEffect(() => {
    if (!sharedParam) return
    const parsed = decodeScores(sharedParam)
    if (parsed) {
      setUserScores(parsed)
      setIsShared(true)
      setView("results")
    }
  }, [sharedParam])

  const clickableProfiles = useMemo(
    () => new Set(profiles.map((p) => p.name)),
    [],
  )

  const setAxis = (dim: "x" | "y" | "z", axis: AxisKey) => {
    if (dim === "x") setX(axis)
    if (dim === "y") setY(axis)
    if (dim === "z") setZ(axis)
  }

  const applyPreset = (axes: [AxisKey, AxisKey, AxisKey]) => {
    setX(axes[0])
    setY(axes[1])
    setZ(axes[2])
    setMenuOpen(false)
  }

  const currentPreset = PRESETS.find(
    (p) => p.axes[0] === x && p.axes[1] === y && p.axes[2] === z,
  )

  if (view === "assessment") {
    return (
      <Assessment
        onComplete={(scores) => {
          setUserScores(scores)
          setIsShared(false)
          setView("results")
        }}
        onCancel={() => setView("chart")}
      />
    )
  }

  if (view === "results" && userScores) {
    return (
      <Results
        scores={userScores}
        isShared={isShared}
        onBack={() => setView("chart")}
        onRetake={() => setView("assessment")}
        onTakeYours={() => setView("assessment")}
        onOpenChart={(scores) => {
          setUserScores(scores)
          setView("chart")
        }}
      />
    )
  }

  // Default: chart view
  const activeProfile = openProfile ? findProfile(openProfile) : null
  const activeThinker = openProfile
    ? thinkers.find((t) => t.name === openProfile)
    : null

  // Controls block — reused for desktop right column AND mobile drawer.
  const controls = (
    <div className="flex flex-col gap-3 w-full">
      <AxisPicker x={x} y={y} z={z} onChange={setAxis} />

      <div className="bg-slate-900/85 backdrop-blur border border-slate-700 rounded-lg p-3 shadow-xl">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-2">
          Perspective presets
        </div>
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((preset) => {
            const active = currentPreset?.name === preset.name
            return (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset.axes)}
                className={`text-[11px] font-mono px-2 py-1 rounded border transition-colors cursor-pointer ${
                  active
                    ? "bg-slate-100 text-slate-900 border-slate-100"
                    : "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500 hover:text-slate-100"
                }`}
              >
                {preset.name}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setMenuOpen(false)
            setView("assessment")
          }}
          className="w-full text-base px-6 py-4 rounded-lg bg-pink-500 hover:bg-pink-400 text-white font-mono font-bold cursor-pointer shadow-2xl transition-colors tracking-wide"
        >
          {userScores ? "Retake the compass →" : "Take the compass →"}
        </button>
        {userScores && (
          <>
            <button
              onClick={() => {
                setMenuOpen(false)
                setView("results")
              }}
              className="block mt-2 w-full text-xs px-3 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono cursor-pointer"
            >
              See your results
            </button>
            <div className="mt-2 [&>div]:w-full [&>div>button]:w-full [&>div>button]:justify-center">
              <ShareButton scores={userScores} />
            </div>
          </>
        )}
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-slate-950 text-slate-100 overflow-hidden">
      <Compass
        xAxis={x}
        yAxis={y}
        zAxis={z}
        userScores={userScores ?? undefined}
        onProfileClick={(name) => setOpenProfile(name)}
        clickableProfiles={clickableProfiles}
      />

      {/* Header — title top-left. Compressed on mobile. */}
      <header className="absolute top-0 left-0 z-10 p-4 md:p-6 pointer-events-none max-w-[70%] md:max-w-none">
        <h1 className="text-lg md:text-2xl font-bold tracking-tight">
          Simulacras Novas
        </h1>
        <p className="text-[10px] md:text-[11px] text-pink-300/80 mt-0.5 font-mono tracking-wide">
          The world's deepest political compass
        </p>
        <p className="hidden md:block text-xs text-slate-400 mt-2 max-w-md leading-relaxed">
          Historical thinkers on 8 philosophical axes. Pick any 3 to plot in
          the cube. Drag to rotate • scroll to zoom • hover for detail • click
          any point for the full profile.
        </p>
      </header>

      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden absolute top-4 right-4 z-20 w-11 h-11 rounded-lg bg-slate-900/90 border border-slate-700 flex flex-col items-center justify-center gap-1 shadow-xl backdrop-blur cursor-pointer"
        aria-label="Open controls"
      >
        <span className="w-5 h-0.5 bg-slate-200 rounded" />
        <span className="w-5 h-0.5 bg-slate-200 rounded" />
        <span className="w-5 h-0.5 bg-slate-200 rounded" />
      </button>

      {/* Desktop controls — right column, hidden on mobile */}
      <div className="hidden md:flex absolute top-6 right-6 z-10 flex-col gap-3 pointer-events-auto w-[320px]">
        {controls}
      </div>

      {/* Mobile drawer — portal to body + max z-index so R3F Html labels
          (which portal to body themselves) can't stack above us. */}
      {menuOpen &&
        mounted &&
        createPortal(
          <div
            className="md:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-sm"
            style={{ zIndex: 2147483647 }}
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="absolute right-0 top-0 h-full w-[85vw] max-w-[360px] bg-slate-950 border-l border-slate-800 shadow-2xl overflow-y-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  Controls
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 text-slate-400 hover:text-white text-2xl leading-none cursor-pointer"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
              {controls}
            </div>
          </div>,
          document.body,
        )}

      <footer className="hidden md:block absolute bottom-4 left-6 z-10 text-[10px] text-slate-600 pointer-events-none font-mono">
        v0.14 — Simulacras Novas · 55 thinkers · 8 axes · selectable
        projection · click any face for the full profile
      </footer>

      {activeProfile && activeThinker && (
        <ProfileCard
          profile={activeProfile}
          scores={{
            epistemology: activeThinker.epistemology,
            anthropology: activeThinker.anthropology,
            politicalOntology: activeThinker.politicalOntology,
            universalism: activeThinker.universalism,
            individualism: activeThinker.individualism,
            order: activeThinker.order,
            authority: activeThinker.authority,
            temporal: activeThinker.temporal,
          }}
          onClose={() => setOpenProfile(null)}
        />
      )}
    </div>
  )
}
