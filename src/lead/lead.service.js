import path from 'path';
import { fileURLToPath } from 'url';
import * as service from '../services/service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const leadsPath = path.join(__dirname, '..', 'data', 'leads.json');

const getAllLeads = () => service.getAll(leadsPath);
const getLeadById = (id) => service.getById(leadsPath, id);
const createLead = (leadData) => service.create(leadsPath, leadData);
const updateLead = (id, leadData) => service.update(leadsPath, id, leadData);
const deleteLead = (id) => service.remove(leadsPath, id);

export default {
	getAllLeads,
	getLeadById,
	createLead,
	updateLead,
	deleteLead,
};
