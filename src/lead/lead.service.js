import leadRepository from './lead.repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const getAllLeads = async () => {
	return leadRepository.getLeads();
};

const getLeadById = async (id) => {
	const lead = await leadRepository.getLeadById(id);
	if (!lead) throw new NotFoundException(`Lead with id ${id} not found`);
	return lead;
};

const createLead = async (leadData) => {
	if (!leadData.name || !leadData.email) {
		throw new Error('Lead data is incomplete');
	}
	return leadRepository.createLead(leadData);
};

const updateLead = async (id, leadData) => {
	const updatedLead = await leadRepository.updateLead(id, leadData);
	if (!updatedLead)
		throw new NotFoundException(`Lead with id ${id} not found`);
	return updatedLead;
};

const deleteLead = async (id) => {
	const result = await leadRepository.deleteLead(id);
	if (!result) throw new NotFoundException(`Lead with id ${id} not found`);
	return result;
};

export default {
	getAllLeads,
	getLeadById,
	createLead,
	updateLead,
	deleteLead,
};
