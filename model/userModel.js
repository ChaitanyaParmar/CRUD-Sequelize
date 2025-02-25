const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

// const userModel = sequelize.define('user', {
//     // firstName: DataTypes.STRING,
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         get(){
//             const rawValue = this.getDataValue('firstName');
//             return rawValue ? "Mr. " + rawValue: null;
//         }
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     fullName: {
//         type: DataTypes.VIRTUAL,
//         get(){
//             return `${this.firstName} ${this.lastName}`;
//         },
//         set(value){
//             throw new Error('Do not try to set the `fullName` value!');
//         },
//     },
//     email: DataTypes.STRING,
//     password: {
//         type: DataTypes.STRING(64),
//         validate:{
//             // is: /^[0-9a-f]{64}$/i,
//         },
//     },
//     age: DataTypes.INTEGER,
//     mobileNumber : DataTypes.STRING,
//     isActive: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//     }
// },{
//     freezeTableName: true
// })

const userModel = sequelize.define('user', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: true
})

module.exports = {userModel}