import dbRepository from '../repository/db.repository.js';

const getUsers = async () => {
	return dbRepository.query('SELECT * FROM users');
};

const getUserById = async (id) => {
	return dbRepository.queryOne(`SELECT * FROM users WHERE id = $1`, [id]);
};

const createUser = async (userData) => {
	const { name, email } = userData;
	return dbRepository.queryOne(
		`INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`,
		[name, email]
	);
};

const updateUser = async (id, userData) => {
	const { name, email } = userData;
	return dbRepository.queryOne(
		'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
		[name, email, id]
	);
};

const deleteUser = async (id) => {
	return dbRepository.queryOne(
		'DELETE FROM users WHERE id = $1 RETURNING *',
		[id]
	);
};

export default {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
