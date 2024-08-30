import { Router } from 'express';
import LeadController from './lead.controller.js';

const router = Router();

router.get('/', LeadController.getAllLeads);
router.get('/:id', LeadController.getLeadById);
router.post('/', LeadController.createLead);
router.put('/:id', LeadController.updateLead);
router.delete('/:id', LeadController.deleteLead);

export default router;
