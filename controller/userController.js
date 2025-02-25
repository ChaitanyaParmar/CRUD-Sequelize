const { validate } = require('joi');
const { userSchema } = require("../middleware/userValidate");
const { userModel } = require("../model/userModel");
const { sequelize } = require('../config/dbConnect');
const { profileModel } = require('../model/profileModel');
const { postModel } = require('../model/postModel');

const createUser = async(req, res) => {
    try {
         // validate user
        // const { error } = userSchema.validate(req.body);
        // if (error) return res.status(400).json({message: error.details[0].message});

        // const user= await userModel.create(req.body);
        const user = await userModel.create({username: 'Bheem'});
        // const profile = await profileModel.create({bio: 'Bheem ki shakti dhoom machaye!', userID: user.id});

        const post1 = await postModel.create({
            content: 'Bheem ki shakti dhoom machaye...',
            userID: user.id
        })

        const post2 = await postModel.create({
            content: 'Saamne koi tik na paaye...',
            userID: user.id
        })

        return res.status(201).json({user, post1, post2}) // 201 for resource creation
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: error.message}); // 500 for server errors
    }
   
};

const getUsers = async(req, res) => {
    try {
        // const users = await userModel.findAll();
        //const [results, metadata] = await sequelize.query('select * from user');
        // const userWithProfile = await userModel.findAll({
        //     include: {
        //         model: profileModel, as: 'profile info'
        //     }
        // })
        const userWithPosts = await userModel.findAll({
            include: {
                model: postModel, as: 'posts info'
            }
        })
        return res.status(200).json(userWithPosts)
        // return res.status(200).json({users})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: error.message}); // 500 for server errors
    }
};

const getUserByID = async(req, res) => {
    try {
        const user = await userModel.findByPk(req.params.id);
        return res.status(200).json({user})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: error.message}); // 500 for server errors
    }
};

const updateUser = async(req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) return res.status(400).json({message: error.details[0].message});

        const user = await userModel.findByPk(req.params.id);
        if(!user) return res.status(500).json({error: "User not found!"}); // 500 for server errors
        
        await user.update(req.body);
        return res.status(200).json({msg: 'User updated!'})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: error.message}); // 500 for server errors
    }
};

const deleteUser = async(req, res) => {
    try {
        const user = await userModel.findByPk(req.params.id);
        if(!user) return res.status(500).json({error: "User not found!"}); // 500 for server errors
        await user.destroy();
        return res.status(200).json({msg: 'User deleted!'})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: error.message}); // 500 for server errors
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserByID,
    updateUser,
    deleteUser
}