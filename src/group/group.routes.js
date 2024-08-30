import { Router } from 'express';
import GroupController from './group.controller.js';
import LegalDataRoutes from '../legal_data/legal_data.routes.js';
import GroupUserRoutes from '../group_user/group_user.routes.js';
const router = Router();

router.use('/legaldata/', LegalDataRoutes);
router.use('/user/', GroupUserRoutes);

router.get('/', GroupController.getAllGroups);
router.get('/:id', GroupController.getGroupById);
router.post('/', GroupController.createGroup);
router.put('/:id', GroupController.updateGroup);
router.delete('/:id', GroupController.deleteGroup);

export default router;
