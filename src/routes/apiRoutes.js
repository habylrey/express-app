import { Router } from 'express';
import PostController from '../controllers/apiControllers.js';

const router = new Router();

router.get('/', PostController.getAll);
router.put('/', PostController.update);
router.delete('/', PostController.delete);
router.post('/', PostController.create);

export default router;
