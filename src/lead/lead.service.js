import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';
import { NotFoundException } from '../server/server.exceptions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const leadsPath = path.join(__dirname, '..', 'data', 'leads.json');

const getAllLeads = async () => {
	try {
		return await Repository.getAll(leadsPath);
	} catch (error) {
		throw new Error('Failed to fetch all leads');
	}
};

const getLeadById = async (id) => {
	try {
		const lead = await Repository.getById(leadsPath, id);
		if (!lead) throw new NotFoundException(`Lead with id ${id} not found`);
		return lead;
	} catch (error) {
		throw error;
	}
};

const createLead = async (leadData) => {
	try {
		return await Repository.create(leadsPath, leadData);
	} catch (error) {
		throw new Error('Failed to create lead');
	}
};

const updateLead = async (id, leadData) => {
	try {
		const updatedLead = await Repository.update(leadsPath, id, leadData);
		if (!updatedLead)
			throw new NotFoundException(`Lead with id ${id} not found`);
		return updatedLead;
	} catch (error) {
		throw error;
	}
};

const deleteLead = async (id) => {
	try {
		const result = await Repository.remove(leadsPath, id);
		if (!result)
			throw new NotFoundException(`Lead with id ${id} not found`);
		return result;
	} catch (error) {
		throw error;
	}
};

export default {
	getAllLeads,
	getLeadById,
	createLead,
	updateLead,
	deleteLead,
};
