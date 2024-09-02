import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const legalDataPath = path.join(__dirname, '..', 'data', 'legal_datas.json');

const getAllLegalData = () => Repository.getAll(legalDataPath);
const getLegalDataById = (id) => Repository.getById(legalDataPath, id);
const createLegalData = (legalData) =>
	Repository.create(legalDataPath, legalData);
const updateLegalData = (id, legalData) =>
	Repository.update(legalDataPath, id, legalData);
const deleteLegalData = (id) => Repository.remove(legalDataPath, id);

export default {
	getAllLegalData,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
};
