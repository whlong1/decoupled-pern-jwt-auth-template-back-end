'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasOne(models.Profile, {
        as: "profile", // <= The property on a user object where the profile is found.
        foreignKey: 'user_id', // <= The foreign key that will be found on the profiles table
        onUpdate: 'CASCADE', // <= When User is updated, related Profile will also be updated
        onDelete: 'CASCADE', // <= When User is deleted, related Profile will also be deleted
      })


    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users' // <Specify tableName
  });
  return User;
};

// Note: After updating the tableName, remember to update the migration before running it.


// hasOne