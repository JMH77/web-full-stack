// src/data/user.data.js
import { db } from './memory.js';

function normalizeId(id) {
  return String(id);
}

export function insertUser(user) {
  db.users.push(user);
  return { ...user };
}

export function findAllUsers() {
  return db.users.map(user => ({ ...user }));
}

export function findUserById(id) {
  if (id === undefined || id === null) return null;
  const user = db.users.find(u => normalizeId(u.id) === normalizeId(id));
  return user ? { ...user } : null;
}

export function findUserByUsername(username) {
  if (!username) return null;
  const user = db.users.find(u => u.username === username);
  return user ? { ...user } : null;
}

export function deleteUserById(id) {
  if (id === undefined || id === null) return null;
  const index = db.users.findIndex(u => normalizeId(u.id) === normalizeId(id));
  if (index === -1) return null;
  const [removed] = db.users.splice(index, 1);
  return { ...removed };
}
