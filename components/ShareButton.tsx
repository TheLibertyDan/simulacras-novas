"use client"

import { useEffect, useRef, useState } from "react"
import type { UserScores } from "@/data/questions"
import { buildShareUrl } from "@/data/share"
import { shortLabel } from "@/data/descriptor"

interface ShareButtonProps {
  scores: UserScores
}

/**
 * "Share your results" button. Opens a popover with:
 * - Native share sheet (mobile), if available
 * - Explicit share links (X/Twitter, iMessage, Copy)
 */
export default function ShareButton({ scores }: ShareButtonProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [canNativeShare, setCanNativeShare] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const url = buildShareUrl(scores)
  const label = shortLabel(scores)
  const text = `My Simulacras Novas result — ${label}. Take the world's deepest political compass:`

  useEffect(() => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      setCanNativeShare(true)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [open])

  const doNativeShare = async () => {
    if (!canNativeShare) return
    try {
      await navigator.share({
        title: "Simulacras Novas",
        text,
        url,
      })
    } catch {
      // user cancelled — ignore
    }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
  const smsUrl = `sms:&body=${encodeURIComponent(`${text} ${url}`)}`

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        onClick={() => (canNativeShare ? doNativeShare() : setOpen(!open))}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-pink-500 hover:bg-pink-400 text-white font-mono font-bold cursor-pointer shadow-xl transition-colors text-sm md:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        Share your results
      </button>

      {open && !canNativeShare && (
        <div
          className="absolute right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl p-3 z-50"
        >
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-3 px-1">
            Share to
          </div>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={copyLink}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm cursor-pointer text-left"
            >
              <span className="text-lg">🔗</span>
              <span className="flex-1">
                {copied ? "Copied!" : "Copy link"}
              </span>
            </button>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm cursor-pointer text-left"
            >
              <span className="text-lg">𝕏</span>
              <span className="flex-1">Post on X / Twitter</span>
            </a>
            <a
              href={smsUrl}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm cursor-pointer text-left"
            >
              <span className="text-lg">💬</span>
              <span className="flex-1">iMessage / SMS</span>
            </a>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono px-1 break-all">
            {url}
          </div>
        </div>
      )}
    </div>
  )
}
