import { Router } from 'express';
import GroupService from './group.service.js';
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
			res.json(updatedGroup);
		} catch (err) {
			next(err);
		}
	};

	const deleteGroup = async (req, res, next) => {
		try {
			await GroupService.deleteGroup(req.params.id);
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	};

	return router
		.get('/', getAllGroups)
		.get('/:id', getGroupById)
		.post('/', createGroup)
		.put('/:id', updateGroup)
		.delete('/:id', deleteGroup);
}

export default createGroupRouter;
