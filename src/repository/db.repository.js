import db from '../db.js';

const query = async (text) => {
	try {
		const result = await db.query(text, param);
		console.log(result, 'result');
		return result.rows;
	} catch (error) {
		throw error;
	}
};

const queryOne = async (text) => {
	const rows = await query(text);
	console.log(rows, 'rows');
	return rows[0] || null;
};

export default {
	query,
	queryOne,
};
