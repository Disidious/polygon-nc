/** Joins class names, skipping empty values: cx(style.card, active && style.on). */
export const cx = (...names: Array<string | false | null | undefined>) => names.filter(Boolean).join(' ');
