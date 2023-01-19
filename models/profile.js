'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: 'userId',
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

    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        key: 'id',
        model: 'Users',
      }
    }


  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};


