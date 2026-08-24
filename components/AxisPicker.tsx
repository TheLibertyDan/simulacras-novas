"use client"

import { useState } from "react"
import { AXES, AXIS_ORDER, type AxisKey } from "@/data/axes"
import AxisInfo from "./AxisInfo"

type Dim = "x" | "y" | "z"

interface AxisPickerProps {
  x: AxisKey
  y: AxisKey
  z: AxisKey
  onChange: (dim: Dim, axis: AxisKey) => void
}

const DIM_LABELS: Record<Dim, string> = { x: "X", y: "Y", z: "Z" }

export default function AxisPicker({ x, y, z, onChange }: AxisPickerProps) {
  const current: Record<Dim, AxisKey> = { x, y, z }
  const [infoAxis, setInfoAxis] = useState<AxisKey | null>(null)

  return (
    <>
      <div className="bg-slate-900/85 backdrop-blur border border-slate-700 rounded-lg p-3 shadow-xl pointer-events-auto w-full">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-2 flex items-center justify-between gap-2">
          <span>Axis Assignment</span>
          <span className="text-slate-600 normal-case tracking-normal whitespace-nowrap">
            8 axes · click ⓘ
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {(["x", "y", "z"] as const).map((dim) => {
            const axisKey = current[dim]
            const axis = AXES[axisKey]
            return (
              <div key={dim} className="flex items-center gap-1.5 min-w-0">
                <span
                  className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ background: axis.color }}
                  aria-hidden
                />
                <span className="text-slate-400 font-mono text-xs w-3 flex-shrink-0">
                  {DIM_LABELS[dim]}
                </span>
                <select
                  value={axisKey}
                  onChange={(e) => onChange(dim, e.target.value as AxisKey)}
                  className="flex-1 min-w-0 bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded pl-2 pr-6 py-1 font-mono focus:outline-none focus:border-slate-500 cursor-pointer"
                >
                  {AXIS_ORDER.map((key) => {
                    const opt = AXES[key]
                    const inUseElsewhere = Object.entries(current).some(
                      ([d, v]) => v === key && d !== dim,
                    )
                    return (
                      <option key={key} value={key}>
                        {opt.name}
                        {inUseElsewhere ? "  (in use)" : ""}
                      </option>
                    )
                  })}
                </select>
                <button
                  onClick={() => setInfoAxis(axisKey)}
                  className="flex-shrink-0 w-5 h-5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 text-[10px] font-mono cursor-pointer flex items-center justify-center"
                  title={`What is ${axis.name}?`}
                  aria-label={`Info about ${axis.name}`}
                >
                  ⓘ
                </button>
              </div>
            )
          })}
        </div>
        <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono leading-relaxed">
          Same axis on multiple dimensions collapses points onto a plane —
          legitimate view.
        </div>
      </div>

      {infoAxis && <AxisInfo axis={infoAxis} onClose={() => setInfoAxis(null)} />}
    </>
  )
}
