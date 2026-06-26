export function Eyebrow({ children, tone = 'dark' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] ${
        tone === 'dark' ? 'text-deep-saffron' : 'text-nocturnal-expedition'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`font-display text-3xl font-medium leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          tone === 'dark' ? 'text-arctic-powder' : 'text-oceanic-noir'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === 'dark' ? 'text-mystic-mint/80' : 'text-nocturnal-expedition/80'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}