'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trenings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trenings.init({
    id: DataTypes.NUMBER,
    prewiew_file_id: DataTypes.NUMBER,
    youtube_link: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trenings',
  });
  return trenings;
};