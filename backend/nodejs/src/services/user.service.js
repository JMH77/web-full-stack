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

export async function createUser(username) {
  const normalizedUsername = normalizeUsername(username);
  if (!normalizedUsername) {
    throw new Error('username is required');
  }

  const existing = await findUserByUsername(normalizedUsername);
  if (existing) {
    throw new Error('username already exists');
  }

  const user = {
    id: Date.now(),
    username: normalizedUsername,
    role: 'user',
    createdAt: Date.now()
  };

  return await insertUser(user);
}

export async function listUsers() {
  return await findAllUsers();
}

export async function getUserById(id) {
  if (id === undefined || id === null) {
    throw new Error('userId is required');
  }
  const user = await findUserByIdFromData(id);
  if (!user) {
    throw new Error('user not found');
  }
  return user;
}

export async function deleteUserById(id) {
  if (id === undefined || id === null) {
    throw new Error('userId is required');
  }
  const removed = await deleteUserByIdFromData(id);
  if (!removed) {
    throw new Error('user not found');
  }
  return removed;
}
