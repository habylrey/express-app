import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';
import {
	NotFoundException,
	InternalServerErrorException,
} from '../server/server.exceptions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const legalDataPath = path.join(__dirname, '..', 'data', 'legal_datas.json');

const getAllLegalData = async () => {
	try {
		const legalDatas = await Repository.getAll(legalDataPath);
		if (!legalDatas || legalDatas.length === 0) {
			throw new NotFoundException('No legal data found');
		}
		return legalDatas;
	} catch (err) {
		throw new InternalServerErrorException(
			`Failed to retrieve legal data: ${err.message}`
		);
	}
};

const getLegalDataById = async (id) => {
	try {
		const legalData = await Repository.getById(legalDataPath, id);
		if (!legalData) {
			throw new NotFoundException(`Legal data with id ${id} not found`);
		}
		return legalData;
	} catch (err) {
		throw new InternalServerErrorException(
			`Failed to retrieve legal data by id: ${err.message}`
		);
	}
};

const createLegalData = async (legalData) => {
	try {
		return await Repository.create(legalDataPath, legalData);
	} catch (err) {
		throw new InternalServerErrorException(
			`Failed to create legal data: ${err.message}`
		);
	}
};

const updateLegalData = async (id, legalData) => {
	try {
		const updatedLegalData = await Repository.update(
			legalDataPath,
			id,
			legalData
		);
		if (!updatedLegalData) {
			throw new NotFoundException('Resource not found');
		}
		return updatedLegalData;
	} catch (err) {
		throw new InternalServerErrorException(
			`Failed to update legal data: ${err.message}`
		);
	}
};

const deleteLegalData = async (id) => {
	try {
		const result = await Repository.remove(legalDataPath, id);
		if (!result) {
			throw new NotFoundException('Resource not found');
		}
		return result;
	} catch (err) {
		throw new InternalServerErrorException(
			`Failed to delete legal data: ${err.message}`
		);
	}
};

const getLegalDataByUserId = async (userId) => {
	try {
		const legalData = await Repository.getByField(
			legalDataPath,
			'user_id',
			parseInt(userId)
		);
		if (!legalData || legalData.length === 0) {
			throw new NotFoundException(
				`Legal data for user_id ${userId} not found`
			);
		}
		return legalData;
	} catch (err) {
		throw new InternalServerErrorException(
			`Failed to retrieve legal data by user_id: ${err.message}`
		);
	}
};

export default {
	getAllLegalData,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
	getLegalDataByUserId,
};
