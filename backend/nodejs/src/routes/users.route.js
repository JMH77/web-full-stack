// src/routes/users.route.js
import { Router } from 'express';
import { createUser, listUsers } from '../services/user.service.js';
import { buildResponse } from '../utils/response.js';

// 创建一个路由器实例
const router = Router();

// ======GET /api/users======
router.get('/', (req, res) => {
  const users = listUsers();
  res.json(buildResponse(true, 'ok', users));
});

// ======POST /api/users======
router.post('/', (req, res) => {
  try {
    const { username } = req.body;
    const user = createUser(username);
    res.json(buildResponse(true, 'user created', user));
  } catch (err) {
    res.status(400).json(buildResponse(false, err.message));
  }
});

export default router;
