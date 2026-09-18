import { useEffect, useState } from 'react'
import { profile } from '../content'
import { navLinks } from '../navLinks'
import { CloseIcon, MenuIcon } from './Icons'

export default function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [clock, setClock] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      )
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const initials = (profile.firstName[0] + (profile.lastName[0] || profile.firstName[1])).toUpperCase()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-void/92 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      {/* top hairline sweep */}
      <div className="relative h-px w-full overflow-hidden bg-line/60">
        <div className="animate-sweep absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan to-transparent" />
      </div>

      <nav className="shell flex h-14 items-center justify-between" aria-label="Main">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center border border-cyan/40 bg-cyan/10 text-[0.68rem] font-bold text-cyan transition-colors group-hover:bg-cyan group-hover:text-void">
            {initials}
          </span>
          <span className="hidden text-[0.72rem] tracking-[0.2em] text-white sm:block">
            {profile.firstName.toUpperCase()}
            <span className="text-cyan">_{profile.lastName || 'DEV'}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`group flex items-center gap-1.5 px-2.5 py-1.5 text-[0.66rem] tracking-[0.16em] transition-colors ${
                  active === l.id ? 'text-cyan' : 'text-dim hover:text-fg'
                }`}
              >
                <span
                  className={`text-[0.55rem] ${
                    active === l.id ? 'text-cyan' : 'text-line-hot group-hover:text-dim'
                  }`}
                >
                  {l.code}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-[0.62rem] tracking-[0.18em] text-dim md:flex">
            <span className="animate-blink text-cyan">●</span>
            {clock}
          </span>
          <a href="#contact" className="btn hidden !py-1.5 !text-[0.62rem] sm:inline-flex">
            ◈ Transmit
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-9 place-items-center border border-line text-cyan lg:hidden"
          >
            {open ? <CloseIcon width={17} height={17} /> : <MenuIcon width={17} height={17} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-void/97 backdrop-blur-md lg:hidden">
          <ul className="shell py-2">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 border-b border-line/50 py-3 text-[0.72rem] tracking-[0.18em] ${
                    active === l.id ? 'text-cyan' : 'text-dim'
                  }`}
                >
                  <span className="text-[0.6rem] text-line-hot">{l.code}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
