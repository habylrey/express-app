import { Model, DataTypes } from 'sequelize';

export default class GroupUser extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				group_id: {
					type: DataTypes.INTEGER,
					allowNull: true,
					references: {
						model: 'groups',
						key: 'id',
					},
				},
				name: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				role: {
					type: DataTypes.STRING,
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'GroupUser',
				tableName: 'group_user',
				timestamps: false,
			}
		);
	}

	static associate(models) {
		this.belongsTo(models.Group, { foreignKey: 'group_id' });
	}
}
