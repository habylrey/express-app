import legalDataRepository from './legal_data.repository.js';
import {
	NotFoundException,
	InternalServerErrorException,
} from '../server/server.exceptions.js';

const getAllLegalData = async () => {
	const legalDatas = await legalDataRepository.getLegalDatas();
	if (!legalDatas || legalDatas.length === 0) {
		throw new NotFoundException('No legal data found');
	}
	return legalDatas;
};

const getLegalDataById = async (id) => {
	const legalData = await legalDataRepository.getLegalDataById(id);
	if (!legalData) {
		throw new NotFoundException(`Legal data with id ${id} not found`);
	}
	return legalData;
};

const createLegalData = async (legalData) => {
	if (!legalData.tax_number || !legalData.name) {
		throw new Error('Legal data is incomplete');
	}
	return await legalDataRepository.createLegalData(legalData);
};

const updateLegalData = async (id, legalData) => {
	const updatedLegalData = await legalDataRepository.updateLegalData(
		id,
		legalData
	);
	if (!updatedLegalData) {
		throw new NotFoundException(`Legal data with id ${id} not found`);
	}
	return updatedLegalData;
};

const deleteLegalData = async (id) => {
	const result = await legalDataRepository.deleteLegalData(id);
	if (!result) {
		throw new NotFoundException(`Legal data with id ${id} not found`);
	}
	return result;
};

export default {
	getAllLegalData,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
};
