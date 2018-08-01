export default function (sequelize, DataTypes) {
  const Token = sequelize.define('Token', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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