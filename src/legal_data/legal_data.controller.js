import LegalDataService from './legal_data.service.js';
import {
	InternalServerErrorException,
	NotFoundException,
} from '../server/server.exceptions.js';
import { Router } from 'express';

const router = Router();

class LegalDataController {
	async getAllLegalData(req, res, next) {
		try {
			const legalDatas = await LegalDataService.getAllLegalData();
			res.json(legalDatas);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}

	async getLegalDataById(req, res, next) {
		try {
			const legalData = await LegalDataService.getLegalDataById(
				req.params.id
			);
			if (!legalData) throw new NotFoundException('Resource not found');
			res.json(legalData);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}

	async createLegalData(req, res, next) {
		try {
			const newLegalData = await LegalDataService.createLegalData(
				req.body
			);
			res.status(201).json(newLegalData);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}

	async updateLegalData(req, res, next) {
		try {
			const updatedLegalData = await LegalDataService.updateLegalData(
				req.params.id,
				req.body
			);
			if (!updatedLegalData)
				throw new NotFoundException('Resource not found');
			res.json(updatedLegalData);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	}

	async deleteLegalData(req, res, next) {
		try {
			const result = await LegalDataService.deleteLegalData(
				req.params.id
			);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (error) {
			res.status(500).json({ message: 'Failed to delete legal data' });
		}
	}
}
const legal_dataController = new LegalDataController();
router.get('/', legal_dataController.getAllLegalData);
router.get('/:id', legal_dataController.getLegalDataById);
router.post('/', legal_dataController.createLegalData);
router.put('/:id', legal_dataController.updateLegalData);
router.delete('/:id', legal_dataController.deleteLegalData);

export default router;
