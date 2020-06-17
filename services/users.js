//const sequelize = require('../config/sequelize')
const User = require('../models/user')

class UsersService {
    async getUsers(){
        let users = await User.findAll({ raw: true });
        console.log(users);
    }
}

module.exports = new UsersService();