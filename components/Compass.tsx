"use client"

import { useEffect, useState, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html, Line, GizmoHelper, GizmoViewport } from "@react-three/drei"
import * as THREE from "three"
import { thinkers, type Thinker } from "@/data/thinkers"
import { AXES, type AxisKey } from "@/data/axes"
import type { UserScores } from "@/data/questions"
import AxisInfo from "./AxisInfo"

const AXIS_MIN = -10
const AXIS_MAX = 10
const AXIS_LEN = AXIS_MAX - AXIS_MIN

function WireCube() {
  return (
    <lineSegments>
      <edgesGeometry args={[new THREE.BoxGeometry(AXIS_LEN, AXIS_LEN, AXIS_LEN)]} />
      <lineBasicMaterial color="#334155" opacity={0.35} transparent />
    </lineSegments>
  )
}

function GridPlanes() {
  return (
    <>
      <gridHelper args={[AXIS_LEN, 10, "#1e293b", "#1e293b"]} rotation={[0, 0, 0]} />
      <gridHelper args={[AXIS_LEN, 10, "#1e293b", "#1e293b"]} rotation={[Math.PI / 2, 0, 0]} />
      <gridHelper args={[AXIS_LEN, 10, "#1e293b", "#1e293b"]} rotation={[0, 0, Math.PI / 2]} />
    </>
  )
}

function AxisLine({
  from,
  to,
  color,
}: {
  from: [number, number, number]
  to: [number, number, number]
  color: string
}) {
  return <Line points={[from, to]} color={color} lineWidth={2} />
}

function AxisTriad({
  xAxis,
  yAxis,
  zAxis,
  onInfoClick,
}: {
  xAxis: AxisKey
  yAxis: AxisKey
  zAxis: AxisKey
  onInfoClick: (axis: AxisKey) => void
}) {
  const x = AXES[xAxis]
  const y = AXES[yAxis]
  const z = AXES[zAxis]

  const label = (faded = false) =>
    `whitespace-nowrap select-none text-[11px] font-mono tracking-tight leading-tight px-2 py-1 rounded bg-slate-950/85 border border-slate-800 ${faded ? "opacity-70" : ""}`.trim()

  const infoButton = (axis: AxisKey, color: string) => (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onInfoClick(axis)
      }}
      className="ml-1.5 w-4 h-4 rounded-full border border-slate-700 hover:border-slate-500 hover:text-white text-[9px] font-mono cursor-pointer inline-flex items-center justify-center align-middle"
      style={{ color }}
      title={`What is ${AXES[axis].name}?`}
      aria-label={`Info about ${AXES[axis].name}`}
    >
      ⓘ
    </button>
  )

  return (
    <>
      <AxisLine from={[AXIS_MIN, 0, 0]} to={[AXIS_MAX, 0, 0]} color={x.color} />
      <Html position={[AXIS_MAX + 2.2, 0, 0]} center zIndexRange={[40, 0]}>
        <div className={label()} style={{ color: x.color }}>
          <div className="font-semibold flex items-center">
            <span>{x.short} +</span>
            {infoButton(xAxis, x.color)}
          </div>
          <div className="opacity-75">{x.posLabel}</div>
        </div>
      </Html>
      <Html position={[AXIS_MIN - 2.2, 0, 0]} center zIndexRange={[40, 0]}>
        <div className={label(true)} style={{ color: x.color }}>
          <div>{x.negLabel}</div>
        </div>
      </Html>

      <AxisLine from={[0, AXIS_MIN, 0]} to={[0, AXIS_MAX, 0]} color={y.color} />
      <Html position={[0, AXIS_MAX + 2.2, 0]} center zIndexRange={[40, 0]}>
        <div className={label()} style={{ color: y.color }}>
          <div className="font-semibold flex items-center">
            <span>{y.short} +</span>
            {infoButton(yAxis, y.color)}
          </div>
          <div className="opacity-75">{y.posLabel}</div>
        </div>
      </Html>
      <Html position={[0, AXIS_MIN - 2.2, 0]} center zIndexRange={[40, 0]}>
        <div className={label(true)} style={{ color: y.color }}>
          <div>{y.negLabel}</div>
        </div>
      </Html>

      <AxisLine from={[0, 0, AXIS_MIN]} to={[0, 0, AXIS_MAX]} color={z.color} />
      <Html position={[0, 0, AXIS_MAX + 2.2]} center zIndexRange={[40, 0]}>
        <div className={label()} style={{ color: z.color }}>
          <div className="font-semibold flex items-center">
            <span>{z.short} +</span>
            {infoButton(zAxis, z.color)}
          </div>
          <div className="opacity-75">{z.posLabel}</div>
        </div>
      </Html>
      <Html position={[0, 0, AXIS_MIN - 2.2]} center zIndexRange={[40, 0]}>
        <div className={label(true)} style={{ color: z.color }}>
          <div>{z.negLabel}</div>
        </div>
      </Html>
    </>
  )
}

