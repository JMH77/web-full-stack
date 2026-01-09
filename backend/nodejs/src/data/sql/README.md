# 数据库初始化脚本

本目录包含用于初始化项目所需 MySQL 数据库的 SQL 脚本。

## 📄 脚本说明

1.  **`000_create_database.sql`**:
    - 作用：创建名为 `node_js` 的数据库（如果不存在）。
    - 编码：使用 `utf8mb4` 字符集。

2.  **`001_create_users.sql`**:
    - 作用：在 `node_js` 数据库中创建 `users` 表。
    - 表结构：
        - `id`: 主键，自增。
        - `username`: 用户名，唯一且不能为空。
        - `role`: 用户角色。
        - `created_at`: 创建时间，默认为当前时间。

## 🛠 如何使用

你可以通过以下几种方式运行这些脚本：

### 方式 1: 使用命令行客户端

```bash
# 连接到 MySQL
mysql -u your_username -p

# 执行脚本
source path/to/000_create_database.sql;
source path/to/001_create_users.sql;
```

### 方式 2: 使用数据库管理工具 (如 Navicat, DBeaver)

1.  连接到你的 MySQL 服务器。
2.  新建一个查询窗口。
3.  依次打开并执行本目录下的 `.sql` 文件。

## ⚠️ 注意事项

- 在执行脚本前，请确保你已经安装并启动了 MySQL 服务。
- 确保项目 `.env` 文件中的数据库连接配置与脚本中创建的数据库名称及你的本地账号信息一致。

