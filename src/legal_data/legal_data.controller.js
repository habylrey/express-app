import { Router } from 'express';
import LegalDataService from './legal_data.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

function createLegalDataRouter() {
	const router = Router();

	const getAllLegalData = async (req, res, next) => {
		try {
			const legalDatas = await LegalDataService.getAllLegalData();
			res.json(legalDatas);
		} catch (err) {
			next(err);
		}
	};

	const getLegalDataById = async (req, res, next) => {
		try {
			const legalData = await LegalDataService.getLegalDataById(
				req.params.id
			);
			res.json(legalData);
		} catch (err) {
			next(err);
		}
	};

	const createLegalData = async (req, res, next) => {
		try {
			const newLegalData = await LegalDataService.createLegalData(
				req.body
			);
			res.status(201).json(newLegalData);
		} catch (err) {
			next(err);
		}
	};

	const updateLegalData = async (req, res, next) => {
		try {
			const updatedLegalData = await LegalDataService.updateLegalData(
				req.params.id,
				req.body
			);
			res.json(updatedLegalData);
		} catch (err) {
			next(err);
		}
	};

	const deleteLegalData = async (req, res, next) => {
		try {
			await LegalDataService.deleteLegalData(req.params.id);
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	};

	return router
		.get('/all', getAllLegalData)
		.get('/:id', getLegalDataById)
		.post('/', createLegalData)
		.put('/:id', updateLegalData)
		.delete('/:id', deleteLegalData);
}

export default createLegalDataRouter;
