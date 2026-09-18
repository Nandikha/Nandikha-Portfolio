import { education } from '../content'
import Section from './Section'

export default function About() {
  return (
    <Section
      id="about"
      module="MODULE_02 // SYSTEM_ARCHITECTURE & EDUCATION"
      title="About"
      accent="& Academic Foundation"
      lead="Execution trace of an engineering track focused on software systems, algorithms and shipping working product."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {education.map((e) => (
          <article key={e.degree} className="reveal hud p-6">
            <p className="module-tag">◈ {e.node}</p>

            <h3 className="display mt-3 text-xl text-white sm:text-2xl">{e.degree}</h3>
            <p className="mt-1.5 text-[0.76rem] tracking-[0.1em] text-cyan/80">{e.org}</p>

            <p className="mt-4 text-[0.82rem] leading-relaxed text-dim">{e.detail}</p>

            <div className="mt-6 flex items-end justify-between border-t border-line pt-4">
              <span className="label">{e.metricLabel}</span>
              <span className="display text-2xl glow-amber">{e.metricValue}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
