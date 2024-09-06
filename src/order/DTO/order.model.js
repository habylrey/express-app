import { Model, DataTypes } from 'sequelize';

export default class Order extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				user_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'users',
						key: 'id',
					},
				},
				amount: {
					type: DataTypes.DECIMAL,
					allowNull: false,
				},
				product: {
					type: DataTypes.STRING,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'Order',
				tableName: 'orders',
				timestamps: false,
			}
		);
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id' });
	}
}
