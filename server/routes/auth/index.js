const { Router } = require('express');
const login = require('./login');
const signup = require('./singup');

const router = Router();

router.get('/auth/login', login)
router.get('/auth/signup', signup)

module.exports = router;