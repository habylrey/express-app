import dbRepository from '../repository/db.repository.js';

const getGroups = async () => {
	return dbRepository.query('SELECT * FROM "group"');
};

const getGroupById = async (id) => {
	return dbRepository.queryOne('SELECT * FROM "group" WHERE id = $1', [id]);
};

const createGroup = async (groupData) => {
	const { name } = groupData;
	return dbRepository.queryOne(
		'INSERT INTO "group" (name) VALUES ($1) RETURNING *',
		[name]
	);
};

const updateGroup = async (id, groupData) => {
	const { name } = groupData;
	return dbRepository.queryOne(
		'UPDATE "group" SET name = $1 WHERE id = $2 RETURNING *',
		[name, id]
	);
};

const deleteGroup = async (id) => {
	return dbRepository.queryOne(
		'DELETE FROM "group" WHERE id = $1 RETURNING *',
		[id]
	);
};

export default {
	getGroups,
	getGroupById,
	createGroup,
	updateGroup,
	deleteGroup,
};
