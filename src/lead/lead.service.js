import models from '../DTO/models/model.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

async function getAllLeads() {
	try {
		return await models.Lead.findAll();
	} catch (err) {
		throw new Error('Failed to fetch leads');
	}
}

async function getLeadById(id) {
	const lead = await models.Lead.findByPk(id);
	if (!lead) {
		throw new NotFoundException(`Lead with id ${id} not found`);
	}
	return lead;
}

async function createLead(leadData) {
	if (!leadData.name || !leadData.email) {
		throw new Error('Lead data is incomplete');
	}
	return await models.Lead.create(leadData);
}

async function updateLead(id, leadData) {
	const [rowsUpdated, [updatedLead]] = await models.Lead.update(leadData, {
		where: { id },
		returning: true,
	});
	if (rowsUpdated === 0) {
		throw new NotFoundException(`Lead with id ${id} not found`);
	}
	return updatedLead;
}

async function deleteLead(id) {
	const rowsDeleted = await models.Lead.destroy({ where: { id } });
	if (rowsDeleted === 0) {
		throw new NotFoundException(`Lead with id ${id} not found`);
	}
	return rowsDeleted;
}

export default {
	getAllLeads,
	getLeadById,
	createLead,
	updateLead,
	deleteLead,
};
