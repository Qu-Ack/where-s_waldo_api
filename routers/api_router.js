const express = require('express');
const APICONTROLLER = require('../controllers/api_controller')
const router = express.Router();


router.get('/' , APICONTROLLER.index)

router.post('/', APICONTROLLER.character_pos_post)

module.exports = router