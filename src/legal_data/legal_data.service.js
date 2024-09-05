import models from '../DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllLegalData = async () => {
	const legalDatas = await models.LegalData.findAll();
	if (!legalDatas || legalDatas.length === 0) {
		throw new NotFoundException('No legal data found');
	}
	return legalDatas;
};

const getLegalDataById = async (id) => {
	const legalData = await models.LegalData.findByPk(id);
	if (!legalData) {
		throw new NotFoundException(`Legal data with id ${id} not found`);
	}
	return legalData;
};

const createLegalData = async (legalData) => {
	if (!legalData.tax_number || !legalData.name) {
		throw new Error('Legal data is incomplete');
	}
	return models.LegalData.create(legalData);
};

const updateLegalData = async (id, legalData) => {
	const [rowsUpdated, [updatedLegalData]] = await models.LegalData.update(
		legalData,
		{
			where: { id },
			returning: true,
		}
	);
	if (rowsUpdated === 0) {
		throw new NotFoundException(`Legal data with id ${id} not found`);
	}
	return updatedLegalData;
};

const deleteLegalData = async (id) => {
	const rowsDeleted = await models.LegalData.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Legal data with id ${id} not found`);
	}
	return rowsDeleted;
};

export default {
	getAllLegalData,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
};
