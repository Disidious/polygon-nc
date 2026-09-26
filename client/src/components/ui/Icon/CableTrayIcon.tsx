type Props = {
  className?: string;
  title?: string;
};

/** Open wire-basket cable tray, drawn in the same line style as the other category icons. */
function CableTrayIcon({ className, title }: Props) {
  return (
    <svg viewBox="2 12 60 44" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} focusable="false">
      {title && <title>{title}</title>}
      <path strokeWidth="3.2" d="M6 38v12h20V38" />
      <path strokeWidth="3.2" d="M6 38l32-20M26 38l32-20M26 50l32-20V18" />
      <path strokeWidth="2" d="M38 18v12h20" />
      <path strokeWidth="2" d="M34 45v-12M42 40v-12M50 35v-12" />
      <path strokeWidth="2" d="M14 45h20M22 40h20M30 35h20" />
      <path strokeWidth="2" d="M14 33v12M22 28v12M30 23v12" />
    </svg>
  );
}

export default CableTrayIcon;
