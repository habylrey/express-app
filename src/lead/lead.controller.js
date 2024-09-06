import { Router } from 'express';
import LeadService from './lead.service.js';
import { NotFoundException } from '../server/server.exceptions.js';
import validateRequest from '../common/validate.middleware.js';
import { idSchema, leadSchema } from '../common/validate.schemas.js';

function createLeadRouter() {
	const router = Router();

	async function getAllLeads(req, res, next) {
		try {
			const leads = await LeadService.getAllLeads();
			res.json(leads);
		} catch (err) {
			next(err);
		}
	}

	async function getLeadById(req, res, next) {
		try {
			const lead = await LeadService.getLeadById(req.params.id);
			if (!lead) {
				throw new NotFoundException(
					`Lead with id ${req.params.id} not found`
				);
			}
			res.json(lead);
		} catch (err) {
			next(err);
		}
	}

	async function createLead(req, res, next) {
		try {
			const newLead = await LeadService.createLead(req.body);
			res.status(201).json(newLead);
		} catch (err) {
			next(err);
		}
	}

	async function updateLead(req, res, next) {
		try {
			const updatedLead = await LeadService.updateLead(
				req.params.id,
				req.body
			);
			if (!updatedLead) {
				throw new NotFoundException(
					`Lead with id ${req.params.id} not found`
				);
			}
			res.json(updatedLead);
		} catch (err) {
			next(err);
		}
	}

	async function deleteLead(req, res, next) {
		try {
			await LeadService.deleteLead(req.params.id);
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	}

	return router
		.get('/all', validateRequest(idSchema), getAllLeads)
		.get('/:id', validateRequest(idSchema), getLeadById)
		.post('/', validateRequest(leadSchema), createLead)
		.put('/:id', validateRequest(leadSchema), updateLead)
		.delete('/:id', validateRequest(idSchema), deleteLead);
}

export default createLeadRouter;
