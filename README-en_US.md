# utools-plugin-template

A `Vite+Vue` template for `Utools` plugin development, allowing you to create your own `Utools` plugin more efficiently

## ✨ Features

- 🌈 Out-of-the-box `Vite+Vue3` template for `Utools` plugin development
- ⚡ Automatically injects `HMR` field in the development environment
- 🦍 Automatically build `upx` package
- 🧸 Builds `utools/preload` file to handle third-party dependencies
- 🚀 Build desktop applications

## 🥩 Getting Started

### 🔗 Clone project

```bash
git clone https://github.com/QC2168/utools-plugin-template.git
```

### 🔧 Install dependencies

> It is recommended to use the `pnpm` package management tool. If you have not installed it yet, you can execute `npm install -g pnpm` to install it

```bash
pnpm install
```

### 🛫 Run project

```bash
pnpm dev
```

### 📦 Build project

```bash
pnpm build
```

> When executing the `build` command, the plugin will be directly built into an `upx` package. Developers do not need to perform a secondary build in the `utools` developer tool 🚀

### How to start the plugin

In `utools`, open the `Utools` developer tool and create a new project

According to your actual situation, fill in the information required by the plugin

![20231110155724](https://raw.githubusercontent.com/QC2168/note-img/main/20231110155724.png)

Execute the `dev` command to generate the `dist` folder and select the file path `/dist/plugin.json`

![20231110155834](https://raw.githubusercontent.com/QC2168/note-img/main/20231110155834.png)

![20231110155947](https://raw.githubusercontent.com/QC2168/note-img/main/20231110155947.png)

Start the plugin and trigger the first keyword of the plugin

![20231110160045](https://raw.githubusercontent.com/QC2168/note-img/main/20231110160045.png)

![20231110160101](https://raw.githubusercontent.com/QC2168/note-img/main/20231110160101.png)

![20231110160121](https://raw.githubusercontent.com/QC2168/note-img/main/20231110160121.png)

Embark on your development journey~

## 🍭 Finally

If you have better ideas, please submit an `issue` or `pr` 🥰🥰

If you find this project helpful, you can support me by clicking the 'star' button in the upper right corner. Thank you~ 😘😘.