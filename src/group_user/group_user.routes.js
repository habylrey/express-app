import { Router } from 'express';
import GroupUserController from './group_user.controller.js';

const router = Router();

router.get('/', GroupUserController.getAllGroupUsers);
router.get('/:id', GroupUserController.getGroupUserById);
router.post('/', GroupUserController.createGroupUser);
router.put('/:id', GroupUserController.updateGroupUser);
router.delete('/:id', GroupUserController.deleteGroupUser);

export default router;
