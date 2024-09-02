import { Router } from 'express';
import UserService from './user.service.js';
import OrderRoutes from '../order/order.controller.js';
import LeadRoutes from '../lead/lead.controller.js';
import LegalDataRoutes from '../legal_data/legal_data.controller.js';
import {
	InternalServerErrorException,
	NotFoundException,
} from '../server/server.exceptions.js';

const router = Router();

class UserController {
	getAllUsers = async (req, res, next) => {
		try {
			const users = await UserService.getAllUsers();
			res.json(users);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get user info'));
		}
	};

	getUserById = async (req, res, next) => {
		try {
			const user = await UserService.getUserById(req.params.id);
			if (!user) throw new NotFoundException('Resource not found');
			res.json(user);
		} catch (err) {
			next(new InternalServerErrorException('Failed to get user info'));
		}
	};

	createUser = async (req, res, next) => {
		try {
			const newUser = await UserService.createUser(req.body);
			res.status(201).json(newUser);
		} catch (err) {
			next(new InternalServerErrorException('Failed to create user'));
		}
	};

	updateUser = async (req, res, next) => {
		try {
			const updatedUser = await UserService.updateUser(
				req.params.id,
				req.body
			);
			if (!updatedUser) throw new NotFoundException('Resource not found');
			res.json(updatedUser);
		} catch (err) {
			next(new InternalServerErrorException('Failed to update user'));
		}
	};

	deleteUser = async (req, res, next) => {
		try {
			const result = await UserService.deleteUser(req.params.id);
			if (!result) throw new NotFoundException('Resource not found');
			res.status(204).end();
		} catch (err) {
			next(new InternalServerErrorException('Failed to delete user'));
		}
	};
}

const userController = new UserController();

router.use('/order', OrderRoutes);
router.use('/lead', LeadRoutes);
router.use('/legaldata', LegalDataRoutes);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