function ThinkerPoint({
  thinker,
  xAxis,
  yAxis,
  zAxis,
  onHover,
  onClick,
  clickable,
  highlighted,
  isTouchDevice,
}: {
  thinker: Thinker
  xAxis: AxisKey
  yAxis: AxisKey
  zAxis: AxisKey
  onHover: (t: Thinker | null) => void
  onClick?: () => void
  clickable?: boolean
  /** True if this thinker is a signature/extreme voice on one of the currently-viewed axes. */
  highlighted?: boolean
  isTouchDevice?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const color = thinker.color ?? (highlighted ? "#c4b5fd" : "#93c5fd")
  // Bigger baseline on touch so a fingertip actually hits the sphere.
  const baseSize = isTouchDevice
    ? highlighted
      ? 0.5
      : 0.42
    : highlighted
      ? 0.36
      : 0.28
  const size = hovered && !isTouchDevice ? baseSize * 1.3 : baseSize
  const emissive =
    hovered && !isTouchDevice ? 0.7 : highlighted ? 0.55 : 0.3

  const position: [number, number, number] = [
    thinker[xAxis],
    thinker[yAxis],
    thinker[zAxis],
  ]

  return (
    <group position={position}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation()
          // Skip the whole hover UX on touch — otherwise dragging the
          // chart triggers spurious "hover" cards as your finger passes
          // over spheres.
          if (isTouchDevice || e.nativeEvent.pointerType === "touch") return
          setHovered(true)
          onHover(thinker)
          if (clickable) document.body.style.cursor = "pointer"
        }}
        onPointerOut={(e) => {
          if (isTouchDevice || e.nativeEvent.pointerType === "touch") return
          setHovered(false)
          onHover(null)
          document.body.style.cursor = "default"
        }}
        onClick={(e) => {
          if (clickable && onClick) {
            e.stopPropagation()
            onClick()
          }
        }}
      >
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissive}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
      {/* Halo on highlighted thinkers */}
      {highlighted && (
        <mesh>
          <sphereGeometry args={[size * 1.7, 24, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
      )}
      <Html position={[0, baseSize + 0.4, 0]} center zIndexRange={[40, 0]}>
        <div
          className={`whitespace-nowrap select-none pointer-events-none text-[11px] font-semibold ${
            hovered ? "text-white" : highlighted ? "text-violet-200" : "text-slate-200"
          }`}
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.9)",
          }}
        >
          {thinker.name}
        </div>
      </Html>
    </group>
  )
}

/**
 * The user's own dot after taking the assessment. Yellow, larger,
 * glowing — the treatment Dan's dot used to have.
 */
function UserPoint({
  scores,
  xAxis,
  yAxis,
  zAxis,
}: {
  scores: UserScores
  xAxis: AxisKey
  yAxis: AxisKey
  zAxis: AxisKey
}) {
  const position: [number, number, number] = [scores[xAxis], scores[yAxis], scores[zAxis]]
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshStandardMaterial
          color="#facc15"
          emissive="#facc15"
          emissiveIntensity={0.85}
          roughness={0.25}
          metalness={0.15}
        />
      </mesh>
      {/* Halo */}
      <mesh>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshBasicMaterial color="#facc15" transparent opacity={0.18} />
      </mesh>
      <Html position={[0, 0.95, 0]} center zIndexRange={[40, 0]}>
        <div
          className="whitespace-nowrap select-none pointer-events-none text-xs font-bold text-yellow-300"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
        >
          You
        </div>
      </Html>
    </group>
  )
}

interface CompassProps {
  xAxis: AxisKey
  yAxis: AxisKey
  zAxis: AxisKey
  userScores?: UserScores
  onProfileClick?: (thinkerName: string) => void
  clickableProfiles?: Set<string>
}

