const AccountsService = require('../services/accounts')
const UsersService = require('../services/users')
const RolesService = require('../services/roles')

class MainController {
    async intro(req, resp) {
        console.log('Rendering Intro Page...');
        resp.render('main/intro', {
            layout: 'layout',
            title: 'Intro Page',
            css: '/css/intro-style.css'
        })
    }
    async main(req, resp) {
        console.log('Rendering Main Page...')
        resp.render('main/main', {
            layout: 'layout',
            title: 'Main Page',
            css: '/css/main-style.css'
        })
    }

}

module.exports = new MainController();