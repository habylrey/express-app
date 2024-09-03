import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import createGlobalRouter from './server/router.js';
import { errorHandlerMiddleware } from './server/error.handler.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(createGlobalRouter());
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
	console.log(` port ${process.env.PORT}`);
});

export default app;
