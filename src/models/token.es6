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
    decimals: DataTypes.INTEGER,
    url: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '',
      allowNull: true,
    },
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};