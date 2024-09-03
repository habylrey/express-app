import { Router } from 'express';
import LeadService from './lead.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

function createLeadRouter() {
	const router = Router();

	const getAllLeads = async (req, res, next) => {
		try {
			const leads = await LeadService.getAllLeads();
			res.json(leads);
		} catch (err) {
			next(err);
		}
	};

	const getLeadById = async (req, res, next) => {
		try {
			const lead = await LeadService.getLeadById(req.params.id);
			if (!lead) throw new NotFoundException('Resource not found');
			res.json(lead);
		} catch (err) {
			next(err);
		}
	};

	const createLead = async (req, res, next) => {
		try {
			const newLead = await LeadService.createLead(req.body);
			res.status(201).json(newLead);
		} catch (err) {
			next(err);
		}
	};

	const updateLead = async (req, res, next) => {
		try {
			const updatedLead = await LeadService.updateLead(
				req.params.id,
				req.body
			);
			if (!updatedLead) throw new NotFoundException('Resource not found');
			res.json(updatedLead);
		} catch (err) {
			next(err);
		}
	};

	const deleteLead = async (req, res, next) => {
		try {
			const result = await LeadService.deleteLead(req.params.id);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	};

	return router
		.get('/all', getAllLeads)
		.get('/:id', getLeadById)
		.post('/', createLead)
		.put('/:id', updateLead)
		.delete('/:id', deleteLead);
}

export default createLeadRouter;
