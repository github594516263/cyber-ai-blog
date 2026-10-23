export interface ProjectItem {
  id: string;
  name: string;
  tag: string;
  description: string;
  status: '维护中' | '已上线' | '开源项目' | '业余折腾';
  techStack: string[];
  highlight: string;
  repoUrl: string;
  demoUrl?: string;
}

export const categoryLabels: Record<string, string> = {
  ALL: '全部文章',
  FRONTEND: '前端开发',
  BACKEND: '后端与架构',
  AI_PRACTICE: 'AI 实践',
  LIFE: '生活随笔',
};

export const siteConfig = {
  title: "Huang's CyberLog",
  subtitle: '全栈开发笔记与生活日常',
  author: {
    handle: 'Full-Stack Developer',
    name: 'Huang',
    role: '全栈开发工程师 · 喜欢折腾新技术与效率工具',
    location: '中国 · 线上开发节点',
    bio: '一名热爱写代码的全栈开发者。在这里记录日常前端与后端开发踩坑、AI 辅助编程实践，以及敲代码之余的生活日常与读书思考。',
    avatarText: 'DEV',
    status: '状态：正在写代码 & 记录日常',
    email: 'huang@example.com',
    github: 'https://github.com',
  },
  profileStats: {
    mainFrontend: 'Vue / React / Astro',
    mainBackend: 'Node.js / Java / Go',
    aiCopilot: 'Cursor / Claude / Gemini',
    deployStack: 'Docker / Nginx / 静态 CDN',
  },
  skills: [
    { name: 'Vue / React / TypeScript 前端工程化', level: 92, category: '前端开发' },
    { name: 'Node.js / 后端接口设计与微服务', level: 88, category: '后端开发' },
    { name: 'MySQL / PostgreSQL / Redis 数据存储', level: 85, category: '数据库' },
    { name: 'AI 辅助开发 / Prompt 调优 / 自动化脚本', level: 90, category: 'AI 提效' },
    { name: 'Docker / Linux / CI/CD 自动化部署', level: 82, category: '运维部署' },
    { name: 'Astro / 静态站点与现代 CSS 视觉设计', level: 88, category: '前端开发' },
  ],
  timeline: [
    {
      year: '2026',
      title: '探索 AI 辅助全栈开发工作流与个人知识库沉淀',
      org: '日常研发 & 个人开源',
      desc: '把 AI 编程助手深度融入日常业务开发与代码审查，并用 Astro + Markdown 重构了个人赛博风博客。',
    },
    {
      year: '2024 - 2025',
      title: '全栈核心业务系统研发与前端架构升级',
      org: '全栈开发工程师',
      desc: '负责企业级中后台前端组件化架构与后端高并发接口优化，推动团队自动化部署流程落地。',
    },
    {
      year: '更早之前',
      title: '从写下第一行 Hello World 到成为全栈开发',
      org: '持续折腾中',
      desc: '一路经历前后端分离、容器化部署到如今的 AI 结对编程时代，始终保持对代码和生活的热爱。',
    },
  ],
  projects: [
    {
      id: '01',
      name: 'CyberLog 赛博风静态个人博客',
      tag: '个人网站',
      description: '基于 Astro 5 + Markdown 打造的赛博朋克风格个人博客，支持 AI 文章摘要速览、Ctrl+K 快捷搜索与全平台静态部署。',
      status: '已上线',
      techStack: ['Astro', 'TypeScript', 'Markdown', 'CSS'],
      highlight: '零后端依赖 · 满分首屏性能',
      repoUrl: 'https://github.com',
      demoUrl: 'http://localhost:4321',
    },
    {
      id: '02',
      name: '配置驱动型企业中后台模板',
      tag: '全栈项目',
      description: '通过 JSON/配置项快速生成复杂表格与动态表单的后台管理脚手架，大幅减少重复的 CRUD 页面搬砖工作。',
      status: '维护中',
      techStack: ['Vue 3', 'TypeScript', 'Element Plus', 'Node.js'],
      highlight: '减少 60% 重复表单表格代码',
      repoUrl: 'https://github.com',
    },
    {
      id: '03',
      name: 'Git Commit & AI 日报周报生成助手',
      tag: 'AI 小工具',
      description: '读取本地 Git 提交记录并调用大模型 API，一键汇总生成结构清晰的开发日报与周报命令行小工具。',
      status: '开源项目',
      techStack: ['Node.js', 'CLI', 'LLM API', 'Git'],
      highlight: '周五写周报只需 10 秒钟',
      repoUrl: 'https://github.com',
    },
    {
      id: '04',
      name: '个人 Docker 自托管服务合集',
      tag: '业余折腾',
      description: '整理在个人云服务器和 NAS 上常用的 Docker Compose 一键部署配置（含反向代理、图床、监控与自动备份脚本）。',
      status: '业余折腾',
      techStack: ['Docker', 'Nginx', 'Shell', 'Linux'],
      highlight: '开箱即用的个人服务部署清单',
      repoUrl: 'https://github.com',
    },
  ] as ProjectItem[],
};
