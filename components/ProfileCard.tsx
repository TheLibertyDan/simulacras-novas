"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { AXES, AXIS_ORDER, type AxisKey } from "@/data/axes"
import type { Profile } from "@/data/profiles"

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("")
}

/** Portrait with graceful fallback to initials when no image is available. */
export function Portrait({
  src,
  alt,
  size,
  fallbackName,
}: {
  src?: string
  alt: string
  size: number
  fallbackName: string
}) {
  const [errored, setErrored] = useState(false)
  const show = src && !errored
  return (
    <div
      className="relative rounded-lg overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {show ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-cover"
          unoptimized
          onError={() => setErrored(true)}
        />
      ) : (
        <span
          className="font-bold text-slate-300 select-none"
          style={{ fontSize: size * 0.35 }}
        >
          {initials(fallbackName)}
        </span>
      )}
    </div>
  )
}

interface ProfileCardProps {
  profile: Profile
  scores: Record<AxisKey, number>
  onClose: () => void
}

/**
 * Renders text with ***bold italic***, **bold**, and *italic* markdown.
 * Enough for work titles and emphasis.
 */
function renderMarkdown(text: string) {
  const parts: (string | { bold?: boolean; italic?: boolean; text: string })[] = []
  const pattern = /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g
  let lastIndex = 0
  const matches = Array.from(text.matchAll(pattern))
  for (const m of matches) {
    const idx = m.index!
    if (idx > lastIndex) parts.push(text.slice(lastIndex, idx))
    const raw = m[0]
    if (raw.startsWith("***")) {
      parts.push({ bold: true, italic: true, text: raw.slice(3, -3) })
    } else if (raw.startsWith("**")) {
      parts.push({ bold: true, text: raw.slice(2, -2) })
    } else {
      parts.push({ italic: true, text: raw.slice(1, -1) })
    }
    lastIndex = idx + raw.length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))

  return parts.map((p, i) => {
    if (typeof p === "string") return <span key={i}>{p}</span>
    const className = [p.bold ? "font-bold text-slate-100" : "", p.italic ? "italic" : ""]
      .filter(Boolean)
      .join(" ")
    return (
      <span key={i} className={className}>
        {p.text}
      </span>
    )
  })
}

export default function ProfileCard({ profile, scores, onClose }: ProfileCardProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  if (!mounted) return null

  const modal = (
    // Portal to body + max z-index so R3F Html labels (which also portal to
    // body) can't stack above us regardless of their zIndexRange.
    <div
      className="fixed inset-0 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4"
      style={{ zIndex: 2147483647 }}
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start gap-4 p-6 border-b border-slate-800">
          <Portrait
            src={profile.image}
            alt={profile.fullName}
            size={96}
            fallbackName={profile.fullName}
          />
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-slate-100">
              {profile.fullName}
            </h2>
            <p className="text-sm text-slate-400 font-mono mt-1">{profile.lifespan}</p>
            {profile.wiki && (
              <a
                href={profile.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-slate-300 mt-1 inline-block transition-colors"
              >
                Wikipedia →
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="text-slate-400 hover:text-white text-3xl leading-none flex-shrink-0 cursor-pointer -mt-1 -mr-1 w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Axis rundown */}
        <div className="p-6 border-b border-slate-800">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-4">
            Across the 8 axes
          </div>
          <div className="space-y-3">
            {AXIS_ORDER.map((axisKey) => {
              const axis = AXES[axisKey]
              const score = scores[axisKey]
              const scoreStr = score > 0 ? `+${score}` : `${score}`
              return (
                <div key={axisKey} className="flex gap-3">
                  <div className="flex-shrink-0 w-32 pt-0.5">
                    <div
                      className="text-xs font-bold tracking-tight leading-tight"
                      style={{ color: axis.color }}
                    >
                      {axis.name}
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 italic mt-0.5">
                      ({axis.technicalName})
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                      {scoreStr}
                    </div>
                  </div>
                  <div className="flex-1 text-sm text-slate-300 leading-relaxed">
                    {renderMarkdown(profile.axisNotes[axisKey])}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Influences + Dissents */}
        {(profile.influences || profile.dissents) && (
          <div className="p-6 grid md:grid-cols-2 gap-6">
            {profile.influences && (
              <div>
                <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono mb-3">
                  Influences
                </div>
                <ul className="space-y-2">
                  {profile.influences.map((inf, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-300 leading-relaxed pl-3 border-l-2 border-emerald-900/50"
                    >
                      {renderMarkdown(inf)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {profile.dissents && (
              <div>
                <div className="text-[10px] uppercase tracking-widest text-rose-400 font-mono mb-3">
                  Dissents from
                </div>
                <ul className="space-y-2">
                  {profile.dissents.map((d, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-300 leading-relaxed pl-3 border-l-2 border-rose-900/50"
                    >
                      {renderMarkdown(d)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="px-6 pb-6">
          <div className="text-[10px] text-slate-600 font-mono">
            Press Esc or click outside to close.
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
