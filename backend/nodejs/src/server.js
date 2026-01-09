import app from './app.js'; 
import { config } from './config/config.js';


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