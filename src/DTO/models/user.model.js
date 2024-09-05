import { Model, DataTypes } from 'sequelize';

export default class User extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				role: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				age: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'User',
				tableName: 'users',
				timestamps: false,
			}
		);
	}

	static associate(models) {
		this.hasMany(models.Order, { foreignKey: 'user_id' });
		this.hasMany(models.LegalData, { foreignKey: 'user_id' });
		this.hasMany(models.Lead, { foreignKey: 'user_id' });
	}
}
