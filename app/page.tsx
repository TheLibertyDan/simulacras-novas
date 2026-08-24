"use client"

import { Suspense } from "react"
import CompassApp from "@/components/CompassApp"

export default function Home() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-slate-950" />}>
      <CompassApp />
    </Suspense>
  )
}
