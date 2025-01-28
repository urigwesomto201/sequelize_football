

const { createStore } = require('../controllers/storeController');

const router = require('express').Router();

router.post('/store', createStore);

module.exports = router