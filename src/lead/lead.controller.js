import { Router } from 'express';
import LeadService from './lead.service.js';
import {
	InternalServerErrorException,
	NotFoundException,
} from '../server/server.exceptions.js';

const router = Router();

class LeadController {
	async getAllLeads(_, res, next) {
		try {
			const leads = await LeadService.getAllLeads();
			res.json(leads);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}

	async getLeadById(req, res, next) {
		try {
			const leads = await LeadService.getLeadById(req.params.id);
			if (!leads) throw new NotFoundException('Resource not found');
			res.json(leads);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}

	async createLead(req, res, next) {
		try {
			const newLead = await LeadService.createLead(req.body);
			res.status(201).json(newLead);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}

	async updateLead(req, res, next) {
		try {
			const updatedLead = await LeadService.updateLead(
				req.params.id,
				req.body
			);
			if (!updatedLead) throw new NotFoundException('Resource not found');
			res.json(updatedLead);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}

	async deleteLead(req, res, next) {
		try {
			const result = await LeadService.deleteLead(req.params.id);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}
}

const leadController = new LeadController();

router.get('/', leadController.getAllLeads);
router.get('/:id', leadController.getLeadById);
router.post('/', leadController.createLead);
router.put('/:id', leadController.updateLead);
router.delete('/:id', leadController.deleteLead);

export default router;
