import { DataTypes, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from '../../../user/DTO/user.model.js';
import Order from '../../../order/DTO/order.model.js';
import LegalData from '../../../legal_data/DTO/legal_data.model.js';
import Lead from '../../../lead/DTO/lead.model.js';
import Group from '../../../group/DTO/group.model.js';
import GroupUser from '../../../group_user/DTO/group_user.model.js';
import Auth from '../../../auth/DTO/auth.model.js';
dotenv.config();

const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.LOGIN,
	process.env.PASSWORD,
	{
		host: 'localhost',
		dialect: 'postgres',
	}
);

const models = {
	User: User.init(sequelize, Sequelize),
	Order: Order.init(sequelize, Sequelize),
	LegalData: LegalData.init(sequelize, Sequelize),
	Lead: Lead.init(sequelize, Sequelize),
	Group: Group.init(sequelize, Sequelize),
	GroupUser: GroupUser.init(sequelize, Sequelize),
	Auth: Auth.init(sequelize, Sequelize),
};
Object.values(models).forEach((model) => {
	if (model.associate) {
		model.associate(models);
	}
});

export { sequelize };
export default models;
