'use strict';
const { Model } = import('sequelize');
module.exports = (sequelize, DataTypes) => {
	class GroupUser extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	GroupUser.init(
		{
			name: DataTypes.STRING,
			group_id: DataTypes.NUMBER,
			role: DataTypes.STRING,
			status: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'GroupUser',
		}
	);
	return GroupUser;
};
