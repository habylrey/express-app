import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
	user: process.env.LOGIN,
	host: 'localhost',
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	port: process.env.PORT_DB,
});
const query = (text, params) => pool.query(text, params);
export default { pool, query };
