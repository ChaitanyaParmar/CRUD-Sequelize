const express = require('express');
const {dbConnection, sequelize} = require('./config/dbConnect')
const {router} = require('./routes/route');
const { userModel } = require('./model/userModel');
require('./association')

const app = express();

app.use(express.json());

app.use('/', router);

// userModel.sync({force: false})
sequelize.sync({force: false})

app.listen(3000, async()=> {
    console.log("Server Running on http://localhost:3000");
    await dbConnection();
})