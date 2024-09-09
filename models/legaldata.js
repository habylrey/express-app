'use strict';
const { Model } = import('sequelize');
module.exports = (sequelize, DataTypes) => {
	class LegalData extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	LegalData.init(
		{
			name: DataTypes.STRING,
			user_id: DataTypes.NUMBER,
			tax_number: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'LegalData',
		}
	);
	return LegalData;
};
