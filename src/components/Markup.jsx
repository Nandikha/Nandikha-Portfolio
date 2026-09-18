/**
 * Renders **bold** segments from content.js as highlighted `.hl` spans.
 * Deliberately tiny — no markdown dependency needed.
 */
export default function Markup({ text, className = '' }) {
  const parts = String(text).split(/\*\*(.+?)\*\*/g)
  return (
    <span className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="hl">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </span>
  )
}
