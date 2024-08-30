import express from 'express';
import userRoutes from './user/user.routes.js';
import groupRoutes from './group/group.routes.js';
import orderRoutes from './order/order.routes.js';

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/orders', orderRoutes);

app.listen(5000, () => {
	console.log('server started');
});
