'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bird = sequelize.define('Bird', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bird;
};