import express from 'express';
import cors from 'cors';
import { config } from './config/config.js';
import {buildResponse} from './utils/response.js'
import { notFoundMiddleware } from './middlewares/notFound.middleware.js';
import { corsMiddleware } from './middlewares/cors.middleware.js'

// 创建实例
const app = express();

// ======配置常量======
// 下面注释掉的是写死的配置
// const ALLOWED_ORIGINS = ['http://localhost:5173', 'http://127.0.0.1:5173'];
// 下面这段“活得”配置属于是“嗑瓜子”
// const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '')
//   .split(',')
//   .filter(Boolean);
//下面这段属于是“吃瓜子仁”  ->因为有 config.js
const ALLOWED_ORIGINS = config.allowedOrigins;


// ======中间件======
// 跨域中间件
app.use(corsMiddleware);

// 解析请求体中间件
app.use(express.json());

// 一些工具函数
// 统一返回数据格式
// export function buildResponse(success, message, data = null) {
//   return {
//     success,
//     message,
//     timestamp: new Date().toISOString(),
//     data
//   };
// }

// ======路由======
// 端点健康检查
app.get('/', (req,res) => {
    res.json(buildResponse(true,'Server is running'));
});


// ======404 兜底（这也是一个中间件）======
// app.use((req, res) => {
//   res.status(404).json(
//     buildResponse(false, 'Endpoint not found', { path: req.path })
//   );
// });
// ======将404放入中间层组件中======
app.use(notFoundMiddleware);

// 把 app（Express 应用实例）暴露出去供别的模块导入
export default app;