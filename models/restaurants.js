module.exports = function (sequelize, DataTypes) {
    const restaurants = sequelize.define('restaurants', {
        restaurantName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resLat: {
            type: DataTypes.STRING,
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false,
            defaultValue: (32.2226)
        },
        resLong: {
            type: DataTypes.DECIMAL(11, 8),
            allowNull: false,
            defaultValue: (110.9747)
        },
        restaurantAdd: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        restaurantAdd2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
            freezeTableName: true,
        });

    restaurants.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        restaurants.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return restaurants;
}