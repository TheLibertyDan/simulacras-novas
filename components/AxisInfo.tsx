"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AXES, type AxisKey } from "@/data/axes"

interface AxisInfoProps {
  axis: AxisKey
  onClose: () => void
}

/**
 * Small modal that explains an axis in context.
 *
 * Renders via React portal to `document.body` so it escapes any parent
 * stacking context (specifically R3F's `<Html>` labels that portal to
 * body — without matching stacking contexts, `zIndexRange` caps on those
 * labels get bypassed and they visually leak through the modal).
 */
export default function AxisInfo({ axis, onClose }: AxisInfoProps) {
  const def = AXES[axis]
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
    <div
      className="fixed inset-0 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-4"
      style={{ zIndex: 2147483647 }}
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start gap-3 p-6 border-b border-slate-800">
          <div
            className="w-4 h-4 rounded-sm mt-1.5 flex-shrink-0"
            style={{ background: def.color }}
          />
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold" style={{ color: def.color }}>
              {def.name}
            </h2>
            <p className="text-xs text-slate-500 font-mono mt-0.5 italic">
              academic term: {def.technicalName}
            </p>
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

        <div className="p-6 border-b border-slate-800">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-2">
            The question
          </div>
          <p className="text-sm text-slate-200 leading-relaxed italic">
            {def.question}
          </p>
        </div>

        <div className="p-6 grid gap-4">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500">
                positive pole →
              </span>
              <span className="text-sm font-bold" style={{ color: def.color }}>
                {def.posLabel}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-700">
              {def.posDescription}
            </p>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500">
                ← negative pole
              </span>
              <span className="text-sm font-bold" style={{ color: def.color }}>
                {def.negLabel}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-700">
              {def.negDescription}
            </p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="text-[10px] text-slate-600 font-mono">
            Press Esc, click ×, or click outside to close.
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
