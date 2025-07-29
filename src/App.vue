<script setup lang="ts">
// 安全检查，避免在浏览器环境中出错
const chromeVersion = window.versions?.chrome?.() || 'Unknown'
const electronVersion = window.versions?.electron?.() || 'Unknown'
const nodeVersion = window.versions?.node?.() || 'Unknown'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>Hello World</h1>
  <h1>Utools Vue3 插件模板</h1>
  <p>当前插件系统基于Electron(V{{ electronVersion }})，Chrome(V{{ chromeVersion }})，Node.js(V{{ nodeVersion }})</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
