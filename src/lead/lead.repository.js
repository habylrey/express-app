import dbRepository from '../repository/db.repository.js';

const getLeads = async () => {
	return dbRepository.query(`SELECT * FROM "leads"`);
};

const getLeadById = async (id) => {
	return dbRepository.queryOne('SELECT * FROM "leads" WHERE id = $1', [id]);
};

const createLead = async (leadData) => {
	const { name, email, status } = leadData;
	return dbRepository.queryOne(
		`INSERT INTO "leads" (name, email, status) VALUES ($1, $2, $3) RETURNING *`,
		[name, email, status]
	);
};

const updateLead = async (id, leadData) => {
	const { name, email, status } = leadData;
	return dbRepository.queryOne(
		`UPDATE "leads" SET name = $1, email = $2, status = $3 WHERE id = $4 RETURNING *`,
		[name, email, status, id]
	);
};

const deleteLead = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "leads" WHERE id = $1 RETURNING *`,
		[id]
	);
};

export default {
	getLeads,
	getLeadById,
	createLead,
	updateLead,
	deleteLead,
};
