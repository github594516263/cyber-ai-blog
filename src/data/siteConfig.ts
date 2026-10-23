export interface ProjectItem {
  id: string;
  name: string;
  codename: string;
  description: string;
  status: '运行中' | '已部署' | '实验中' | '训练中';
  techStack: string[];
  metrics: string;
  repoUrl: string;
  demoUrl?: string;
}

export const categoryLabels: Record<string, string> = {
  ALL: '全部文章',
  AI_AGENT: '智能体架构',
  LLM_ARCH: '大模型工程',
  EDGE_COMPUTE: '端侧算力',
  CYBER_UI: '赛博视觉',
  NEURAL_THOUGHTS: '硅基随笔',
};

export const siteConfig = {
  title: '赛博智脑',
  subtitle: '人工智能架构与赛博朋克工程日志',
  author: {
    handle: '零号骇客 · AI 架构师',
    name: '林夜 (Neo Lin)',
    role: '全栈 AI 工程师 & 赛博义体开发者',
    location: '第八扇区 · 新上海节点',
    bio: '探索大语言模型（LLM）、多智能体系统（Multi-Agent）、边缘端神经计算与赛博朋克数字美学的边界。用代码构建意识，以 Markdown 记录硅基演进。',
    avatarText: '智脑-2077',
    status: '神经连接在线 · 同步率 99.4%',
    email: 'neural@cyberdeck.dev',
    github: 'https://github.com',
    twitter: 'https://x.com',
  },
  telemetry: {
    modelVersion: '中枢智脑 Ω-v4.8',
    contextWindow: '200万 词元',
    inferenceLatency: '14.2 毫秒',
    gpuCluster: '8x H200 算力阵列',
    securityLevel: '黑冰防护 IV 级',
  },
  skills: [
    { name: '大模型智能体工作流 & MCP 协议', level: 96, category: '神经核心' },
    { name: '混合检索增强 (RAG) & 知识图谱', level: 92, category: '神经核心' },
    { name: 'TypeScript / Astro / 现代前端架构', level: 95, category: '赛博界面' },
    { name: 'PyTorch / vLLM / 高性能算子推理', level: 84, category: '硅基引擎' },
    { name: 'WebGL / GLSL 着色器 / 创意视觉', level: 88, category: '赛博界面' },
    { name: 'Rust / WebAssembly / 端侧智能', level: 86, category: '硅基引擎' },
  ],
  timeline: [
    {
      year: '2026.Q4',
      title: '构建自治多智能体神经中枢 (Autonomous Swarm OS)',
      org: '开源神经实验室',
      desc: '设计基于 MCP 协议与本地量化模型的全天候开发智能体集群，实现代码自愈与自动化知识蒸馏。',
    },
    {
      year: '2025.Q3',
      title: '边缘端混合 RAG 检索引擎研发',
      org: '突触系统实验室',
      desc: '将语义向量检索与知识图谱结合，在端侧 WebGPU 上实现毫秒级私有记忆唤醒。',
    },
    {
      year: '2024.Q2',
      title: '全栈生成式 UI 与实时交互引擎',
      org: '夜之城数字工坊',
      desc: '主导高帧率赛博 HUD 可视化控制台设计，服务超百万级并发遥测流。',
    },
  ],
  projects: [
    {
      id: '项目-01',
      name: '幽灵外壳 · 多智能体运行时',
      codename: '代号：草薙素子',
      description: '基于 Rust 与 MCP 协议的轻量级本地多智能体运行时，支持终端沙箱执行、向量记忆持久化与自主工具编排。',
      status: '运行中',
      techStack: ['Rust', 'MCP 协议', 'SQLite-Vec', 'Tokio'],
      metrics: '2.1k 星标 · 内存占用 <15MB',
      repoUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
    {
      id: '项目-02',
      name: '赛博图谱 · 混合 RAG 检索引擎',
      codename: '代号：神经编织',
      description: '融合知识图谱（GraphRAG）与混合重排序的第二大脑检索引擎，专为百万字 Markdown 知识库打造。',
      status: '已部署',
      techStack: ['Python', 'FastAPI', 'Qdrant', 'Llama-3.3'],
      metrics: '召回率@5: 94.8% · 28ms 延迟',
      repoUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
    {
      id: '项目-03',
      name: 'WebGPU 端侧大模型终端',
      codename: '代号：铬金皮层',
      description: '零后端纯浏览器运行的赛博终端大语言模型推理器，利用 WebGPU 实现 60 词元/秒端侧极速对话。',
      status: '实验中',
      techStack: ['WebGPU', 'TypeScript', 'Astro', 'MLC-LLM'],
      metrics: '零服务器成本 · 100% 隐私安全',
      repoUrl: 'https://github.com',
    },
    {
      id: '项目-04',
      name: '全息霓虹 · AI 着色器工坊',
      codename: '代号：视觉神经',
      description: '用自然语言实时生成 GLSL 赛博朋克流体与全息故障着色器的 AI 视觉实验场。',
      status: '训练中',
      techStack: ['GLSL', 'Three.js', '大模型 API', 'WebAudio'],
      metrics: '120 帧满速 · 45+ 预设着色器',
      repoUrl: 'https://github.com',
    },
  ] as ProjectItem[],
};
