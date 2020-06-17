const jsonParser = require("express").json();
const router = require('express').Router()
const MainController = require('../controllers/main')

router.get('/intro', MainController.intro);
router.get('/', MainController.main);
router.get('/login', MainController.login);
router.post('/login', jsonParser, MainController.loginCheck);

module.exports = router;