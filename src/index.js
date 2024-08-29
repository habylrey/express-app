import express from 'express';
import router from './routes/apiRoutes.js';

const PORT = 5000;

const app = express();
app.use(express.json());
app.use('/', router).listen(PORT);
