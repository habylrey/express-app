import { Router } from 'express';
import GroupUserService from './group_user.service.js';
import { NotFoundException } from '../server/server.exceptions.js';
import validateRequest from '../common/validate.middleware.js';
import { idSchema } from '../common/validate.schemas.js';
import createBodySchema from './DTO/group_user.schema.js';
import updateBodySchema from './DTO/group_user.schema.js';

function createGroupUserRouter() {
	const router = Router();

	async function getAllGroupUsers(req, res, next) {
		try {
			const groupUsers = await GroupUserService.getAllGroupUsers();
			res.json(groupUsers);
		} catch {
			next();
		}
	}

	async function getGroupUserById(req, res, next) {
		try {
			const groupUser = await GroupUserService.getGroupUserById(
				req.params.id
			);
			if (!groupUser) {
				throw new NotFoundException(
					`Group user with id ${req.params.id} not found`
				);
			}
			res.json(groupUser);
		} catch {
			next();
		}
	}

	async function createGroupUser(req, res, next) {
		try {
			const newGroupUser = await GroupUserService.createGroupUser(
				req.body
			);
			res.status(201).json(newGroupUser);
		} catch {
			next();
		}
	}

	async function updateGroupUser(req, res, next) {
		try {
			const updatedGroupUser = await GroupUserService.updateGroupUser(
				req.params.id,
				req.body
			);
			if (!updatedGroupUser) {
				throw new NotFoundException(
					`Group user with id ${req.params.id} not found`
				);
			}
			res.json(updatedGroupUser);
		} catch {
			next();
		}
	}

	async function deleteGroupUser(req, res, next) {
		try {
			await GroupUserService.deleteGroupUser(req.params.id);
			res.status(204).end();
		} catch {
			next();
		}
	}

	return router
		.get('/all', validateRequest(idSchema), getAllGroupUsers)
		.get('/:id', validateRequest(idSchema), getGroupUserById)
		.post('/', validateRequest(createBodySchema), createGroupUser)
		.put(
			'/:id',
			validateRequest(updateBodySchema),
			validateRequest(idSchema),
			updateGroupUser
		)
		.delete('/:id', validateRequest(idSchema), deleteGroupUser);
}

export default createGroupUserRouter;
