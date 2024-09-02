import GroupUserService from './group_user.service.js';
import {
	InternalServerErrorException,
	NotFoundException,
} from '../server/server.exceptions.js';
import { Router } from 'express';

const router = Router();

class GroupUserController {
	getAllGroupUsers = async (req, res, next) => {
		try {
			const groupUsers = await GroupUserService.getAllGroupUsers();
			res.json(groupUsers);
		} catch (err) {
			next(err);
		}
	};

	getGroupUserById = async (req, res, next) => {
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

	createGroupUser = async (req, res, next) => {
		try {
			const newGroupUser = await GroupUserService.createGroupUser(
				req.body
			);
			res.status(201).json(newGroupUser);
		} catch (err) {
			next(err);
		}
	};

	updateGroupUser = async (req, res, next) => {
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

	deleteGroupUser = async (req, res, next) => {
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
}

const groupUserController = new GroupUserController();
router.get('/', groupUserController.getAllGroupUsers);
router.get('/:id', groupUserController.getGroupUserById);
router.post('/', groupUserController.createGroupUser);
router.put('/:id', groupUserController.updateGroupUser);
router.delete('/:id', groupUserController.deleteGroupUser);

export default router;
