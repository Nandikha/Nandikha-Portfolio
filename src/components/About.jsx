import { about, profile } from '../content'
import Section from './Section'
import { CheckIcon } from './Icons'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A student who ships"
      lead="Short version: I like building, I like finishing, and I like understanding why things work."
    >
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <div className="reveal space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[0.98rem] leading-relaxed text-[#9aa0b4]">
              {p}
            </p>
          ))}
        </div>

        <div className="reveal card p-6">
          <p className="eyebrow">What I bring</p>
          <ul className="mt-5 space-y-4">
            {about.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[0.9rem] leading-relaxed text-[#cfd3e0]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent-2">
                  <CheckIcon width={12} height={12} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-[0.8rem] text-[#6f7489]">Currently</p>
            <p className="mt-1 text-[0.9rem] text-white">{profile.availability}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
