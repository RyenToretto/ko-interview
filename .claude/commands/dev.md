---
description: 启动开发环境并检查项目状态
allowed-tools: "Bash, Read"
---

# 开发环境启动

执行以下步骤启动开发环境：

1. **检查依赖**：运行 `ls node_modules/.package-lock.json 2>/dev/null || npm install`
2. **启动开发服务器**：运行 `npm run dev`
3. **输出信息**：告知用户访问地址（通常是 http://localhost:5173）

如果启动失败：
- 检查 Node.js 版本（需要 18+）
- 删除 `node_modules` 和 `package-lock.json` 后重新 `npm install`
- 检查端口是否被占用
