import models from '../common/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

async function getAllLegalData() {
	const legalDatas = await models.LegalData.findAll();
	if (!legalDatas || legalDatas.length === 0) {
		throw new NotFoundException('No legal data found');
	}
	return legalDatas;
}

async function getLegalDataById(id) {
	const legalData = await models.LegalData.findByPk(id);
	if (!legalData) {
		throw new NotFoundException(`Legal data with id ${id} not found`);
	}
	return legalData;
}

async function createLegalData(legalData) {
	if (!legalData.tax_number || !legalData.name) {
		throw new Error('Legal data is incomplete');
	}
	return models.LegalData.create(legalData);
}

async function updateLegalData(id, legalData) {
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
}

async function deleteLegalData(id) {
	const rowsDeleted = await models.LegalData.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Legal data with id ${id} not found`);
	}
	return rowsDeleted;
}

export default {
	getAllLegalData,
	getLegalDataById,
	createLegalData,
	updateLegalData,
	deleteLegalData,
};
