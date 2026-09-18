import { useState } from 'react'
import { profile } from '../content'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import Section from './Section'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  /**
   * No backend on a static host — compose a mailto: payload instead.
   * Swap for Formspree / EmailJS if you want true form delivery.
   */
  const transmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact — ${form.name || 'Anonymous'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const field =
    'w-full border border-line bg-void/70 px-3 py-2.5 text-[0.8rem] text-fg placeholder:text-line-hot focus:border-cyan/60 focus:outline-none transition-colors'

  return (
    <Section
      id="contact"
      module="MODULE_08 // COMMUNICATION_PORT"
      title="Get in"
      accent="Touch"
      lead="Open to SDE internships, full-stack roles and collaborative side projects. The TX link is live."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        {/* form */}
        <form onSubmit={transmit} className="reveal hud p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="c-name" className="label">
                Sender Identifier (Name)
              </label>
              <input
                id="c-name"
                required
                value={form.name}
                onChange={update('name')}
                placeholder="your name"
                className={`mt-1.5 ${field}`}
              />
            </div>

            <div>
              <label htmlFor="c-email" className="label">
                Return Address (Email)
              </label>
              <input
                id="c-email"
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="you@domain.com"
                className={`mt-1.5 ${field}`}
              />
            </div>

            <div>
              <label htmlFor="c-msg" className="label">
                Payload Data (Message)
              </label>
              <textarea
                id="c-msg"
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder="what would you like to build?"
                className={`mt-1.5 resize-y ${field}`}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-5 w-full justify-center">
            {sent ? '✓ MAIL CLIENT OPENED' : '◉ TRANSMIT MESSAGE'}
          </button>

          <p className="mt-3 text-[0.62rem] leading-relaxed text-line-hot">
            Static site — this composes a message in your mail client. No data is stored or sent to
            a server.
          </p>
        </form>

        {/* direct channels */}
        <aside className="reveal hud flex flex-col p-6">
          <p className="module-tag">◈ DIRECT_CHANNELS</p>

          <div className="mt-5 space-y-2.5">
            {[
              {
                Icon: MailIcon,
                label: 'EMAIL',
                value: profile.email,
                href: `mailto:${profile.email}`,
              },
              {
                Icon: LinkedinIcon,
                label: 'LINKEDIN',
                value: profile.linkedin.replace('https://www.', ''),
                href: profile.linkedin,
              },
              {
                Icon: GithubIcon,
                label: 'GITHUB',
                value: `github.com/${profile.githubUsername}`,
                href: `https://github.com/${profile.githubUsername}`,
              },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 border border-line px-3.5 py-3 transition-colors hover:border-cyan/50"
              >
                <span className="text-dim transition-colors group-hover:text-cyan">
                  <Icon width={16} height={16} />
                </span>
                <span className="min-w-0">
                  <span className="label block">{label}</span>
                  <span className="block truncate text-[0.74rem] text-fg transition-colors group-hover:text-cyan">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-5 border-t border-line pt-4">
            <div className="flex items-center justify-between">
              <span className="label">Location</span>
              <span className="text-[0.7rem] text-white">{profile.location}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="label">Status</span>
              <span className="flex items-center gap-1.5 text-[0.7rem] text-cyan">
                <span className="animate-blink">●</span>
                {profile.availability}
              </span>
            </div>
          </div>

          <a href={profile.resumeUrl} className="btn mt-auto w-full justify-center pt-2.5">
            ▤ Download Résumé
          </a>
        </aside>
      </div>
    </Section>
  )
}
