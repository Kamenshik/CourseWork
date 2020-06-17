//const sequelize = require('../config/sequelize')
const Account = require('../models/account')

class AccountsService {
    async getAccounts(){
        let accounts = await Account.findAll({ raw: true });
        console.log(accounts);
    }
}

module.exports = new AccountsService();