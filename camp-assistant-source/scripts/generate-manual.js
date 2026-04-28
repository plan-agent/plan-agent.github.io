const docx = require("docx");
const fs = require("fs");
const path = require("path");

const {
  Document, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableCell, TableRow, WidthType, BorderStyle, convertInchesToTwip
} = docx;

const doc = new Document({
  sections: [{
    properties: {},
    children: [
      new Paragraph({
        text: "双创营报名与答疑助手",
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
      }),
      new Paragraph({
        text: "使用手册",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
      }),

      // 1. 项目简介
      new Paragraph({ text: "一、项目简介", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({
        children: [
          new TextRun("双创营报名与答疑助手是一个轻量 Web 应用，帮助双创营主办方统一展示活动信息、收集报名、回答常见问题，并在路演时展示结果数据。"),
        ],
        spacing: { after: 200 },
      }),
      new Paragraph({
        children: [new TextRun({ text: "技术栈：", bold: true })],
      }),
      new Paragraph({ text: "• Next.js App Router + TypeScript", bullet: { level: 0 } }),
      new Paragraph({ text: "• Tailwind CSS", bullet: { level: 0 } }),
      new Paragraph({ text: "• 本地 JSON 数据持久化", bullet: { level: 0 } }),
      new Paragraph({ text: "• Vitest 测试框架", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      // 2. 环境要求
      new Paragraph({ text: "二、环境要求", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: "• Node.js 18 或更高版本", bullet: { level: 0 } }),
      new Paragraph({ text: "• npm 包管理器", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      // 3. 安装与启动
      new Paragraph({ text: "三、安装与启动", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: "1. 安装依赖", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({
        text: "npm install",
        spacing: { after: 200 },
        shading: { fill: "F5F5F5" },
      }),
      new Paragraph({ text: "2. 启动开发服务器", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({
        text: "npm run dev",
        shading: { fill: "F5F5F5" },
      }),
      new Paragraph({
        children: [
          new TextRun("启动后访问 "),
          new TextRun({ text: "http://localhost:3000", bold: true }),
        ],
        spacing: { after: 200 },
      }),
      new Paragraph({ text: "3. 生产构建", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({
        text: "npm run build",
        shading: { fill: "F5F5F5" },
        spacing: { after: 200 },
      }),

      // 4. 页面说明
      new Paragraph({ text: "四、页面功能说明", heading: HeadingLevel.HEADING_2 }),

      new Paragraph({ text: "4.1 首页 /", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "展示活动信息、亮点、四大模块介绍，提供两个入口按钮：", bullet: { level: 0 } }),
      new Paragraph({ text: "• 立即报名 → 跳转至 /register", bullet: { level: 0 } }),
      new Paragraph({ text: "• 常见问题 → 跳转至 /faq", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      new Paragraph({ text: "4.2 报名页 /register", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "报名表单包含以下字段：", bullet: { level: 0 } }),
      new Paragraph({ text: "• 姓名（必填）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 学校（必填）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 专业（必填）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 年级（必填）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 邮箱（必填，自动格式校验）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 角色倾向（必填：技术开发 / 产品运营 / 设计传播 / 暂未确定）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 技能标签（选填，逗号分隔）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 创意想法（选填，不超过200字）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 参加期待（选填，不超过200字）", bullet: { level: 0 } }),
      new Paragraph({ text: "提交成功后显示绿色成功提示，数据自动保存至 data/registrations.json。", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      new Paragraph({ text: "4.3 FAQ 页 /faq", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "支持两种方式提问：", bullet: { level: 0 } }),
      new Paragraph({ text: "• 在输入框中手动输入问题，按回车或点击「提问」按钮", bullet: { level: 0 } }),
      new Paragraph({ text: "• 点击下方快捷问题按钮直接提问", bullet: { level: 0 } }),
      new Paragraph({ text: "内置问题包括：", bullet: { level: 0 } }),
      new Paragraph({ text: "• 报名截止时间是什么时候？", bullet: { level: 0 } }),
      new Paragraph({ text: "• 没有编程基础可以参加吗？", bullet: { level: 0 } }),
      new Paragraph({ text: "• 可以跨专业组队吗？", bullet: { level: 0 } }),
      new Paragraph({ text: "• 需要自带电脑吗？", bullet: { level: 0 } }),
      new Paragraph({ text: "• 双创营结束后会有什么成果？", bullet: { level: 0 } }),
      new Paragraph({ text: "若问题未匹配到预置答案，将返回兜底提示。", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      new Paragraph({ text: "4.4 管理员页 /admin", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "• 显示报名总人数统计卡片", bullet: { level: 0 } }),
      new Paragraph({ text: "• 以表格形式展示所有报名记录", bullet: { level: 0 } }),
      new Paragraph({ text: "• 列表字段：姓名、学校、专业、角色倾向、提交时间", bullet: { level: 0 } }),
      new Paragraph({ text: "• 记录按提交时间倒序排列", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      new Paragraph({ text: "4.5 路演页 /demo", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "• 展示项目解决的问题与产品方案", bullet: { level: 0 } }),
      new Paragraph({ text: "• 核心功能概览", bullet: { level: 0 } }),
      new Paragraph({ text: "• 数据看板：报名总人数、角色分布、创意想法人数", bullet: { level: 0 } }),
      new Paragraph({ text: "• 下一步升级方向说明", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      // 5. API 说明
      new Paragraph({ text: "五、API 接口说明", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: "GET /api/registrations", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "获取所有报名记录。", bullet: { level: 0 } }),
      new Paragraph({
        text: '响应：{ "data": [ ... ] }',
        shading: { fill: "F5F5F5" },
        spacing: { after: 200 },
      }),

      new Paragraph({ text: "POST /api/registrations", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "提交新的报名信息。", bullet: { level: 0 } }),
      new Paragraph({ text: "请求体需包含：name, school, major, grade, email, role", bullet: { level: 0 } }),
      new Paragraph({
        text: '成功响应：{ "success": true, "data": { ... } }',
        shading: { fill: "F5F5F5" },
      }),
      new Paragraph({
        text: '失败响应：{ "success": false, "errors": { ... } }',
        shading: { fill: "F5F5F5" },
        spacing: { after: 200 },
      }),

      // 6. 测试
      new Paragraph({ text: "六、测试", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: "运行所有单元测试：", bullet: { level: 0 } }),
      new Paragraph({
        text: "npm test",
        shading: { fill: "F5F5F5" },
        spacing: { after: 200 },
      }),
      new Paragraph({ text: "测试覆盖范围：", bullet: { level: 0 } }),
      new Paragraph({ text: "• 报名表单校验逻辑（必填字段、邮箱格式、角色校验、字数限制）", bullet: { level: 0 } }),
      new Paragraph({ text: "• FAQ 关键词匹配逻辑（已知问题、未知问题、空输入）", bullet: { level: 0 } }),
      new Paragraph({ text: "• 数据统计逻辑（总人数、角色分布、创意想法计数）", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      // 7. 目录结构
      new Paragraph({ text: "七、项目目录结构", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({
        text: `camp-assistant/
├── app/                    # 页面与 API 路由
│   ├── api/registrations/  # 报名 API
│   ├── admin/              # 管理员页
│   ├── demo/               # 路演页
│   ├── faq/                # FAQ 页
│   ├── register/           # 报名页
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首页
├── data/                   # 本地数据文件
│   ├── faq.json            # FAQ 知识库
│   └── registrations.json  # 报名记录
├── docs/                   # 项目文档
│   ├── spec.md             # 需求文档
│   ├── plan.md             # 开发计划
│   ├── tasks.md            # 任务清单
│   └── manual-test.md      # 手动验证清单
├── lib/                    # 业务逻辑
│   ├── faq.ts              # FAQ 匹配逻辑
│   ├── registrations.ts    # 数据读写逻辑
│   ├── stats.ts            # 统计逻辑
│   └── validation.ts       # 表单校验逻辑
├── tests/                  # 单元测试
│   ├── faq.test.ts
│   ├── stats.test.ts
│   └── validation.test.ts
├── package.json
├── vitest.config.ts
└── next.config.ts`,
        spacing: { after: 200 },
        shading: { fill: "F5F5F5" },
      }),

      // 8. 常见问题
      new Paragraph({ text: "八、常见问题", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: "Q: 数据存储在哪里？", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "A: 报名数据存储在 data/registrations.json，FAQ 数据存储在 data/faq.json。教学版本使用本地文件作为持久化方案。", bullet: { level: 0 }, spacing: { after: 200 } }),

      new Paragraph({ text: "Q: 如何修改 FAQ 答案？", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "A: 直接编辑 data/faq.json 文件，每个问题包含 id、question、keywords、answer 四个字段。修改后无需重启服务即可生效。", bullet: { level: 0 }, spacing: { after: 200 } }),

      new Paragraph({ text: "Q: 如何清空报名数据？", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "A: 将 data/registrations.json 内容修改为 [] 即可。", bullet: { level: 0 }, spacing: { after: 200 } }),

      new Paragraph({ text: "Q: 支持多用户同时报名吗？", heading: HeadingLevel.HEADING_3 }),
      new Paragraph({ text: "A: 教学版本使用本地 JSON 文件，并发写入可能存在竞态条件。如需生产环境使用，建议升级为数据库方案。", bullet: { level: 0 }, spacing: { after: 200 } }),

      // 9. 演示链路
      new Paragraph({ text: "九、标准演示链路", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: "1. 打开首页，介绍活动信息", bullet: { level: 0 } }),
      new Paragraph({ text: "2. 点击「立即报名」，填写表单并提交", bullet: { level: 0 } }),
      new Paragraph({ text: "3. 点击「常见问题」，演示 FAQ 答疑", bullet: { level: 0 } }),
      new Paragraph({ text: "4. 打开管理员页，查看最新报名记录", bullet: { level: 0 } }),
      new Paragraph({ text: "5. 打开路演页，展示数据统计", bullet: { level: 0 } }),
      new Paragraph({ spacing: { after: 200 } }),

      // 10. 升级方向
      new Paragraph({ text: "十、未来升级方向", heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: "• FAQ 从关键词匹配升级为真实 LLM 问答", bullet: { level: 0 } }),
      new Paragraph({ text: "• 本地 JSON 升级为数据库存储", bullet: { level: 0 } }),
      new Paragraph({ text: "• 增加管理员登录与数据导出功能", bullet: { level: 0 } }),
      new Paragraph({ text: "• 增加消息通知与自动分组功能", bullet: { level: 0 } }),
    ],
  }],
});

docx.Packer.toBuffer(doc).then((buffer) => {
  const outPath = path.join(__dirname, "..", "使用手册.docx");
  fs.writeFileSync(outPath, buffer);
  console.log("使用手册已生成:", outPath);
});
