import { useEffect, useMemo, useRef, useState } from 'react'
import Section from './Section'

/* ─────────── Panel A: sorting visualiser ─────────── */

const ALGOS = {
  bubble: { name: 'BUBBLE SORT', best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
  insertion: { name: 'INSERTION SORT', best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
  selection: { name: 'SELECTION SORT', best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
}

/** Precomputes every frame of the sort so playback is a simple index walk. */
function buildFrames(algo, input) {
  const a = [...input]
  const frames = []
  let comparisons = 0
  let swaps = 0
  const push = (active, sorted) =>
    frames.push({ arr: [...a], active: [...active], sorted: [...sorted], comparisons, swaps })

  if (algo === 'bubble') {
    const sorted = []
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - 1 - i; j++) {
        comparisons++
        push([j, j + 1], sorted)
        if (a[j] > a[j + 1]) {
          ;[a[j], a[j + 1]] = [a[j + 1], a[j]]
          swaps++
          push([j, j + 1], sorted)
        }
      }
      sorted.push(a.length - 1 - i)
    }
    sorted.push(0)
    push([], sorted)
  } else if (algo === 'insertion') {
    const sorted = [0]
    for (let i = 1; i < a.length; i++) {
      let j = i
      while (j > 0) {
        comparisons++
        push([j, j - 1], sorted)
        if (a[j - 1] <= a[j]) break
        ;[a[j], a[j - 1]] = [a[j - 1], a[j]]
        swaps++
        j--
      }
      sorted.push(i)
      push([], sorted)
    }
  } else {
    const sorted = []
    for (let i = 0; i < a.length; i++) {
      let min = i
      for (let j = i + 1; j < a.length; j++) {
        comparisons++
        push([min, j], sorted)
        if (a[j] < a[min]) min = j
      }
      if (min !== i) {
        ;[a[i], a[min]] = [a[min], a[i]]
        swaps++
      }
      sorted.push(i)
      push([], sorted)
    }
  }

  push([], a.map((_, i) => i))
  return frames
}

const randomArray = () =>
  Array.from({ length: 18 }, () => Math.floor(Math.random() * 90) + 10)

function SortLab() {
  const [algo, setAlgo] = useState('bubble')
  const [input, setInput] = useState(randomArray)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timer = useRef(null)

  const frames = useMemo(() => buildFrames(algo, input), [algo, input])
  const frame = frames[Math.min(step, frames.length - 1)]
  const done = step >= frames.length - 1

  // Playback is only "live" while there are frames left, so the effect never
  // needs to write state back to stop itself.
  const running = playing && !done

  useEffect(() => {
    if (!running) return
    timer.current = setTimeout(() => setStep((s) => s + 1), 55)
    return () => clearTimeout(timer.current)
  }, [running, step])

  const reset = (next = input) => {
    setPlaying(false)
    setStep(0)
    setInput(next)
  }

  const meta = ALGOS[algo]

  return (
    <div className="hud p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
        <span className="module-tag">◈ SORTING VISUALISER</span>
        <span className="text-[0.6rem] tracking-[0.18em] text-dim">
          {done ? "STATE: SORTED ✓" : running ? "STATE: RUNNING" : "STATE: IDLE"}
        </span>
      </div>

      {/* algorithm selector */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {Object.entries(ALGOS).map(([key, v]) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setAlgo(key)
              setStep(0)
              setPlaying(false)
            }}
            className={`chip ${algo === key ? '!border-cyan/60 !bg-cyan/15 !text-cyan' : ''}`}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* bars */}
      <div className="mt-5 flex h-44 items-end justify-center gap-[3px] border border-line bg-void/60 p-3">
        {frame.arr.map((v, i) => {
          const isActive = frame.active.includes(i)
          const isSorted = frame.sorted.includes(i)
          return (
            <div
              key={i}
              style={{ height: `${v}%` }}
              className={`flex-1 transition-[height,background-color] duration-75 ${
                isActive ? 'bg-amber' : isSorted ? 'bg-cyan' : 'bg-line-hot'
              }`}
              title={String(v)}
            />
          )
        })}
      </div>

      {/* counters */}
      <dl className="mt-4 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
        {[
          { label: 'Comparisons', value: frame.comparisons },
          { label: 'Swaps', value: frame.swaps },
          { label: 'Frame', value: `${Math.min(step + 1, frames.length)}/${frames.length}` },
          { label: 'Elements', value: frame.arr.length },
        ].map((c) => (
          <div key={c.label} className="bg-panel px-3 py-2">
            <dt className="label">{c.label}</dt>
            <dd className="mt-0.5 text-[0.85rem] font-bold text-white">{c.value}</dd>
          </div>
        ))}
      </dl>

      {/* controls */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => (done ? (setStep(0), setPlaying(true)) : setPlaying((p) => !p))}
          className="btn btn-primary !py-1.5 !text-[0.62rem]"
        >
          {done ? '↻ Replay' : playing ? '❚❚ Pause' : '▶ Run'}
        </button>
        <button
          type="button"
          onClick={() => {
            setPlaying(false)
            setStep((s) => Math.min(s + 1, frames.length - 1))
          }}
          className="btn !py-1.5 !text-[0.62rem]"
        >
          ⇥ Step
        </button>
        <button
          type="button"
          onClick={() => reset(randomArray())}
          className="btn !py-1.5 !text-[0.62rem]"
        >
          ⟳ Shuffle
        </button>
      </div>

      {/* complexity readout */}
      <div className="mt-5 border-t border-line pt-4">
        <p className="label">Complexity · {meta.name}</p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ['BEST', meta.best],
            ['AVERAGE', meta.avg],
            ['WORST', meta.worst],
            ['SPACE', meta.space],
          ].map(([k, v]) => (
            <div key={k} className="readout">
              <p className="label">{k}</p>
              <p className="mt-1 text-[0.82rem] font-bold text-cyan">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────── Panel B: Big-O growth table ─────────── */

const CURVES = [
  { name: 'O(1)', fn: () => 1, tone: 'text-cyan' },
  { name: 'O(log n)', fn: (n) => Math.log2(n), tone: 'text-cyan' },
  { name: 'O(n)', fn: (n) => n, tone: 'text-white' },
  { name: 'O(n log n)', fn: (n) => n * Math.log2(n), tone: 'text-white' },
  { name: 'O(n²)', fn: (n) => n * n, tone: 'text-amber' },
  { name: 'O(2ⁿ)', fn: (n) => 2 ** Math.min(n, 40), tone: 'text-red' },
]

const SIZES = [8, 16, 64, 256, 1024]

const fmt = (v) => {
  if (v < 1000) return v < 10 ? v.toFixed(1) : Math.round(v).toLocaleString()
  if (v < 1e6) return `${(v / 1e3).toFixed(1)}K`
  if (v < 1e9) return `${(v / 1e6).toFixed(1)}M`
  if (v < 1e12) return `${(v / 1e9).toFixed(1)}B`
  return v.toExponential(1)
}

function ComplexityLab() {
  const [n, setN] = useState(64)

  return (
    <div className="hud p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
        <span className="module-tag">◈ BIG-O GROWTH ANALYSER</span>
        <span className="text-[0.6rem] tracking-[0.18em] text-dim">n = {n}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {SIZES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setN(s)}
            className={`chip ${n === s ? '!border-cyan/60 !bg-cyan/15 !text-cyan' : ''}`}
          >
            n = {s}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-2.5">
        {CURVES.map((c) => {
          const ops = c.fn(n)
          const max = CURVES[CURVES.length - 1].fn(n)
          const pct = Math.max(1.5, (Math.log10(ops + 1) / Math.log10(max + 1)) * 100)
          return (
            <div key={c.name}>
              <div className="flex items-baseline justify-between">
                <span className={`text-[0.7rem] font-bold ${c.tone}`}>{c.name}</span>
                <span className="text-[0.66rem] text-dim">{fmt(ops)} ops</span>
              </div>
              <div className="mt-1 h-1.5 w-full bg-void">
                <div
                  className={`h-full transition-all duration-500 ${
                    c.tone === 'text-red'
                      ? 'bg-red'
                      : c.tone === 'text-amber'
                        ? 'bg-amber'
                        : c.tone === 'text-cyan'
                          ? 'bg-cyan'
                          : 'bg-line-hot'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-5 border-t border-line pt-4 text-[0.72rem] leading-relaxed text-dim">
        Bars use a logarithmic scale — on a linear one, O(2ⁿ) would flatten everything else into
        nothing. That is precisely the point.
      </p>
    </div>
  )
}

export default function Workbench() {
  return (
    <Section
      id="workbench"
      module="MODULE_06 // INTERACTIVE_ALGORITHM_WORKBENCH"
      title="Algorithm"
      accent="& Complexity Lab"
      lead="Run sorting algorithms frame by frame and compare asymptotic growth in real time."
    >
      <div className="reveal grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <SortLab />
        <ComplexityLab />
      </div>
    </Section>
  )
}
