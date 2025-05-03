const { Pool } = require('pg');

// 从环境变量读取连接 URL
const connectionString = "postgres://user:password@localhost:5432/postgres?sslmode=disable";

// 调试：打印完整连接 URL 和密码部分
console.log('原始连接 URL:', connectionString);
const urlObj = new URL(connectionString);
console.log('解析后的密码:', urlObj.password);
console.log('密码类型:', typeof urlObj.password);

const pool = new Pool({ connectionString });

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('成功连接到 PostgreSQL 数据库！');
        client.release();
    } catch (err) {
        console.error('连接失败:', err.message);
        console.error('详细错误:', err.stack);
    } finally {
        await pool.end();
    }
}

testConnection();
    