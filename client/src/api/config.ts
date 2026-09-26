const configured = import.meta.env.VITE_API_URL;

if (!configured) {
  throw new Error('VITE_API_URL is not set. Add it to server/.env.local (development) or server/.env.production (build).');
}

/** API origin without a trailing slash, e.g. "https://api.polygon-nc.com". */
export const API_BASE_URL = configured.replace(/\/+$/, '');
