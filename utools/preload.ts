// 您可以在进行窗口交互
// utools文档

// https://www.u.tools/docs/developer/api.html#%E7%AA%97%E5%8F%A3%E4%BA%A4%E4%BA%92
window.versions={
    node: () => process.versions.node || 'Unknown',
    chrome: () => process.versions.chrome || 'Unknown',
    electron: () => process.versions.electron || 'Unknown'
}
