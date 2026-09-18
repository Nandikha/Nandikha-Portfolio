import { projects } from '../content'
import Section from './Section'
import { ArrowUpRight, GithubIcon } from './Icons'

function ProjectCard({ p }) {
  return (
    <article
      className={`reveal card group relative flex flex-col p-6 ${
        p.featured ? 'sm:col-span-2 sm:p-8' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {p.featured && (
            <span className="mb-3 inline-block rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-accent-2">
              Featured
            </span>
          )}
          <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            {p.title}
          </h3>
        </div>
        <span className="font-mono text-[0.72rem] text-[#6f7489]">{p.year}</span>
      </div>

      <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-[#9aa0b4]">{p.blurb}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4 border-t border-line pt-5 text-[0.82rem]">
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#9aa0b4] transition-colors hover:text-white"
          >
            <GithubIcon width={15} height={15} />
            Source
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#9aa0b4] transition-colors hover:text-white"
          >
            <ArrowUpRight width={15} height={15} />
            Live demo
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="work"
      eyebrow="03 — Work"
      title="Selected projects"
      lead="Things I built to solve a problem, learn a tool, or both. Code is on GitHub."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  )
}
