import LeadService from './lead.service.js';

export default new (class LeadController {
	async getAllLeads(_, res) {
		try {
			const leads = await LeadService.getAllLeads();
			res.json(leads);
		} catch {
			res.status(500).json({ message: 'Failed to get all leads' });
		}
	}
	async getLeadById(_, res) {
		try {
			const leads = await LeadService.getLeadById(req.param);
			order
				? res.json(leads)
				: res.status(400).json({
						message: `Failed to get lead with id ${req.param}`,
				  });
		} catch {
			res.status(500).json({ message: `Failed to get lead info` });
		}
	}
	async createLead(req, res) {
		try {
			const newLead = await LeadService.createLead(req.body);
			res.status(201).json(newLead);
		} catch (error) {
			res.status(500).json({ message: 'Failed to create order' });
		}
	}
	async updateLead(req, res) {
		try {
			const updatedLead = await LeadService.updateLead(
				req.params.id,
				req.body
			);
			if (!updatedLead) {
				return res.status(404).json({ message: 'Order not found' });
			}
			res.json(updatedLead);
		} catch (error) {
			res.status(500).json({ message: 'Failed to update order' });
		}
	}
	async deleteLead(req, res) {
		try {
			const result = await LeadService.deleteLead(req.params.id);
			if (!result) {
				return res.status(404).json({
					message: `Lead with id ${req.param.id} not found`,
				});
			}
			res.status(204).end();
		} catch (error) {
			res.status(500).json({ message: 'Failed to delete order' });
		}
	}
})();
