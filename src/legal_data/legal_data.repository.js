import dbRepository from '../repository/db.repository.js';

const getLegalDatas = async () => {
	return dbRepository.query('SELECT * FROM "legal_datas"');
};

const getLegalDataById = async (id) => {
	return dbRepository.queryOne('SELECT * FROM "legal_datas" WHERE id = $1', [
		id,
	]);
};

const createLegalData = async (legalData) => {
	const { tax_number, name } = legalData;
	return dbRepository.queryOne(
		`INSERT INTO "legal_datas" (tax_number, name) VALUES ($1, $2) RETURNING *`,
		[tax_number, name]
	);
};

const updateLegalData = async (id, legalData) => {
	const { tax_number, name } = legalData;
	return dbRepository.queryOne(
		`UPDATE "legal_datas" SET tax_number = $1, name = $2 WHERE id = $3 RETURNING *`,
		[tax_number, name, id]
	);
};

const deleteLegalData = async (id) => {
	return dbRepository.queryOne(
		`DELETE FROM "legal_datas" WHERE id = $1 RETURNING *`,
		[id]
	);
};

export default {
	getLegalDatas,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
};
