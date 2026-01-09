// src/config/config.js
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  //后端端口
  port: Number(process.env.PORT) || 5000,

  //跨域白名单
  allowedOrigins: (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .filter(Boolean),

  // 数据库连接信息
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
};
console.log(config.port,config.allowedOrigins,process.env.ALLOWED_ORIGINS,process.env.PORT);
console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_NAME)