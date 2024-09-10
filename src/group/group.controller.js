import { Router } from 'express';
import GroupService from './group.service.js';
import validateRequest from '../common/validate.middleware.js';
import { idSchema } from '../common/validate.schemas.js';
import createBodySchema from './DTO/group.schema.js';
import updateBodySchema from './DTO/group.schema.js';

function createGroupRouter() {
	const router = Router();

	async function getAllGroups(req, res, next) {
		try {
			const groups = await GroupService.getAllGroups();
			res.json(groups);
		} catch (err) {
			next(err);
		}
	}

	async function getGroupById(req, res, next) {
		try {
			const group = await GroupService.getGroupById(req.params.id);
		} catch (err) {
			next(err);
		}
	}

	async function createGroup(req, res, next) {
		try {
			const newGroup = await GroupService.createGroup(req.body);
			res.status(201).json(newGroup);
		} catch (err) {
			next(err);
		}
	}

	async function updateGroup(req, res, next) {
		try {
			const updatedGroup = await GroupService.updateGroup(
				req.params.id,
				req.body
			);
			res.json(updatedGroup);
		} catch (err) {
			next(err);
		}
	}
	async function deleteGroup(req, res, next) {
		try {
			await GroupService.deleteGroup(req.params.id);
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	}

	return router
		.get('/', getAllGroups)
		.get('/:id', validateRequest(idSchema), getGroupById)
		.post('/', validateRequest(createBodySchema), createGroup)
		.put(
			'/:id',
			validateRequest(updateBodySchema),
			validateRequest(idSchema),
			updateGroup
		)
		.delete('/:id', validateRequest(idSchema), deleteGroup);
}

export default createGroupRouter;
