/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the Django API, without a trailing slash (set in server/.env.*). */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
