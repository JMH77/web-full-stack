// src/config/config.js

export const config = {
  port: Number(process.env.PORT) || 5000,

  allowedOrigins: (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .filter(Boolean),
};
