// serviceWorker.d.ts

export {};

declare global {
  interface Window {
    __WB_MANIFEST?: Array<{ url: string; revision: string }>;
  }
}
export function register(config?: any): Promise<void>;
export function unregister(): Promise<void>;