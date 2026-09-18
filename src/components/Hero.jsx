import { profile, stats } from '../content'
import { iconFor } from '../socialIcons'
import { ArrowUpRight, DownloadIcon, PinIcon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.22),transparent_62%)] blur-2xl" />
        <div className="absolute right-[-8rem] top-24 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_30%,#000,transparent)]" />
      </div>

      <div className="shell">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1 text-[0.72rem] text-[#9aa0b4]">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2 opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent-2" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="block gradient-text">{profile.tagline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#9aa0b4]">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-2.5 text-sm text-white transition-colors hover:border-accent/60 hover:bg-accent/10"
            >
              <DownloadIcon />
              Résumé
            </a>

            <div className="ml-1 flex items-center gap-1.5">
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
                    className="grid size-10 place-items-center rounded-full border border-line text-[#9aa0b4] transition-colors hover:border-accent/60 hover:text-white"
                  >
                    <Icon width={17} height={17} />
                  </a>
                )
              })}
            </div>
          </div>

          <p className="mt-7 inline-flex items-center gap-1.5 text-[0.82rem] text-[#6f7489]">
            <PinIcon width={14} height={14} />
            {profile.location}
          </p>
        </div>

        <dl className="reveal mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-soft px-4 py-6 text-center sm:px-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold text-white sm:text-3xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-[0.7rem] uppercase tracking-wider text-[#6f7489]">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
