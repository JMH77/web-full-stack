import app from './app.js'; 
import dotenv from 'dotenv';
import { config } from './config/config.js';

// 引入dotenv
dotenv.config();

// 端口写活
// const PORT = process.env.PORT || 5000;
const PORT = config.port;

app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🚀 Server running');
    console.log(`🚀 Server running on port ${config.port}`);
    console.log(`📡 Listening on http://localhost:${PORT}`);
    console.log('='.repeat(60));
});