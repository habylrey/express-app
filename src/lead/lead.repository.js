import dbRepository from '../repository/db.repository.js';

const getLeads = async () => {
	return dbRepository.query(`SELECT * FROM "leads"`);
};

const getLeadById = async (id) => {
	return dbRepository.queryOne(`SELECT * FROM "leads" WHERE id = ${id}`);
};

const createLead = async (leadData) => {
	const { name, email, status } = leadData;
	return dbRepository.queryOne(
		`INSERT INTO "leads" (name, email, status) VALUES (${name}, ${email}, ${status}) RETURNING *`
	);
};

const updateLead = async (id, leadData) => {
	const { name, email, status } = leadData;
	return dbRepository.queryOne(
		`UPDATE "leads" SET name = ${name}, email = ${email}, status = ${status} WHERE id = ${id} RETURNING *`
	);
};

const deleteLead = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "leads" WHERE id = ${id} RETURNING *`
	);
};

export default {
	getLeads,
	getLeadById,
	createLead,
	updateLead,
	deleteLead,
};
