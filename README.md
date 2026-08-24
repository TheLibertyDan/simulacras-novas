# Bedrock Political Compass

A new political compass. Not the standard 4-square (economic × authoritarian
— trapped in modern Western liberal-democratic assumptions). Instead: a 3D
map of philosophical commitments about politics itself, on three bedrock
axes.

Design and background: see `Bedrock Political Compass.md` in the Obsidian
vault, plus `Realist Lineage — Machiavelli to Rothfeld.md` and
`Political Philosophy — Comparative Map.md` in `Research/Political Theory/`.

## The three bedrock axes

- **X — Epistemology** (Veritas): concrete/knowable truth ↔ relative/constructed truth
- **Y — Anthropology** (Human nature): naturally good ↔ naturally evil
- **Z — Political Ontology**: politics as its own autonomous domain (realist) ↔ politics as reducible to something else (moralism, materialism, culturalism, theocracy)

Each axis runs −10 to +10. Every historical thinker has a coordinate on
each; **coordinates are hypotheses**, drafted from primary text and
secondary reading, and are meant to be argued over. Move any point that
looks wrong.

## v0 (current)

- 3D interactive chart, rotate/zoom/pan
- 19 canonical thinkers plotted
- Hover a point for a detail panel with reasoning
- Daniel's observed position highlighted

## v1 (next)

- 30-question assessment (5 per axis × 6 axes for ground truth)
- User's own position plotted
- Nearest-thinkers list (computed in full 6-space, not 3-projection)
- Radar chart companion view for all 6 axes
- Perspective switching between axis triples (e.g. Individual/Collective as an alternate Y)

## Stack

- Next.js 16 (App Router, Turbopack)
- React Three Fiber + Drei for the 3D scene
- Tailwind for UI
- Static JSON (`data/thinkers.ts`) for reference positions; no backend

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing thinker positions

All coordinates live in `data/thinkers.ts`. Every entry has:

- `name`
- `epistemology` (−10 to +10)
- `anthropology` (−10 to +10)
- `politicalOntology` (−10 to +10)
- `note` (short reasoning for the placement — shown on hover)
- optional `color` and `isSelf` for highlighting

Argue with placements by editing that file. Refresh; changes hot-reload.
