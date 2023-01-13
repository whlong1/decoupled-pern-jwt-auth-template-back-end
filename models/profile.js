'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: 'user_id',
      })
    }

  }
  Profile.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,


    // For cascades to work, need to add references property to foreign key column.
    // Without including this, the child is not deleted when parent row is removed.
    // onDelete behavior is specified in child! When parent is deleted, child is removed
    // foreign key field must be modified in model and migration.

    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        key: 'id',
        model: 'users',
      }
    }


  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles',
  });
  return Profile;
};