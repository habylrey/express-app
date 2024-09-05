import models from '../DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllLeads = async () => {
	return models.Lead.findAll();
};

const getLeadById = async (id) => {
	const lead = await models.Lead.findByPk(id);
	if (!lead) throw new NotFoundException(`Lead with id ${id} not found`);
	return lead;
};

const createLead = async (leadData) => {
	if (!leadData.name || !leadData.email) {
		throw new Error('Lead data is incomplete');
	}
	return models.Lead.create(leadData);
};

const updateLead = async (id, leadData) => {
	const [rowsUpdated, [updatedLead]] = await models.Lead.update(leadData, {
		where: { id },
		returning: true,
	});
	if (rowsUpdated === 0)
		throw new NotFoundException(`Lead with id ${id} not found`);
	return updatedLead;
};

const deleteLead = async (id) => {
	const rowsDeleted = await models.Lead.destroy({ where: { id } });
	if (rowsDeleted === 0)
		throw new NotFoundException(`Lead with id ${id} not found`);
	return rowsDeleted;
};

export default {
	getAllLeads,
	getLeadById,
	createLead,
	updateLead,
	deleteLead,
};
