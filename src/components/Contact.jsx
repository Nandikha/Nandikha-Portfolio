import { useState } from 'react'
import { profile } from '../content'
import { iconFor } from '../socialIcons'
import { CheckIcon, CopyIcon, MailIcon } from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <div className="reveal relative overflow-hidden rounded-3xl border border-line p-8 text-center sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.18),transparent_60%)]"
          />
          <p className="eyebrow">06 — Contact</p>
          <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let’s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-[#9aa0b4]">
            Have an internship, a project idea, or just want to talk shop? My inbox is open — I
            usually reply within a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <MailIcon width={16} height={16} />
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-2.5 text-sm text-white transition-colors hover:border-accent/60 hover:bg-accent/10"
            >
              {copied ? <CheckIcon width={15} height={15} /> : <CopyIcon width={15} height={15} />}
              {copied ? 'Copied!' : 'Copy address'}
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {profile.socials.map((s) => {
              const Icon = iconFor(s.label)
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid size-11 place-items-center rounded-full border border-line text-[#9aa0b4] transition-colors hover:border-accent/60 hover:text-white"
                >
                  <Icon width={17} height={17} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
