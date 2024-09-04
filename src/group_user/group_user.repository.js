import dbRepository from '../repository/db.repository.js';

const getGroupUsers = async () => {
	return dbRepository.query('SELECT * FROM "group_user"');
};

const getGroupUserById = async (id) => {
	return dbRepository.queryOne(
		`SELECT * FROM "group_user" WHERE user_yid = ${id}`
	);
};

const createGroupUser = async (groupUserData) => {
	const { group_id, name, role, user_id, status } = groupUserData;
	return dbRepository.queryOne(
		`INSERT INTO "group_user" (group_id, name, role, user_id, status) VALUES (${group_id}, ${name}, ${role}, ${user_id}, ${status}) RETURNING *`
	);
};

const updateGroupUser = async (id, groupUserData) => {
	const { group_id, name, role, user_id, status } = groupUserData;
	return dbRepository.queryOne(
		`UPDATE "group_user" SET name = ${name}, role = ${role}, status = ${status} WHERE id = ${id} RETURNING *`
	);
};

const deleteGroupUser = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "group_user" WHERE id = ${id} RETURNING *`
	);
};

export default {
	getGroupUsers,
	getGroupUserById,
	createGroupUser,
	updateGroupUser,
	deleteGroupUser,
};
