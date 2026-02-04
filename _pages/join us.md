---
# 核心基础配置（保留al-folio主题格式，适配全局样式）
layout: about        # 沿用主题about布局，保证页面样式统一
title: 纯文本文档    # 页面标题（可自定义，如“实验室说明”“项目介绍”）
permalink: /plaintext/ # 页面访问路径：网站根域名/plaintext/ （可自定义，如/说明文档/）
subtitle: 极简纯文本展示 · 无图片/冗余元素 · 支持Markdown语法  # 副标题（可自定义或删除）

# 以下所有冗余功能全部关闭（核心：剔除非纯文本元素）
profile: false       # 关闭个人资料卡片（无图片/地址，纯文本核心）
selected_papers: false # 关闭精选论文列表
social: false        # 关闭底部社交图标栏

# 公告板块：关闭（纯文本无需）
announcements:
  enabled: false     # 核心关闭，其余配置无需修改
  scrollable: true
  limit: 5

# 最新文章板块：关闭（纯文本无需）
latest_posts:
  enabled: false     # 核心关闭，其余配置无需修改
  scrollable: true
  limit: 3
---

# 这里写你的一级标题
## 二级副标题（支持Markdown所有基础语法）
### 三级小标题

这是纯文本展示区域，可直接编写任意文本内容，支持Markdown原生语法：
- 无序列表展示
- 多条目分类说明
1. 有序列表
2. 步骤化内容梳理
**粗体强调文本**、*斜体注释文本*、[超链接示例](https://www.szu.edu.cn)（替换为你的实际链接）。

### 段落分隔
直接空行即可实现段落分隔，大段文本可随意分段，主题会自动渲染为整洁的排版，适配电脑、手机等所有设备。

### 代码片段（如需展示代码）
```python
# 支持代码块语法，自动高亮
print("Hello SZU!")
