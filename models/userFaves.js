module.exports = function (sequelize, DataTypes) {
    const userFaves = sequelize.define('userFaves', {
        fave1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fave2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fave3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fave4: {
            type: DataTypes.STRING,
            allowNull: true,
        },        
        fave5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
            freezeTableName: true,
        });

        userFaves.associate = function(models) {
            // Associating Author with Posts
            // When an Author is deleted, also delete any associated Posts
            userFaves.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false
                }
            });
          };
    return userFaves;
}