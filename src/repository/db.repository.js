import db from '../db.js';

const query = async (text, params) => {
	try {
		const result = await db.query(text, params);
		return result.rows;
	} catch (error) {
		console.error('Ошибка выполнения запроса:', error);
		throw error;
	}
};

const queryOne = async (text, params) => {
	const rows = await query(text, params);
	console.log(rows, 'rows');
	return rows[0] || null;
};

export default {
	query,
	queryOne,
};
