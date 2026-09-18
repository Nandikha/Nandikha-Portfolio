import { useState } from 'react'
import { projects } from '../content'
import { ArrowUpRight, GithubIcon } from './Icons'
import Markup from './Markup'
import Section from './Section'

function Project({ p }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`reveal hud p-6 sm:p-8 ${p.featured ? 'xl:col-span-2' : ''}`}>
      {/* banner strip */}
      <div className="flex flex-wrap items-center gap-2">
        {p.banner.map((b, i) => (
          <span key={b} className={`chip ${i === 0 && p.featured ? 'chip-hot' : ''}`}>
            {b}
          </span>
        ))}
      </div>

      <p className="module-tag mt-5">{p.kicker}</p>

      <h3 className="display mt-2.5 text-2xl text-white sm:text-3xl">{p.title}</h3>
      <p className="mt-2 text-[0.76rem] leading-relaxed tracking-[0.06em] text-cyan/80">
        {p.subtitle}
      </p>

      <p className="mt-4 max-w-3xl text-[0.82rem] leading-[1.8] text-dim">
        <Markup text={p.body} />
      </p>

      {/* metric readouts */}
      <dl
        className={`mt-6 grid gap-px border border-line bg-line ${
          p.featured ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
        } grid-cols-2`}
      >
        {p.metrics.map((m) => (
          <div key={m.label} className="bg-panel px-3.5 py-3">
            <dt className="label">{m.label}</dt>
            <dd>
              <span className="mt-1 block text-[0.9rem] font-bold text-white">{m.value}</span>
              <span className="text-[0.58rem] tracking-wider text-cyan/65">{m.sub}</span>
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.chips.map((c) => (
          <li key={c} className="chip">
            {c}
          </li>
        ))}
      </ul>

      {/* expandable build log */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`log-${p.id}`}
        className="mt-6 flex w-full items-center justify-between border-t border-line pt-4 text-[0.68rem] tracking-[0.18em] text-cyan transition-colors hover:text-white"
      >
        ◈ OPEN BUILD LOG
        <span className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {open && (
        <ul id={`log-${p.id}`} className="mt-4 space-y-2.5 border-l-2 border-cyan/30 pl-4">
          {p.details.map((d, i) => (
            <li key={i} className="flex gap-3 text-[0.78rem] leading-relaxed text-dim">
              <span className="shrink-0 text-[0.62rem] text-cyan/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              {d}
            </li>
          ))}
        </ul>
      )}

      {/* links */}
      <div className="mt-6 flex flex-wrap gap-3">
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noreferrer" className="btn !py-1.5 !text-[0.62rem]">
            <GithubIcon width={13} height={13} />
            Source
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn !py-1.5 !text-[0.62rem]">
            <ArrowUpRight width={13} height={13} />
            Live Demo
          </a>
        )}
        <span className="ml-auto self-center text-[0.62rem] tracking-[0.18em] text-line-hot">
          {p.year}
        </span>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      module="MODULE_04 // BUILD_ARCHIVE"
      title="Featured"
      accent="Projects"
      lead="Systems I designed, built and shipped — with the numbers that back them up."
    >
      <div className="grid gap-5 xl:grid-cols-2">
        {projects.map((p) => (
          <Project key={p.id} p={p} />
        ))}
      </div>
    </Section>
  )
}
