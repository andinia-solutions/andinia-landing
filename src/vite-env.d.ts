/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHATKIT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
