import express from 'express';
import { registerRoutes } from './server/router.js';
import { errorHandlerMiddleware } from './server/error.handler.js';

const app = express();
app.use(express.json());
app.use(errorHandlerMiddleware);

registerRoutes(app);

app.listen(5000, () => {
	console.log(`server started`);
});
