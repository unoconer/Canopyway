// Brand mark — a round badge: a broad tree canopy with a clay path leading to it.
/** Logo mark SVG. `id` must be unique per page instance. */
export function markSvg(id = 'cw', cls = 'brand__mark') {
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A352F"/><stop offset="1" stop-color="#1E1C18"/></linearGradient><clipPath id="${id}c"><circle cx="24" cy="24" r="23"/></clipPath></defs><circle cx="24" cy="24" r="23" fill="url(#${id})"/><g clip-path="url(#${id}c)"><path d="M22.4 31h3.2l9 17H13.4Z" fill="#E07A4C"/><path d="M24 33.5v13" stroke="#FBF8F2" stroke-width="1" stroke-dasharray="2 2" opacity=".7"/></g><rect x="22.6" y="22" width="2.8" height="9.5" rx="1" fill="#B9906B"/><circle cx="19.5" cy="22.5" r="6" fill="#6F9A60"/><circle cx="28.5" cy="22.5" r="6" fill="#6F9A60"/><circle cx="14.5" cy="20" r="5.6" fill="#9CC08B"/><circle cx="33.5" cy="20" r="5.6" fill="#9CC08B"/><circle cx="24" cy="15.5" r="7.6" fill="#9CC08B"/><circle cx="21.5" cy="12.6" r="2.2" fill="#C9DEBB" opacity=".8"/></svg>`;
}

export const markFile = () =>
  markSvg('g', 'mark').replace('<svg class="mark"', '<svg xmlns="http://www.w3.org/2000/svg"').replace(' aria-hidden="true" focusable="false"', '');
