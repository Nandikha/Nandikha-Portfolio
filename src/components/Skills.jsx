import { skills } from '../content'
import Section from './Section'

export default function Skills() {
  return (
    <Section
      id="skills"
      module="MODULE_03 // ENGINEERING_TOOLCHAIN"
      title="Skills"
      accent="& Toolchains"
      lead="Language clusters, framework stacks and the delivery tooling I use day to day."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((s) => (
          <article key={s.title} className="reveal hud flex flex-col p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="chip chip-hot">{s.tag}</span>
              <span className="label">{s.kind}</span>
            </div>

            <h3 className="display mt-4 text-lg text-white">{s.title}</h3>
            <p className="mt-1 text-[0.7rem] tracking-[0.08em] text-cyan/75">{s.subtitle}</p>

            <p className="mt-3.5 flex-1 text-[0.78rem] leading-relaxed text-dim">{s.body}</p>

            <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
              {s.chips.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
