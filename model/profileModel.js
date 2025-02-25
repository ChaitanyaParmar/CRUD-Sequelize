const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const profileModel = sequelize.define('profile', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bio : {
        type: DataTypes.STRING,
        allowNull: true
    },
    userID : {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
}, {
    freezeTableName: true,
    timestamps: true
})

module.exports = {profileModel}