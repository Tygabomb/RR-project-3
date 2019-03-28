module.exports = function (sequelize, DataTypes) {
  const users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      defaultValue: "UserName",
      allowNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.DATE.CURRENT_TIMESTAMP
    },
    userLat: {
        type: DataTypes.DECIMAL(10,8),
        allowNull: true,
    },
    userLng: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: true
    }
  }, {
      freezeTableName: true,

    });
  return users;
};
