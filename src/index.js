import express from 'express';
import createGlobalRouter from './server/router.js';
import { errorHandlerMiddleware } from './server/error.handler.js';

const app = express();

app.use(express.json());
app.use(createGlobalRouter());
app.use(errorHandlerMiddleware);

app.listen(5000, () => {
	console.log('Server started on port 5000');
});
