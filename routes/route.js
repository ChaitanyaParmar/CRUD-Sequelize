const express = require('express');
const { createUser, getUsers, getUserByID, updateUser, deleteUser } = require('../controller/userController');
const router = express.Router();

// Create a new user
router.post('/add', createUser);

// Get all users
router.get('/users', getUsers);

// Geta user by ID
router.get('/getUser/:id', getUserByID);

// Update user by ID
router.put('/updateUser/:id', updateUser);

// Delete user by ID
router.delete('/deleteUser/:id', deleteUser);

module.exports = {router}