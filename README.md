# web-full-stack

一个用于学习和实践现代 Web 全栈开发流程的 Demo 项目。

本仓库旨在通过 **同一套业务模型**，分别使用不同的前端技术栈（Vue / React，Nuxt / Next）和 Node.js 后端，实现完整的前后端闭环，对比不同技术方案在真实开发场景中的工程实践。

---

## 项目目标

- 构建一个 **完整可运行的全栈 Demo**
- 覆盖真实开发中的常见场景：
  - 用户认证与权限控制
  - 基础 CRUD
  - 前后端分离 / SSR
- 对比不同前端技术栈在同一业务下的实现方式
- 形成可复用、可扩展的工程结构

---

## 技术栈（计划）

### 前端
- Vue 3 / Nuxt
- React / Next
- Tailwind CSS
- Arco Design（中后台 UI）

### 后端
- Node.js
- RESTful API
- 数据库：MySQL / PostgreSQL（待定）
- ORM：Prisma / Sequelize（待定）
- 鉴权：JWT

---

## 仓库结构（初始规划）

```text
web-full-stack/
├─ backend/          # Node.js 后端
├─ frontends/        # 不同技术栈的前端实现
│  ├─ nuxt-app/
│  └─ next-app/
├─ docs/             # 业务与设计文档
└─ README.md
