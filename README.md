# Kaiwen Xue - Academic Homepage

薛凯文的学术个人主页，内容包括个人简介、研究方向、论文、教育经历、项目、荣誉与专利。

## 分支说明

- `source`：可维护的 React/Vinext 源码、样式、图片与构建配置。
- `main`：GitHub Pages 当前读取的静态发布文件。

日常修改请在 `source` 分支进行。该分支的 Pages 工作流会构建 `dist/client`；若仓库的 Pages Source 设为 **GitHub Actions**，推送后会自动发布。

## 本地查看

```bash
npm install
npm run dev
```

打开 `http://localhost:3000/`。

## 发布到 GitHub Pages

1. 将源码修改提交到 `source` 分支。
2. 进入仓库 **Settings → Pages**，将 **Source** 设为 **GitHub Actions**。
3. 推送 `source` 后，`.github/workflows/pages.yml` 会自动构建并发布网站。

发布地址为 `https://kaixuewen.github.io/`。

## 项目命令

```bash
npm run dev      # 本地开发
npm run build    # 生成静态站点到 dist/client
npm run lint     # 代码检查
```
