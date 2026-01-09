// src/data/user.data.js
import { db } from './memory.js';
import { config } from '../config/config.js';

function normalizeId(id) {
  return String(id);
}

function getProvider() {
  return config.dataProvider || 'memory';
}

let cachedPool;
async function getPool() {
  if (cachedPool) return cachedPool;
  const mod = await import('./db.js');
  cachedPool = mod.pool;
  return cachedPool;
}

function mapUserRow(row) {
  return {
    id: row.id,
    username: row.username,
    role: row.role,
    createdAt: row.created_at instanceof Date ? row.created_at.getTime() : Date.parse(row.created_at),
  };
}

async function insertUserMysql(user) {
  const pool = await getPool();
  const role = user.role || 'user';
  const [result] = await pool.execute(
    'INSERT INTO users (username, role) VALUES (?, ?)',
    [user.username, role]
  );

  return {
    id: result.insertId,
    username: user.username,
    role,
    createdAt: Date.now(),
  };
}

async function findAllUsersMysql() {
  const pool = await getPool();
  const [rows] = await pool.execute(
    'SELECT id, username, role, created_at FROM users ORDER BY id DESC'
  );
  return rows.map(mapUserRow);
}

async function findUserByIdMysql(id) {
  const pool = await getPool();
  const [rows] = await pool.execute(
    'SELECT id, username, role, created_at FROM users WHERE id = ? LIMIT 1',
    [id]
  );
  if (!rows.length) return null;
  return mapUserRow(rows[0]);
}

async function findUserByUsernameMysql(username) {
  const pool = await getPool();
  const [rows] = await pool.execute(
    'SELECT id, username, role, created_at FROM users WHERE username = ? LIMIT 1',
    [username]
  );
  if (!rows.length) return null;
  return mapUserRow(rows[0]);
}

async function deleteUserByIdMysql(id) {
  const pool = await getPool();
  const existing = await findUserByIdMysql(id);
  if (!existing) return null;
  const [result] = await pool.execute('DELETE FROM users WHERE id = ? LIMIT 1', [id]);
  if (!result.affectedRows) return null;
  return existing;
}

function insertUserMemory(user) {
  db.users.push(user);
  return { ...user };
}

function findAllUsersMemory() {
  return db.users.map(user => ({ ...user }));
}

function findUserByIdMemory(id) {
  if (id === undefined || id === null) return null;
  const user = db.users.find(u => normalizeId(u.id) === normalizeId(id));
  return user ? { ...user } : null;
}

function findUserByUsernameMemory(username) {
  if (!username) return null;
  const user = db.users.find(u => u.username === username);
  return user ? { ...user } : null;
}

function deleteUserByIdMemory(id) {
  if (id === undefined || id === null) return null;
  const index = db.users.findIndex(u => normalizeId(u.id) === normalizeId(id));
  if (index === -1) return null;
  const [removed] = db.users.splice(index, 1);
  return { ...removed };
}

export async function insertUser(user) {
  if (getProvider() === 'mysql') return insertUserMysql(user);
  return insertUserMemory(user);
}

export async function findAllUsers() {
  if (getProvider() === 'mysql') return findAllUsersMysql();
  return findAllUsersMemory();
}

export async function findUserById(id) {
  if (getProvider() === 'mysql') return findUserByIdMysql(id);
  return findUserByIdMemory(id);
}

export async function findUserByUsername(username) {
  if (getProvider() === 'mysql') return findUserByUsernameMysql(username);
  return findUserByUsernameMemory(username);
}

export async function deleteUserById(id) {
  if (getProvider() === 'mysql') return deleteUserByIdMysql(id);
  return deleteUserByIdMemory(id);
}
