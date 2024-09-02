import { Router } from 'express';
import createUserRouter from '../user/user.controller.js';
import createGroupRouter from '../group/group.controller.js';

const createGlobalRouter = () => {
	const router = Router();

	router.use('/user', createUserRouter());
	router.use('/group', createGroupRouter());

	return router;
};

export default createGlobalRouter;
