const hbs = require('hbs');

const Recaptcha = require('recaptcha-v2').Recaptcha;
//const { pbkey, prkey } = require('../config/captcha');
let pbkey = '6Lev36QZAAAAAEhFZLcMRfvBixrYb3Wx9d26G8r9';
let prkey = '6Lev36QZAAAAADj-cKrZHERrvcAl-l716C_CH3Zf';
//const AccountsService = require('../services/accounts')
//const UsersService = require('../services/users')
//const RolesService = require('../services/roles')
//const NewsPostsService = require('../services/newsposts')

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
        console.log('Rendering Main Page...');
        resp.render('main/main', {
            layout: 'layout',
            title: 'Main Page',
            css: '/css/main-style.css'
        })
    }
    async login(req, resp) {
        console.log('Rendering Login Page...');
        let recaptcha = new Recaptcha(pbkey, prkey);
        //console.log('pbkey - ', pbkey);
        //console.log('prkey - ', prkey);
        //console.log(recaptcha.toHTML());
        resp.render('main/login', {
            layout: 'layout',
            title: 'Login Page',
            css: '/css/login-style.css',
            recaptcha: recaptcha.toHTML()
        })
    }
    async loginCheck(req, resp) {
        console.log('Checking login data...');

        //console.log(req.body);
        //console.log('Login - ', req.body["login"]);
        //console.log('Password - ', req.body["password"]);
        //console.log('Captcha - ', req.body["captchaResp"]);

        let data = {
            remoteip: req.connection.remoteAddress,
            response: req.body["captchaResp"],
            secret: prkey
        };

        var recaptcha = new Recaptcha(pbkey, prkey, data);

        recaptcha.verify(function(success, error_code) {
            if (success){
                console.log("Recaptcha response valid.");
                resp.send('Recaptcha response valid.');
            }
            else {
                //Перерисовка формы
                console.log('Error - ', error_code);
                resp.render('main/login', {
                    layout: 'layout',
                    title: 'Login Page',
                    css: '/css/login-style.css',
                    recaptcha: recaptcha.toHTML()
                })
            }
        })

        //console.log(req.body);
        //if(!req.body) return resp.sendStatus(400);
        //resp.json(req.body);
    }
}

module.exports = new MainController();