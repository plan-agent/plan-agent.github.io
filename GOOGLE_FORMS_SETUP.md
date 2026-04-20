# Google Forms 配置指南

## 📋 当前状态
- ✅ Google Form 已创建：https://docs.google.com/forms/d/1ntxIc-ho16hLu9O1Mn-D9RHvS_YBdCvR7fg8tBnC7CM/edit
- ⚠️ 需要配置 Entry IDs 才能正常提交

## 🔧 配置步骤

### 第一步：确保表单字段完整

访问您的 Google Form，确保包含以下字段（顺序和类型要匹配）：

1. **姓名** - 简答题 (必填)
2. **学号** - 简答题 (必填)
3. **学院** - 下拉选择题 (必填)
   - 选项：计算机与软件学院、电子与信息工程学院、机电与控制工程学院等
4. **专业** - 简答题 (必填)
5. **年级** - 下拉选择题 (必填)
   - 选项：2023级（大一）、2024级（大二）、2025级（大三）、2026级（大四）、研究生、博士生
6. **是否自带笔记本电脑** - 单选题 (必填)
   - 选项：是、否
7. **微信号** - 简答题 (必填)

### 第二步：获取预填充链接

1. 在 Google Form 编辑页面，点击右上角的三个点 `⋮`
2. 选择 **"获取预填充链接"**
3. 在弹出的表单中，**随意填写每个字段**（用于示例）
   - 姓名：`测试`
   - 学号：`12345678`
   - 学院：选择任意一个
   - 专业：`测试专业`
   - 年级：选择任意一个
   - 是否自带笔记本电脑：选择任意一个
   - 微信号：`test123`
4. 点击底部的 **"获取链接"** 按钮
5. 复制整个链接（会很长）

### 第三步：提取 Entry IDs

预填充链接格式类似：
```
https://docs.google.com/forms/d/e/1ntxIc-ho16hLu9O1Mn-D9RHvS_YBdCvR7fg8tBnC7CM/viewform?usp=pp_url&entry.123456789=测试&entry.987654321=12345678&...
```

从链接中提取每个 `entry.xxxxxxxxx` 的数字部分：

- `entry.123456789` → 姓名的 Entry ID
- `entry.987654321` → 学号的 Entry ID
- 以此类推...

### 第四步：更新 register.html

找到 `register.html` 文件中的这段代码（大约在第 707 行）：

```javascript
// Google Forms 字段映射（entry IDs 需要从预填充链接中获取）
const FIELD_MAPPING = {
    name: 'entry.YOUR_NAME_ENTRY_ID',
    studentId: 'entry.YOUR_STUDENT_ID_ENTRY_ID',
    college: 'entry.YOUR_COLLEGE_ENTRY_ID',
    major: 'entry.YOUR_MAJOR_ENTRY_ID',
    grade: 'entry.YOUR_GRADE_ENTRY_ID',
    laptop: 'entry.YOUR_LAPTOP_ENTRY_ID',
    wechat: 'entry.YOUR_WECHAT_ENTRY_ID'
};
```

替换为实际的 Entry IDs：

```javascript
const FIELD_MAPPING = {
    name: 'entry.123456789',        // 替换为姓名的 entry ID
    studentId: 'entry.987654321',   // 替换为学号的 entry ID
    college: 'entry.111111111',     // 替换为学院的 entry ID
    major: 'entry.222222222',       // 替换为专业的 entry ID
    grade: 'entry.333333333',       // 替换为年级的 entry ID
    laptop: 'entry.444444444',      // 替换为电脑的 entry ID
    wechat: 'entry.555555555'       // 替换为微信号的 entry ID
};
```

### 第五步：提交更新

```bash
git add register.html
git commit -m "Configure Google Forms entry IDs"
git push origin main
```

等待 1-2 分钟让 GitHub Pages 部署完成。

## 📊 查看提交的数据

1. 打开您的 Google Form
2. 点击顶部的 **"回复"** 标签
3. 点击右上角的 **"在 Sheets 中查看"** 图标（表格图标）
4. 这会创建一个 Google Sheets，所有提交的数据都会自动保存在这里
5. 您可以随时查看、导出、分析报名数据

## 🆘 需要帮助？

如果您不确定如何操作，请：

1. 将获取的预填充链接完整发给我
2. 我会帮您提取所有 Entry IDs 并更新代码

## 📝 测试提交

配置完成后，测试步骤：
1. 访问 https://plan-agent.github.io/register.html
2. 填写表单并提交
3. 检查 Google Sheets 中是否收到数据
4. 如果成功，页面会显示"报名成功"提示
