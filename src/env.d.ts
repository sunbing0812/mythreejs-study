interface ImportMetaEnv {
    readonly VITE_USER_NODE_ENV: string;
    readonly  VITE_APP_BASE_API: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  