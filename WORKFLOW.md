# 城市经济学课堂小测 — 操作手册

> 📅 最后更新：2026-03-16
> ✍️ 作者：小龙 (AI Assistant)

---

## 📁 项目文件结构

```
UrbanEconomics-quiz/
├── index.html              # 前端考试系统（核心文件）
├── worker.js               # Cloudflare Worker（成绩提交API）
├── wrangler.toml            # Worker 配置
├── netlify.toml             # Netlify 部署配置
├── quiz-qrcode.png          # 考试二维码
├── 城市经济学-学生名单.csv    # 学生名单备份
├── WORKFLOW.md              # 本文件 - 操作手册
└── reference/               # 参考样例
```

---

## 🌐 在线地址

| 组件 | 地址 |
|------|------|
| **考试页面（Netlify）** | https://dashing-manatee-7619b2.netlify.app/?id=test1 |
| **成绩API（Cloudflare Worker）** | https://urban-economics-quiz.linyixue2026.workers.dev |
| **GitHub 仓库** | https://github.com/linyixue2026/urban-economics-quiz |
| **飞书成绩表（主）** | https://dobnc6imym.feishu.cn/base/LBuwbG3pBaNxNXsimBaciB4incb |
| **Google Sheets（备份）** | （教师个人 Google 表格） |

---

## 🔐 账号与凭证（保存在 .env 中）

| 凭证 | 说明 |
|------|------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Workers 部署 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |
| `NETLIFY_AUTH_TOKEN` | Netlify 前端部署 |
| `GITHUB_TOKEN` | GitHub 代码推送 |
| `FEISHU_APP_ID` | 飞书应用 ID（OpenClaw 机器人复用） |
| `FEISHU_APP_SECRET` | 飞书应用密钥 |

> ⚠️ **这些凭证存在 VPS 的 `/root/.openclaw/.env` 中，切勿外泄！**

---

## 🔑 考试码一览

| 类型 | 码 | 用途 |
|------|-----|------|
| **初试** | `UE2026` | 首次参加考试 |
| **补试** | `RESET01` | 重考/补考 |

> 💡 考试码定义在 `index.html` 的 `QUIZZES` 对象中

---

## 🧪 测试账号

| 学号 | 姓名 | 用途 |
|------|------|------|
| test01 ~ test10 | 测试1 ~ 测试10 | 教师测试用，成绩会提交到飞书 |
| test99 | 演示账号 | （如需可添加） |

---

## 📝 如何添加新测验（Test 2、Test 3...）

### 步骤 1：编辑 index.html

在 `QUIZZES` 对象中添加新的测验：

```javascript
const QUIZZES = {
    'test1': { /* 现有 Test 1 */ },
    
    // ↓↓↓ 添加 Test 2 ↓↓↓
    'test2': {
        title: 'Test 2 - 土地市场',
        entryCode: 'UE2026T2',      // 初试码（自定义，建议不重复）
        resetCode: 'RESET02',        // 补试码
        timeLimit: 15 * 60,          // 15分钟
        totalPick: 10,               // 随机抽10题
        questions: [
            {id:1, type:'single', q:'问题内容？', options:['选项A','选项B','选项C','选项D'], answer: 2},
            // answer: 0=A, 1=B, 2=C, 3=D
            // 更多题目...
        ]
    }
};
```

### 步骤 2：考试码管理建议

| 测验 | 初试码 | 补试码 |
|------|--------|--------|
| Test 1 | `UE2026` | `RESET01` |
| Test 2 | `UE2026T2` | `RESET02` |
| Test 3 | `UE2026T3` | `RESET03` |

> ⚠️ **每次添加新测验后，必须更新本文件的「考试码一览」表格！**

### 步骤 3：如需添加学生

在 `STUDENTS` 数组中添加：

```javascript
const STUDENTS = [
    // 现有学生...
    {name:"新同学姓名", id:"学号"},
];
```

### 步骤 4：部署（见下方）

---

## 🚀 部署流程（每次修改代码后执行）

### 前提条件

确保 VPS 上已安装：
- Node.js + npm（已安装）
- Wrangler CLI（已安装）
- Netlify CLI（已安装）
- Git（已安装）

### 一键部署脚本

在 VPS 上运行：

```bash
cd /root/.openclaw/workspace/tasks/UrbanEconomics-quiz

# 1. 部署 Cloudflare Worker（后端 API）
export CLOUDFLARE_API_TOKEN="6CToeRLb6Qt4pACtjA_X2_pTroySbuYbXVPBY5pN"
export CLOUDFLARE_ACCOUNT_ID="061b311f4c0a863a48b447158bbd51c1"
npx wrangler deploy

# 2. 部署 Netlify（前端页面）
export NETLIFY_AUTH_TOKEN="nfp_ETYVNiV3152iLajxhFyZWLfFA23XnPaa2aa4"
npx netlify deploy --prod --dir=.

# 3. 提交代码到 Git
git add -A
git commit -m "更新说明"
git push
```

