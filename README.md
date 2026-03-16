# 📚 城市经济学 - 课堂小测系统

## ✨ 功能特性

- ✅ 学号登录，姓名自动补全
- 🔐 考试码 + 重考码双机制
- 🎲 17题随机抽10题，题目乱序+选项乱序
- 🛡️ 防作弊：切屏检测、截屏检测、禁用开发者工具（超3次强制交卷）
- ⏱️ 15分钟倒计时
- 📊 自动评分，即时出分
- 📋 答卷回顾，查看正确答案
- 📝 成绩自动收集到飞书多维表格

## 📁 文件结构

```
UrbanEconomics-quiz/
├── index.html          # 前端考试系统（单文件，可直接打开）
├── worker.js           # Cloudflare Worker（成绩提交API）
├── wrangler.toml       # Worker配置
├── test.txt            # Test 1 原始题库（17题）
├── 城市经济学-学生名单.csv  # 学生名单
└── reference/          # 参考样例（Real Estate Development English）
```

## 🚀 部署步骤

### 方式一：本地测试（无需部署）
直接用浏览器打开 `index.html` 即可测试（成绩提交功能需要Worker）

### 方式二：完整部署（推荐）

#### 1. 部署成绩收集 API（Cloudflare Workers - 免费）

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare（免费账号）
wrangler login

# 创建 Worker
wrangler create urban-economics-quiz

# 复制 worker.js 到项目
cp worker.js <project>/src/index.js
cp wrangler.toml <project>/wrangler.toml

# 设置飞书应用密钥（需先创建飞书自建应用）
wrangler secret put FEISHU_APP_ID
wrangler secret put FEISHU_APP_SECRET

# 部署
wrangler deploy
```

#### 2. 部署前端页面

**方式A：部署到 Netlify（免费）**
```bash
# 只需上传 index.html 到 Netlify 即可
# 或者用 Netlify Drop 拖拽部署
```

**方式B：部署到 Cloudflare Pages（免费）**
```bash
# 创建 pages 目录，放入 index.html
mkdir pages
cp index.html pages/
wrangler pages deploy pages/
```

#### 3. 更新 API 地址

在 `index.html` 中找到 CONFIG 部分，将 Worker 地址填入：
```javascript
const CONFIG = {
    apiUrl: 'https://your-worker.your-subdomain.workers.dev',
    // ...
};
```

## 📊 成绩查看

成绩自动存储在飞书多维表格中：
**🔗 [查看成绩表](https://dobnc6imym.feishu.cn/base/LBuwbG3pBaNxNXsimBaciB4incb)**

## 🔑 考试码

| 测验 | 考试码 | 重考码 |
|------|--------|--------|
| Test 1 | `UE2026` | `RESET01` |

## 📝 添加新测验

在 `index.html` 的 `QUIZZES` 对象中添加新测验：

```javascript
const QUIZZES = {
    'test1': { /* 现有 */ },
    'test2': {
        title: 'Test 2 - 新主题',
        entryCode: 'NEWCODE',
        resetCode: 'RESET02',
        timeLimit: 15 * 60,
        totalPick: 10,
        questions: [
            {id:1, type:'single', q:'问题内容?', options:['A','B','C','D'], answer: 0},
            // ...更多题目
        ]
    }
};
```

然后访问：`index.html?id=test2`

## 🛡️ 防作弊机制

| 检测类型 | 方式 | 阈值 |
|----------|------|------|
| 切屏 | visibilitychange 事件 | 3次 |
| 截屏 | PrintScreen 按键 | 计入切屏 |
| 开发者工具 | F12 / Ctrl+Shift+I | 计入切屏 |
| 右键菜单 | contextmenu 禁用 | - |
| 复制粘贴 | copy/cut/paste 禁用 | - |

## 👨‍🎓 学生名单

当前 24 名学生 + 2 个测试账号。如需添加学生，在 `STUDENTS` 数组中添加：
```javascript
{name:"姓名", id:"学号"}
```
