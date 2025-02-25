// const Joi = require('joi'); 

// const userSchema = Joi.object({
//     firstName: Joi.string().required(),
//     lastName: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).max(15).required(),
//     age: Joi.number().integer().min(0).required(),
//     mobileNumber : Joi.string().required(),
//     isActive: Joi.boolean().default(true)
// })

const Yup = require('yup');

const userSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(15).required(),
    age: Yup.number().integer().min(0).required(),
    mobileNumber : Yup.string().required(),
    isActive: Yup.boolean().default(true)
})

module.exports = {userSchema}