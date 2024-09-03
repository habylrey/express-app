import { Router } from 'express';
import GroupUserService from './group_user.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

function createGroupUserRouter() {
	const router = Router();

	const getAllGroupUsers = async (req, res, next) => {
		try {
			const groupUsers = await GroupUserService.getAllGroupUsers();
			res.json(groupUsers);
		} catch (err) {
			next(err);
		}
	};

	const getGroupUserById = async (req, res, next) => {
		try {
			const groupUser = await GroupUserService.getGroupUserById(
				req.params.id
			);
			if (!groupUser) {
				return next(new NotFoundException('Resource not found'));
			}
			res.json(groupUser);
		} catch (err) {
			next(err);
		}
	};

	const createGroupUser = async (req, res, next) => {
		try {
			const newGroupUser = await GroupUserService.createGroupUser(
				req.body
			);
			res.status(201).json(newGroupUser);
		} catch (err) {
			next(err);
		}
	};

	const updateGroupUser = async (req, res, next) => {
		try {
			const updatedGroupUser = await GroupUserService.updateGroupUser(
				req.params.id,
				req.body
			);
			if (!updatedGroupUser) {
				return next(new NotFoundException('Resource not found'));
			}
			res.json(updatedGroupUser);
		} catch (err) {
			next(err);
		}
	};

	const deleteGroupUser = async (req, res, next) => {
		try {
			const result = await GroupUserService.deleteGroupUser(
				req.params.id
			);
			if (!result) {
				return next(new NotFoundException('Resource not found'));
			}
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	};

	return router
		.get('/all', getAllGroupUsers)
		.get('/:id', getGroupUserById)
		.post('/', createGroupUser)
		.put('/:id', updateGroupUser)
		.delete('/:id', deleteGroupUser);
}

export default createGroupUserRouter;
