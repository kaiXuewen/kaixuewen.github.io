# Kaiwen Xue - Academic Homepage

薛凯文的学术个人主页，内容包括个人简介、研究方向、论文、教育经历、项目、荣誉与专利。

## 分支说明

- `source`：可维护的 React/Vinext 源码、样式、图片与构建配置。
- `main`：GitHub Pages 当前读取的静态发布文件。

日常修改请在 `source` 分支进行。`source` 与线上静态文件相互独立，因此推送源码不会直接改动当前网站。

## 本地查看

```bash
npm install
npm run dev
```

打开 `http://localhost:3000/`。

## 发布到 GitHub Pages

当前网站由 `main` 分支中的静态文件发布。修改 `source` 后，请先在本地运行构建，再将生成的页面成品同步到 `main`。

如果以后希望由 `source` 自动发布，需要同时把 Pages 工作流的触发分支和 `github-pages` Environment 的允许分支改为 `source`。

发布地址为 `https://kaixuewen.github.io/`。

## 项目命令

```bash
npm run dev      # 本地开发
npm run build    # 生成静态站点到 dist/client
npm run lint     # 代码检查
```
