# ⚡ NEURAL//DECK — Cyberpunk + AI 个人静态博客

基于 **Astro 5 + Markdown Content Collections + 纯静态生成 (SSG)** 构建的赛博朋克与人工智能主题个人博客。

## ✨ 核心特性

1. **赛博朋克 HUD 视觉引擎**：
   - 深空黑曜石背景 (`#06070b`) + 电光青 (`#00f3ff`) + 赛博洋红 (`#ff0055`) + 矩阵荧光黄 (`#fcee0a`)
   - 60FPS 轻量级神经网络突触 Canvas 粒子背景
   - 一键切换 **CYBER (电光青)** / **MATRIX (黑客帝国绿)** 双主题，以及可开关的 **CRT 扫描线滤镜**
2. **AI 原生内容体验**：
   - **CORTEX-Ω 神经命令终端 (`Ctrl + K` / `⌘K`)**：支持全站 Markdown 毫秒级语义/关键词检索，以及 `/help`、`/ls`、`/whoami`、`/random`、`/matrix` 等交互式 CLI 指令
   - **AI 神经导读面板 (Neural Synthesis Box)**：每篇文章内置 AI 核心摘要、置信度评分 (`SYN: 99.2%`)、核心向量结论提取，支持一键重解码打字机动画 (`⚡ RE-DECODE`)
3. **Markdown 驱动 & 100% 静态部署**：
   - 所有文章位于 `src/content/blog/*.md`，由 Astro Content Layer (`src/content.config.ts`) 提供编译期强类型校验
   - 预置 GitHub Pages (`.github/workflows/deploy.yml`)、Vercel (`vercel.json`) 与 Netlify (`netlify.toml`) 静态部署配置

---

## 🚀 本地运行与构建

```bash
# 1. 启动开发服务器 (支持热更新)
npm run dev

# 2. 生成纯静态生产包 (输出至 dist/ 目录)
npm run build

# 3. 本地预览生产环境静态产物
npm run preview
```

---

## ✍️ 如何撰写新的 Markdown 博客？

在 `src/content/blog/` 目录下新建 `.md` 文件（例如 `my-ai-agent.md`）：

```markdown
---
title: "你的文章标题"
description: "一句话核心导读"
pubDate: 2026-10-23
category: "AI_AGENT" # 可选: AI_AGENT | LLM_ARCH | CYBER_UI | EDGE_COMPUTE | NEURAL_THOUGHTS
tags: ["Multi-Agent", "LLM", "Cyberpunk"]
aiSummary: "由 AI 提炼的核心摘要，将展示在文章顶部的神经导读面板中。"
keyTakeaways:
  - "核心结论向量 01"
  - "核心结论向量 02"
aiModel: "CORTEX-Ω v4.8"
confidence: 99.4
readingTime: "6 MIN"
featured: true
serialCode: "LOG-2026-101"
---

## 0x01 // 章节标题

在这里使用标准 Markdown 编写正文、代码块、表格或数学公式...
```

---

## 🛠️ 如何自定义个人信息？

打开 `src/data/siteConfig.ts`，即可一站式修改你的：
- 赛博代号 (`author.handle`)、姓名、简介、社交链接
- 首页右侧的 AI 算力遥测指标 (`telemetry`)
- 技能同步率矩阵 (`skills`) 与演进时间线 (`timeline`)
- AI 实验室开源项目列表 (`projects`)
