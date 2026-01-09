# Backend Node.js Project

这是一个基于 Node.js 和 Express 框架开发的后端基础架构项目。该项目采用了经典的 MVC 分层思想（或其变体），提供了用户管理的基础 API 功能，并支持多种数据存储方式。

## 🚀 快速开始

### 1. 环境依赖

- Node.js (推荐 v18+)
- MySQL (如果使用数据库存储)

### 2. 安装依赖

```bash
npm install
```

### 3. 环境配置

在根目录下创建 `.env` 文件，并根据 `.env.example`（如果存在）或以下参考配置进行设置：

```env
PORT=5000
ALLOWED_ORIGINS=http://localhost:3000
DATA_PROVIDER=memory # 可选: memory, mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database_name
```

### 4. 运行项目

```bash
# 开发模式（带热更新）
npm run dev

# 生产模式
npm start
```

## 📂 项目结构

```text
src/
  ├── config/         # 配置文件
  ├── data/           # 数据访问层 (DB 连接, SQL 脚本, 数据模型)
  ├── middlewares/    # 全局或路由中间件 (CORS, 404 等)
  ├── routes/         # 路由定义
  ├── services/       # 业务逻辑层
  └── utils/          # 工具类 (统一响应格式等)
app.js                # Express 应用初始化
server.js             # 服务启动入口
```

## 🛠 功能特性

- **分层架构**: 清晰的代码组织，易于维护和扩展。
- **多数据源支持**: 通过配置 `DATA_PROVIDER`，可以在内存存储和 MySQL 数据库之间切换。
- **统一响应格式**: 使用 `utils/response.js` 确保所有 API 返回一致的数据结构。
- **错误处理**: 包含基础的 404 兜底和异常捕获机制。
- **CORS 支持**: 内置跨域资源共享配置。

## 🛣 API 接口

### 用户模块 (`/api/users`)

| 方法 | 路径 | 描述 |
| :--- | :--- | :--- |
| GET | `/` | 获取所有用户列表 |
| POST | `/` | 创建新用户 |
| GET | `/:id` | 根据 ID 获取用户信息 |
| DELETE | `/:id` | 根据 ID 删除用户 |

## 🤝 贡献指南

欢迎提交 Issue 或 Pull Request。

