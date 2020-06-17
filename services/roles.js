//const sequelize = require('../config/sequelize')
const Role = require('../models/role')

class RolesService {
    async getRoles(){
        let roles = await Role.findAll({ raw: true });
        console.log(roles);
    }
}

module.exports = new RolesService();