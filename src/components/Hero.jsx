import { profile, telemetry } from '../content'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import Markup from './Markup'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-32">
      {/* ambient field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float-slow absolute -top-32 left-1/4 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(34,230,212,0.12),transparent_62%)] blur-3xl" />
        <div className="absolute -right-32 top-10 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(139,124,255,0.12),transparent_65%)] blur-3xl" />
      </div>

      <div className="shell">
        {/* status bar */}
        <div className="reveal is-visible mb-8 flex items-center gap-3 border-y border-line py-2">
          <span className="animate-blink text-cyan">◈</span>
          <p className="overflow-hidden whitespace-nowrap text-[0.62rem] tracking-[0.2em] text-dim">
            {profile.statusLine}
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          {/* ── left column ── */}
          <div className="reveal is-visible">
            <h1 className="display text-[3.2rem] leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              {profile.firstName}
              {profile.lastName && (
                <em className="not-italic glow-cyan"> {profile.lastName}</em>
              )}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              {profile.badges.map((b, i) => (
                <span key={b} className="flex items-center gap-4">
                  {i > 0 && <span className="text-line-hot">·</span>}
                  <span className="text-[0.7rem] tracking-[0.12em] text-cyan/90">{b}</span>
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-2xl text-[0.88rem] leading-[1.85] text-dim">
              <Markup text={profile.intro} />
            </p>

            {/* telemetry grid */}
            <dl className="mt-9 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
              {telemetry.map((t) => (
                <div key={t.label} className="bg-panel px-3.5 py-4">
                  <dt className="label">{t.label}</dt>
                  <dd>
                    <span className="mt-1.5 block text-[0.98rem] font-bold text-white">
                      {t.value}
                    </span>
                    <span className="mt-0.5 block text-[0.6rem] tracking-wider text-cyan/70">
                      {t.sub}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                ★ View Projects
              </a>
              <a href="#workbench" className="btn">
                ⚡ Logic Lab
              </a>
              <a href="#contact" className="btn">
                ◈ Transmit Link
              </a>
            </div>

            {/* marquee ticker */}
            <div className="mt-8 overflow-hidden border-y border-line py-1.5">
              <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
                {[0, 1].map((k) => (
                  <span key={k} className="text-[0.6rem] tracking-[0.3em] text-line-hot">
                    {profile.telemetryTicker} ····· {profile.telemetryTicker} ·····
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── right column: identity panel ── */}
          <aside className="reveal is-visible">
            <div className="hud p-5">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="label">ID_CARD</span>
                <span className="flex items-center gap-1.5 text-[0.6rem] tracking-[0.18em] text-cyan">
                  <span className="animate-pulse-ring inline-block size-1.5 rounded-full bg-cyan" />
                  {profile.availability}
                </span>
              </div>

              {/* portrait placeholder — swap for a real photo */}
              <div className="relative mt-4 aspect-square overflow-hidden border border-line bg-gradient-to-br from-panel-2 to-void">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(rgba(34,230,212,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(34,230,212,0.09)_1px,transparent_1px)] bg-[size:22px_22px]"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="display text-7xl text-cyan/25">
                    {profile.firstName[0]}
                    {profile.lastName[0] || profile.firstName[1]}
                  </span>
                </div>
                {/* scanning line */}
                <div
                  aria-hidden
                  className="animate-sweep absolute inset-x-0 top-1/2 h-16 bg-gradient-to-b from-transparent via-cyan/12 to-transparent"
                />
                <span className="absolute bottom-2 left-2 text-[0.55rem] tracking-[0.2em] text-cyan/50">
                  IMG_00 // REPLACE_IN_/public
                </span>
              </div>

              <dl className="mt-4 space-y-2">
                {profile.portraitStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between border-b border-line/60 pb-2 last:border-0"
                  >
                    <dt className="label">{s.label}</dt>
                    <dd className="text-[0.66rem] tracking-[0.12em] text-white">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <a
                  href={`https://github.com/${profile.githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-9 place-items-center border border-line text-dim transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  <GithubIcon width={16} height={16} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-9 place-items-center border border-line text-dim transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  <LinkedinIcon width={16} height={16} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="grid h-9 place-items-center border border-line text-dim transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  <MailIcon width={16} height={16} />
                </a>
              </div>

              <a href={profile.resumeUrl} className="btn mt-2 w-full justify-center !text-[0.62rem]">
                ▤ Download Résumé
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
