import dbRepository from '../repository/db.repository.js';

const getGroupUsers = async () => {
	return dbRepository.query('SELECT * FROM "group_user"');
};

const getGroupUserById = async (id) => {
	return dbRepository.queryOne(
		'SELECT * FROM "group_user" WHERE user_id = $1',
		[id]
	);
};

const createGroupUser = async (groupUserData) => {
	const { group_id, name, role, user_id, status } = groupUserData;
	return dbRepository.queryOne(
		`INSERT INTO "group_user" (group_id, name, role, user_id, status) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
		[group_id, name, role, user_id, status]
	);
};

const updateGroupUser = async (id, groupUserData) => {
	const { group_id, name, role, user_id, status } = groupUserData;
	return dbRepository.queryOne(
		`UPDATE "group_user" SET group_id = $1, name = $2, role = $3, user_id = $4, status = $5 WHERE id = $6 RETURNING *`,
		[group_id, name, role, user_id, status, id]
	);
};

const deleteGroupUser = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "group_user" WHERE id = $1 RETURNING *`,
		[id]
	);
};

export default {
	getGroupUsers,
	getGroupUserById,
	createGroupUser,
	updateGroupUser,
	deleteGroupUser,
};
