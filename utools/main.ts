const createWindow = async () => {
    const win = utools.createBrowserWindow('./index.html', {
        // @ts-ignore
        // 此处类型：https://www.electronjs.org/docs/latest/api/browser-window#new-browserwindowoptions
        // utools dev docs：https://u.tools/docs/developer/api.html#%E7%AA%97%E5%8F%A3%E4%BA%A4%E4%BA%92
        title: 'utools插件开发模板',
        webPreferences: {
            // 载入预加载脚本
            preload: './preload/preload.js'
        }
    }, () => {
        // 显示窗口
        win.show()
        // 聚焦窗口
        win.focus();
        // 开发模式下开启调试工具
        if (utools.isDev()) {
            win.webContents.openDevTools();
        }
    })
}

window.exports = {
    // 插件入口
    "template": {
        mode: "none",
        args: {
            enter: async () => {
                // 创建窗口
                await createWindow();
                // 隐藏插件
                utools.outPlugin();
                // 隐藏主窗口
                utools.hideMainWindow();
            }
        }
    },

}