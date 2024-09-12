'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class PromotionVideos extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	PromotionVideos.init(
		{
			id: DataTypes.NUMBER,
			prewiew_file_id: DataTypes.NUMBER,
			youtube_link: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'PromotionVideos',
		}
	);
	return PromotionVideos;
};
