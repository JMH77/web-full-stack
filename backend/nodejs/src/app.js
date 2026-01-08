import express from 'express';
import { config } from './config/config.js';
import {buildResponse} from './utils/response.js'
import { notFoundMiddleware } from './middlewares/notFound.middleware.js';
import { corsMiddleware } from './middlewares/cors.middleware.js'

// 创建实例
const app = express();

// ======配置常量======
const ALLOWED_ORIGINS = config.allowedOrigins;


// ======中间件======
// 跨域中间件
app.use(corsMiddleware);

// 解析请求体中间件
app.use(express.json())

// ======路由======
// 端点健康检查
app.get('/', (req,res) => {
    res.json(buildResponse(true,'Server is running'));
});


// ======404 兜底（这也是一个中间件）======
// ======将404放入中间层组件中======
app.use(notFoundMiddleware);

// 把 app（Express 应用实例）暴露出去供别的模块导入
export default app;