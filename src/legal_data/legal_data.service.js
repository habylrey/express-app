import path from 'path';
import { fileURLToPath } from 'url';
import * as service from '../services/service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const legalDataPath = path.join(__dirname, '..', 'data', 'legal_datas.json');

const getAllLegalData = () => service.getAll(legalDataPath);
const getLegalDataById = (id) => service.getById(legalDataPath, id);
const createLegalData = (legalData) => service.create(legalDataPath, legalData);
const updateLegalData = (id, legalData) =>
	service.update(legalDataPath, id, legalData);
const deleteLegalData = (id) => service.remove(legalDataPath, id);

export default {
	getAllLegalData,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
};
