import { timeline } from '../content'
import Section from './Section'

export default function Timeline() {
  return (
    <Section
      id="journey"
      eyebrow="05 — Journey"
      title="Education & experience"
      lead="Where I've studied, worked and volunteered so far."
    >
      <ol className="relative ml-3 border-l border-line pl-8 sm:ml-4 sm:pl-10">
        {timeline.map((t) => (
          <li key={t.title + t.period} className="reveal relative pb-10 last:pb-0">
            <span
              aria-hidden
              className={`absolute -left-[2.3rem] top-1.5 grid size-4 place-items-center rounded-full border sm:-left-[2.8rem] ${
                t.kind === 'education'
                  ? 'border-accent-2/50 bg-accent-2/15'
                  : 'border-accent/50 bg-accent/15'
              }`}
            >
              <span
                className={`size-1.5 rounded-full ${
                  t.kind === 'education' ? 'bg-accent-2' : 'bg-accent'
                }`}
              />
            </span>

            <p className="font-mono text-[0.72rem] uppercase tracking-wider text-[#6f7489]">
              {t.period}
            </p>
            <h3 className="mt-1.5 text-[1.05rem] font-medium text-white">{t.title}</h3>
            <p className="mt-0.5 text-[0.85rem] text-accent-2/90">{t.org}</p>
            <p className="mt-2.5 max-w-xl text-[0.9rem] leading-relaxed text-[#9aa0b4]">
              {t.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
