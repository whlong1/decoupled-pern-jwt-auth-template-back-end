'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    // Example helper method:
    sayHello() {
      return 'Helloy' + this.name
    }

    static associate(models) {
      // define association here

      User.hasOne(models.Profile, {
        as: "profile", // <= The property on a user object where the profile is found.
        foreignKey: 'userId', // <= The foreign key that will be found on the profiles table
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
  });
  return User;
};

