/**
 * Standard module section: `MODULE_0X // NAME` tag, split-weight heading,
 * lead paragraph and a scan divider.
 */
export default function Section({ id, module: mod, title, accent, lead, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <header className="reveal">
          <div className="flex items-center gap-3">
            <span className="module-tag">{mod}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan/35 to-transparent" />
          </div>

          <h2 className="display mt-4 text-3xl text-white sm:text-5xl">
            {title} <em className="not-italic glow-cyan">{accent}</em>
          </h2>

          {lead && (
            <p className="mt-4 max-w-3xl text-[0.86rem] leading-relaxed text-dim">{lead}</p>
          )}
        </header>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
