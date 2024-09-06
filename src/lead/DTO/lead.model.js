import { Model, DataTypes } from 'sequelize';

export default class Lead extends Model {
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
					allowNull: true,
					references: {
						model: 'users',
						key: 'id',
					},
				},
				name: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				email: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				phone_number: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				status: {
					type: DataTypes.STRING,
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'Lead',
				tableName: 'leads',
				timestamps: false,
			}
		);
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id' });
	}
}
