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

	const getLegalDataByUserId = async (req, res, next) => {
		try {
			const legalData = await LegalDataService.getLegalDataByUserId(
				req.params.id
			);
			if (!legalData) {
				throw new NotFoundException(
					`Legal data with id ${id} not found`
				);
			}
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
			if (!updatedLegalData)
				throw new NotFoundException('Resource not found');
			res.json(updatedLegalData);
		} catch (err) {
			next(err);
		}
	};

	const deleteLegalData = async (req, res, next) => {
		try {
			const result = await LegalDataService.deleteLegalData(
				req.params.id
			);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	};

	return router
		.get('/', getAllLegalData)
		.get('/:id', getLegalDataByUserId)
		.post('/', createLegalData)
		.put('/:id', updateLegalData)
		.delete('/:id', deleteLegalData);
}

export default createLegalDataRouter;
