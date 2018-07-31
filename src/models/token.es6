'use strict';
module.exports = (sequelize, DataTypes) => {
  var Token = sequelize.define('Token', {
    id: DataTypes.INTEGER,
    addr: DataTypes.STRING,
    name: DataTypes.STRING,
    fullName: DataTypes.STRING,
    decimals: DataTypes.INTEGER
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};