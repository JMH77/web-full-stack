// src/routes/users.route.js
import { Router } from 'express';
import { createUser, deleteUserById, getUserById, listUsers } from '../services/user.service.js';
import { buildResponse } from '../utils/response.js';

// 创建一个路由器实例
const router = Router();

// ======GET /api/users======                     A取出当前所有用户列表
router.get('/', (req, res) => {
  const users = listUsers();
  res.json(buildResponse(true, 'ok', users));
});

// ======POST /api/users======                    B创建新用户  
router.post('/', (req, res) => {
  try {
    const { username } = req.body;  //解构一下请求体  取出用户名
    const user = createUser(username);
    res.json(buildResponse(true, 'user created', user));
  } catch (err) {
    res.status(400).json(buildResponse(false, err.message));
  }
});

// ======GET /api/users/:id=======                 C按照Id获取单个用户信息 
router.get('/:id',(req,res) => {
    try {
    const { id } = req.params;
    const user = getUserById(id);
    res.json(buildResponse(true,'user found sucess',user));
    } catch (err) {
    res.status(400).json(buildResponse(false, err.message));
    }
});

// ======DELETE /api/users/:id======                D删除用户
router.delete('/:id',(req,res) => {
    try {   
    const { id } = req.params;
    const remove = deleteUserById(id);
    res.json(buildResponse(true,'delete user success',remove));
    } catch (err) {
    res.status(400).json(buildResponse(false, err.message));    
    }
});

export default router;
