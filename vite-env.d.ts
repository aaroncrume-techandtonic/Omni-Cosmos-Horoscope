export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY:AIzaSyBZC30bkrI6gzoXZzmd5NfS4w_HoeXZu1A string;
      [key: string]: string | undefined;
    }
  }
}
