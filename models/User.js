module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
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

    User.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      User.hasMany(models.userFaves, {
        onDelete: "cascade"
      });
    };
  return User;
};