export default function Compass({
  xAxis,
  yAxis,
  zAxis,
  userScores,
  onProfileClick,
  clickableProfiles,
}: CompassProps) {
  const [hovered, setHovered] = useState<Thinker | null>(null)
  const [axisInfoAxis, setAxisInfoAxis] = useState<AxisKey | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detect once on mount. `(pointer: coarse)` matches touch screens
  // regardless of viewport width. Used to (a) suppress hover UX,
  // (b) make spheres bigger so a finger can hit them.
  useEffect(() => {
    if (typeof window === "undefined") return
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches)
  }, [])

  const xDef = AXES[xAxis]
  const yDef = AXES[yAxis]
  const zDef = AXES[zAxis]

  // Highlight the signature voices on the currently-shown axes:
  // top 2 most-extreme thinkers on each axis (by absolute score).
  const highlightedNames = useMemo(() => {
    const names = new Set<string>()
    for (const axis of [xAxis, yAxis, zAxis]) {
      const sorted = [...thinkers].sort(
        (a, b) => Math.abs(b[axis]) - Math.abs(a[axis]),
      )
      names.add(sorted[0].name)
      if (sorted[1]) names.add(sorted[1].name)
    }
    return names
  }, [xAxis, yAxis, zAxis])

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [22, 18, 22], fov: 50 }}
        style={{ background: "linear-gradient(180deg, #020617 0%, #0f172a 100%)" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[15, 20, 10]} intensity={0.8} />
        <directionalLight position={[-15, -10, -10]} intensity={0.3} color="#93c5fd" />

        <WireCube />
        <GridPlanes />
        <AxisTriad
          xAxis={xAxis}
          yAxis={yAxis}
          zAxis={zAxis}
          onInfoClick={setAxisInfoAxis}
        />

        {thinkers.map((t) => {
          const clickable = clickableProfiles?.has(t.name) ?? false
          return (
            <ThinkerPoint
              key={t.name}
              thinker={t}
              xAxis={xAxis}
              yAxis={yAxis}
              zAxis={zAxis}
              onHover={setHovered}
              clickable={clickable}
              onClick={clickable ? () => onProfileClick?.(t.name) : undefined}
              highlighted={highlightedNames.has(t.name)}
              isTouchDevice={isTouchDevice}
            />
          )
        })}

        {userScores && (
          <UserPoint xAxis={xAxis} yAxis={yAxis} zAxis={zAxis} scores={userScores} />
        )}

        <OrbitControls
          enablePan
          enableRotate
          enableZoom
          minDistance={6}
          maxDistance={80}
        />
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={[xDef.color, yDef.color, zDef.color]}
            labelColor="white"
            hideNegativeAxes={false}
          />
        </GizmoHelper>
      </Canvas>

      {hovered && !isTouchDevice && (
        <div className="absolute bottom-6 right-6 max-w-sm bg-slate-900/95 border border-slate-700 rounded-lg p-4 shadow-xl backdrop-blur-sm pointer-events-none">
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <div className="text-base font-bold text-slate-100">
              {hovered.name}
              {clickableProfiles?.has(hovered.name) && (
                <span className="ml-2 text-[10px] font-mono text-slate-500 font-normal">
                  click for profile
                </span>
              )}
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              ({hovered[xAxis]}, {hovered[yAxis]}, {hovered[zAxis]})
            </div>
          </div>
          {hovered.note && (
            <p className="text-xs text-slate-300 leading-relaxed">{hovered.note}</p>
          )}
          <div className="mt-3 pt-2 border-t border-slate-800 grid grid-cols-3 gap-2 text-[10px] font-mono">
            <div style={{ color: xDef.color }}>
              {xDef.short}: {hovered[xAxis] > 0 ? "+" : ""}{hovered[xAxis]}
            </div>
            <div style={{ color: yDef.color }}>
              {yDef.short}: {hovered[yAxis] > 0 ? "+" : ""}{hovered[yAxis]}
            </div>
            <div style={{ color: zDef.color }}>
              {zDef.short}: {hovered[zAxis] > 0 ? "+" : ""}{hovered[zAxis]}
            </div>
          </div>
        </div>
      )}

      {axisInfoAxis && (
        <AxisInfo axis={axisInfoAxis} onClose={() => setAxisInfoAxis(null)} />
      )}
    </div>
  )
}
