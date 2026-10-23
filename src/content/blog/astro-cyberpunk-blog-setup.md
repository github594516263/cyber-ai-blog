---
title: "从零用 Astro + Markdown 搭建我的赛博朋克风个人博客"
description: "记录为什么我放弃了臃肿的动态 CMS，转而使用 Astro 5 静态生成 + Markdown 来维护个人技术与生活博客。"
pubDate: 2026-10-22
category: "FRONTEND"
tags: ["Astro", "Markdown", "前端开发", "CSS", "静态博客"]
aiSummary: "本文记录了使用 Astro 5 搭建个人静态博客的完整思路：用纯 Markdown 文件管理文章，借助 Content Collections 实现类型校验，并通过 CSS 变量与斜切角设计实现赛博朋克暗黑主题，最后通过静态构建一键部署到 CDN。"
keyTakeaways:
  - "纯 Markdown 写作：无需维护数据库，所有文章直接随 Git 仓库版本控制，迁移成本为零"
  - "Astro 默认零冗余运行时 JS，构建出的纯静态 HTML 首屏加载极快"
  - "深色背景搭配克制的电光青与洋红点缀，既保留赛博朋克酷感，又不会造成长文阅读眼疲劳"
readingTime: "5 分钟"
featured: true
---

## 为什么重新搭了一个博客？

作为一个全栈开发，平时在工作中已经写了太多复杂的后台管理系统、数据库表结构和微服务接口。轮到维护自己的个人博客时，我只有一个核心诉求：**写文章和发文章的过程必须足够简单、纯粹。**

以前折腾过需要独立数据库和后台的博客系统，结果往往是：半年没写几篇文章，服务器续费、数据库备份、版本升级倒花了不少精力。

这次换成了 **Astro + Markdown + 静态部署** 的组合，体验可以用「神清气爽」来形容。

---

## 核心技术选型

| 模块 | 选型方案 | 为什么选它 |
| :--- | :--- | :--- |
| **核心框架** | `Astro 5` | 专为内容型网站设计，构建后直出纯净 HTML，性能拉满 |
| **文章存储** | `本地 Markdown` | 任何编辑器都能写，天然适配大模型阅读和总结 |
| **样式方案** | `原生 CSS 变量` | 无复杂依赖，利用 `clip-path` 轻松切出赛博朋克机械边角 |
| **部署方式** | `GitHub Pages / Vercel` | 免服务器运维，提交代码自动构建上线 |

---

## 如何发布一篇新文章？

现在我写博客的工作流非常简单，只需要在 `src/content/blog/` 目录下新建一个 `.md` 文件，加上清爽的头部信息（Frontmatter）：

```markdown
---
title: "文章标题"
description: "简短的一句话介绍"
pubDate: 2026-10-23
category: "FRONTEND" # FRONTEND | BACKEND | AI_PRACTICE | LIFE
tags: ["Vue", "随笔"]
aiSummary: "用几句话总结这篇文章的核心内容，会展示在文章顶部的 AI 摘要框里。"
readingTime: "4 分钟"
featured: false
---

在这里直接开始写正文...
```

写完之后执行 `npm run build`（或者直接 `git push`），几秒钟就能生成全站静态页面，连全站 `Ctrl + K` 搜索索引也会在构建时自动更新。
