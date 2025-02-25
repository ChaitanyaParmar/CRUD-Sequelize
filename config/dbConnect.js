const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

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