import legalDataRepository from './legal_data.repository.js';
import {
	NotFoundException,
	InternalServerErrorException,
} from '../server/server.exceptions.js';

const getAllLegalData = async () => {
	try {
		const legalDatas = await legalDataRepository.getLegalDatas();
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
		const legalData = await legalDataRepository.getLegalDataById(id);
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
	if (!legalData.tax_number || !legalData.name) {
		throw new Error('Legal data is incomplete');
	}
	try {
		return await legalDataRepository.createLegalData(legalData);
	} catch (err) {
		throw new InternalServerErrorException(
			`Failed to create legal data: ${err.message}`
		);
	}
};

const updateLegalData = async (id, legalData) => {
	try {
		const updatedLegalData = await legalDataRepository.updateLegalData(
			id,
			legalData
		);
		if (!updatedLegalData) {
			throw new NotFoundException(`Legal data with id ${id} not found`);
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
		const result = await legalDataRepository.deleteLegalData(id);
		if (!result) {
			throw new NotFoundException(`Legal data with id ${id} not found`);
		}
		return result;
	} catch (err) {
		throw new InternalServerErrorException(
			`Failed to delete legal data: ${err.message}`
		);
	}
};

export default {
	getAllLegalData,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
};
