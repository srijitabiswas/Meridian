export function Logo({ className = '', monochrome = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="9" fill={monochrome ? 'currentColor' : '#172B36'} opacity={monochrome ? '0.08' : '1'} />
        <circle cx="16" cy="16" r="8.5" fill="none" stroke={monochrome ? 'currentColor' : '#FFC801'} strokeWidth="1.6" />
        <path
          d="M7.6 16c3.4-4.6 13.4-4.6 16.8 0"
          fill="none"
          stroke={monochrome ? 'currentColor' : '#FF9932'}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-lg font-medium tracking-tight">Meridian</span>
    </span>
  );
}