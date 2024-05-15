/**
 * @license Apache-2.0
 * @copyright abhinavkumar 2024
 */

'use strict';


/**
 * nod modules
 */
const router = require('express').Router();


/**
 * custom modules
 */
const { login } = require('../controllers/login.controller');


router.get('/', login);


module.exports = router;