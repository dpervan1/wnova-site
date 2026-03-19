type IconProps = {
  className?: string;
};

export function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4.5 7l7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.6 1.5-1.6H16.5V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H7.5v3h2.6v7h3.4Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.85 11.85 0 0 0 5.74 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.18-3.45-8.43ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.02-1.37l-.36-.21-3.75.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.52-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.02 6.98 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.45-4.44 9.9-9.88 9.9Zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.48-1.74-1.66-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.03 1-1.03 2.43 0 1.42 1.05 2.8 1.2 3 .15.2 2.05 3.13 4.96 4.4.69.3 1.23.48 1.65.62.69.22 1.31.19 1.8.12.55-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}