import dbRepository from '../repository/db.repository.js';

const getUsers = async () => {
	return dbRepository.query('SELECT * FROM users');
};

const getUserById = async (id) => {
	return dbRepository.queryOne(`SELECT * FROM users WHERE id = ${id}`);
};

const createUser = async (userData) => {
	const { name, email } = userData;
	return dbRepository.queryOne(
		`INSERT INTO users (name, email) VALUES (${name}, ${email}) RETURNING *`
	);
};

const updateUser = async (id, userData) => {
	const { name, email } = userData;
	return dbRepository.queryOne(
		`UPDATE users SET name = ${name}, email = ${email} WHERE id = ${id} RETURNING *`
	);
};

const deleteUser = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM users WHERE id = ${id} RETURNING *`
	);
};

export default {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
