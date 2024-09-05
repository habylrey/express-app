import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import createGlobalRouter from './server/router.js';
import { errorHandlerMiddleware } from './server/error.handler.js';
import { sequelize } from './DTO/models/model.service.js';
dotenv.config();
sequelize.sync({ force: false });
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(createGlobalRouter());
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;
