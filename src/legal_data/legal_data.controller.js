import { Router } from 'express';
import LegalDataService from './legal_data.service.js';
import validateRequest from '../common/validate.middleware.js';
import { idSchema } from '../common/validate.schemas.js';
import createBodySchema from './DTO/legal_data.schema.js';
import updateBodySchema from './DTO/legal_data.schema.js';
function createLegalDataRouter() {
	const router = Router();

	async function getAllLegalData(req, res, next) {
		try {
			const legalDatas = await LegalDataService.getAllLegalData();
			res.json(legalDatas);
		} catch (err) {
			next(err);
		}
	}

	async function getLegalDataById(req, res, next) {
		try {
			const legalData = await LegalDataService.getLegalDataById(
				req.params.id
			);
			res.json(legalData);
		} catch (err) {
			next(err);
		}
	}

	async function createLegalData(req, res, next) {
		try {
			const newLegalData = await LegalDataService.createLegalData(
				req.body
			);
			res.status(201).json(newLegalData);
		} catch (err) {
			next(err);
		}
	}

	async function updateLegalData(req, res, next) {
		try {
			const updatedLegalData = await LegalDataService.updateLegalData(
				req.params.id,
				req.body
			);
			res.json(updatedLegalData);
		} catch (err) {
			next(err);
		}
	}

	async function deleteLegalData(req, res, next) {
		try {
			await LegalDataService.deleteLegalData(req.params.id);
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	}

	return router
		.get('/all', validateRequest(idSchema), getAllLegalData)
		.get('/:id', validateRequest(idSchema), getLegalDataById)
		.post('/', validateRequest(createBodySchema), createLegalData)
		.put(
			'/:id',
			validateRequest(updateBodySchema),
			validateRequest(idSchema),
			updateLegalData
		)
		.delete('/:id', validateRequest(idSchema), deleteLegalData);
}

export default createLegalDataRouter;
