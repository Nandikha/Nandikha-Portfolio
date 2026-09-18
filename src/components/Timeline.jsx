import { timeline } from '../content'
import Markup from './Markup'
import Section from './Section'

export default function Timeline() {
  return (
    <Section
      id="experience"
      module="MODULE_07 // TIMING_DIAGRAM"
      title="Experience"
      accent="& Milestones"
      lead="Career progression plotted as synchronised rising-edge pulses."
    >
      <div className="relative">
        {/* clock rail */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/50 via-line to-transparent sm:left-[9px]"
        />

        <ol className="space-y-5">
          {timeline.map((t) => (
            <li key={t.title} className="reveal relative pl-8 sm:pl-12">
              {/* rising edge marker */}
              <span
                aria-hidden
                className="absolute left-0 top-5 flex items-center"
                style={{ width: '1rem' }}
              >
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
                  <path
                    d="M1 13V3h6v10"
                    stroke="var(--color-cyan)"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />
                </svg>
              </span>

              <article className="hud p-5 sm:p-6">
                <p className="module-tag">R↑ {t.edge}</p>

                <h3 className="display mt-2.5 text-xl text-white sm:text-2xl">{t.title}</h3>
                <p className="mt-1.5 text-[0.74rem] tracking-[0.08em] text-cyan/80">{t.org}</p>

                {t.meta && (
                  <p className="mt-3 border-y border-line/70 py-2 text-[0.68rem] tracking-[0.06em] text-dim">
                    {t.meta}
                  </p>
                )}

                <p className="mt-3.5 max-w-3xl text-[0.82rem] leading-[1.8] text-dim">
                  <Markup text={t.body} />
                </p>

                {t.certs && (
                  <ul className="mt-4 space-y-1.5">
                    {t.certs.map((c) => {
                      const [head, ...rest] = c.split('—')
                      return (
                        <li key={c} className="text-[0.74rem] text-dim">
                          <span className="text-cyan/85">{head.trim()}</span>
                          {rest.length > 0 && <span> — {rest.join('—').trim()}</span>}
                        </li>
                      )
                    })}
                  </ul>
                )}

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {t.chips.map((c) => (
                    <li key={c} className="chip">
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
