const { postModel } = require("./model/postModel");
const { profileModel } = require("./model/profileModel");
const { userModel } = require("./model/userModel");

// One To One Mapping

userModel.hasOne(profileModel, {
    foreignKey: 'userID',
    as: 'profile info'
});

profileModel.belongsTo(userModel, {
    foreignKey: 'userID',
    as: 'user info'
})

// One to Many Mapping

userModel.hasMany(postModel, {
    foreignKey: 'userID',
    as: 'posts info'
})

postModel.belongsTo(userModel, {
    foreignKey: 'userID',
    as: 'user'
})