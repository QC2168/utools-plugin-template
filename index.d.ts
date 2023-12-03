export interface ProcessVersions {
    node: () => string;
    chrome: () => string;
    electron: () => string;
}

declare global {
    interface Window {
      versions: ProcessVersions;
    }
  }
   