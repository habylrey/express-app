import { Model, DataTypes } from 'sequelize';

export default class AuthModel extends Model {
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
						model: 'groups',
						key: 'id',
					},
				},
				password: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				login: {
					type: DataTypes.STRING,
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'Auth',
				tableName: 'auth',
				timestamps: false,
			}
		);
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id' });
	}
}
