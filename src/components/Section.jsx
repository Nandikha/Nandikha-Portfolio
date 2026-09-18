export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="shell">
        <header className="reveal max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {lead && <p className="mt-4 text-[0.98rem] leading-relaxed text-[#9aa0b4]">{lead}</p>}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
