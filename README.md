# utools-plugin-template

基于`Vite+Vue`的`Utools`插件开发模板，让您更快的开发出一款属于自己的`Utools`插件

**中文文档** | [English](https://github.com/QC2168/utools-plugin-template/blob/main/README-en_US.md)

## ✨ 特性

- 🌈 开箱即用的`Vite+Vue3`的`Utools`插件开发模板
- ⚡ 开发环境自动注入`HMR`字段
- 🦍 自动构建`upx`包
- 🧸 构建`utools/preload`文件，处理第三方依赖
- 🚀 构建桌面应用

## 🥩 开始使用

### 🔗 克隆项目

```bash
git clone https://github.com/QC2168/utools-plugin-template.git
```

### 🔧 安装依赖

> 推荐使用`pnpm`包管理工具，如果您还没有安装可以执行`npm install -g pnpm`进行安装

```bash
pnpm install
```

### 🛫 启动项目

```bash
pnpm dev
```

### 📦 打包项目

```bash
pnpm build
```

> 执行`build`命令时，会将插件直接构建成`upx`包，开发者无需在`utools`开发者工具中二次构建 🚀

### 如何启动插件

在`utools`中，打开`utools`开发者工具，并新建一个项目

根据您的实际情况，填写插件所需信息

![20231110155724](https://raw.githubusercontent.com/QC2168/note-img/main/20231110155724.png)

执行`dev`指令，生成`dist`文件夹，将文件路径选中`/dist/plugin.json`

![20231110155834](https://raw.githubusercontent.com/QC2168/note-img/main/20231110155834.png)

![20231110155947](https://raw.githubusercontent.com/QC2168/note-img/main/20231110155947.png)

启动插件，并触发插件第一个关键字

![20231110160045](https://raw.githubusercontent.com/QC2168/note-img/main/20231110160045.png)

![20231110160101](https://raw.githubusercontent.com/QC2168/note-img/main/20231110160101.png)

![20231110160121](https://raw.githubusercontent.com/QC2168/note-img/main/20231110160121.png)

开始你的开发之旅吧~

## 🍭 最后

如果您有更好的想法，欢迎提交`issue`或者`pr` 🥰🥰

如果您觉得这个项目对您有帮助，可以点击右上角的`star`按钮支持一下我，谢谢您~ 😘😘
