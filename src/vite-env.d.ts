/// <reference types="vite/client" />

// 声明window.versions类型，用于utools环境
declare global {
  interface Window {
    versions?: {
      node?: () => string;
      chrome?: () => string;
      electron?: () => string;
    };
  }
}