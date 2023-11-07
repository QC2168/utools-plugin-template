<template>
<button type="button" @click="create">创建一个新窗口</button>
</template>
<script setup lang="ts">
const create=()=>{
    window.createWindow()
}
</script>
<style lang="less" scoped>
</style>
