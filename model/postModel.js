const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const postModel = sequelize.define('post', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content : {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: true
})

module.exports = {postModel}