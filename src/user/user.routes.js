import { Router } from 'express';
import UserController from './user.controller.js';
import OrderRoutes from '../order/order.routes.js';
import LeadRoutes from '../lead/lead.routes.js';

const router = Router();

router.use('/order/', OrderRoutes);
router.use('/lead/', LeadRoutes);

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
