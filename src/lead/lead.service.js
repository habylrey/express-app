import path from 'path';
import { fileURLToPath } from 'url';
import Repository from '../repository/repository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const leadsPath = path.join(__dirname, '..', 'data', 'leads.json');

const getAllLeads = () => Repository.getAll(leadsPath);
const getLeadById = (id) => Repository.getById(leadsPath, id);
const createLead = (leadData) => Repository.create(leadsPath, leadData);
const updateLead = (id, leadData) => Repository.update(leadsPath, id, leadData);
const deleteLead = (id) => Repository.remove(leadsPath, id);

export default {
	getAllLeads,
	getLeadById,
	createLead,
	updateLead,
	deleteLead,
};
