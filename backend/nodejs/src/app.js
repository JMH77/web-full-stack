import express from 'express';
import { config } from './config/config.js';
import {buildResponse} from './utils/response.js'
import { notFoundMiddleware } from './middlewares/notFound.middleware.js';
import { corsMiddleware } from './middlewares/cors.middleware.js'
//route 默认导出所以不需要精确到变量名
import usersRouter from './routes/user.route.js';

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

//只要是/api/users的路径请求全部去对应的路由文件找对应的处理逻辑
app.use('/api/users', usersRouter);


// ======404 兜底（这也是一个中间件）======
// ======将404放入中间层组件中======
app.use(notFoundMiddleware);

// 把 app（Express 应用实例）暴露出去供别的模块导入
export default app;