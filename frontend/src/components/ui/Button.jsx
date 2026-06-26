const VARIANTS = {
  // Gradient fill (not flat forsythia) + an inset top sheen so the pill
  // reads as a lit, slightly convex surface rather than a flat color chip.
  primary:
    'bg-meridian-gradient text-oceanic-noir shadow-button-primary hover:shadow-button-primary-hover hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'bg-white/[0.06] text-arctic-powder border border-white/10 shadow-button-ghost hover:bg-white/[0.1] hover:border-white/20',
  outline:
    'bg-white/70 text-oceanic-noir border border-oceanic-noir/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:bg-white hover:border-oceanic-noir/25',
};

export function Button({ as: Tag = 'button', variant = 'primary', className = '', children, ...rest }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[-0.01em]
        transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out-expo
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia
        ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
