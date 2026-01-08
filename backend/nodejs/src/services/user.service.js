// src/services/user.service.js
import { db } from '../data/memory.js';

export function createUser(username) {
  if (!username) {
    throw new Error('username is required');
  }

  const user = {
    id: Date.now(),
    username
  };

  db.users.push(user);
  return user;
}

export function listUsers() {
  return db.users;
}
