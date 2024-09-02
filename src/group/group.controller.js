import { Router } from 'express';
import GroupService from './group.service.js';
import LegalDataRoutes from '../legal_data/legal_data.controller.js';
import GroupUserRoutes from '../group_user/group_user.controller.js';
import {
	InternalServerErrorException,
	NotFoundException,
} from '../server/server.exceptions.js';

const router = Router();

class GroupController {
	getAllGroups = async (req, res, next) => {
		try {
			const groups = await GroupService.getAllGroups();
			res.json(groups);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	};

	getGroupById = async (req, res, next) => {
		try {
			const group = await GroupService.getGroupById(req.params.id);
			if (!group) throw new NotFoundException('Resource not found');
			res.json(group);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	};

	createGroup = async (req, res, next) => {
		try {
			const newGroup = await GroupService.createGroup(req.body);
			res.status(201).json(newGroup);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	};

	updateGroup = async (req, res, next) => {
		try {
			const updatedGroup = await GroupService.updateGroup(
				req.params.id,
				req.body
			);
			if (!updatedGroup)
				throw new NotFoundException('Resource not found');
			res.json(updatedGroup);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	};

	deleteGroup = async (req, res, next) => {
		try {
			const result = await GroupService.deleteGroup(req.params.id);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (err) {
			next(new InternalServerErrorException('Failed to get lead info'));
		}
	};
}

const groupController = new GroupController();

router.use('/legaldata', LegalDataRoutes);
router.use('/user', GroupUserRoutes);

router.get('/', groupController.getAllGroups);
router.get('/:id', groupController.getGroupById);
router.post('/', groupController.createGroup);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

export default router;
