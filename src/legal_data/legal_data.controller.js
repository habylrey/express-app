import LegalDataService from './legal_data.service.js';

class LegalDataController {
	async getAllLegalData(req, res) {
		try {
			const legalDatas = await LegalDataService.getAllLegalData();
			res.json(legalDatas);
		} catch (error) {
			res.status(500).json({ message: 'Failed to get legal data' });
		}
	}

	async getLegalDataById(req, res) {
		try {
			const legalData = await LegalDataService.getLegalDataById(
				req.params.id
			);
			if (!legalData) {
				return res
					.status(404)
					.json({ message: 'Legal data not found' });
			}
			res.json(legalData);
		} catch (error) {
			res.status(500).json({ message: 'Failed to get legal data' });
		}
	}

	async createLegalData(req, res) {
		try {
			const newLegalData = await LegalDataService.createLegalData(
				req.body
			);
			res.status(201).json(newLegalData);
		} catch (error) {
			res.status(500).json({ message: 'Failed to create legal data' });
		}
	}

	async updateLegalData(req, res) {
		try {
			const updatedLegalData = await LegalDataService.updateLegalData(
				req.params.id,
				req.body
			);
			if (!updatedLegalData) {
				return res
					.status(404)
					.json({ message: 'Legal data not found' });
			}
			res.json(updatedLegalData);
		} catch (error) {
			res.status(500).json({ message: 'Failed to update legal data' });
		}
	}

	async deleteLegalData(req, res) {
		try {
			const result = await LegalDataService.deleteLegalData(
				req.params.id
			);
			if (!result) {
				return res
					.status(404)
					.json({ message: 'Legal data not found' });
			}
			res.status(204).end();
		} catch (error) {
			res.status(500).json({ message: 'Failed to delete legal data' });
		}
	}
}

export default new LegalDataController();
