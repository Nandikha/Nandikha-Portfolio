import { profile } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="shell flex flex-col items-center justify-between gap-3 text-[0.62rem] tracking-[0.14em] text-line-hot sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.firstName.toUpperCase()}
          {profile.lastName && ` ${profile.lastName.toUpperCase()}`} · BUILT WITH REACT · VITE ·
          TAILWIND
        </p>
        <a href="#top" className="transition-colors hover:text-cyan">
          ▲ RETURN TO TOP
        </a>
      </div>
    </footer>
  )
}
