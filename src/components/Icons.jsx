// Inline SVGs. Kept here so no icon font or extra request is needed, and so
// every icon inherits the surrounding text colour.

export function DiscordIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.32 4.57A19.8 19.8 0 0 0 15.43 3c-.24.42-.5.98-.69 1.43a18.3 18.3 0 0 0-5.48 0C9.07 3.98 8.8 3.42 8.57 3a19.7 19.7 0 0 0-4.9 1.57C.57 9.2-.27 13.7.15 18.14A19.9 19.9 0 0 0 6.2 21.2c.49-.66.92-1.37 1.3-2.11-.71-.27-1.4-.6-2.04-.99.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.1 0c.16.14.33.28.5.4-.65.39-1.33.72-2.05 1 .37.73.8 1.44 1.3 2.1a19.8 19.8 0 0 0 6.04-3.06c.5-5.15-.84-9.6-3.53-13.57ZM8.02 15.42c-1.18 0-2.15-1.09-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.1 2.15 2.42 0 1.33-.95 2.42-2.15 2.42Zm7.96 0c-1.18 0-2.15-1.09-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.1 2.15 2.42 0 1.33-.94 2.42-2.15 2.42Z" />
    </svg>
  )
}

export function ArrowIcon({ size = 16 }) {
  return (
    <svg
      className="btn__arrow"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function CopyIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function CheckIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function StarIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1c.9 6.2 3.3 9.8 8 11-4.7 1.2-7.1 4-8 11-.9-7-3.3-9.8-8-11 4.7-1.2 7.1-4.8 8-11Z" />
    </svg>
  )
}
