import { skills } from '../content'
import Section from './Section'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Tools I reach for"
      lead="Not an exhaustive list — just the things I've actually used to build something."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="reveal card p-6">
            <h3 className="text-sm font-medium text-white">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
