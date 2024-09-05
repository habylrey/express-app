import { Router } from 'express';
import GroupService from './group.service.js';

function createGroupRouter() {
	const router = Router();

	const getAllGroups = async (req, res, next) => {
		try {
			const groups = await GroupService.getAllGroups();
			res.json(groups);
		} catch (err) {
			next();
		}
	};

	const getGroupById = async (req, res, next) => {
		try {
			const group = await GroupService.getGroupById(req.params.id);
			if (!group) {
				res.status(404).json({
					message: `Group with id ${req.params.id} not found`,
				});
			} else {
				res.json(group);
			}
		} catch (err) {
			next();
		}
	};

	const createGroup = async (req, res, next) => {
		try {
			const newGroup = await GroupService.createGroup(req.body);
			res.status(201).json(newGroup);
		} catch (err) {
			next();
		}
	};

	const updateGroup = async (req, res, next) => {
		try {
			const updatedGroup = await GroupService.updateGroup(
				req.params.id,
				req.body
			);
			if (!updatedGroup) {
				res.status(404).json({
					message: `Group with id ${req.params.id} not found`,
				});
			} else {
				res.json(updatedGroup);
			}
		} catch (err) {
			next();
		}
	};

	const deleteGroup = async (req, res, next) => {
		try {
			await GroupService.deleteGroup(req.params.id);
			res.status(204).end();
		} catch (err) {
			next();
		}
	};

	return router
		.get('/', getAllGroups)
		.get('/:id', getGroupById)
		.post('/', createGroup)
		.put('/:id', updateGroup)
		.delete('/:id', deleteGroup)
		.get('/test', (req, res) => {
			res.send('Group route is working!');
		});
}

export default createGroupRouter;
