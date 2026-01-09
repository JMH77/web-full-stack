import {
  insertUser,
  findAllUsers,
  findUserById as findUserByIdFromData,
  findUserByUsername,
  deleteUserById as deleteUserByIdFromData
} from '../data/user.data.js';

function normalizeUsername(username) {
  if (typeof username !== 'string') return '';
  return username.trim();
}

export function createUser(username) {
  const normalizedUsername = normalizeUsername(username);
  if (!normalizedUsername) {
    throw new Error('username is required');
  }

  const existing = findUserByUsername(normalizedUsername);
  if (existing) {
    throw new Error('username already exists');
  }

  const user = {
    id: Date.now(),
    username: normalizedUsername,
    role: 'user',
    createdAt: Date.now()
  };

  return insertUser(user);
}

export function listUsers() {
  return findAllUsers();
}

export function getUserById(id) {
  if (id === undefined || id === null) {
    throw new Error('userId is required');
  }
  const user = findUserByIdFromData(id);
  if (!user) {
    throw new Error('user not found');
  }
  return user;
}

export function deleteUserById(id) {
  if (id === undefined || id === null) {
    throw new Error('userId is required');
  }
  const removed = deleteUserByIdFromData(id);
  if (!removed) {
    throw new Error('user not found');
  }
  return removed;
}
