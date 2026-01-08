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

export function getUserById(id) {
    if(!id) {
      throw new Error('userId is required'); 
    }

    for(const entry of db.users){
        if(String(entry.id )===String(id))  return entry;
        else throw new Error('user notFound');
    }
}

export function deleteUserById(id) {
    if(!id) {
        throw new Error('userId is required');
    }

    const index = db.users.findIndex((entry) => String(entry.id) ===String(id));
    if(index === -1){
       throw new Error('user not found'); 
    }

    const [removed] = db.users.splice(index,1);
    return removed;
}