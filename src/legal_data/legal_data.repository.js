import dbRepository from '../repository/db.repository.js';

const getLegalDatas = async () => {
	return dbRepository.query('SELECT * FROM "legal_datas"');
};

const getLegalDataById = async (id) => {
	return dbRepository.queryOne(
		`SELECT * FROM "legal_datas" WHERE id = ${id}`
	);
};

const createLegalData = async (legalData) => {
	const { tax_number, name } = legalData;
	return dbRepository.queryOne(
		`INSERT INTO "legal_datas" (tax_number, name) VALUES (${tax_number}, ${name}) RETURNING *`
	);
};

const updateLegalData = async (id, legalData) => {
	const { tax_number, name } = legalData;
	return dbRepository.queryOne(
		`UPDATE "legal_datas" SET tax_number = ${tax_number}, name = ${name} WHERE id = ${id} RETURNING *`
	);
};

const deleteLegalData = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "legal_datas" WHERE id = ${id} RETURNING *`
	);
};

export default {
	getLegalDatas,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
};
