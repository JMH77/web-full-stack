import cors from 'cors';
import { config } from '../config/config.js';

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin || config.allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  }
});
