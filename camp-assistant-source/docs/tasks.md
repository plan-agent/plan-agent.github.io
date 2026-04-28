这一份要教学生把任务切细。关键不是“写很多”，而是“每项任务都能验证”。
# docs/tasks.md

## T0 初始化项目
- [ ] 创建 Next.js + TypeScript 项目
- [ ] 配置 Tailwind
- [ ] 创建 `docs/`、`data/`、`lib/`、`tests/` 目录
- [ ] 初始化 `data/registrations.json` 为 `[]`

完成标准：
- 项目可启动
- 目录结构正确

## T1 文档先行
- [ ] 写 `docs/spec.md`
- [ ] 写 `docs/plan.md`
- [ ] 写 `docs/tasks.md`

完成标准：
- 三份文档内容一致
- 功能范围明确
- 范围外写清楚

## T2 首页
- [ ] 完成 `/` 页面
- [ ] 展示活动介绍、亮点、四大模块
- [ ] 加入“立即报名”“常见问题”按钮

完成标准：
- 首页可正常访问
- 两个按钮跳转正确

## T3 报名表单 UI
- [ ] 完成 `/register` 页面布局
- [ ] 完成表单字段输入
- [ ] 完成提交按钮和错误提示位置

完成标准：
- 表单可输入
- 错误提示区域预留完成

## T4 报名校验逻辑
- [ ] 编写 `lib/validation.ts`
- [ ] 编写 `tests/validation.test.ts`
- [ ] 覆盖有效输入、缺失字段、邮箱错误三类情况

完成标准：
- 测试先失败后通过
- `npm test` 通过

## T5 报名提交 API
- [ ] 编写 `app/api/registrations/route.ts`
- [ ] 编写 `lib/registrations.ts`
- [ ] 提交成功后写入 `data/registrations.json`

完成标准：
- 表单可成功提交
- 数据写入文件
- 管理员页可复用该数据

## T6 FAQ 功能
- [ ] 创建 `data/faq.json`
- [ ] 编写 `lib/faq.ts`
- [ ] 编写 `tests/faq.test.ts`
- [ ] 完成 `/faq` 页面交互

完成标准：
- 已知问题返回预置答案
- 未知问题返回兜底提示

## T7 管理员页
- [ ] 完成 `/admin` 页面
- [ ] 显示报名总人数
- [ ] 显示最近报名记录

完成标准：
- 新提交记录刷新后可见
- 列表字段展示正确

## T8 路演页
- [ ] 编写 `lib/stats.ts`
- [ ] 编写 `tests/stats.test.ts`
- [ ] 完成 `/demo` 页面
- [ ] 展示总人数、角色分布、创意想法人数

完成标准：
- 数据统计正确
- 页面可直接用于演示

## T9 验证与收尾
- [ ] 写 `docs/manual-test.md`
- [ ] 完成完整手动验证链路
- [ ] 写 1 分钟 demo script

完成标准：
- 可完成“首页 → 报名 → FAQ → 管理员 → 路演页”的演示链路