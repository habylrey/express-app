import { Router } from 'express';
import createUserRouter from '../user/user.controller.js';
import createGroupRouter from '../group/group.controller.js';
import login from '../auth/auth.login.js';
import authenticateJWT from '../auth/auth.middleware.js';
import createGroupUserRoutes from '../group_user/group_user.controller.js';
import createOrderRoutes from '../order/order.controller.js';
import createLeadRoutes from '../lead/lead.controller.js';
import createLegalDataRoutes from '../legal_data/legal_data.controller.js';
import validateRequest from '../DTO/validate.middleware.js';
import requestLogger from '../DTO/logger.middleware.js';
import {
	AuthSchema,
	groupSchema,
	groupUserSchema,
	leadSchema,
	legalDataSchema,
	userSchema,
} from '../DTO/validate.schemas.js';

const createGlobalRouter = () => {
	const router = Router();
	router.post('/login', validateRequest(AuthSchema), login);
	router.use(requestLogger, authenticateJWT);

	router.use(
		'/user',
		requestLogger,
		validateRequest(userSchema),
		createUserRouter()
	);
	router.use(
		'/user/order',
		requestLogger,
		validateRequest(groupSchema),
		createOrderRoutes()
	);
	router.use(
		'/user/lead/',
		validateRequest(leadSchema),
		requestLogger,
		createLeadRoutes()
	);
	router.use(
		'/user/legaldata/',
		requestLogger,
		validateRequest(legalDataSchema),
		createLegalDataRoutes()
	);

	router.use(
		'/group',
		validateRequest(groupSchema),
		requestLogger,
		createGroupRouter()
	);
	router.use(
		'/group/member',
		validateRequest(groupUserSchema),
		requestLogger,
		createGroupUserRoutes()
	);

	return router;
};

export default createGlobalRouter;