> 💡 或者直接让小龙帮你部署："帮我部署课堂小测"

---

## 📱 生成二维码

让小龙运行以下代码即可生成：

```bash
python3 -c "
import qrcode
url = 'https://dashing-manatee-7619b2.netlify.app/?id=TEST_ID'
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=10, border=4)
qr.add_data(url)
qr.make(fit=True)
qr.make_image(fill_color='#6366f1', back_color='white').save('quiz-qrcode.png')
print('Done!')
"
```

> 将 `TEST_ID` 替换为测验 ID（如 test1、test2）

---

## 📊 飞书后台数据管理

### 成绩表结构

| 字段 | 类型 | 说明 |
|------|------|------|
| 城市经济学-课堂小测成绩 | 文本 | （主字段，目前未使用） |
| 测验 | 文本 | 测验名称，如 "Test 1 - 城市的产生" |
| 学号 | 文本 | 学生学号或测试账号 |
| 姓名 | 文本 | 学生姓名 |
| 成绩 | 数字 | 满分 100（每题10分） |
| 用时(秒) | 数字 | 答题耗时 |
| 切屏次数 | 数字 | 防作弊记录 |
| **考试类型** | 单选 | **初试 / 补试** |
| 提交时间 | 日期 | 自动记录 |
| 详情 | 文本 | 每题作答情况 |

### 如需在飞书添加新字段

1. 打开飞书成绩表
2. 点击右上角 "+" 添加列
3. 选择字段类型（文本/数字/单选等）
4. **注意**：如果需要在代码中写入新字段，还需修改 `worker.js` 中的 `fields` 对象

### 如需导出成绩

在飞书表格中：右上角「···」→「导出」→ 选择 Excel/CSV

---

## ⚠️ 飞书数据安全说明

### 数据存储位置

成绩数据**同时写入两个平台**（双备份）：

| 平台 | 角色 | 说明 |
|------|------|------|
| **飞书多维表格** | 主存储 | 实时写入，教师主要查看 |
| **Google Sheets** | 备份存储 | 同时写入，双重保险 |

Cloudflare Worker 收到成绩后，会同时向两个平台提交。即使一个平台出问题，另一个还有数据。

### 数据会不会丢失？

| 场景 | 风险 | 说明 |
|------|------|------|
| Cloudflare Worker 宕机 | ✅ 无影响 | Worker 只是转发，数据在飞书 |
| Netlify 宕机 | ✅ 无影响 | 前端页面，不存数据 |
| 飞书服务故障 | ⚠️ 极低概率 | 飞书是企业级服务，有完善备份 |
| 误删飞书表格 | ⚠️ 需注意 | 飞书有回收站，删除后 30 天内可恢复 |
| 代码 Bug 导致写入失败 | ⚠️ 可能 | 学生提交时如果 API 报错，成绩无法写入 |

### 建议的安全措施

1. **✅ 定期导出成绩**（每周/每次考试后）
   - 飞书表格 → 导出 Excel → 本地备份

2. **✅ 开启飞书表格的「回收站」**
   - 删除的数据可在 30 天内恢复

3. **✅ 考试期间监控**
   - 让学生提交后确认「成绩已提交到飞书」
   - 如果学生反馈提交失败，记录其成绩手动补录

4. **✅ 本地 localStorage 备份**
   - 每个学生的成绩同时保存在浏览器 localStorage 中
   - 紧急情况下可通过浏览器控制台导出

5. **⚠️ 不要删除飞书表格或修改字段名称**
   - 字段名称与代码绑定，修改会导致写入失败

### 紧急恢复方案

如果飞书表格数据丢失：

1. 检查飞书回收站恢复
2. 从本地导出的 Excel 备份恢复
3. 联系飞书客服（企业版有数据恢复服务）

---

## 🔧 常见问题

### Q: 学生反馈输入学号后姓名不出现？
A: 检查学号是否在 `STUDENTS` 数组中，注意 ID 完全匹配（包括前导零）

### Q: 考试码输入后无法开始？
A: 确认考试码与 `QUIZZES` 中的 `entryCode` 或 `resetCode` 一致

### Q: 成绩没有提交到飞书？
A: 检查浏览器控制台（F12）是否有报错，可能是网络问题或 Worker 部署问题

### Q: 如何修改已部署的考试？
A: 修改 `index.html` → 运行部署脚本 → Netlify 自动更新

### Q: 如何查看学生已提交的成绩？
A: 打开飞书成绩表即可实时查看

### Q: 学生作弊了怎么办？
A: 成绩表中有「切屏次数」列，可筛选切屏次数 ≥3 的记录

---

## 📞 获取帮助

需要修改或部署时，直接告诉小龙：

- "帮我添加一个新测验"
- "帮我部署课堂小测"
- "生成 Test 2 的二维码"
- "导出飞书成绩"
- "添加几个测试账号"

---

*本文件由小龙自动生成和维护，如有疑问随时更新。*
