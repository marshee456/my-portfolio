interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_OTHER_VAR?: string
  // add more custom env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
