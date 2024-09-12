'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wall_photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wall_photos.init({
    id: DataTypes.NUMBER,
    user_id: DataTypes.NUMBER,
    group_id: DataTypes.NUMBER,
    file_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'wall_photos',
  });
  return wall_photos;
};