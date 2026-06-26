// Deterministic per-name "logomark": a tiny abstract glyph (rotated square +
// cut corner, in the spirit of the brand mark's circle+arc) so the strip
// reads as a row of distinct logo lockups rather than a list of plain words.
function Glyph({ seed }) {
  const rotation = (seed * 47) % 45;
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        transform={`rotate(${rotation} 8 8)`}
      />
    </svg>
  );
}

export function Marquee({ items }) {
  // Render the list twice back-to-back; the animation translates exactly
  // -50% so the loop seam is invisible. Pure CSS transform — no JS ticking.
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight text-arctic-powder/40 transition-colors duration-300 hover:text-arctic-powder/80 sm:text-2xl"
          >
            <Glyph seed={item.length + i} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
