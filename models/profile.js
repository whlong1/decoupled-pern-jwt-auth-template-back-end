'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.Profile, {
        foreignKey: 'user_id',
      })
    }
  }
  Profile.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  });
  return Profile;
};