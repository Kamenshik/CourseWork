module.exports = (seq) => {
    const User = require('../models/user')(seq)
    const UserRoles = require('../models/userroles')(seq)
    const Role = require('../models/role')(seq)
    const Account = require('../models/account')(seq)

    Role.belongsToMany(User, { through: UserRoles });
    User.belongsToMany(Role, { through: UserRoles });
    Account.hasOne(User, { onDelete: 'cascade' });

    /*seq.sync({ force: true }).then(() => {
        console.log('Success sync');
    }).catch((err) => {
        console.log(err);
    });*/

}