import { profile } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="shell flex flex-col items-center justify-between gap-3 text-[0.8rem] text-[#6f7489] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.
        </p>
        <a href="#top" className="transition-colors hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
