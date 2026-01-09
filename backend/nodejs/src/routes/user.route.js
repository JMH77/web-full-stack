// src/routes/users.route.js
import { Router } from 'express';
import { createUser, deleteUserById, getUserById, listUsers } from '../services/user.service.js';
import { buildResponse } from '../utils/response.js';

// 创建一个路由器实例
const router = Router();

// GET /api/users 获取所有用户
router.get('/', async (req, res) => {
  try {
    const users = await listUsers();
    res.json(buildResponse(true, 'ok', users));
  } catch (err) {
    res.status(500).json(buildResponse(false, err.message));
  }
});

// POST /api/users 创建新用户
router.post('/', async (req, res) => {
  try {
    const { username } = req.body;
    const user = await createUser(username);
    res.json(buildResponse(true, 'user created', user));
  } catch (err) {
    res.status(400).json(buildResponse(false, err.message));
  }
});

// GET /api/users/:id 按 id 获取单个用户
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.json(buildResponse(true, 'user found sucess', user));
  } catch (err) {
    res.status(400).json(buildResponse(false, err.message));
  }
});

// DELETE /api/users/:id 删除用户
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const remove = await deleteUserById(id);
    res.json(buildResponse(true, 'delete user success', remove));
  } catch (err) {
    res.status(400).json(buildResponse(false, err.message));
  }
});

export default router;

