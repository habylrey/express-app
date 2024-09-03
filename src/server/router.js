import { Router } from 'express';
import createUserRouter from '../user/user.controller.js';
import createGroupRouter from '../group/group.controller.js';
import login from '../auth/auth.login.js';
import authenticateJWT from '../auth/auth.middleware.js';
import createGroupUserRoutes from '../group_user/group_user.controller.js';
import createOrderRoutes from '../order/order.controller.js';
import createLeadRoutes from '../lead/lead.controller.js';
import createLegalDataRoutes from '../legal_data/legal_data.controller.js';

const createGlobalRouter = () => {
	const router = Router();

	router.post('/login', login);
	router.use(authenticateJWT);

	router.use('/user', createUserRouter());
	router.use('/user/order', createOrderRoutes());
	router.use('/user/lead', createLeadRoutes());
	router.use('/user/legaldata', createLegalDataRoutes());

	router.use('/group', createGroupRouter());
	router.use('/group/member', createGroupUserRoutes());

	return router;
};

export default createGlobalRouter;
