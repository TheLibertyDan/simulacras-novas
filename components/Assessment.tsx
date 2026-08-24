"use client"

import { useState } from "react"
import { questions, LIKERT_OPTIONS, computeScores } from "@/data/questions"
import type { UserScores } from "@/data/questions"

interface AssessmentProps {
  onComplete: (scores: UserScores, answers: Record<string, number>) => void
  onCancel: () => void
}

export default function Assessment({ onComplete, onCancel }: AssessmentProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [currentIdx, setCurrentIdx] = useState(0)

  const current = questions[currentIdx]
  const totalQs = questions.length
  const progress = ((currentIdx + 1) / totalQs) * 100
  const answered = Object.keys(answers).length

  const selectAnswer = (value: number) => {
    setAnswers({ ...answers, [current.id]: value })
    if (currentIdx < totalQs - 1) {
      setTimeout(() => setCurrentIdx(currentIdx + 1), 180)
    }
  }

  const handleFinish = () => {
    const scores = computeScores(answers)
    onComplete(scores, answers)
  }

  const canFinish = answered === totalQs

  return (
    <div className="fixed inset-0 bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header + progress */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-lg font-bold tracking-tight">
              Simulacras Novas
            </h2>
            <div className="text-xs font-mono text-slate-500">
              Question {currentIdx + 1} / {totalQs}
            </div>
          </div>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-500 via-blue-500 to-pink-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Statement */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-8 mb-6 shadow-xl">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-4">
            To what extent do you agree with this statement?
          </div>
          <p className="text-xl text-slate-100 leading-relaxed">{current.text}</p>
        </div>

        {/* Likert scale */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {LIKERT_OPTIONS.map((opt) => {
            const selected = answers[current.id] === opt.value
            return (
              <button
                key={opt.value}
                onClick={() => selectAnswer(opt.value)}
                className={`p-3 rounded-lg border text-xs font-medium transition-all cursor-pointer text-center leading-tight ${
                  selected
                    ? "bg-slate-100 text-slate-900 border-slate-100 shadow-md"
                    : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500 hover:text-slate-100"
                }`}
              >
                {opt.label}
              </button>
            )
          })}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between">
          <button
            onClick={onCancel}
            className="text-xs text-slate-500 hover:text-slate-300 font-mono cursor-pointer"
          >
            ← Back to chart
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
              disabled={currentIdx === 0}
              className="text-xs px-3 py-1.5 rounded border border-slate-700 text-slate-300 hover:border-slate-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-mono"
            >
              Previous
            </button>
            {currentIdx < totalQs - 1 ? (
              <button
                onClick={() => setCurrentIdx(Math.min(totalQs - 1, currentIdx + 1))}
                disabled={!(current.id in answers)}
                className="text-xs px-3 py-1.5 rounded border border-slate-700 text-slate-300 hover:border-slate-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-mono"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={!canFinish}
                className="text-xs px-4 py-1.5 rounded bg-slate-100 text-slate-900 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-mono font-semibold"
              >
                See results →
              </button>
            )}
          </div>
        </div>

        {answered > 0 && answered < totalQs && (
          <div className="mt-6 text-center text-[11px] font-mono text-slate-600">
            {answered} of {totalQs} answered
          </div>
        )}
      </div>
    </div>
  )
}
