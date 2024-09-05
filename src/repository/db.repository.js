import db from '../db.js';

const query = async (text, param) => {
	try {
		const result = await db.query(text, param);
		return result.rows;
	} catch (error) {
		console.error('Query error:', error);
		throw error;
	}
};

const queryOne = async (text, params) => {
	const rows = await query(text, params);
	return rows[0] || null;
};

export default {
	query,
	queryOne,
};
