interface LogoProps {
  className?: string
}

/** TCG logo mark — leaf glyph + “TCG” wordmark + “LOGO” tag, per the mockup. */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="size-6 shrink-0"
        fill="none"
      >
        <rect width="32" height="32" fill="#000" />
        <path
          d="M16 4.5c6.2 3.4 9.8 8.6 9.8 14.6 0 1.1-.9 2-2 2-6.6 0-8.6-3.4-8.6-8.4V4.5z"
          fill="#fff"
        />
        <path
          d="M16 4.5c-6.2 3.4-9.8 8.6-9.8 14.6 0 1.1.9 2 2 2 6.6 0 8.6-3.4 8.6-8.4V4.5z"
          fill="#c8c8c8"
        />
      </svg>
      <span className="flex items-baseline leading-none">
        <span className="text-2xl font-extrabold tracking-tight text-black">TCG</span>
        <span className="ml-2 text-[11px] font-semibold tracking-[0.3em] text-mute">LOGO</span>
      </span>
    </span>
  )
}
