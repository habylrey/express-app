import { Router } from 'express';
import GroupService from './group.service.js';
import createGroupUserRoutes from '../group_user/group_user.controller.js';
import { NotFoundException } from '../server/server.exceptions.js';

function createGroupRouter() {
	const router = Router();

	const getAllGroups = async (req, res, next) => {
		try {
			const groups = await GroupService.getAllGroups();
			res.json(groups);
		} catch (err) {
			next(err);
		}
	};

	const getGroupById = async (req, res, next) => {
		try {
			const group = await GroupService.getGroupById(req.params.id);
			if (!group) throw new NotFoundException('Resource not found');
			res.json(group);
		} catch (err) {
			next(err);
		}
	};

	const createGroup = async (req, res, next) => {
		try {
			const newGroup = await GroupService.createGroup(req.body);
			res.status(201).json(newGroup);
		} catch (err) {
			next(err);
		}
	};

	const updateGroup = async (req, res, next) => {
		try {
			const updatedGroup = await GroupService.updateGroup(
				req.params.id,
				req.body
			);
			if (!updatedGroup)
				throw new NotFoundException('Resource not found');
			res.json(updatedGroup);
		} catch (err) {
			next(err);
		}
	};

	const deleteGroup = async (req, res, next) => {
		try {
			const result = await GroupService.deleteGroup(req.params.id);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	};

	router.use('/member', createGroupUserRoutes());

	return router
		.get('/', getAllGroups)
		.get('/:id', getGroupById)
		.post('/', createGroup)
		.put('/:id', updateGroup)
		.delete('/:id', deleteGroup);
}

export default createGroupRouter;
