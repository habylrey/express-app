import express from 'express';
import userRoutes from './user/user.routes.js';
import groupRoutes from './group/group.routes.js';

const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/group', groupRoutes);

app.listen(5000, () => {
	console.log('server started');
});
