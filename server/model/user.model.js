const sequelize = require("../config/db.config");
const { Model, DataTypes } = require("sequelize");

class User extends Model { }

User.init(
    {
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        emailAddress: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        userType: {
            type: DataTypes.STRING,
        }
    }, {
    sequelize,
    modelName: "user",
    timestamps: true,
    paranoid: true,
})

module.exports = User;