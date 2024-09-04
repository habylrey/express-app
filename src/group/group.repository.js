import dbRepository from '../repository/db.repository.js';

const getGroups = async () => {
	return dbRepository.query('SELECT * FROM "group"');
};

const getGroupById = async (id) => {
	return dbRepository.queryOne(`SELECT * FROM "group" WHERE id = ${id}`);
};

const createGroup = async (groupData) => {
	const { name } = groupData;
	return dbRepository.queryOne(
		`INSERT INTO "group" (name) VALUES (${name}) RETURNING *`
	);
};

const updateGroup = async (id, groupData) => {
	const { name } = groupData;
	return dbRepository.queryOne(
		`UPDATE "group" SET name = ${name} WHERE id = ${id} RETURNING *`
	);
};

const deleteGroup = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "group" WHERE id = ${id} RETURNING *`
	);
};

export default {
	getGroups,
	getGroupById,
	createGroup,
	updateGroup,
	deleteGroup,
};
