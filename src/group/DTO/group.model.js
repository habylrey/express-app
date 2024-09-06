import { Model, DataTypes } from 'sequelize';

export default class Group extends Model {
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
					allowNull: true,
				},
				photo_file_id: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'Group',
				tableName: 'group',
				timestamps: false,
			}
		);
	}

	static associate(models) {
		this.hasMany(models.GroupUser, { foreignKey: 'group_id' });
	}
}
