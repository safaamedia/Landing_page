// Fallback ambient declaration to satisfy editors/TS server when package types
// can't be resolved. The real types from node_modules will still be used when
// available; this only prevents "Cannot find module 'react-i18next'" errors.
declare module 'react-i18next' {
  import type * as React from 'react';

  // Minimal commonly-used exports — extend as needed.
  export function useTranslation(ns?: string | string[]): { 
    t: (key: string, opts?: any) => string;
    i18n: {
      language: string;
      changeLanguage: (lng: string) => Promise<void>;
    };
  };
  export function Trans(props: any): React.ReactElement | null;
  export const initReactI18next: any;

  export default {
    useTranslation,
    Trans,
    initReactI18next,
  };
}