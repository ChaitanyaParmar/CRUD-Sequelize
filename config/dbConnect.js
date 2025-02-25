const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'chaitanya', {
    host: 'database-1.cj6weqe6mx6e.ap-south-1.rds.amazonaws.com',
    dialect: 'mysql'
});

// const sequelize = new Sequelize('users', 'root', 'admin', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

const dbConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log("Database Connected.");
    } catch (error) {
        console.error("Unable to Connect Database", error);
    }
}

module.exports={
    dbConnection,
    sequelize
}